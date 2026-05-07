/*
 * extra.js — Custom sidebar toggle and overlay
 * Atualizado - Vinicius Marques - 07/05/2026 
 */

document.addEventListener('DOMContentLoaded', function () {

  // ======================================================
  // Botao de fechar dentro do sidebar
  // ======================================================
  function injectCloseButton() {
    var navTitle = document.querySelector('.md-nav__title');
    if (!navTitle) return;
    if (navTitle.querySelector('.fs-sidebar-close')) return;

    var closeBtn = document.createElement('button');
    closeBtn.className = 'fs-sidebar-close';
    closeBtn.textContent = '\u00D7';
    closeBtn.setAttribute('aria-label', 'Fechar menu');
    closeBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var drawer = document.getElementById('__drawer');
      if (drawer) {
        drawer.click();
      }
    });
    navTitle.appendChild(closeBtn);
  }
  injectCloseButton();

  // ======================================================
  // Desktop apenas: botao custom + overlay click
  // ======================================================
  function isDesktop() {
    return window.matchMedia('(min-width: 76.25em)').matches;
  }

  // So executa logica desktop quando a query casa
  function handleDesktopChange(mq) {
    if (!mq.matches) return; // Saindo do desktop — nao faz nada

    // Nao criar na index
    if (document.querySelector('.fs-home')) return;
    if (document.getElementById('custom-sidebar-toggle')) return;

    var btn = document.createElement('button');
    btn.id = 'custom-sidebar-toggle';
    btn.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
      '<path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/></svg>';
    document.body.appendChild(btn);

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var drawer = document.getElementById('__drawer');
      if (drawer) {
        drawer.click();
      }
    });

    // Overlay: clicar fora fecha o menu
    document.addEventListener('click', function (e) {
      var drawer = document.getElementById('__drawer');
      if (!drawer || !drawer.checked) return;

      var label = e.target.closest ? e.target.closest('[for="__drawer"]') : null;
      if (label) return;

      var sidebar = document.querySelector('.md-sidebar--primary');
      if (!sidebar || !sidebar.contains(e.target)) {
        drawer.click();
      }
    });
  }

  // Registra listener para mudanças (resize)
  var mq = window.matchMedia('(min-width: 76.25em)');
  mq.addEventListener('change', handleDesktopChange);
  // Executa imediatamente se ja comecar em desktop
  if (mq.matches) {
    handleDesktopChange(mq);
  }
});
