
```markdown
# Documentação Eletrônica - TOTVS Oeste

Este repositório contém os arquivos fontes do manual de documentação eletrônica, gerado estaticamente através do **MkDocs** e hospedado via **GitLab Pages**.

## 🌐 Link de Acesso
O manual publicado pode ser acessado em:
[https://fsw.mi.totvsoeste-allview.gitlab.io/documentacao-eletronica/](https://fsw.mi.totvsoeste-allview.gitlab.io/documentacao-eletronica/)

---

## 🚀 Como Contribuir

### 1. Pré-requisitos
Certifique-se de ter o Python 3.11+ instalado em sua máquina.

### 2. Configuração do Ambiente Local
Ao baixar o projeto pela primeira vez, configure o ambiente virtual para evitar conflitos:

```powershell
# Criar ambiente virtual
python -m venv .venv

# Ativar ambiente
.\.venv\Scripts\activate

# Instalar dependências
pip install -r requirements.txt

```

### 3. Visualização em Tempo Real

Para editar e ver as mudanças antes de subir para o servidor, use o comando:

```powershell
mkdocs serve

```

Acesse `http://127.0.0.1:8000` no seu navegador.

---

## 🛠 Estrutura do Projeto

* **docs/**: Contém os arquivos `.md` que compõem o conteúdo do manual.
* **mkdocs.yml**: Arquivo de configuração principal (menu, tema e plugins).
* **.gitlab-ci.yml**: Script de automação que realiza o build e deploy do site.
* **requirements.txt**: Lista de bibliotecas necessárias para o projeto.

---

## ⚠️ Observações Importantes

* **Pipeline**: O arquivo `.gitlab-ci.yml` deve sempre terminar com uma linha vazia para evitar erros de leitura do GitLab Runner.
* **Deploy**: O deploy é automático para a branch `main`. Qualquer `push` aprovado atualizará o site em alguns minutos.
* **Arquivos Ignorados**: Pastas como `.venv/`, `site/` e arquivos de trava como `uv.lock` não devem ser enviados ao repositório para manter a estrutura limpa.

```

---

### Como subir este arquivo:
1. Salve o conteúdo acima em um arquivo chamado `README.md` na sua pasta `C:\Dev\Manuais_ADDON\CNAB_FOLHA`.
2. No terminal, execute:
   ```powershell
   git add README.md
   git commit -m "Docs: Adicionando README explicativo"
   git push origin main
   ```
