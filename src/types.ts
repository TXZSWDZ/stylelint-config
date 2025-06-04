import type { Config } from 'stylelint'

export interface OverrideConfig {
  rules?: Config['rules']
}

export interface OptionConfig {
  css?: OverrideConfig
  less?: boolean | OverrideConfig
  scss?: boolean | OverrideConfig
  override?: {
    css?: OverrideConfig
    less?: OverrideConfig
    scss?: OverrideConfig
  }
}
