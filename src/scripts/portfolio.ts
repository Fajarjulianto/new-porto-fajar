export {};
const toggle = document.querySelector<HTMLButtonElement>('#menu-toggle')!;
const dialog = document.querySelector<HTMLDialogElement>('#mobile-navigation')!;
const close = document.querySelector<HTMLButtonElement>('#menu-close')!;
toggle.hidden = false;

toggle.addEventListener('click', () => {
  dialog.showModal();
  toggle.setAttribute('aria-expanded', 'true');
  document.body.classList.add('overflow-hidden');
});
const closeMenu = () => dialog.close();
close.addEventListener('click', closeMenu);
dialog.addEventListener('close', () => {
  toggle.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('overflow-hidden');
  toggle.focus();
});
dialog.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
const desktop = window.matchMedia('(min-width: 901px)');
desktop.addEventListener('change', () => { if (desktop.matches && dialog.open) closeMenu(); });
