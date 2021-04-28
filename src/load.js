function loadDevTools(callback) {
  const localStorageValue = window.localStorage.getItem('dev-tools');
  const setInLocalStorage = localStorageValue != undefined;
  const localStorageEnabled = localStorageValue === 'true';
  if (setInLocalStorage) {
    if (localStorageEnabled) {
      return go();
    } else {
      return callback();
    }
  }

  // the default is off in Cypress
  if (window.Cypress) return callback();

  // the default is on in development
  if (process.env.NODE_ENV === 'development') return go();

  return callback();

  function go() {
    // use a dynamic import so the dev-tools code isn't bundled with the regular
    // app code so we don't worry about bundle size.
    import('./dev-tools')
      .then(devTools => devTools.install())
      .finally(callback);
  }
}

export default loadDevTools;
