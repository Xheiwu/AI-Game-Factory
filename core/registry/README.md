# Module Registry

The registry provides module discovery for AI Game Factory.

Responsibilities:

- register modules
- describe capabilities
- resolve workflow dependencies
- keep modules replaceable

A module should expose:

- id
- version
- inputs
- outputs
- executor
