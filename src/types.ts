import type { Config } from 'stylelint'

export interface OverrideConfig {
  rules?: Config['rules']
}
export interface CssOptions {
  limit?: number
  precision?: number
}
export interface OptionConfig {
  css?: CssOptions & OverrideConfig
  less?: boolean | OverrideConfig
  scss?: boolean | OverrideConfig
  overrides?: {
    css?: Config['rules']
    less?: Config['rules']
    scss?: Config['rules']
  }
}
