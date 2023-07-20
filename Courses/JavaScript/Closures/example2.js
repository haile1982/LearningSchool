// Partial Application

// The arguments are applied one-by-one, using closures to arrive at the final result
function partialBuildUri(scheme) {
  return function (domain) {
    return function (path) {
      return `${scheme}://${domain}/${path}`;
    };
  };
}

// A function could apply them all at once.
function buildUri(scheme, domain, path) {
  return partialBuildUri(scheme)(domain)(path);
}

// Or apply a few to create a flexible system of functions for reuse.
function buildHttpsExercismUri(path) {
  return partialBuildUri("https")("exercism.org");
}
