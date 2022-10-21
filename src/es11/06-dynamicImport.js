const discoveryButton = document.getElementById('discovertyBtn');
discoveryButton.addEventListener('click', async function() {
  const module = await import('./module.js');
  module.hello();
});