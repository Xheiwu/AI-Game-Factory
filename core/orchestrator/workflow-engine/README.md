# Workflow Engine

The workflow engine is the execution layer of AI Game Factory.

Purpose:

Input:
- user prompt
- screenshot
- video reference
- asset request

Execution:
1. load Game Blueprint
2. resolve required modules
3. execute module pipeline
4. validate outputs
5. package assets
6. export project data

The engine is intentionally module based. A future implementation can replace mock processors with real AI providers.

Example:

Screenshot -> Game Understanding -> Blueprint -> Sprite Module -> Tileset Module -> UI Module -> Export
