export type AssetStage =
  | "prompt"
  | "generate"
  | "process"
  | "validate"
  | "package"
  | "export";

export interface PipelineContext {
  assetId: string;
  stage: AssetStage;
  files: string[];
  metadata: Record<string, unknown>;
}

export interface PipelineProcessor {
  name: string;
  run(context: PipelineContext): Promise<PipelineContext>;
}

export class AssetPipeline {
  private processors: PipelineProcessor[] = [];

  register(processor: PipelineProcessor) {
    this.processors.push(processor);
  }

  async execute(context: PipelineContext) {
    let result = context;
    for (const processor of this.processors) {
      result = await processor.run(result);
    }
    return result;
  }
}
