# Module Registry

The registry is responsible for discovering and validating AI Game Factory modules.

## Responsibilities

- Register module metadata
- Validate input/output contracts
- Provide modules to Workflow Runner
- Keep modules replaceable

A module should not know about other modules.
