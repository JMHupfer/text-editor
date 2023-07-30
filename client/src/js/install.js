const butInstall = document.getElementById('buttonInstall');
let deferredPrompt;

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    console.log('👍', 'beforeinstallprompt', event);
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = "block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('👍', 'butInstall-clicked');
  butInstall.style.display = "none";
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  console.log(`👍 User response to the install prompt: ${outcome}`);
  deferredPrompt = null;
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', event);
  butInstall.style.display = "none";
});
