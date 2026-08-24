# Module Loader

Purpose: load registered modules into runtime.

MVP rules:
- modules are declarative first
- runtime only orchestrates
- providers are injected later

Flow:
Registry -> Loader -> Workflow Runner -> Module Adapter
