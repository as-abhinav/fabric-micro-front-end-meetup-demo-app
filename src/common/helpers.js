export const navigate = url => window.history.pushState(null, null, url);

export function pathPrefix(prefix) {
  return function(location) {
    if (!prefix) return true;

    let pathMatched = false;
    if (prefix === '/') {
      pathMatched = location.pathname === '' || location.pathname === '/';
    } else {
      pathMatched = location.pathname.indexOf(`${prefix}`) === 0;
    }
    return pathMatched;
  };
}
