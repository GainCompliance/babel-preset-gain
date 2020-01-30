import {assert} from 'chai';
import buildConfig from '../../src';

suite('react', () => {
  test('that react is configured when specified', () => {
    const config = buildConfig(null, {react: true});

    assert.include(config.presets, '@emotion/babel-preset-css-prop');
    assert.include(config.plugins, 'polished');
  });

  test('that react is not configured when not specified', () => {
    const config = buildConfig();

    assert.notInclude(config.presets, '@emotion/babel-preset-css-prop');
    assert.notInclude(config.plugins, 'polished');
  });

  test('that emotion is disabled when specified', () => {
    const config = buildConfig(null, {react: true, emotion: false});

    assert.notInclude(config.presets, '@emotion/babel-preset-css-prop');
  });
});
