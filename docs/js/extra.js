document.addEventListener('DOMContentLoaded', function () {
  // Cria o botão customizado exatamente como no vídeo
  const btn = document.createElement('button');
  btn.id = 'custom-sidebar-toggle';
  btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
    </svg>
  `;
  document.body.appendChild(btn);

  // Gatilho: clica no checkbox interno do MkDocs que controla o Drawer
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const drawer = document.getElementById('__drawer');
    if (drawer) {
      drawer.click();
    }
  });
});