class RuntimeRunner {
  constructor(registry = {}) {
    this.registry = registry;
  }

  async run(workflow, context = {}) {
    const state = {
      workflowId: workflow.id,
      status: 'running',
      steps: []
    };

    for (const step of workflow.steps || []) {
      const module = this.registry[step.module];
      if (!module) {
        state.status = 'failed';
        state.steps.push({ ...step, status: 'failed', error: 'module_not_found' });
        return state;
      }

      const result = await module.execute(step.action, context);
      state.steps.push({ ...step, status: 'completed', output: result });
      context = { ...context, ...result };
    }

    state.status = 'completed';
    state.output = context;
    return state;
  }
}

module.exports = RuntimeRunner;
