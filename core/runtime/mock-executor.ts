export type TaskStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface RuntimeTask {
  id: string;
  module: string;
  action: string;
  input: Record<string, unknown>;
  output?: Record<string, unknown>;
  status: TaskStatus;
}

export class MockExecutor {
  async execute(task: RuntimeTask): Promise<RuntimeTask> {
    return {
      ...task,
      status: 'completed',
      output: {
        mock: true,
        module: task.module,
        action: task.action,
        generatedAt: new Date().toISOString()
      }
    };
  }
}
