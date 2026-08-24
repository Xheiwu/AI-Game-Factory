# Mock Workflow Runner

Prototype execution engine.

Responsibilities:
- load workflow
- resolve modules
- execute module actions
- collect outputs

Not responsible for:
- AI generation
- image processing
- engine export

Flow:
Workflow -> Runner -> Module Adapter -> Result
