import type { CssOptions, OverrideConfig } from '../types'

export function css(options: CssOptions & OverrideConfig) {
  const defaultConfig = {
    limit: 1,
    precision: 4,
    ...options || {},
  }

  return {
    extends: 'stylelint-config-standard',
    rules: {
      // Deprecated
      'at-rule-no-deprecated': true,
      'declaration-property-value-keyword-no-deprecated': true,
      // Duplicate
      'declaration-block-no-duplicate-custom-properties': true,
      'declaration-block-no-duplicate-properties': true,
      'font-family-no-duplicate-names': true,
      'keyframe-block-no-duplicate-selectors': true,
      'no-duplicate-at-import-rules': true,
      'no-duplicate-selectors': true,
      // Empty
      'block-no-empty': true,
      'comment-no-empty': true,
      'no-empty-source': true,
      // Invalid
      'at-rule-prelude-no-invalid': [true, { ignoreAtRules: ['media'] }],
      'color-no-invalid-hex': true,
      'function-calc-no-unspaced-operator': true,
      'keyframe-declaration-no-important': true,
      'media-query-no-invalid': true,
      'named-grid-areas-no-invalid': true,
      'no-invalid-double-slash-comments': true,
      'no-invalid-position-at-import-rule': true,
      'string-no-newline': [true, { ignore: ['at-rule-preludes', 'declaration-values'] }],
      'syntax-string-no-invalid': true,
      // Irregular
      'no-irregular-whitespace': true,
      // Missing
      'custom-property-no-missing-var-function': true,
      'font-family-no-missing-generic-family-keyword': true,
      // Overrides
      'declaration-block-no-shorthand-property-overrides': true,
      // Unmatchable
      'selector-anb-no-unmatchable': true,
      // Unknown
      'annotation-no-unknown': true,
      'at-rule-descriptor-no-unknown': true,
      'at-rule-descriptor-value-no-unknown': true,
      'at-rule-no-unknown': true,
      'declaration-property-value-no-unknown': true,
      'function-no-unknown': true,
      'media-feature-name-no-unknown': true,
      'media-feature-name-value-no-unknown': true,
      'property-no-unknown': true,
      'selector-pseudo-class-no-unknown': true,
      'selector-pseudo-element-no-unknown': true,
      'selector-type-no-unknown': true,
      'unit-no-unknown': true,
      // Enforce conventions
      // Allowed, disallowed & required
      // At-rule
      'at-rule-no-vendor-prefix': true,
      // Color
      'color-no-hex': true,
      // Length
      'length-zero-no-unit': [
        true,
        {
          ignore: ['custom-properties'],
        },
      ],
      // Media feature
      'media-feature-name-no-vendor-prefix': true,
      // Property
      'property-no-vendor-prefix': true,
      // Selector
      'selector-no-vendor-prefix': true,
      // Value
      'value-no-vendor-prefix': true,
      // Case
      'function-name-case': 'lower',
      'selector-type-case': 'lower',
      'value-keyword-case': 'lower',
      // Empty lines
      'at-rule-empty-line-before': [
        'always',
        {
          except: ['blockless-after-same-name-blockless', 'first-nested'],
          ignore: ['after-comment'],
        },
      ],
      'comment-empty-line-before': [
        'always',
        {
          except: ['first-nested'],
          ignore: ['stylelint-commands'],
        },
      ],
      'custom-property-empty-line-before': [
        'always',
        {
          except: ['after-custom-property', 'first-nested'],
          ignore: ['after-comment', 'inside-single-line-block'],
        },
      ],
      'declaration-empty-line-before': [
        'always',
        {
          except: ['after-declaration', 'first-nested'],
          ignore: ['after-comment', 'inside-single-line-block'],
        },
      ],
      'rule-empty-line-before': [
        'always-multi-line',
        {
          except: ['first-nested'],
          ignore: ['after-comment'],
        },
      ],
      // Max & min
      'declaration-block-single-line-max-declarations': defaultConfig.limit,
      'number-max-precision': defaultConfig.precision,
      // Notation
      'alpha-value-notation': [
        'percentage',
        {
          exceptProperties: [
            'opacity',
            'fill-opacity',
            'flood-opacity',
            'stop-opacity',
            'stroke-opacity',
          ],
        },
      ],
      'color-function-alias-notation': 'without-alpha',
      'color-function-notation': 'modern',
      'color-hex-length': 'short',
      'hue-degree-notation': 'angle',
      'import-notation': 'url',
      'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
      'media-feature-range-notation': 'context',
      'selector-not-notation': 'complex',
      'selector-pseudo-element-colon-notation': 'double',
      // Pattern
      'container-name-pattern': [
        '^(--)?([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        {
          message: (name: any) => `Expected container name "${name}" to be kebab-case`,
        },
      ],
      'custom-media-pattern': [
        '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        {
          message: (name: any) => `Expected custom media query name "${name}" to be kebab-case`,
        },
      ],
      'custom-property-pattern': [
        '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        {
          message: (name: any) => `Expected custom property name "${name}" to be kebab-case`,
        },
      ],
      'keyframes-name-pattern': [
        '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        {
          message: (name: any) => `Expected keyframe name "${name}" to be kebab-case`,
        },
      ],
      'layer-name-pattern': [
        '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        {
          message: (name: any) => `Expected layer name "${name}" to be kebab-case`,
        },
      ],
      'selector-class-pattern': [
        '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        {
          message: (selector: any) => `Expected class selector "${selector}" to be kebab-case`,
        },
      ],
      'selector-id-pattern': [
        '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
        {
          message: (selector: any) => `Expected id selector "${selector}" to be kebab-case`,
        },
      ],
      'selector-nested-pattern': '^&:(?:hover|focus)$',
      // Quotes
      'font-family-name-quotes': 'always-where-recommended',
      'function-url-quotes': 'always',
      'selector-attribute-quotes': 'always',
      // Redundant
      'declaration-block-no-redundant-longhand-properties': true,
      'shorthand-property-no-redundant-values': true,
      // Whitespace inside
      'comment-whitespace-inside': 'always',
      ...defaultConfig.rules,
    },
  }
}
