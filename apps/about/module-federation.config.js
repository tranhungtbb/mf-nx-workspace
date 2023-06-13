module.exports = {
  name: 'about',
  exposes: {
    './Module': 'apps/about/src/app/remote-entry/entry.module.ts',
    './Module2': 'apps/about/src/app/remote-entry/entry.module.ts',
  },
};
