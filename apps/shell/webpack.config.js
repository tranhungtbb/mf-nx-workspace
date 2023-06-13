const { withModuleFederation } = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
module.exports = withModuleFederation({ 
    ...config,
    remotes: [
        ['about', 'http://localhost:4201'],
    ],
    library : [
        {
          "@fast-food-app/share": {
            "singleton": true,
            "import": "libs/share/src/index.ts"
        },
      }]
});