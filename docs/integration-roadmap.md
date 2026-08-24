# Integration Roadmap

## Goal

Build AI Game Factory by integrating proven open source tools first, then optimize each module.

## Module Strategy

### Game Understanding

Input:
- screenshots
- videos
- references

Output:
- game blueprint
- asset map
- UI map
- gameplay hypothesis

### Asset Factory

Possible integrations:
- sprite generation
- sprite sheet processing
- pixel conversion
- background removal
- animation extraction

### Runtime Agent Layer

Future integration:
- agent controlled testing
- screenshot feedback
- automatic iteration

## Adapter Rule

Never directly couple external projects.

Use:

```
External Tool
      |
      v
Adapter
      |
      v
AI Game Factory Module
```

This keeps the platform replaceable.
