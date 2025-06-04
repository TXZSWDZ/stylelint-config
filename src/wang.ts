import type { OptionConfig } from './types'

import { css, ignores, less, scss } from './config'

export function w(options: OptionConfig = {}) {
  const { less: enableLess = false, scss: enableScss = false } = options

  const configs = []

  if (enableLess) {
    configs.push(less())
  }
  if (enableScss) {
    configs.push(scss())
  }

  return {
    ...ignores(),
    ...css(),
    overrides: configs,
  }
}
