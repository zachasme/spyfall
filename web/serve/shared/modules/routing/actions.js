import {
  PUSH_LOCATION,
  REPLACE_LOCATION,
} from './constants'

export function pushLocation(location) {
  return {
    type: PUSH_LOCATION,
    payload: {
      location,
    },
  }
}

export function replaceLocation(location) {
  return {
    type: REPLACE_LOCATION,
    payload: {
      location,
    },
  }
}
