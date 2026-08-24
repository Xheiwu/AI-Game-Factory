# Mock Workflow Executor

Purpose: provide a deterministic prototype runner before connecting real AI providers.

Flow:

Input -> Task Plan -> Module Adapter -> Output Artifact

Current MVP behavior:

- receive a task definition
- validate required fields
- call mock module handlers
- generate execution result metadata

Not responsible for:

- model inference
- asset generation quality
- engine export

Those remain separate modules.
