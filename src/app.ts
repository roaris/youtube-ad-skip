const body = document.getElementsByTagName('body')[0];

const observer = new MutationObserver(() => {
  const skipButtons = Array.from(document.getElementsByClassName('ytp-ad-skip-button')) as HTMLButtonElement[];
  skipButtons.forEach((skipButton) => {
    skipButton.click();
  });

  const overlayCloseButtons = Array.from(document.getElementsByClassName('ytp-ad-overlay-close-button')) as HTMLButtonElement[];
  overlayCloseButtons.forEach((overlayCloseButton) => {
    overlayCloseButton.click();
  });
});

observer.observe(body, {
  childList: true,
  subtree: true,
});
