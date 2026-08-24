# Asset Pipeline Runtime

Pipeline:

Prompt
-> Style Memory
-> Generator
-> Processor
-> Validation
-> Asset Package
-> Export

The runtime keeps providers replaceable and engine exporters independent.

Initial processors:

- sprite slicing
- background removal
- frame alignment
- atlas packing
- metadata generation
