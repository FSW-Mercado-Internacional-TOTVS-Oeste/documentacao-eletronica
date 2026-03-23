# Este documento tem o objetivo em ajudar a iniciar com as classes e componentes que foram criado para as documentaçãos:

Markdown (ou .md) é a linguagem de marcação utilizada para criar os documentos.
Este guia foi escrito em Markdown e utiliza alguns recursos extras (HTML, CSS e JavaScript) para deixar a documentação mais rica e interativa.

Abaixo você encontra os **principais elementos de formatação** que usamos neste manual.  
É bem simples começar!

# 1. Textos básicos e ênfase

- **Negrito** → use dois asteriscos ou dois underlines  
  Escreva: `**texto importante**` ou `__texto importante__`  
  Resultado: **texto importante**

- *Itálico* → use um asterisco ou um underline  
  Escreva: `*ideia*` ou `_ideia_`  
  Resultado: *ideia*

<hr>

# 2. Títulos e subtítulos

Use `#` para criar níveis de título:

```markdown
    # Título principal (nível 1)
    ## Subtítulo (nível 2)
    ### Tópico (nível 3)    
```
Gera:

<hr>

# Título principal (nível 1)
## Subtítulo (nível 2)
### Tópico (nível 3)

<hr>

# 3. Listas

### Lista não ordenada (com bullets)

Escreva com - , * ou + (o mais comum é -)

```markdown
  - Item 1
  - Item 2
    - Subitem 2.1
    - Subitem 2.2
  - Item 3
```
Vira:

- Item 1
- Item 2
    - Subitem 2.1
    - Subitem 2.2
- Item 3


### Lista ordenada (numerada)

```markdown
    1. Primeiro passo
    2. Segundo passo
        1. Subpasso A
        2. Subpasso B
    3. Terceiro passo
```

Vira:

1. Primeiro passo
2. Segundo passo
    1. Subpasso A
    2. Subpasso B
3. Terceiro passo

<hr>

# 4. Links e Imagens

Links: 

```markdown
[Texto do Link](URL). 
```

Exemplo: 

[Google](https://www.google.com).

Imagens - É a mesma estrutura, mas com um ponto de exclamação na frente: 

```markdown
![Descrição](URL da imagem).
```

<hr>

# 5. Blocos de código

Código inline usa `crase` simples: 
```markdown
    `print("Olá mundo")`
```

Bloco de código com destaque de linguagem usa três crases ``` e o nome da linguagem logo depois.

```markdown

    ```python
        print("Olá mundo")
    ```

```

<hr>

# 6. Tabelas

As tabelas no Markdown são ideais para organizar dados simples. Elas funcionam através de barras verticais (|) para separar colunas e hifens (-) para criar o cabeçalho.

## 6.1 Estrutura Básica

Você pode criar uma tabela apenas separando os termos. A linha de hifens abaixo do cabeçalho é obrigatória.

```markdown
Cabeçalho A | Cabeçalho B
---         | ---
Célula 1    | Célula 2
```

Resultado:

Cabeçalho A | Cabeçalho B
---         | ---
Célula 1    | Célula 2


## 6.2 Com Bordas Laterais

Para um código mais limpo e legível, muitos usuários preferem fechar as extremidades da tabela com barras. O resultado visual é o mesmo, mas o código fica mais organizado:

```markdown
| Item | Qtd | Preço |
|:---- |:--- |:----- |
| Café | 2   | R$ 10 |
| Pão  | 5   | R$ 5  |
```

Resulta:

| Item | Qtd | Preço |
|:---- |:--- |:----- |
| Café | 2   | R$ 10 |
| Pão  | 5   | R$ 5  |

## 6.3 Alinhamento de Colunas

O segredo do alinhamento está nos dois pontos (:) colocados na linha de separação (a segunda linha da tabela).

```markdown
| Alinhamento	        | Sintaxe no Separador	| Exemplo |
| Esquerda (Padrão)	    | :---	                | Esquerda |
| Centralizado	        | :---:	                | Centralizado |
| Direita	            | ---:	                | Direita |
```

Por exemplo:

```markdown
| Esquerda | Centralizado | Direita |
| :------- | :----------: | ------: |
| Texto    | Texto        | Texto   |
```

Resulta:

| Esquerda | Centralizado | Direita |
| :------- | :----------: | ------: |
| Texto    | Texto        | Texto   |


# 7. Citas e Destaques

Citação em bloco:

```markdown
> Este é um texto de citação.
> Pode ter múltiplas linhas.
```

Resultado:

> Este é um texto de citação.
> Pode ter múltiplas linhas.


# 8. Componentes Avançados utilizados no manual

## 8.1 Advanced Expand

```
<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">NUMERO</span> TITULO</span>
</summary>
<div class="content-body" markdown="1">

Aqui Vai o conteudo do expand

</div>
</details>
```

Que resulta em:

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">NUMERO</span> TITULO</span>
</summary>
<div class="content-body" markdown="1">

Aqui Vai o conteudo do expand

</div>
</details>

Onde:<br>
- NUMERO: Número do item<br>
- TITULO: Título do item<br>
- Conteudo: Conteudo do item

## 8.2 Tabelas

Recomenda-se este tipo de tabela para usar no Manual, pois esta sendo tratada pelo arquivo CSS.

```
<table class="banks-table">
  <thead>
    <tr>
      <th>Coluna 1</th>
      <th>Coluna 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </tbody>
</table>
```

Que resulta em:

<table class="banks-table">
  <thead>
    <tr>
      <th>Coluna 1</th>
      <th>Coluna 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </tbody>
</table>

Onde:

- banks-table: Nome da Classe CSS para estilização da tabela<br>
- thead: Cabeçalho da tabela<br>
- tbody: Corpo da tabela<br>
- tr: Linha da tabela<br>
- th: Célula do cabeçalho<br>
- td: Célula do corpo

## 8.3 Imagens com Legenda

```markdown
![](URL_DA_IMAGEM){.flow-image}
```

Onde:<br>
- URL_DA_IMAGEM: URL local ou remota da imagem


## 8.4 Bloco de Codigo

```markdown
    <div class="advpl-editor">
      <div class="header">
        <span class="title">ADVPL</span>
        <span class="filename">M410STTS</span>
      </div>
      <pre><code>  
    User function M410STTS()
      U_FSPEFAT("M410STTS")
    Return()      
    </div>
    </code></pre>
```
Que resulta em:

<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">M410STTS</span>
  </div>
  <pre><code>  
User function M410STTS()
  U_FSPEFAT("M410STTS")
Return()      
</div>
</code></pre>

- Para modificar o Titulo deve ser alterado ```<span class="title">TITULO VAI AQUI</span>```
- Para modificar o comentario do titulo deve ser alterado ```<span class="filename">COMENTARIO VAI AQUI</span>```
- Para aplicar o bloco de codigo, o codigo deve ir entre ```"<pre><code>" e "</code></pre>```

## 8.5 Bloco de Campos

```markdown
    <details class="field-expand" markdown="1">
    <summary markdown="1">
    <span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Nome_do_campo**</span>
    </summary>
    <div class="content-body" markdown="1">
    <table class="banks-table">
      <tbody>
        <tr>
          <th>Tipo</th>
          <td>C</td>
          <th>Ordem</th>
          <td>02</td>
          <th>Tamanho</th>
          <td>8</td>
          <th>Decimal</th>
          <td>0</td>
          <th>Formato</th>
          <td>@!</td>
        </tr>
        <tr>
          <th>Contexto</th>
          <td>Real</td>
          <th>Propriedade</th>
          <td>Alterar</td>
          <th>Obrigatório</th>
          <td>S</td>
          <th>Browse</th>
          <td>S</td>
        </tr>
        <tr>
          <th>Título</th>
          <td colspan="7">Funcao</td>
        </tr>
        <tr>
          <th>Descrição</th>
          <td colspan="7">Funcao</td>
        </tr>
      </tbody>
    </table>

    #### **Help**
    <div class="help-box" markdown="1">
    Informe a funcao de WorkFlow.
    </div>

    #### **Configurações adicionais**
    <table class="banks-table">
      <tbody>
        <tr>
          <th>F3</th>
          <td>-</td>
        </tr>
        <tr>
          <th>Modo Edição</th>
          <td>INCLUI</td>
        </tr>
        <tr>
          <th>Val. Usuário</th>
          <td>ExistChav("Z00")</td>
        </tr>
        <tr>
          <th>Lista Opções</th>
          <td>-</td>
        </tr>
        <tr>
          <th>Inicializador</th>
          <td>-</td>
        </tr>
        <tr>
          <th>Ini. Browse</th>
          <td>-</td>
        </tr>
      </tbody>
    </table>
    </div>
    </details>
```

Que resulta em:

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Nome_do_campo**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>02</td>
      <th>Tamanho</th>
      <td>8</td>
      <th>Decimal</th>
      <td>0</td>
      <th>Formato</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>Contexto</th>
      <td>Real</td>
      <th>Propriedade</th>
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Funcao</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Funcao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe a funcao de WorkFlow.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>INCLUI</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>ExistChav("Z00")</td>
    </tr>
    <tr>
      <th>Lista Opções</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Inicializador</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Ini. Browse</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>
</details>