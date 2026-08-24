# Prototype Integration Plan

## Goal
Build the first working AI Game Factory prototype by integrating existing open-source components through adapters.

## Reference directions

- GameSmith style agent workflow: chat -> build -> test -> iterate.
- ManaForge style asset dashboard: image, spritesheet, sound, music and lore generation pipeline.
- Game generation agents: use tools and validation instead of one-shot code generation.

## Adapter strategy

Do not copy projects directly into the core.

Use:

External Project
    |
    v
Adapter
    |
    v
AI Game Factory Module

## First integrated modules

1. Game Understanding
- screenshot analysis
- gameplay blueprint
- asset map

2. Asset Factory
- sprite processing
- tileset processing
- UI extraction

3. Provider Layer
- user supplied API keys
- OpenAI
- Gemini
- SiliconFlow
- Tripo

4. Export Layer
- Web
- TapMaker
- Unity
- Godot
