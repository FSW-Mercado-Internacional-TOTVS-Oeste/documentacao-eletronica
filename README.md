
# Documentação Eletrônica - TOTVS Oeste

Este repositório contém os arquivos fontes do manual de documentação eletrônica, gerado estaticamente através do **MkDocs** e hospedado via **GitLab Pages**.

## 🌐 Link de Acesso
O manual publicado pode ser acessado em:
[https://fsw-mi-addons.totvscascavel.com.br/](https://fsw-mi-addons.totvscascavel.com.br/)

Ou pelo redirecionamento do GitLab:
[https://fsw-mi-totvsoeste.gitlab.io/documentacao-eletronica/](https://fsw-mi-totvsoeste.gitlab.io/documentacao-eletronica/)

---

## 🚀 Como Contribuir

### 1. Pré-requisitos
Certifique-se de ter o Python 3.11+ e o git instalado em sua máquina.

### 2. Configuração do Ambiente Local
Ao baixar o projeto pela primeira vez, configure o ambiente virtual para evitar conflitos, no Terminal digite os seguintes comandos:

```
# Baixa o projeto no diretório atual, recomendado criar uma pasta específica para o projeto:
git clone https://gitlab.com/fsw-mi-totvsoeste/documentacao-eletronica.git

# Criar ambiente virtual
python -m venv .venv

# Caso powershell bloqueie a execução de scripts, execute:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Ativar ambiente
.\.venv\Scripts\activate

# Instalar dependências
pip install -r requirements.txt

```

### 3. Visualização em Tempo Real

Para editar e ver as mudanças antes de subir para o servidor, use o comando:
```
mkdocs serve

```
Acesse `http://127.0.0.1:8000` no seu navegador.

---

### 4. Para realizar o Commit das alterações

Antes de fazer o commit, configure seu nome e email no git:

```
git config --global user.name "Seu Nome" # Substitua pelo seu nome
git config --global user.email "seu.email@totvs.com" # Substitua pelo seu email TOTVS

```

Após configurar o nome e email, sempre que for commitar uma alteração, execute:

```
git add .
git commit -m "Comentario do commit"
git push origin main
```

## 🛠 Estrutura do Projeto

* **docs/**: Contém os arquivos `.md` que compõem o conteúdo do manual.
* **mkdocs.yml**: Arquivo de configuração principal (menu, tema e plugins).
* **.gitlab-ci.yml**: Script de automação que realiza o build e deploy do site.
* **requirements.txt**: Lista de bibliotecas necessárias para o projeto.

---

## ⚠️ Observações Importantes

* **Deploy**: O deploy é automático para a branch `main`. Qualquer `push` aprovado atualizará o site em alguns minutos.
* **Arquivos Ignorados**: Pastas como `.venv/`, `site/` e arquivos de trava como `uv.lock` não devem ser enviados ao repositório para manter a estrutura limpa.