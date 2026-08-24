# Module Registry Runtime

## Purpose

Runtime layer loads registered modules and executes them through a common contract.

Flow:

Input -> Workflow -> Task -> Module -> Result

## Rules

- Modules are isolated.
- Runtime does not contain AI generation logic.
- Providers are injected externally.
- Every module must declare input/output schema.

## MVP Modules

- game-understanding
- sprite-factory
- tileset-forge
- ui-generator
- export-package
