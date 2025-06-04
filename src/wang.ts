import type { Config } from 'stylelint'

import type { OptionConfig, OverrideConfig } from './types'

import { css, ignores, less, scss } from './config'

export function w(options: OptionConfig = {}) {
  const { less: enableLess = false, scss: enableScss = false } = options

  function getOverrides<K extends keyof OptionConfig>(key: K): Config['rules'] {
    const currentOverrides = options[key] as OverrideConfig
    return {
      ...currentOverrides?.rules ? currentOverrides.rules : {},
      ...(options.overrides as Config['rules'])?.[key],
    }
  }

  const overrides = []

  if (enableLess) {
    overrides.push(less())
  }
  if (enableScss) {
    overrides.push(scss())
  }

  return {
    ...ignores(),
    ...css({ ...options?.css ? options.css : {}, rules: getOverrides('css') }),
    overrides,
  }
}
