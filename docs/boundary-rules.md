# AI Game Factory Boundary Rules

## Goal
Build a modular AI game production system.

## Allowed expansion

Add a module only if it can:

1. receive a clear input schema
2. produce a clear output artifact
3. work independently
4. be replaced by another implementation

## Do not expand yet

- building a complete game engine
- training custom AI models
- supporting every engine deeply
- replacing professional DCC tools

## Current MVP focus

1. Game Understanding
2. Asset Pipeline
3. Module Orchestration
4. Export Package

## Reference projects

Existing open source projects may be wrapped through adapters first instead of rewritten.

Examples:
- AI asset generation pipelines
- sprite generation pipelines
- browser AI game agents

The factory owns the workflow and schemas, not every underlying algorithm.
