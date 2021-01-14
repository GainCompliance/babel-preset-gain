import env from '@babel/preset-env';
import restSpread from '@babel/plugin-proposal-object-rest-spread';
import {assert} from 'chai';
import any from '@travi/any';
import buildConfig from '../src';

suite('core config', () => {
  test('that preset-env targets the current version of node by default and object rest-spread is enabled', () => {
    const config = buildConfig();

    assert.deepEqual(
      config.presets,
      [[env, {
        targets: {node: 'current'},
        exclude: ['transform-regenerator', 'transform-async-to-generator'],
        modules: 'auto'
      }]]
    );
    assert.deepEqual(config.plugins, [[restSpread, {useBuiltIns: true}]]);
  });

  test('that preset-env targets the provided version of node', () => {
    const nodeVersion = any.integer();
    const config = buildConfig(null, {targets: {node: nodeVersion}});

    assert.deepEqual(
      config.presets,
      [[env, {
        targets: {node: nodeVersion},
        exclude: ['transform-regenerator', 'transform-async-to-generator'],
        modules: 'auto'
      }]]
    );
  });

  test('that preset-env does not transpile module syntax when instructed not to', () => {
    const config = buildConfig(null, {modules: false});

    assert.deepEqual(
      config.presets,
      [[
        env,
        {
          modules: false,
          targets: {node: 'current'},
          exclude: ['transform-regenerator', 'transform-async-to-generator']
        }
      ]]
    );
  });

  test('that targets include browsers when instructed to do so', () => {
    const config = buildConfig(null, {targets: {browser: true}});

    assert.deepEqual(
      config.presets,
      [[
        env,
        {
          targets: {node: 'current', browsers: ['last 2 versions']},
          exclude: ['transform-regenerator', 'transform-async-to-generator'],
          modules: 'auto'
        }
      ]]
    );
  });
});
