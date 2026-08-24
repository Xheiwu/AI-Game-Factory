# Workflow Runner Interface

## Purpose

Execute generated task plans without owning AI generation logic.

## Flow

Input:
- Workflow
- Task Plan
- Module Registry

Execution:
1. validate task
2. resolve module
3. execute adapter
4. store result
5. continue next task

## Boundaries

Runner does not:
- call models directly
- process images directly
- generate assets directly

It only orchestrates modules.
