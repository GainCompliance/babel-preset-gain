import extendForm8ionPreset from '../thirdparty-wrappers/form8ion-babel-preset';

export default function (context, options = {}) {
  const form8ionPreset = extendForm8ionPreset(context, options);
  const {react, immutable, emotion} = options;

  return {
    presets: [
      ...form8ionPreset.presets,
      ...react && false !== emotion ? ['@emotion/babel-preset-css-prop'] : []
    ],
    plugins: [
      ...form8ionPreset.plugins,
      ...react ? ['polished'] : [],
      ...immutable
        ? [[require('babel-plugin-extensible-destructuring').default, {mode: 'optout', impl: 'immutable'}]]
        : []
    ]
  };
}
