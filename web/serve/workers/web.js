/**
 * A web worker that interfaces with the main thread by taking actions,
 * diffing the dom and pushing dom patches to main thread
 */

function diff() {
  const patch = 'derp'
  self.postMessage({
    type: 'patch',
    payload: { patch },
  });
}

self.addEventListener('message', ({ data }) => {
  diff(data)
});
