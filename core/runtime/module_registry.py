"""Simple module registry for prototype runtime."""


class ModuleRegistry:
    def __init__(self):
        self.modules = {}

    def register(self, module):
        self.modules[module.id] = module

    def get(self, module_id):
        return self.modules.get(module_id)


class BaseModule:
    id = "base"

    def execute(self, action, context):
        return {"message": "not implemented"}
