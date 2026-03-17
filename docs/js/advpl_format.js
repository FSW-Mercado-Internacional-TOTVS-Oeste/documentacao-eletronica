/* advpl_format.js */
/*Codigo gerado com auxilio de IA*/

(function () {
  console.log("Iniciando formatador ADVPL...");

  // ── Lista de palavras-chave ──────────────────────────────────────────────
  const KEYWORDS = [
    "If","Else","ElseIf","EndIf","For","Next","While","EndDo",
    "Do","Case","OtherWise","EndCase","Exit","Loop","Break",
    "Local","Static","Public","Private","Default",
    "Function","Procedure","Method","Class","EndClass","Data","Inherit",
    "Return","WriteLog","MsgBox","MsgInfo","MsgAlert","MsgStop",
    "Alert","MsgYesNo","MsgNoYes","NIL","Self"
  ];
  const KEYWORDS_LC = KEYWORDS.map(k => k.toLowerCase());

  function escaparHTML(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ── Tokenizador ──────────────────────────────────────────────────────────
  // Divide uma linha em tokens ANTES de qualquer transformação HTML.
  // Isso garante que o escape e a coloração nunca se misturam.
  function tokenizar(linha) {
    const tokens = [];
    let i = 0;

    while (i < linha.length) {

      // Comentário de linha  //
      if (linha[i] === "/" && linha[i + 1] === "/") {
        tokens.push({ tipo: "comment", valor: linha.slice(i) });
        break;
      }

      // String com aspas duplas
      if (linha[i] === '"') {
        let j = i + 1;
        while (j < linha.length && linha[j] !== '"') {
          if (linha[j] === "\\") j++;
          j++;
        }
        tokens.push({ tipo: "string", valor: linha.slice(i, j + 1) });
        i = j + 1;
        continue;
      }

      // String com aspas simples
      if (linha[i] === "'") {
        let j = i + 1;
        while (j < linha.length && linha[j] !== "'") {
          if (linha[j] === "\\") j++;
          j++;
        }
        tokens.push({ tipo: "string", valor: linha.slice(i, j + 1) });
        i = j + 1;
        continue;
      }

      // Operadores de dois caracteres: :=  ==  !=  >=  <=  <>
      if (i + 1 < linha.length) {
        const dois = linha.slice(i, i + 2);
        if ([":=", "==", "!=", ">=", "<=", "<>"].includes(dois)) {
          tokens.push({ tipo: "symbol", valor: dois });
          i += 2;
          continue;
        }
      }

      // Símbolos de um caractere
      if ("()[],.+-*/%".includes(linha[i])) {
        tokens.push({ tipo: "symbol", valor: linha[i] });
        i++;
        continue;
      }

      // Número
      if (/[0-9]/.test(linha[i])) {
        let j = i;
        while (j < linha.length && /[0-9.]/.test(linha[j])) j++;
        tokens.push({ tipo: "number", valor: linha.slice(i, j) });
        i = j;
        continue;
      }

      // Identificador (keyword, User Function, função, variável)
      if (/[A-Za-z_]/.test(linha[i])) {
        let j = i;
        while (j < linha.length && /[A-Za-z0-9_]/.test(linha[j])) j++;
        const nome = linha.slice(i, j);

        // "User Function" — trata como token único
        if (nome.toLowerCase() === "user") {
          const restante = linha.slice(j);
          const match = restante.match(/^(\s+)(Function)\b/i);
          if (match) {
            tokens.push({ tipo: "uf", valor: nome + match[1] + match[2] });
            i = j + match[0].length;
            continue;
          }
        }

        // Keyword pura
        if (KEYWORDS_LC.includes(nome.toLowerCase())) {
          tokens.push({ tipo: "kw", valor: nome });
          i = j;
          continue;
        }

        // Verifica se é chamada de função: identif seguido de espaços e '('
        let k = j;
        while (k < linha.length && linha[k] === " ") k++;
        if (linha[k] === "(") {
          tokens.push({ tipo: "fn", valor: nome });
          i = j;
          continue;
        }

        // Variável / identificador genérico (sem cor especial)
        tokens.push({ tipo: "var", valor: nome });
        i = j;
        continue;
      }

      // Qualquer outro caractere (espaço, tab, etc.)
      tokens.push({ tipo: "text", valor: linha[i] });
      i++;
    }

    return tokens;
  }

  // ── Renderiza lista de tokens em HTML seguro ─────────────────────────────
  function renderizar(tokens) {
    return tokens
      .map(({ tipo, valor }) => {
        const v = escaparHTML(valor);   // escapa SEMPRE antes de envolver em tag
        switch (tipo) {
          case "uf":      return `<span class="uf">${v}</span>`;
          case "kw":      return `<span class="kw">${v}</span>`;
          case "fn":      return `<span class="fn">${v}</span>`;
          case "string":  return `<span class="string">${v}</span>`;
          case "comment": return `<span class="comment">${v}</span>`;
          case "symbol":  return `<span class="symbol">${v}</span>`;
          case "number":  return `<span class="number">${v}</span>`;
          default:        return v;   // var, text — só escapa, sem cor
        }
      })
      .join("");
  }

  // ── Processador principal ────────────────────────────────────────────────
  function aplicarFormatacao() {
    document
      .querySelectorAll(".advpl-editor code:not([data-processed])")
      .forEach((bloco) => {
        // textContent garante texto 100% puro, sem HTML residual
        const texto = (bloco.textContent || bloco.innerText || "").trim();
        if (!texto) return;

        const htmlFinal = texto
          .split("\n")
          .map((linha) => renderizar(tokenizar(linha)))
          .join("\n");

        bloco.innerHTML = htmlFinal;
        bloco.setAttribute("data-processed", "true");
      });
  }

  // ── Inicialização ────────────────────────────────────────────────────────
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", aplicarFormatacao);
  } else {
    aplicarFormatacao();
  }

  // Observa navegação SPA do MkDocs Material
  const observer = new MutationObserver(aplicarFormatacao);
  observer.observe(document.body, { childList: true, subtree: true });
})();