# AI Game Factory Orchestrator

The orchestrator is the workflow brain of AI Game Factory.

It does not generate assets directly. It coordinates specialized modules.

## Flow

Input:
- screenshot
- video
- game idea
- reference assets

Pipeline:

```
Game Understanding
        |
        v
Game Blueprint
        |
        +--> Asset Factory
        +--> Style Memory
        +--> UI Generator
        +--> Audio Generator
        +--> Code Generator
        +--> Export Pipeline
```

## Design Principle

Modules must be replaceable.

A better open source implementation can replace a module through an adapter without changing the whole system.

## Future Runtime

Planned components:

- workflow-engine
- module-loader
- task-runner
- provider-manager
