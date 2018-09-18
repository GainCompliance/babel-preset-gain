/* eslint import/no-extraneous-dependencies: ['error', {'devDependencies': true}] */

export default {
  input: 'src/index.js',
  external: [
    '@babel/preset-env',
    '@babel/plugin-proposal-object-rest-spread'
  ],
  output: [
    {file: 'lib/index.cjs.js', format: 'cjs', sourcemap: true},
    {file: 'lib/index.es.js', format: 'es', sourcemap: true}
  ]
};
