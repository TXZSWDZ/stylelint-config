import { GLOB_EXCLUDE } from '../global'

export function ignores() {
  return {
    ignoreFiles: [...GLOB_EXCLUDE],
  }
}
