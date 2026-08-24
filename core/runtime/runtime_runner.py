"""Minimal workflow runtime executor.

Runtime only coordinates modules. It does not contain AI logic.
"""

from typing import Dict, Any


class RuntimeRunner:
    def __init__(self, registry):
        self.registry = registry

    def run(self, workflow: Dict[str, Any], context=None):
        context = context or {}
        results = []

        for step in workflow.get("steps", []):
            module = self.registry.get(step["module"])
            if not module:
                raise RuntimeError(f"module not found: {step['module']}")

            result = module.execute(step.get("action"), context)
            results.append({
                "module": step["module"],
                "action": step.get("action"),
                "result": result,
            })
            context.update(result if isinstance(result, dict) else {})

        return {"status": "completed", "steps": results, "context": context}
