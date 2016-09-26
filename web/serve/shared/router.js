/**
 * Shared router
 */

export const ROUTE_LIST = {
  url: '/',
  component: require('./PostList'),
  fetchData() {},
}
export const ROUTE_VIEW = {
  url: /^\/posts\/(\d+)$/,
  component: require('./PostView'),
  fetchData() {},
}

const ROUTES = [ROUTE_VIEW, ROUTE_LIST]

export function match(url) {
  for (const route of ROUTES) {
    let hit
    if (typeof route.url === 'string') {
      hit = url === route.url
    } else {
      hit = url.match(route.url)
    }

    if (hit) {
      const params = Array.isArray(hit) ? match.slice(1) : []
      return [hit, params]
    }
  }

  return null
}
