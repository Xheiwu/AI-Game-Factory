module.exports = {
  'game-understanding': {
    async execute(action, context) {
      return {
        blueprint: {
          genre: 'roguelike',
          artStyle: 'unknown',
          source: context.input || 'image'
        }
      };
    }
  },

  'blueprint-generator': {
    async execute(action, context) {
      return {
        tasks: [
          'generate_player',
          'generate_environment',
          'generate_ui'
        ]
      };
    }
  },

  'export-package': {
    async execute(action, context) {
      return {
        package: {
          path: 'generated-project/',
          ready: true
        }
      };
    }
  }
};
