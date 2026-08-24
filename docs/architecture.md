# Architecture

```
                AI Game Factory
                       |
                Asset Core Layer
                       |
 ------------------------------------------------
 |              |             |                 |
Sprite       Tileset       Audio             3D
Pipeline     Pipeline      Pipeline          Pipeline
                       |
                Export Adapters
                       |
        Unity | Godot | Web | TapMaker
```

## Layers

### Asset Core

Defines universal asset formats independent from engines.

### Generators

Connects AI providers:

- Image models
- Video models
- 3D generation
- Audio generation

### Processors

Converts raw AI output into game assets:

- Background removal
- Sprite slicing
- Pixel conversion
- Animation processing

### Exporters

Creates engine-specific packages.
