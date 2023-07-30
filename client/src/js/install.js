document.addEventListener("DOMContentLoaded", (event) => {
  const butInstall = document.getElementById("buttonInstall");
  let deferredPrompt;

  butInstall.disabled = true;

  window.addEventListener("beforeinstallprompt", (event) => {
    console.log("👍", "beforeinstallprompt", event);
    event.preventDefault();
    deferredPrompt = event;
    butInstall.style.display = "block";
    butInstall.disabled = false;
  });

  butInstall.addEventListener("click", async () => {
    console.log("👍", "butInstall-clicked");
    butInstall.style.display = "none";
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`👍 User response to the install prompt: ${outcome}`);
      deferredPrompt = null;
    } else {
      console.log(`👎 deferredPrompt not fired`);
    }
  });

  window.addEventListener("appinstalled", (event) => {
    console.log("👍", "appinstalled", event);
    butInstall.style.display = "none";
  });
});
