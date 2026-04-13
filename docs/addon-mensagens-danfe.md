---
template: main.html
hide:  
  - toc
---

# Addon - Mensagens DANFE {.home-hero}

<!--############################################### 01 #######################################################-->

<div class="confluence-card" markdown="1">

<details class="custom-expand" open markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">01.</span> Visão Geral</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">1. Visão Geral</span>
Dentro do processo de transmissão da nota de entrada (Compas) ou de saída (Faturamento) devido a diversas características da operação, seja necessário regis-trar mensagens para o produto (informação adicional), cliente ou fiscal.

Como essas mensagens podem ser recorrentes dentro das operações da empresa, podem ocorrer diveras situações para estas mensagens que dependem mais do setor fiscal do que do faturamento, o addon permite criar uma padronização para utilização de forma autônoma dessas mensagens.

As regras de mensagens construidas no addon, permitem que dentro do processo do transmissão das notas (entrada/saída), complemente o arquivo XML que será enviado para a SEFAZ com as mensagens que entraram em conformidade dentro de alguma regra que está vinculada a uma TES.

Exemplos típicos que podem ser parametrizados

- Reducao de base de calculo prevista no item 15 do Anexo VI do RICMS/2017
- Isencao prevista no item 118 do Anexo V do RICMS/2017
- Suspensao prevista na Subsecao II da Secao II, do Capitulo I do Anexo VIII do RICMS/2017
- ATENCAO: CONFIRA A MERCADORIA NA PRESENCA DO MOTORISTA, NAO ACEITAMOS DEVOLUCOES/RECLAMACOES POSTERIORES
- ATO CONCESSORIO DRAWBACK 20220001081"

#### Este poacote de automação tem por objetivo disponibilizar configurações/regras que envolvem TES x Mensagens.

<strong>Principais vantagens do produto:</strong>

- Configurações de mensagens para operações de compra/devolução
- Configurações de mensagens para operações de venda/devolução

</div>
</details>

<!--############################################### 02 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">02.</span> Menu</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">2. Menu</span>

<table class="banks-table">
  <thead>
    <tr>
      <th>Menu</th>
      <th>Sub Menu</th>
      <th>Nome da Rotina</th>
      <th>Programa</th>
      <th>Módulo</th>
      <th>Tipo</th>
      <th>Tabelas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Atualizações</td>
      <td>* ESPECIFICOS</td>
      <td>Mensagens DANFE</td>
      <td>C010A01</td>
      <td>Faturamento</td>
      <td>03 (Função de Usuário)</td>
      <td>SZ0</td>
    </tr>         
  </tbody>
</table>

</div>
</details>

<!--############################################### 03 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">03.</span> Rotinas personalizadas específicas do Pacote</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">3. Rotinas personalizadas específicas do Pacote</span>

#### Funções personalizadas contidas no pacote:

<table class="banks-table">
  <thead>
    <tr>
      <th>Rotina</th>
      <th>Descrição</th>      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>C010A01</td>
      <td>Rotina para Cadastro das Regras de Mensagens DANFE</td>      
    </tr>
    <tr>
      <td>X010A01</td>
      <td>Rotina centralizadora de funções genéricas do pacote.</td>      
    </tr>
    <tr>
      <td>UPD010A</td>
      <td>Programa compatibilizador do Dicionário de Dados para aplicação do pacote</td>      
    </tr>
  </tbody>
</table>

</div>
</details>

<!--############################################### 04 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">04.</span> Pontos de Entradas Disponiveis para Desenvolvimento</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">4. Pontos de entrada Disponível no ADD-ON</span>

<table class="banks-table">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Descrição</th>
      <th>Programa Fonte</th>      
      <th>Sixtaxe</th>  
      <th>Exemplo</th>  
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>X010A01</strong></td>
      <td>Ponto de Entrada narotina NFESEFAZ antes damontagem e envio do XML da NFe ao Sefaz. Utilizado para efetuar a chamada das regras de validação das mensagens cadastradas do pacote. </td>
      <td>X010A01</td>      
      <td>aRetorno := U_X010A01("NFESEFAZ")</td>      
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">X010A01</span>
  </div>
  <pre><code>
If ExistBlock("X010A01")
  aRetorno := U_X010A01("NFESEFAZ")
Endif
</code></pre>
  </div>
      </td>      
    </tr>
  </tbody>
</table>
</div>
</details>

<!--############################################### 05 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">05.</span> Tabelas (SX2) </span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">5. Tabelas (SX2)</span>
<div class="content-body" markdown="1">

### <span style="display: none;">5. Tabelas (SX2)</span> 

<table class="banks-table">
  <thead>
    <tr>
      <th>Prefixo</th>
      <th>Descrição</th>
      <th>Ac. Filial</th>
      <th>Ac. Unidade</th>
      <th>Ac. Empresa</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>SZ0</strong></td>
      <td>CADASTRO DE MENSAGENS NFESEFAZ/DANFE</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
    </tr>
   
  </tbody>
</table>
</div>
</details>
</div>
</details>


<!--############################################### 06 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">06.</span> Campos (SX3)</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">6. Campos (SX3)</span>
<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_CODIGO**</span>
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
      <td>6</td>
      <th>Decimal</th>
      <td>0</td>
      <th>Formato</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>Contexto</th>
      <td>Real</td>
      <th>Propriedade</th>
      <td>Visualizar</td>
      <th>Obrigatório</th>
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Codigo</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Codigo da Mensagem</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Codigo sequencial identificador de uma regra de mensagem.
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
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td></td>
    </tr>
    <tr>
      <th>Lista Opções</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Inicializador</th>
      <td>GETSX8NUM(_010T01,_010T01COD)</td>
    </tr>
    <tr>
      <th>Ini. Browse</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>
</details>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_OPER**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>03</td>
      <th>Tamanho</th>
      <td>1</td>
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
      <td colspan="7">Operacao</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Operacao da Nota</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Defina a operação da nota a qual se aplicará a regra.
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
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Lista Opções</th>
      <td>S=Saida;E=Entrada</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_ORDEM**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>04</td>
      <th>Tamanho</th>
      <td>3</td>
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
      <td colspan="7">Ordem</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Sequencia das mensagens</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Defina a ordem sequencial para as mensagens.
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
      <td>ALTERA</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Lista Opções</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Inicializador</th>
      <td>SUBSTR(M->&_010T01COD,4,3)</td>
    </tr>
    <tr>
      <th>Ini. Browse</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>
</details>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_TIPO**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>05</td>
      <th>Tamanho</th>
      <td>1</td>
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
      <td>-</td>
      <th>Browse</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Tipo Mens.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Tipo de Mensagem</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Defina qual retorno se aplicará a regra de mensagem: informações adicionais do produto; mensagem fiscal; mensagem de cliente
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
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Lista Opções</th>
      <td>C=Cliente;F=Fiscal;P=Produto</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_INFCOMP**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>06</td>
      <th>Tamanho</th>
      <td>6</td>
      <th>Decimal</th>
      <td>0</td>
      <th>Formato</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Contexto</th>
      <td>Real</td>
      <th>Propriedade</th>
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>N</td>
      <th>Browse</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Inf.Complem.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Inf.Complementar</td>
    </tr>
  </tbody>
</table>

#### **Help**
<div class="help-box" markdown="1">
Informações complementares
</div>

#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>CCE</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>ExistCPO(“CCE”)</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_MSG**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>07</td>
      <th>Tamanho</th>
      <td>200</td>
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
      <td>S</d>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Mensagem</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Mensagem de retorno</td>
    </tr>
  </tbody>
</table>

#### **Help**

<div class="help-box" markdown="1">
Informe o texto ou a composição da mensagem que será retornada, utilizando sintaxe ADVPL.

#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>Empty(M->&_010T01FRM)</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>-</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_GRUPO**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>10</td>
      <th>Tamanho</th>
      <td>4</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Grupo</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Grupo de Produtos</td>
    </tr>
  </tbody>
</table>

#### **Help**
<div class="help-box" markdown="1">
Informe o código do Grupo que se aplicará a mensagem (opcional)
</div>

#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>SBM</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>Vazio().OR.ExistCpo("SBM")</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_CLIENT**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>11</td>
      <th>Tamanho</th>
      <td>9</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Cliente</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Codigo do Cliente</td>
    </tr>
  </tbody>
</table>

#### **Help**
<div class="help-box" markdown="1">
Informe o código do Cliente que se aplicará a mensagem (opcional)
</div>

#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>SA1</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>M->&_010T01OPE == "S"</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>Vazio().OR.ExistCpo("SA1")</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_FORNEC**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>12</td>
      <th>Tamanho</th>
      <td>9</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Fornecedor</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Codigo do Fornecedor/td>
    </tr>
  </tbody>
</table>

#### **Help**
<div class="help-box" markdown="1">
Informe o código do Fornecedor que se aplicará a mensagem (opcional)
</div>

#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>SA2</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>M->&_010T01OPE == "E"</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>Vazio().OR.ExistCpo("SA2")</td>
    </tr>
    <tr>
      <th>Lista Opções</th>
      <td>N=Nivel; U=Usuario; D=Documento</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_LOJA**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>14</td>
      <th>Tamanho</th>
      <td>2</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Estado</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Unidade da Federacao</td>
    </tr>
  </tbody>
</table>

#### **Help**
<div class="help-box" markdown="1">
Informe o Estado do Cliente/Fornecedor que se aplicará a mensagem (opcional)
</div>

#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>12</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>Vazio().OR.ExistCpo("SX5","12"+M->&_010T01UF)</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_UF**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>14</td>
      <th>Tamanho</th>
      <td>2</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Estado</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Unidade da Federacao</td>
    </tr>
  </tbody>
</table>

#### **Help**
<div class="help-box" markdown="1">
Unidade da Federacao
</div>

#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>12</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>Vazio().OR.ExistCpo("SX5","12"+M->&_010T01UF)</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_TES**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>15</td>
      <th>Tamanho</th>
      <td>3</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">TES</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Tipo de Entrada / Saida</td>
    </tr>
  </tbody>
</table>

#### **Help**
<div class="help-box" markdown="1">
Informe o TES do item que se aplicará a mensagem (opcional)
</div>

#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>SF4</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>Vazio().OR.ExistCpo("SF4")</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_EXPRES**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>16</td>
      <th>Tamanho</th>
      <td>3</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Expressao</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Expressao condicional</td>
    </tr>
  </tbody>
</table>

#### **Help**
<div class="help-box" markdown="1">
Informe uma expressão condicional para que a mensagem seja retornada (opcional), utilizando sintaxe ADVPL. Deve retornar .T./.F.
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
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>-</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z0_STATUS**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>17</td>
      <th>Tamanho</th>
      <td>1</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Status da Regra</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Status da Regra</td>
    </tr>
  </tbody>
</table>

#### **Help**
<div class="help-box" markdown="1">
Status da Regra
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
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Lista Opções</th>
      <td>1=Ativo;2=Inativo</td>
    </tr>
    <tr>
      <th>Inicializador</th>
      <td>"1"</td>
    </tr>
    <tr>
      <th>Ini. Browse</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
</div>
</details>

</div>
</details>

<!--############################################### 07 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">07.</span> Parâmetros (SX6)</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">7. Parâmetros (SX6)</span>

<table class="banks-table">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Tipo</th>   
      <th>Descrição</th>      
      <th>Conteúdo</th>         
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MV_X010T01</td>
      <td>Caracter</td>
      <td>Tabela macro-substituição utilizada. Informar qual tabela foi definida na aplicação do ADD-ON.</td>   
      <td>SZ0</td>   
    </tr>    
    <tr>
      <td>MV_X010000</td>
      <td>Lógico</td>
      <td>Ativa utilizacao do Template Mensagens NFESEFAZ.</td>   
      <td>.T.</td>   
    </tr>    
    <tr>
      <td>MV_X010001</td>
      <td>Caracter</td>
      <td>Caractere padrao para tratar a quebra de linha a  ser tratado nos fontes DANFEII.PRW / DANFEIII.PRW.</td>   
      <td>#</td>   
    </tr>      
  </tbody>
</table>


</div>
</details>

<!--############################################### 08 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">08.</span> Gatilhos (SX7)</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">8. Gatilhos (SX7)</span>

<table class="banks-table">
  <thead>
    <tr>
      <th>Campo</th>
      <th>Sequencia</th>
      <th>Contra Dom.</th>
      <th>Tipo</th>
      <th>Regra</th>
      <th>Posiciona</th>      
      <th>Condicao</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Z0_INFCOMP</strong></td>
      <td>001</td>
      <td>Z0_MSG</td>
      <td>1 = Primário</td>
      <td>'"'+ALLTRIM(CCE->CCE_DESCR)+'"'</td>
      <td>S</td>      
      <td>xFilial("CCE")+M->Z0_INFCOMP</td>
    </tr>
    <tr>
      <td><strong>Z0_TIPO</strong></td>
      <td>001</td>
      <td>Z0_INFCOMP</td>
      <td>1 = Primário</td>
      <td>""</td>
      <td>N</td>      
      <td>M->Z0_TIPO <> "F"</td>
    </tr>   
  </tbody>
</table>

</div>
</details>

<!--############################################### 09 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">09.</span> Índices (SIX)</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">9. Índices (SIX)</span>

<table class="banks-table">
  <thead>
    <tr>
      <th>Indice</th>
      <th>Ordem</th>
      <th>Chave</th>
      <th>Descrição</th>
      <th>NickName</th>      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>SZ0</strong></td>
      <td>1</td>
      <td>Z0_FILIAL+Z0_OPER+Z0_TIPO+Z0_ORDEM</td>
      <td>-</td>
      <td>-</td>      
    </tr>    
    <tr>
      <td><strong>SZ0</strong></td>
      <td>2</td>
      <td>Z0_FILIAL+Z0_CODIGO</td>
      <td>-</td>
      <td>-</td>      
    </tr>  
  </tbody>
</table>

</div>
</details>

<!--############################################### 10 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">10.</span> Consulta Padrão (SXB)</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">10. Consulta Padrão (SXB)</span>

!!! warning "Não se Aplica" 

</div>
</details>

<!--############################################### 11 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">11.</span> Manual de operação</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">11. Manual de operação</span>

#### 1. Cadastro
Regras Mensagens DANFE

-	Módulo: Faturamento<br>
-	Atualizações ->Cadastros ->* Mensagens DANFE

Efetue o cadastro das mensagens e suas regras e condições para impressão no DANFE / XML.

![](./assets/mensagensdanfe/01.png){.flow-image}

Seu correto preenchimento é de suma importância, abaixo os campos que devem ser observados

<strong>Código:</strong> Numeração sequencial automática.

<strong>Operação da Nota:</strong> informe para qual operação de nota a mensagem se aplicará:

-	E=Entrada<br>
-	S=Saída

<strong>Tipo de Mensagem:</strong> informe o tipo de mensagem que está sendo definida:

-	1-Descrição do Produto: mensagem complementar que saíra na descrição do produto/item no DANFE e na tag <infAdProd>do XML.<br>
-	2-Mensagem Fiscal: mensagem Fiscal que sairá nos dados adicionais no DANFE (informações complementares) e na tag <infAdFisco>do XML.
-	3-Mensagem Cliente: mensagem de Cliente que sairá nos dados adicionais no DANFE (informações complementares) e na tag <infCpl>do XML.

<strong>Ordem:</strong> ordem/sequencia para impressão da mensagem, campo disponibilizado na alteração do cadastro.

<strong>Fórmula:</strong> informe o código da fórmula que definirá a composição da mensagem, caso já tenha cadastrado, obrigatório SE não informar o campo Mensagem abaixo.

<strong>Mensagem:</strong> informe a composição da mensagem em sintaxe ADVPL, obrigatório caso não informe o campo Fórmula acima.

<strong>Produto:</strong> opcional, informe um código de produto caso a mensagem deva ser considerada apenas para tal produto na nota.

<strong>Grupo de Produto:</strong> opcional, informe um código de grupo caso a mensagem deva ser considerada apenas para produtos de tal grupo na nota.

<strong>Cliente/Fornecedor/Loja:</strong> opcional, informe um código de Cliente ou Fornecedor, conforme o tipo da operação (Entrada/Saída), caso a mensagem deva ser considerada apenas para estes códigos na nota.

<strong>Estado:</strong> opcional, informe um código de Estado/UF caso a mensagem deva ser considerada apenas para cliente/fornecedor de tal código.

<strong>TES:</strong> opcional, informe um código de TES caso a mensagem deva ser considerada apenas para tal código nos itens da nota.

<strong>Expressão:</strong> opcional, informe uma expressão condicional para impressão da mensagem, em sintaxe ADVPL, deve retornar .T. / .F.

<strong>Status:</strong> informe se o cadastro da regra de mensagem está Ativo ou Inativo, onde somente as mensagens ativas serão impressas.

<strong>Finalidade:</strong> informe uma breve descrição da finalidade da mensagem.

#### 2. PROCESSO

- Efetuar o faturamento do pedido e geração da nota fiscal.<br>
- Efetuar a transmissão da nota eletrônica SEFAZ.
- Efetuar a impressão do DANFE.

</div>
</details>

<hr>

<div style="text-align: center; margin-top: 20px;">
  <a href="/" class="md-button" style="text-decoration: none;">← Voltar para a Página Inicial</a>
</div>
<hr>