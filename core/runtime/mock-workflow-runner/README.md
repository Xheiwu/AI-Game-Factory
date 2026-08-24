# Mock Workflow Runner

MVP runtime executor.

Purpose:
- execute a Workflow definition
- call registered modules
- produce execution state
- generate a mock Asset Package

Scope rules:
- no real AI calls
- no engine export logic
- no asset generation algorithm
- only validate orchestration flow

Flow:

Input -> Blueprint -> Task Plan -> Module Execution -> Package
