# Third Party Integration Strategy

Prototype stage principle:

Reuse mature open source processors first, then optimize later.

Candidate integrations:

## Sprite Pipeline

Use existing sprite generation, slicing, cleanup and atlas tools.

Responsibilities:
- frame extraction
- alpha cleanup
- animation manifest
- atlas packing

## Map Pipeline

Responsibilities:
- tileset generation
- prop separation
- collision metadata

## Agent Game Pipeline

Responsibilities:
- connect blueprint to code generation
- connect assets to engine templates

All integrations must be wrapped as adapters.

The factory owns the contracts, not individual implementations.
