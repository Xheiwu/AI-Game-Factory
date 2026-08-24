# Runtime Execution Layer

The runtime layer executes workflows defined by the orchestrator.

## Scope v0.1

Only define boundaries:

Input:
- workflow
- module list
- provider config

Output:
- execution state
- generated artifacts
- logs

## Components

- workflow-runner: execute workflow steps
- module-loader: resolve modules
- task-state: persist execution status
- provider-manager: manage AI providers
- mock-executor: prototype execution without paid APIs

## Boundary Rules

Do not put AI model logic here.
Do not put image processing logic here.
Do not couple to Unity/Godot/TapMaker.

Runtime only coordinates modules.
