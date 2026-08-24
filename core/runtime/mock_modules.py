from .module_registry import BaseModule


class GameUnderstandingModule(BaseModule):
    id = "game-understanding"

    def execute(self, action, context):
        return {
            "blueprint": {
                "genre": "unknown",
                "artStyle": "analyzed-style",
                "coreLoop": ["play", "progress"]
            }
        }


class BlueprintGeneratorModule(BaseModule):
    id = "blueprint-generator"

    def execute(self, action, context):
        return {
            "assetTasks": [
                "character",
                "tileset",
                "ui"
            ]
        }


class AssetPackageModule(BaseModule):
    id = "asset-package"

    def execute(self, action, context):
        return {
            "package": "generated-project/assets"
        }
