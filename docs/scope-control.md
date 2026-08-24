# Scope Control Rules

## Goal
Keep AI Game Factory focused on a working prototype before deep optimization.

## Current MVP Boundary

In scope:

- Game Understanding input/output flow
- Blueprint generation
- Module orchestration
- Asset pipeline contracts
- Mock provider execution
- Export package definition

Out of scope for MVP:

- Training custom foundation models
- Building a complete game engine
- Replacing Blender
- Supporting every engine immediately
- Perfect one-click commercial game generation

## Decision Rule

Prefer:

1. Working prototype over perfect implementation
2. Adapter over hard dependency
3. Existing open source component over rewriting
4. Stable schema over feature expansion

Every new feature must answer:

- Which module owns it?
- What input/output contract does it use?
- Can it be replaced later?
- Does it help the core workflow?
