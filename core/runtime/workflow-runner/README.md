# Workflow Runner Prototype

Purpose:
Execute a generated TaskPlan through registered modules.

Flow:

Input
→ Blueprint
→ TaskPlan
→ Runner
→ Module Execution
→ Asset Package

MVP rules:
- deterministic execution first
- mock modules before real AI providers
- keep module contracts stable

Future:
- async jobs
- retry
- queue
- user API providers
