
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

Python: https://www.python.org/downloads/
Git: https://git-scm.com/install/windows

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
mkdocs serve --livereload

```
Acesse `http://127.0.0.1:8000` no seu navegador. Agora, qualquer alteração que seja feita nos documentos .md, quando forem salvas, de forma automatica será atualizada na pagina sem a necessidade de reiniciar o servidor a cada alteração.

---

### 4. Para realizar o Commit das alterações

```
# 1. Configure seu nome e email (apenas na primeira vez)
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@totvs.com"

# 2. Sempre que houver alterações execute:
git add .

# 3. Salve localmente:
git commit -m "Explicação sucinta da melhoria ou correção"

# 4. SEMPRE sincronize antes de começar ou antes de enviar
git pull

# 5. Envie para o servidor
git push
```

## 🛠️ Resolução de Conflitos (Caso ocorra)

Se ao dar um git pull --rebase o terminal avisar sobre "CONFLICT", não se preocupe: suas alterações não foram perdidas. Isso apenas significa que você e outro colega editaram a mesma linha do manual.

### Como resolver:

1. Abra o arquivo no VS Code: As linhas conflitantes estarão destacadas em colorido.

2. Escolha a opção desejada: 

```
- Accept Current Change: Mantém o que você escreveu.

- Accept Incoming Change: Mantém o que já estava no servidor.

- Accept Both Changes: Mantém os dois textos (um abaixo do outro).
```

3. Salve o arquivo e finalize no terminal:

```
git add .
git rebase --continue
```

## Estrutura do Projeto

* **docs/**: Contém os arquivos `.md` que compõem o conteúdo do manual.
* **docs/assets**: Contém as imagens que compõem o conteúdo do manual.
* **docs/stylesheets**: Contém o arquivo CSS que contém as configurações de estilo do manual.
* **docs/js**: Contém os scripts em js do manual.
* **mkdocs.yml**: Arquivo de configuração principal (menu, tema e plugins).
* **.gitlab-ci.yml**: Script de automação que realiza o build e deploy do site.
* **requirements.txt**: Lista de bibliotecas necessárias para o projeto.

---

## ⚠️ Observações Importantes

* **Deploy**: O deploy é automático para a branch `main`. Qualquer `push` atualizará o site em alguns minutos.
* **Arquivos Ignorados**: Pastas como `.venv/`, `site/` ou arquivos como `.python-version`, `.main.py` e `pyproject.toml` não devem ser enviados ao repositório. Use o arquivo `.gitignore` para ignorar esses arquivos.



