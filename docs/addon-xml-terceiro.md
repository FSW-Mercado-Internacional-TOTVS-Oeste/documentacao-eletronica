---
template: main.html
hide:  
  - toc
---

# XML de Terceiros {.home-hero}

<div class="grid cards" markdown>

-   __Conteúdo em Desenvolvimento__
    
    Esta seção do manual técnico está passando por revisões de conformidade e formatação. Os modelos de dados e procedimentos operacionais estão sendo validados para garantir a precisão das instruções técnicas. O conteúdo completo estará disponível em breve.

</div>

<!--############################################### 01 #######################################################-->

<div class="confluence-card" markdown="1">

<details class="custom-expand" open markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">01.</span> Visão Geral</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">1. Visão Geral</span>

#### Tem por objetivo, efetuar o gerenciamento em torno dos arquivos XML emitidos por terceiros pertinentes à documentos fiscais do tipo: Notas Fiscais Eletrônicas - NFe e Conhecimento de Transporte Eletrônico - CTe

<strong>Principais vantagens do produto:</strong>

- Cadastro de Contas de E-mails;
- Cadastro de Usuários X Permissões;
- Cadastro de Tags;
- Movimentação de XML Terceiros;
- Relatório de XML Terceiros;

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
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Atualizações</td>
      <td>ADD-ON de XML \ Cadastros</td>
      <td>Contas de E-mail</td>
      <td>C004A01</td>
      <td>Compras</td>
      <td>03</td>
    </tr>   
      <tr>
      <td>Atualizações</td>
      <td>ADD-ON de XML \ Cadastros</td>
      <td>Usuários X Permissões</td>
      <td>C004A02</td>
      <td>Compras</td>
      <td>03</td>
    </tr>     
      <tr>
      <td>Atualizações</td>
      <td>ADD-ON de XML \ Cadastros</td>
      <td>Tags</td>
      <td>C004A03</td>
      <td>Compras</td>
      <td>03</td>
    </tr>   
      <tr>
      <td>Atualizações</td>
      <td>ADD-ON de XML \ Movimentos</td>
      <td>Xml Recebidos</td>
      <td>M004A01</td>
      <td>Compras</td>
      <td>03</td>
    </tr>   
      <tr>
      <td>Atualizações</td>
      <td>ADD-ON de XML \ Relatórios</td>
      <td>Listagem Xml Recebidos</td>
      <td>R004A01</td>
      <td>CONFIGURADOR</td>
      <td>03</td>
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
      <th>Função</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>C004A01</strong></td>
      <td>Rotina para cadastro de contas de e-mails.</td>
    </tr>
    <tr>
      <td><strong>C004A02</strong></td>
      <td>Rotina para cadastro de usuários X permissões.</td>
    </tr>
    <tr>
      <td><strong>C004A03</strong></td>
      <td>Rotina para cadastro de tags.</td>
    </tr>
    <tr>
      <td><strong>M004A01</strong></td>
      <td>Rotina de XML Terceiros recebidos.</td>
    </tr>
    <tr>
      <td><strong>R004A01</strong></td>
      <td>Relatório de Listagem XML Recebidos</td>
    </tr>
    <tr>
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

### <span style="display: none;">4. Pontos de Entradas Disponiveis para Desenvolvimento</span>  

<table class="banks-table">
  <thead>
    <tr>
      <th>P.E</th>
      <th>Descrição</th>
      <th>Parâmetros de Entrada</th>
      <th>Retorno</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>PE004A01</strong></td>
      <td>Ponto de entrada na  na tela de Processamento de XML Recebidos – na sessão de geração do documento fiscal na análise dos itens/produtos do documento fiscal – validação no click AVANÇAR. Esta chamada é realizada após todas validações do ADD-ON referente aos itens/produtos.</td>
      <td><strong>1)</strong>Vetor aHeader dos itens do documento<br>
      <strong>2)</strong>Vetor aCols dos itens do documento</td>
          <td>Booleano (.T./.F.) valida avanço do processo.</td>
    </tr>
    <tr>
      <td><strong>PE004A02</strong></td>
      <td>Ponto de entrada na  na tela de seleção de Itens do Pedido de Compra x item do documento fiscal, na validação do botão CONFIRMAR.</td>
      <td><strong>1)</strong>Vetor aHeader dos pedidos<br>
      <strong>2)</strong>Vetor aCols dos pedidos</td>
          <td>Booleano (.T./.F.) valida avanço do processo.</td>
    </tr>
    <tr>
      <td><strong>PE004A03</strong></td>
      <td>Ponto de entrada para validação no botão Finalizar antes de iniciar a gravação do documento fiscal.</td>
      <td>N/A</td>
          <td>Booleano (.T./.F.) valida avanço do processo.</td>
    </tr>
    <tr>
      <td><strong>PE004A04</strong></td>
      <td>Executa ponto de entrada para complementar as regras de carga\vinculo do produto interno com o produto da NFe</td>
      <td>N/A</td>
          <td>N/A</td>
    </tr>
    <tr>
    <td><strong>PE004A05</strong></td>
      <td>Substituiu regras padrões de replicação da TE</td>
      <td>N/A</td>
          <td>N/A</td>
    </tr>    
    <tr>
      <td><strong>PE004A06</strong></td>
      <td>Ponto de entrada antes da gravação do registro na tabela de<br>arquivos XML (ZA1), permindo manipualção na filial a ser gravada.</td>
      <td><strong>1)</strong>Filial atual a ser gravada<br>
      <strong>2)</strong>Tipo do Documento (1=NFe,2=Cte)<br>
      <strong>3)</strong>Objeto oXML</td>
          <td>Filial a ser gravada.</td>
    </tr>
    <tr>
      <td><strong>PE004A07</strong></td>
      <td>Ponto de entrada antes da gravação do registro na tabela de<br>arquivos XML (ZA1), permindo efetuar validação e se necessário <br>não gravar o registro.</td>
      <td><strong>1)</strong>Filial atual a ser gravada<br>
      <strong>2)</strong>Tipo do Documento (1=NFe,2=Cte)<br>
      <strong>3)</strong>Objeto oXML</td>
          <td>Lógico.</td>
    </tr>
    <tr>
      <td><strong>PE004A08</strong></td>
      <td>Ponto de entrada após a gravação do registro na tabela de<br>arquivos XML (ZA1)</td>
      <td><strong>1)</strong>Filial atual a ser gravada<br>
      <strong>2)</strong>Tipo do Documento (1=NFe,2=Cte)<br>
      <strong>3)</strong>Objeto oXML</td>
          <td>Nenhum.</td>
    </tr>
     <tr>
      <td><strong>PE004A09</strong></td>
      <td>Ponto de entrada antes da exclusão do registro na tabela de arquivos XML (ZA1)</td>
      <td>Nenhum.</td>
          <td>Lógico.</td>
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
      <td><strong>Z04</strong></td>
      <td>CONTAS DE E-MAILS</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
    </tr>
    <tr>
      <td><strong>Z05</strong></td>
      <td>USUÁRIOS X PERMISSÕES</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
    </tr>
    <tr>
      <td><strong>Z06</strong></td>
      <td>TAGS</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
    </tr>
    <tr>
      <td><strong>ZA1</strong></td>
      <td>XML RECEBIDOS</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
    </tr>
    
  </tbody>
</table>

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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_FILIAL**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>01</td>
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
      <td>-</td>
      <th>Browse</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Filial</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Filial do Sistema</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_CODIGO**</span>
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
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Código</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Código de Identificação</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Código de identificação da conta de e-mail.
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
      <td>GETSX8NUM("Z04", "Z04_CODIGO")</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_DESC**</span>
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
      <td>30</td>
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
       <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Descrição</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Descrição do E-mail</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Descrição\identificação a respeito da conta de e-mail..
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_USER**</span>
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
      <td>15</td>
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
      <td>-</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Usuário</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Login do E-mail</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Login do usuário da conta de e-mail.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_PASS**</span>
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
      <td>15</td>
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
      <td>-</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">-</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_SMTP**</span>
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
      <td>50</td>
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
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Smtp</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Servidor Smtp</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Endereço Servidor Smtp
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_PSMTP**</span>
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
      <td>4</td>
      <th>Decimal</th>
      <td>0</td>
      <th>Formato</th>
      <td>@ 9999</td>
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
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Porta</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Porta Smtp</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Porta de conexão smtp.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_RECBTO**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>08</td>
      <th>Tamanho</th>
      <td>01</td>
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
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Recebimento</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Protocolo de Recebimento</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Define o protocolo utilizado para o recebimento de e-mails.
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
      <td>U_C004AENV()</td>
    </tr>
    <tr>
      <th>Lista Opções</th>
      <td>I= Imap; P= Pop</td>
    </tr>
    <tr>
      <th>Inicializador</th>
      <td>"P"</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_IMAP**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>09</td>
      <th>Tamanho</th>
      <td>50</td>
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
      <td>S</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Imap</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Servidor Imap</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Endereço do servidor Imap.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_PIMAP**</span>
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
      <td>04</td>
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
      <td>S</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Porta</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Porta Imap</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Porta de conexão Imap.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_POP**</span>
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
      <td>50</td>
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
      <td>S</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Pop</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Servidor Pop</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Endereço do servidor Pop.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_PPOP**</span>
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
      <td>4</td>
      <th>Decimal</th>
      <td>0</td>
      <th>Formato</th>
      <td>@ 9999</td>
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
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Porta</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Porta Pop</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Porta de conexão Pop.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_TIMOUT**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>N</td>
      <th>Ordem</th>
      <td>13</td>
      <th>Tamanho</th>
      <td>2</td>
      <th>Decimal</th>
      <td>0</td>
      <th>Formato</th>
      <td>@E 99</td>
    </tr>
    <tr>
      <th>Contexto</th>
      <td>Real</td>
      <th>Propriedade</th>
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>S</td>
      <th>Browse</th>
      <td>-</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Timeout</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Timeout da Conta</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe o intervalo de tempo da conta de e-mail.
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
      <td>60</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_SSL**</span>
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
      <td>-</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Utiliza SSL</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Utiliza SSL</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Determina se o servidor utiliza SSL.
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
      <td>S=Sim;N=Não;</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_TLS**</span>
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
      <td>-</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Utiliza TLS</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Utiliza TLS</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Determina se o servidor utiliza TLS.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_TPIMP**</span>
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
      <td>-</td>
       <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Importação</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Utiliza Tipo de Importação</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Define a regra de importação dos e-mails que será considerada para integração<br> 
da conta de e-mail.<br> 
<strong>1-</strong> Somente serão importados os arquivos XML onde o CNPJ do destinatário dos mesmos for igual à filial logada.<br>
<strong>2-</strong>Serão importados todos os arquivos XML onde o CNPJ do destinatário seja<  igual ao CNPJ de qualquer empresa\filial existente no ambiente.
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
      <td>1=Filial Logada; 2=Todas as Filiais;</td>
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

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_EPROC**</span>
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
      <td>S</td>
      <th>Browse</th>
      <td>-</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Processados</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">E-mails Processados</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Determina à ação que deverá ser realizada com os e-mails processados que possuem arquivo XML de documentos fiscais que foram importados.
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
      <td>1=Excluir;2=Manter;</td>
    </tr>
    <tr>
      <th>Inicializador</th>
      <td>"2"</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_EIGNOR**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>18</td>
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
      <td>-</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Ignorados</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">E-mails Ignorados</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Determina à ação que deverá ser realizada com os e-mails recebidos que não possuem arquivo XML de documentos fiscais e com isto foram ignorados.
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
      <td>1=Excluir;2=Manter;</td>
    </tr>
    <tr>
      <th>Inicializador</th>
      <td>"2"</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z04_MSBLQL**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>19</td>
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
      <th>Usado</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Bloqueado?</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Registro bloqueado</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Determina se a conta de e-mail esta bloqueada.
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
      <td>1=Sim;2=Não;</td>
    </tr>
    <tr>
      <th>Inicializador</th>
      <td>"2"</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z05_FILIAL**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>01</td>
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
      <td>-</td>
      <th>Browse</th>
      <td>-</td>
      <th>Usado</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Filial</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Filial do Sistema</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z05_ID**</span>
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
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>S</td>
      <th>Browse</th>
      <td>-</td>
       <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">ID Usuário</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">ID Usuário no Ambiente</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Código de identificação do usuário no ambiente.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>Usuários</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>U_X004A02("X004A0201")</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z05_LOGIN**</span>
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
      <td>15</td>
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
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Login</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Login do Usuário</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Login do usuário no ambiente.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z05_NOME**</span>
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
      <td>30</td>
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
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Nome</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Nome do Usuário</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Nome completo do usuário.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z05_EMAIL**</span>
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
      <td>30</td>
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
      <td>-</td>
      <th>Browse</th>
      <td>-</td>
      <th>Usado</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">E-mail</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">E-mail do Usuário.</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
E-mail do usuário.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z05_FUNCAO**</span>
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
      <td>20</td>
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
      <td>-</td>
      <th>Browse</th>
      <td>-</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Função</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Função do Usuário.</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Função do usuário junto a empresa.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z05_DEPTO**</span>
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
      <td>20</td>
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
      <td>-</td>
      <th>Browse</th>
      <td>-</td>
      <th>Usado</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Departamento</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Departamento do Usuário</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Departamento no qual o usuário esta inserido\vinculado.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **Z05_REG01**</span>
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
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Aprovador</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Codigo do Aprovador</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Codigo do Aprovador que esta sendo substituído temporariamente.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>USR (Usuários)</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>UsrExist(M->ZX2_APROV) .AND. (M->ZX2_APROV # M->ZX2_SUBST)</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX2_NOME**</span>
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
      <td>40</td>
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
      <td colspan="7">Nome</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Nome do Aprovador</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX2_DTSAID**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>DATA</td>
      <th>Ordem</th>
      <td>05</td>
      <th>Tamanho</th>
      <td>8</td>
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
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Dt. Saida</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Data Saida</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
      <td>M->ZX2_DTSAID > DDATABASE</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX2_DTRET**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>DATA</td>
      <th>Ordem</th>
      <td>06</td>
      <th>Tamanho</th>
      <td>8</td>
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
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Dt. Retorno</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Data de Retorno</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
      <td>M->ZX2_DTRET >= M->ZX2_DTSAID</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX2_SUBST**</span>
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
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Substituto</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Codigo Substituto</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>USR (Usuários)</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>UsrExist(M->ZX2_SUBST) .AND. (M->ZX2_SUBST # M->ZX2_APROV)</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX2_SUBNOM**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>08</td>
      <th>Tamanho</th>
      <td>40</td>
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
      <td colspan="7">Nome</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Nome Substituto</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX2_USERGI**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>-</td>
      <th>Ordem</th>
      <td>09</td>
      <th>Tamanho</th>
      <td>-</td>
      <th>Decimal</th>
      <td>-</td>
      <th>Formato</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Contexto</th>
      <td>-</td>
      <th>Propriedade</th>
      <td>-</td>
      <th>Obrigatório</th>
      <td>-</td>
      <th>Browse</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">LOG de Inclusão</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX2_USERGA**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>-</td>
      <th>Ordem</th>
      <td>10</td>
      <th>Tamanho</th>
      <td>-</td>
      <th>Decimal</th>
      <td>-</td>
      <th>Formato</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Contexto</th>
      <td>-</td>
      <th>Propriedade</th>
      <td>-</td>
      <th>Obrigatório</th>
      <td>-</td>
      <th>Browse</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">LOG de Alteração</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_COD**</span>
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
      <td>10</td>
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
      <td colspan="7">Codigo</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Codigo</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Codigo do movimento de alçadas
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_SEQ**</span>
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
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Sequencia</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Sequencia</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Sequencia da movimentoção/transferência
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_DESC**</span>
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
      <td>30</td>
      <th>Decimal</th>
      <td>0</td>
      <th>Formato</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>Contexto</th>
      <td>Virtual</td>
      <th>Propriedade</th>
      <td>Visualizar</td>
      <th>Obrigatório</th>
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Desc. Proc.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Descricao Processo</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Descrição dos processos referentes aos movimentos de alçadas
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
      <td>RetField("ZX1",1,xFilial("ZX1")+ZXA->ZXA_PROCES,"ZX1->ZX1_DESCRI")</td>
    </tr>
  </tbody>
</table>
</div>
</details>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_DOC**</span>
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
      <td>10</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Num. Doc.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Numero do Documento</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Numero do documento que gerou o controle de alcadas.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_DESCRI**</span>
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
      <td>30</td>
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
      <td colspan="7">Desc. Status</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Descricao Status</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Descrição dos status de movimentação de transferência
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_IDUSER**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>08</td>
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
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Aprovador</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Aprovador</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Usuario aprovador dos movimentos de transferencia
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_NUSER**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>09</td>
      <th>Tamanho</th>
      <td>30</td>
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
      <td colspan="7">Nome Aprov.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Nome Aprovador</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Nome do Usuario Aprovador dos movimentos de transferência
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_NIVEL**</span>
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
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">NivelAprov.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">NivelAprovacao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Help	Determina o nivel de aprovaçao, o sistema usara nivel de aprovação quando houver no minimo uma regra com dois níveis.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_DATAE**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>DATA</td>
      <th>Ordem</th>
      <td>11</td>
      <th>Tamanho</th>
      <td>8</td>
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
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Data Emissao</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Data Emissao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Data de Emissão dos movimentos de alçadas
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_DATAM**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>DATA</td>
      <th>Ordem</th>
      <td>12</td>
      <th>Tamanho</th>
      <td>8</td>
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
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Data Movim.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Data Movimentacao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Data do movimento de transferência
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_HORAM**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>13</td>
      <th>Tamanho</th>
      <td>5</td>
      <th>Decimal</th>
      <td>0</td>
      <th>Formato</th>
      <td>99:99</td>
    </tr>
    <tr>
      <th>Contexto</th>
      <td>Real</td>
      <th>Propriedade</th>
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Hora Movim.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Hora Movimentacao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Horário de Movimentação dos movimentos de transferência
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_OBS**</span>
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
      <td>100</td>
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
      <td colspan="7">Observacao</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Observacao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Help	Campo destinado a observações referentes aos movimentos de transferências
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_IDOLD**</span>
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
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Id Anterior</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Id Anterior (Transf.)</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Usuário Aprovador anterior aos movimentos de transferências
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_PROCES**</span>
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
      <td>N</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Cod. Regra</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Codigo Regra Alcada</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Codigo da Regra dos movimentos alçadas/transferencias
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_SOLICT**</span>
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
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Solicitante</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Cod. Usuario Solicitante</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Codigo do Usuario solicitante referentes aos movimentos de alçadas
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_CODAUS**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>18</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Cod.Aus.Temp</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Cod. AusenciaTemporaria</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_TPLIB**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>19</td>
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
      <td>Visualizar</td>
      <th>Obrigatório</th>
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Tp.Liberacao</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Tipo de Liberacao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
-
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_LINKWF**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>20</td>
      <th>Tamanho</th>
      <td>50</td>
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
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Link Html WF</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Arquivo HTML Link do WF</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe o nome do arquivo html gerado pelo processo de worfklow quesera utilizado no Link WF
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZXA_ORIGAP**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>21</td>
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
      <td>Visualizar</td>
      <th>Obrigatório</th>
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Origem Aprov</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Origem da Aprovacao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Indica a origem da Aprovação:<br>
<strong>1</strong> - Manual pelo Sistema/ERP<br>
<strong>2</strong> - Link do Workflow

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
      <td>1=Sistema; 2=Workflow</td>
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
      <td><strong>MV_X001000</strong></td>
      <td>Lógico</td>
      <td>Habilita ADD-ON de Alcadas com Link de aprovacao</td>
      <td>.T.</td>
    </tr>
    <tr>
      <td><strong>MV_X001001</strong></td>
      <td>Lógico</td>
      <td>Descrição	Ativa controle de alcadas para Pedido de Venda</td>
      <td>.F.</td>
    </tr>   
    <tr>
      <td><strong>MV_X001002</strong></td>
      <td>Lógico</td>
      <td>Descrição	Ativa controle de alcadas para Solicitação de Compras</td>
      <td>.F.</td>
    </tr>   
    <tr>
      <td><strong>MV_X001003</strong></td>
      <td>Lógico</td>
      <td>Descrição	Ativa controle de alcadas para Pedido de Compras</td>
      <td>.F.</td>
    </tr>   
    <tr>
      <td><strong>MV_X001004</strong></td>
      <td>Lógico</td>
      <td>Descrição	Valida saldo do superior antes de transferir</td>
      <td>.F.</td>
    </tr>   
    <tr>
      <td><strong>MV_X001005</strong></td>
      <td>Lógico</td>
      <td>Descrição	Controla/Analisa movimentos consumo por Verba em modo Compartilhado (Filiais)</td>
      <td>.T. (Verdadeiro para controlar em modo Compartilhado)</td>
    </tr>   
    <tr>
      <td><strong>MV_X001006</strong></td>
      <td>Lógico</td>
      <td>Gera controle de Alçadas em Pedidos de Compras originados pelo módulo Gestão de Contratos</td>
      <td>.T.</td>
    </tr>   
    <tr>
      <td><strong>MV_X001007</strong></td>
      <td>Lógico</td>
      <td>Ativa controle de alcadas para Contas a Pagar</td>
      <td>.T.</td>
    </tr>   
    <tr>
      <td><strong>MV_X001008</strong></td>
      <td>Lógico</td>
      <td>Descrição	Tipo de Alcadas de Contas a Pagar:<br><strong>1</strong> - Titulo Avulso;<br><strong>2</strong> - Bordero;<br><strong>3</strong> - Ambos</td>
      <td>3</td>
    </tr>   
    <tr>
      <td><strong>MV_X001009</strong></td>
      <td>Lógico</td>
      <td>Descrição	Efetua controle de alçadas por saldo de aprovador.</td>
      <td>.F.</td>
    </tr>   
    <tr>
      <td><strong>MV_X001010</strong></td>
      <td>Caracter</td>
      <td>Cores para o Workflow. Primeira posição cor de fundo da tabela, Segunda posição cor da Fonte em Hexadecimal,  Exemplo: #0C72B0;#FFFFFF</td>
      <td>#0C72B0;#FFFFFF</td>
    </tr>   
    <tr>
      <td><strong>MV_X001011</strong></td>
      <td>Númerico</td>
      <td>Ativa a liberacao de Tit. a Pagar automática se o parâmetro <strong>MV_CTLIPAG</strong> estiver habilidato.<br>
        <strong>1</strong> = Verifica usuario no parametro MV_X001012.<br>
        <strong>2</strong> = Libera para todos os usuarios. <br>
        <strong>3</strong> = Nao utiliza a liberação automática.<br>
        Observação: somente será feita a liberação do C.P., se todos os itens da nota fiscal de entrada possuam pedido de compras com aprovação de alçadas e de acordo com os parâmetros <strong>MV_CTLIPAG</strong>, <strong>MV_X001011</strong>, <strong>MV_X001012</strong>.</td>
      <td>3</td>
    </tr>   
    <tr>
      <td><strong>MV_X001012</strong></td>
      <td>Caracter</td>
      <td>De acordo com parametro MV_X001011 (1), verifica para quais aprovadores será realizada a liberação automática do Contas a Pagar.</td>
      <td>-</td>
    </tr>   
    <tr>
      <td><strong>MV_X001013</strong></td>
      <td>Caracter</td>
      <td>Na utilização de Regras por Entidade, informe qualentidade para SC/PC. <br><strong>G</strong> = Grupo <br><strong>C</strong> = Centro de Custo<br>
      Exemplo: C/C (Centro de Custo para ambos)</td>
      <td>G/G</td>
    </tr>   
    <tr>
      <td><strong>MV_WFBRWSR</strong></td>
      <td>Caracter</td>
      <td>URL da raiz Browser para WF link</td>
      <td>Ex.: http://200.195.136.59:8089/0101 </td>
    </tr>   
    <tr>
      <td><strong>MV_X_URLWS</strong></td>
      <td>Caracter</td>
      <td>URL da raiz dos webservices</td>
      <td>Ex.: http://192.168.1.121:8080/ws/  </td>
    </tr>   
  </tbody>
</table>

!!! warning "Importante:"
    Se o parâmetro MV_X_URLWS for configurado para utilização via DNS (Ex.: www.dominio.com.br) não se deve acessar o endereço via IP. Caso isso ocorra, o WebService não poderá ser acessado. Isto acontece devido à SameOriginPolicy (‘Politica de mesma origem’), implementada por segurança na maioria dos navegadores, a qual visa garantir maior segurança ao servidor, e impedir acessos não autorizados.

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
      <td><strong>ZX1_TPBUSC</strong></td>
      <td>001</td>
      <td>ZX1_ALIAS</td>
      <td>1 = Primário</td>
      <td>-</td>
      <td>N</td>      
      <td>M->ZX1_TPBUSC='U'</td>
    </tr>
    <tr>
      <td><strong>ZX1_TPBUSC</strong></td>
      <td>002</td>
      <td>ZX1_INDICE</td>
      <td>1 = Primário</td>
      <td>-</td>
      <td>N</td>      
      <td>M->ZX1_TPBUSC='U'</td>
    </tr>   
    <tr>
      <td><strong>ZX1_TPBUSC</strong></td>
      <td>003</td>
      <td>ZX1_CAMPO</td>
      <td>1 = Primário</td>
      <td>-</td>
      <td>N</td>      
      <td>M->ZX1_TPBUSC='U'</td>
    </tr>   
    <tr>
      <td><strong>ZX1_TPBUSC</strong></td>
      <td>004</td>
      <td>ZX1_IDUSER</td>
      <td>1 = Primário</td>
      <td>-</td>
      <td>N</td>      
      <td>M->ZX1_TPBUSC="E"</td>
    </tr>   
    <tr>
      <td><strong>ZX1_TPBUSC</strong></td>
      <td>001</td>
      <td>ZX1_NMUSER</td>
      <td>1 = Primário</td>
      <td>-</td>
      <td>N</td>      
      <td>M->ZX1_TPBUSC="E"</td>
    </tr>   
    <tr>
      <td><strong>ZX1_TPLIB</strong></td>
      <td>001</td>
      <td>ZX1_NIVEL</td>
      <td>1 = Primário</td>
      <td>01</td>
      <td>N</td>      
      <td>M->ZX1_TPLIB='D'</td>
    </tr>   
    <tr>
      <td><strong>ZX1_IDUSER</strong></td>
      <td>001</td>
      <td>ZX1_NMUSER</td>
      <td>1 = Primário</td>
      <td>U_M999B01("USERINFO", M->ZX1_IDUSER)[1][4]</td>
      <td>N</td>      
      <td>-</td>
    </tr>   
    <tr>
      <td><strong>ZX2_APROV</strong></td>
      <td>001</td>
      <td>ZX2_NOME</td>
      <td>1 = Primário</td>
      <td>U_M999B01("USERINFO", M->ZX2_APROV)[1][4]</td>
      <td>N</td>      
      <td>-</td>
    </tr>   
    <tr>
      <td><strong>ZX2_SUBST</strong></td>
      <td>001</td>
      <td>ZX2_SUBNOM</td>
      <td>1 = Primário</td>
      <td>U_M999B01("USERINFO", M->ZX2_SUBST)[1][4]</td>
      <td>N</td>      
      <td>-</td>
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
      <td><strong>ZX0</strong></td>
      <td>1</td>
      <td>ZX0_FILIAL+ZX0_PROCES</td>
      <td>Funcao</td>
      <td></td>      
    </tr>    
    <tr>
      <td><strong>ZX1</strong></td>
      <td>1</td>
      <td>ZX1_FILIAL+ZX1_PROCES+ZX1_SEQ</td>
      <td>Processo + Sequencia</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZX1</strong></td>
      <td>2</td>
      <td>Chave	ZX1_FILIAL+ZX1_PROCES+ZX1_NIVEL</td>
      <td>Processo + Nivel</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZX1</strong></td>
      <td>3</td>
      <td>ZX1_FILIAL+ZX1_PROCES+ZX1_STATUS</td>
      <td>Processo + Regra Ativa?</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZX1</strong></td>
      <td>4</td>
      <td>Chave	ZX1_FILIAL+ZX1_IDUSER</td>
      <td>Aprovador</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZX2</strong></td>
      <td>1</td>
      <td>ZX2_FILIAL+ZX2_COD</td>
      <td>Codigo</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZX2</strong></td>
      <td>2</td>
      <td>ZX2_FILIAL+ZX2_APROV</td>
      <td>Aprovador</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZX2</strong></td>
      <td>3</td>
      <td>ZX2_FILIAL+ZX2_SUBST</td>
      <td>Substituto</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZXA</strong></td>
      <td>1</td>
      <td>ZXA_FILIAL+ZXA_COD+ZXA_SEQ+ZXA_NIVEL</td>
      <td>Codigo + Sequencia + Nivel</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZXA</strong></td>
      <td>2</td>
      <td>Chave	ZXA_FILIAL+ZXA_COD+ZXA_IDUSER</td>
      <td>Codigo + Aprovador</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZXA</strong></td>
      <td>3</td>
      <td>Chave	ZXA_FILIAL+ZXA_COD+ZXA_NIVEL+ZXA_SEQ</td>
      <td>Codigo + NivelAprov. + Sequencia</td>
      <td></td>      
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

<table class="banks-table">
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Nome</th>
      <th>Descrição</th>
      <th>Colunas</th>
      <th>Retorno</th>      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>US - Consulta Usuários</strong></td>
      <td>USRZX1</td>
      <td>UsuarioAlcadas</td>
      <td>ID, FULLNAME</td>
      <td>Nome Completo</td>      
    </tr>    
    <tr>
      <td><strong>DB</strong></td>
      <td>ZX0</td>
      <td>Destinatarios WF</td>
      <td>ZX0_PROCES, ZX0_DESCRI, ZX0_DEST</td>
      <td>ZX0->ZX0_PROCES</td>      
    </tr>      
  </tbody>
</table>

</div>
</details>

<!--############################################### 11 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">11.</span> Pontos de Entrada Especificos</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">11. Pontos de Entrada Específicos</spam>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Nome</span> **M001AAP**</span>
</summary>

<div class="content-body" markdown="1">

<table class="pe-table-modern">  
  <tbody>
  <tr>
    <td>Descrição</td>
    <td>Ponto de entrada na rotina de aprovação de alçadas, após a aprovação final do documento em alçadas.</td>
  </tr>
  <tr>
    <td>Programa Fonte</td>
    <td>M001A01.PRW</td>
  </tr>  
  <tr>
    <td>Sintaxe</td>
    <td><code>M001AAP ( &lt;ParamIxB&gt; ) --> Nil</code></td>
  </tr>
  <tr>
    <td>Parâmetros</td>
    <td>ParamIxB – Tipo: Caracter – Descrição: Nome do processo da alçadas (ZX1_PROCES)</td>
  </tr>
  <tr>
    <td>Retorno</td>
    <td>Nenhum</td>
  </tr>
  <tr>
  <td>Exemplo</td>
  <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">M001AAP.PRW</span>
  </div>
  <pre><code>
<span class="uf">User Function</span> <span class="fn">M001AAP</span>()
    <span class="kw">Local</span> <span class="var">aArea</span>   <span class="symbol">:=</span> <span class="fn">GetArea</span>()
    <span class="kw">Local</span> <span class="var">cRotina</span> <span class="symbol">:=</span> <span class="var">PARAMIXB</span>
    <span class="comment">//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ</span>
    <span class="comment">//³ Personalizações do cliente                                     ³</span>
    <span class="comment">//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ</span>
    <span class="kw">If</span> <span class="var">cRotina</span> <span class="symbol">==</span> <span class="string">"MATA120"</span>
        <span class="comment">// … seu código personalizado aqui …</span>
    <span class="kw">EndIf</span>
    <span class="fn">RestArea</span>(<span class="var">aArea</span>)
<span class="kw">Return</span>
  </code></pre>
</div>
  </td>
  </tr>
  </tbody>
</table>

</div>
</details>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Nome</span> **M001ARP**</span>
</summary>

<div class="content-body" markdown="1">

<table class="pe-table-modern">  
  <tr>
    <td>Descrição</td>
    <td>Ponto de entrada na rotina de aprovação de alçadas, após a reprovação final do documento em alçadas.</td>
  </tr>
  <tr>
    <td>Programa Fonte</td>
    <td>M001A01.PRW</td>
  </tr>  
  <tr>
    <td>Sintaxe</td>
    <td><code>M001ARP ( &lt;ParamIxB&gt; ) --> Nil</code></td>
  </tr>
  <tr>
    <td>Parâmetros</td>
    <td>ParamIxB – Tipo: Caracter – Descrição: Nome do processo da alçadas (ZX1_PROCES)</td>
  </tr>
  <tr>
    <td>Retorno</td>
    <td>Nenhum</td>
  </tr>
  <tr>
  <td>Exemplo</td>
  <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">M001ARP.PRW</span>
  </div>
  <pre><code>
<span class="uf">User Function</span> <span class="fn">M001ARP</span>()
    <span class="kw">Local</span> <span class="var">aArea</span>   <span class="symbol">:=</span> <span class="fn">GetArea</span>()
    <span class="kw">Local</span> <span class="var">cRotina</span> <span class="symbol">:=</span> <span class="var">PARAMIXB</span>
    <span class="comment">//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ</span>
    <span class="comment">//³ Personalizações do cliente                                     ³</span>
    <span class="comment">//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ</span>
    <span class="kw">If</span> <span class="var">cRotina</span> <span class="symbol">==</span> <span class="string">"MATA120"</span>
        <span class="comment">…</span>
    <span class="kw">EndIf</span>
    <span class="fn">RestArea</span>(<span class="var">aArea</span>)
<span class="kw">Return</span>
  </code></pre>
</div>
  </td>
  </tr>
</table>

</div>
</details>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Nome</span> **M1A5CPOS**</span>
</summary>

<div class="content-body" markdown="1">

<table class="pe-table-modern">  
  <tr>
    <td>Descrição</td>
    <td>Ponto de entrada na rotina de M001A05 (Verbas por Aprovador) para permitir adicionar campos à tela de cadastro. OBS: Deve ser usado em conjunto com o ponto de entrada M1A5TELA.</td>
  </tr>
  <tr>
    <td>Programa Fonte</td>
    <td>M001A05.PRW</td>
  </tr>  
  <tr>
    <td>Sintaxe</td>
    <td><code>M1A5CPOS ( &lt;ParamIxB&gt; ) --> Nil</code></td>
  </tr>
  <tr>
    <td>Parâmetros</td>
    <td>Nenhum</td>
  </tr>
  <tr>
    <td>Retorno</td>
    <td>Nenhum</td>
  </tr>
  <tr>
  <td>Exemplo</td>
  <td> 
  <div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">M1A5CPOS.PRW</span>
  </div>
  <pre><code>   
    <span class="uf">User Function</span> <span class="fn">User Function M1A5CPOS()</span>
      <span class="kw">Local</span> <span class="var">_aCabec</span> <span class="var"> := </span><span class="symbol">{}</span>
      <span class="kw">Local</span> <span class="var">_aGrid</span> <span class="var"> := </span><span class="symbol">{}</span>
      <span class="kw">Local</span> <span class="var">_aRet</span> <span class="var"> := </span><span class="symbol">{}</span>
    <span class="comment">
      // Array _aCabec: array para adicionar os campos que aparecerão no cabeçalho.
      // Contém duas posições, a primeira é para definição da variável e a segunda
      // é o id do campo
    </span>
      <span class="fn">aAdd</span><span class="symbol">(</span><span class="var">_aCabec</span><span class="symbol">,</span><span class="symbol">{</span><span class="var">"cTESTE"</span><span class="symbol">,</span><span class="var">"ZX4_TESTE"</span><span class="symbol">})</span>
    <span class="comment">
      //aAdd(_aCabec,{"cTESTE3","ZX4_TESTE3"})   
      // Array _aGrid: array para adicionar os campos que aparecerão no grid.
      // contém apenas uma posição, com o id do campo
    </span>
      <span class="fn">aAdd</span><span class="symbol">(</span><span class="var">_aGrid</span><span class="symbol">,</span><span class="symbol">{</span><span class="var">"ZX4_TESTE2"</span><span class="symbol">})</span>
    <span class="comment">
      // Array _aRet: compila os dados dos arrays _aCabec e _aGrid em um só, o qual
      // será o retorno deste PE. Sempre adicionar primeiro o _aCabec e depois o _aGrid.
      // É obrigatório haver dois retornos no array _aRet, mesmo que um deles esteja em branco
    </span>
      <span class="fn">aAdd</span><span class="symbol">(</span><span class="var">_aRet</span><span class="symbol">,</span><span class="var">_aCabec</span><span class="symbol">)</span>
      <span class="fn">aAdd</span><span class="symbol">(</span><span class="var">_aRet</span><span class="symbol">,</span><span class="var">_aGrid</span><span class="symbol">)    
      </span>
    <span class="kw">Return</span> </span><span class="symbol">(</span> <span class="var">_aRet</span> </span><span class="symbol">)</span>    
  </td>
  </tr>
</table>

</div>
</details>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Nome</span> **M1A5TELA**</span>
</summary>

<div class="content-body" markdown="1">

<table class="pe-table-modern">  
  <tr>
    <td>Descrição</td>
    <td>Ponto de entrada na rotina de M001A05 (Verbas por Aprovador) para permitir adicionar campos à tela de cadastro. OBS: Deve ser usado em conjunto com o ponto de entrada M1A5CPOS.</td>
  </tr>
  <tr>
    <td>Programa Fonte</td>
    <td>M001A05.PRW</td>
  </tr>  
  <tr>
    <td>Sintaxe</td>
    <td><code>M1A5TELA ( &lt;ParamIxB&gt; ) --> Nil</code></td>
  </tr>
  <tr>
    <td>Parâmetros</td>
    <td>Nenhum</td>
  </tr>
  <tr>
    <td>Retorno</td>
    <td>Nenhum</td>
  </tr>
  <tr>
  <td>Exemplo</td>
  <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">M1A5TELA.PRW</span>
  </div>
  <pre><code>  
  <span class="uf">User Function</span> <span class="fn">M1A5TELA()</span>
  <span class="comment">
      // Informações sobre posições dos campos:
      // Os títulos dos campos ficam nas colunas (pos. x) 010 e 150
      // As Fields ficam nas colunas (pos. x) 060 e 200
      // As linhas (pos. y) somam de 15 em 15, iniciando a partir da posição 055
      // Não esquecer de somar a variável nPixP12 na linha (pos. y)
  </span>
      <span class="kw">Local</span> <span class="var">_nLin</span><span class="symbol"> := </span><span class="number">055</span> + <span class="var">nPixP12</span>  
      @ <span class="var">_nLin</span>,<span class="number">010</span> <span class="fn">Say</span>   <span class="fn">Posicione</span>(<span class="string">"SX3"</span>,2,<span class="string">'ZX4_TESTE'</span>,<span class="string">"X3_TITULO"</span>) <span class="kw">OF</span> <span class="var">oDlg</span> <span class="fn">PIXEL</span> <span class="fn">SIZE</span> <span class="number">080</span>,<span class="number">009</span> <span class="fn">COLOR</span> <span class="var">CLR_BLUE</span><br>
      @ <span class="var">_nLin</span>,<span class="number">060</span> <span class="fn">MsGet</span> <span class="var">cTESTE</span> <span class="fn">Size</span> <span class="number">120</span>,<span class="number">010</span> <span class="fn">PIXEL</span> <span class="kw">OF</span> <span class="var">oDlg</span> <span class="fn">WHEN</span> <span class="var">lInclui</span> .OR. <span class="var">lAltera</span>
  <span class="comment">
      /*
      @ _nLin,150 Say   Posicione("SX3",2,'ZX4_TESTE2',"X3_TITULO") OF oDlg PIXEL SIZE 080,009 COLOR CLR_BLUE
      @ _nLin,200 MsGet cTESTE2 Size 120,010 PIXEL OF oDlg WHEN lInclui

      _nLin += 15
      @ _nLin,010 Say   Posicione("SX3",2,'ZX4_TESTE3',"X3_TITULO") OF oDlg PIXEL SIZE 080,009 COLOR CLR_BLUE
      @ _nLin,060 MsGet cTESTE3 Size 120,010 PIXEL OF oDlg  F3 "SB1"  

      @ _nLin,150 Say   Posicione("SX3",2,'ZX4_TESTE4',"X3_TITULO") OF oDlg PIXEL SIZE 080,009 COLOR CLR_BLUE
      @ _nLin,200 MsGet cTESTE4 Size 120,010 PIXEL OF oDlg VALID (U_VALID()) 

      _nLin += 15
      */
  </span>    
  </td>
  </tr>
</table>

</div>
</details>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Nome</span> **M001REG**</span>
</summary>

<div class="content-body" markdown="1">

<table class="pe-table-modern">  
  <tr>
    <td>Descrição</td>
    <td>Descrição	Ponto de entrada na rotina de inclusão de movimento de alçada. Utilizado para personalizar busca de aprovador, quando a regra é do tipo PERSONALIZADA. Deve retornar o código do novo aprovador.
</td>
  </tr>
  <tr>
    <td>Programa Fonte</td>
    <td>M001A01.PRW</td>
  </tr>  
  <tr>
    <td>Sintaxe</td>
    <td><code>M001AAP ( &lt;ParamIxB&gt; ) --> cCodAp</code></td>
  </tr>
  <tr>
    <td>Parâmetros</td>
    <td>ParamIxB – Tipo: Carracter – Descrição: Código da rotina configurada na regra</td>
  </tr>
  <tr>
    <td>Retorno</td>
    <td>Nenhum</td>
  </tr>
  <tr>
  <td>Exemplo</td>
  <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">M001REG.PRW</span>
  </div>
  <pre><code>
<span class="comment">//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ</span>
<span class="comment">//³ Personalizações do cliente                                     ³</span>
<span class="comment">//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ</span>
<span class="uf">User Function</span> <span class="fn">M001REG</span>()
    <span class="kw">Local</span> <span class="var">aArea</span>      <span class="symbol">:=</span> <span class="fn">GetArea</span>()
    <span class="kw">Local</span> <span class="var">cRotina</span>    <span class="symbol">:=</span> <span class="var">PARAMIXB</span>
    <span class="kw">Local</span> <span class="var">cAprovador</span> <span class="symbol">:=</span> <span class="string">""</span>
    <span class="comment">//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ</span>
    <span class="comment">//³ Personalizações do cliente                                     ³</span>
    <span class="comment">//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ</span>
    <span class="kw">If</span> <span class="var">cRotina</span> <span class="symbol">==</span> <span class="string">"MATA120"</span>
        <span class="var">cAprovador</span> <span class="symbol">:=</span> <span class="string">'000002'</span>
    <span class="kw">EndIf</span>
    <span class="fn">RestArea</span>(<span class="var">aArea</span>)
<span class="kw">Return</span>(<span class="var">cAprovador</span>)
  </code></pre>
</div>    
  </td>
  </tr>
</table>

</div>
</details>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Nome</span> **M001MNU**</span>
</summary>

<div class="content-body" markdown="1">

<table class="pe-table-modern">  
  <tr>
    <td>Descrição</td>
    <td>Ponto de entrada que permite e inclusão de funções na rotina de aprovação de alçadas. Variável aRotina é Private.
</td>
  </tr>
  <tr>
    <td>Programa Fonte</td>
    <td>M001A01.PRW</td>
  </tr>  
  <tr>
    <td>Sintaxe</td>
    <td><code>M001MNU ( &lt;ParamIxB&gt; ) --> Nil</code></td>
  </tr>
  <tr>
    <td>Parâmetros</td>
    <td>Nenhum</td>
  </tr>
  <tr>
    <td>Retorno</td>
    <td>Nenhum</td>
  </tr>
  <tr>
  <td>Exemplo</td>
  <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">M001MNU.PRW</span>
  </div>
  <pre><code>
<span class="comment">// Adiciona item personalizado no menu do sistema</span><br>
<span class="uf">User Function</span> <span class="fn">M001MNU</span>()
    <span class="kw">Local</span> <span class="var">aArea</span> <span class="symbol">:=</span> <span class="fn">GetArea</span>()
    <span class="comment">// Inclui a opção "&SeuMenu" chamando a função U_XXXXXXX</span>
    <span class="fn">AADD</span>(<span class="var">aRotina</span>, {<span class="string">"&SeuMenu"</span>, <span class="string">"U_XXXXXXX"</span>, 0, 2})
    <span class="fn">RestArea</span>(<span class="var">aArea</span>)
<span class="kw">Return</span>
  </code></pre>
</div>
  </td>
  </tr>
</table>

</div>
</details>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Nome</span> **M001INC**</span>
</summary>

<div class="content-body" markdown="1">

<table class="pe-table-modern">  
  <tr>
    <td>Descrição</td>
    <td>Ponto de entrada para gravações adicionais após inclusão de movimentos de alçadas. Tabela de movimentos de alçadas está em edição.</td>
  </tr>
  <tr>
    <td>Programa Fonte</td>
    <td>M001A01.PRW</td>
  </tr>  
  <tr>
    <td>Sintaxe</td>
    <td><code>M001INC ( &lt;ParamIxB&gt; ) --> Nil</code></td>
  </tr>
  <tr>
    <td>Parâmetros</td>
    <td>Nenhum</td>
  </tr>
  <tr>
    <td>Retorno</td>
    <td>Nenhum</td>
  </tr>
  <tr>
  <td>Exemplo</td>
  <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">M001INC.PRW</span>
  </div>
  <pre><code>
<span class="comment">//Exemplo Implementação	User Function M001IND()</span><br>
<span class="uf">User Function</span> <span class="fn">M001IND()</span>()
    <span class="kw">Local</span> <span class="var">aArea</span><span class="symbol"> := </span> <span class="fn">GetArea</span>()
    <span class="kw">Local</span> <span class="var">cRotina</span>  <span class="symbol">:=</span> <span class="var">PARAMIXB</span>
    <span class="comment">//</span> <span class="comment">ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ</span>
    <span class="comment">//</span> <span class="comment">³ Personalizações do cliente     ³</span>
    <span class="comment">//</span> <span class="comment">ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ</span>
    <span class="kw">If</span> <span class="var">cRotina</span></span><span class="symbol"> == </span><span class="string">"MATA120"</span>
        (_001T03)</span><span class="symbol">-></span>&_001T03FOR <span class="symbol">:=</span> <span class="string">"0101"</span>
    <span class="kw">EndIf</span>
    <span class="kw">Local</span> <span class="var">nI</span></span><span class="symbol"> := </span> 0      
<span class="kw">RestArea</span>(<span class="var">aArea</span>)
<span class="kw">Return</span>(<span class="var">aRet</span>)
  </code></pre>
</div>
  </td>
  </tr>
</table>

</div>
</details>

</div>
</details>

<!--############################################### 12 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">12.</span> Manual de operação</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">12. Manual de operação</span>

#### 1. Cadastro

Passo a seguir são para a inclusão de uma nova regra de alçada.

![](./assets/alcadasregras/02_cadastro_dados_preenchidos.png){.flow-image}

- <strong>Processo:</strong> Informe o codigo do processo (nome da funcao) referente a Alçada.<br>
- <strong>Descrição:</strong> Descricao do Processo.<br>
- <strong>Worklow Aviso:</strong> Informe o nome do processo (rdmake) que será responsavel por enviar WorkFlow de aviso da liberacao controle de alcadas.<br>
- <strong>Worklow Alias:</strong> Sigla dos arquivos relacionados no processo.<br>
- <strong>Regra Ativa?:</strong> Informe se a regra esta ativa <strong>S</strong>=Sim, <strong>N</strong>=Não.<br>

<strong>Campos da Tabela:</strong><br>

![](./assets/alcadasregras/03_cadastro_tabela.png){.flow-image}

- <strong>Sequencia:</strong> Sequencia<br>
- <strong>Tp. Liberação:</strong> Help Informe o tipo de liberacao que deseja para esta regra de Alcadas:<br>
  N = Nivel - Sistema respeitara os níveis configurados, encaminhando para o proximonivel somente após aprovação do nível anterior.<br>
  U = Usuario - A liberacao do usuário pode ocorrer individualmente, sem considerar outros aprovadores constantes na regra.<br>
- <strong>Nivel:</strong> Informe o nivel (2 digitos).<br>
- <strong>Tp. Busca:</strong> Help Informe o tipo de busca:<br>
  E = Entidade - O usuario poderá configurar qualquer tabela do sistema para verificar o aprovador do processo.<br>
  U = Usuario - Configuracao de usuário "fixo" como aprovador.<br>
- <strong>Aprovador:</strong> Informe o codigo do usuario que seraresponsavel pela aprovação.<br>
- <strong>Nome:</strong> Nome do Aprovador.<br>
- <strong>Indice Alias:</strong> Informe o indice de busca para posicionamento no campo a verificar o aprovador do processo.<br>
- <strong>Campo:</strong> Informar o campo a ser verificado para selecionar o aprovador, quando selecionado o Tipo de Busca = Entidade.<br>
- <strong>Expressao:</strong> Podera ser utilizada para criacao de regras diferentes para um mesmo processo. (Utilizar sempre a tabela posicionada no cabecalho do processo.)<br>
- <strong>Proc. WF:</strong> Help Informe o nome do processo (rdmake) que será responsável por enviar WorkFlow para o controle de alcadas.<br>
- <strong>Alias:</strong> Sigla dos arquivos relacionados no processo. Ex: SA1, SB1, SD2, etc...<br>
- <strong>Observacoes:</strong> Observação.<br>

<strong>Após confirmado:</strong> O sistema irá salvar a regra de alçada.<br>

![](./assets/alcadasregras/04_cadastro_dado_adicionado.png){.flow-image}

#### 2. Aprovação de Documento

Para aprovar um documento, na tela inicial do protheus, no grupo de "Alçadas", clique no botão "Aprovamentos", escolha a forma de visualização do filtro e clique em "OK" assim será possivel visualizar na tela de Aprovações se há algum documento que precise de atenção.

![](./assets/alcadasregras/08_aprovacao_visualizacao.png){.flow-image}

A legenda de cada status pode ser acessadas em Açoes Relacionadas > Legendas:

![](./assets/alcadasregras/07_aprovacao_legendas.png){.flow-image}

Para Aprovar ou Reprovar um Documento, clicamos no botão "Liberar" no canto inferior da tela de aprovação. Nessa tela adicionamos uma "Observação" e clicamos no botão desejado (<strong>Aprovar Docto</strong> para Aprovar ou <strong>Reprovar Docto</strong> para Reprovar).

![](./assets/alcadasregras/08_aprovacao_aprovar_documento.png){.flow-image}

- <strong>Numero Doc.:</strong> O código do documento que está sendo aprovado.<br>
- <strong>Emissao:</strong> A data de emissão do documento.<br>
- <strong>Aprovador:</strong> O nome do usuário que está realizando a aprovação.<br>
- <strong>Processo:</strong> O nome do processo que está sendo aprovado.<br>
- <strong>Status:</strong> Stauts do movimento:<br>
1 - Aguardando Aprovacao<br>
2 - Aguardando Aprov. Nivel Anterior<br>
3 - Aprovado<br>
4 - Transferido p/ outro Aprovador<br>
5 - Reprovado<br>
6 - Nivel Anterior Reprovado<br>
- <strong>Observações:</strong> Observações adicionadas durante a aprovação ou reprovação do documento.<br>

Se precisar visualizar o Documento antes de Aprovar ou Reprovar, podemos clicar sobre o botão <strong>"Visual. Docto."</strong>

![](./assets/alcadasregras/09_aprovacao_visualizar_documento.png){.flow-image}

<strong><u>Exemplo de email de liberação de documento.</u></strong>

![](./assets/alcadasregras/10_aprovacao_email_aprovado.png){.flow-image}

#### 3. Ausencia Temporária

Quando um aprovador está ausente, é possível configurar um substituto para assumir suas responsabilidades. Isso garante que os processos de aprovação não fiquem paralisados durante férias, licenças ou ausências planejadas.

Para configurar um substituto, utilizamos a tela de Ausência Temporária, acessamos através de Incluir:

![](./assets/alcadasregras/12_ausencia_incluir.png){.flow-image}

Na tela de Ausência Temporária, preenchemos os campos obrigatórios:

![](./assets/alcadasregras/13_ausencia_cadastro.png){.flow-image}

- <strong>Codigo:</strong> Codigo do registro.<br>
- <strong>Aprovador:</strong> Codigo do Aprovador que esta sendo substituído temporariamente.<br>
- <strong>Nome:</strong> Nome do Aprovador que esta sendo substituído temporariamente.<br>
- <strong>Dt. Saida:</strong> Data de inicio da ausência.<br>
- <strong>Dt. Retorno:</strong> Data de Retorno.<br>
- <strong>Substituto:</strong> Codigo do Usuário que será substituto.<br>
- <strong>Nome:</strong> Nome do Usuario substituto.<br>

A partir desse momento, todos os documentos que estiverem aguardando aprovação do aprovador original serão automaticamente redirecionados para o substituto, garantindo a continuidade dos processos sem interrupções.

![](./assets/alcadasregras/14_ausencia_item_incluido.png){.flow-image}

#### 4. Transfêrencias

Para transferir um documento de um aprovador para outro, utilizamos a tela de Transferência, acessamos através de Ações Relacionadas > Trasnferencia:

![](./assets/alcadasregras/17_transferencia_novo_aprovador.png){.flow-image}

- <strong>Aprovador Ausente:</strong> Codigo do aprovador que está ausente.<br>
- <strong>Novo Aprovador:</strong> Codigo do novo aprovador.<br>

Na tabela, selecionamos o documento que será transferido, clicando e marcando a caixa de seleção no começo da linha:

![](./assets/alcadasregras/21_trasnferencia_tabela.png){.flow-image}

Uma notificação com o documento será enviado para o aprovador através do email:

![](./assets/alcadasregras/18_transferencia_email.png){.flow-image}

Clicando em "Processo" no texto "Favor acessar o processo de workflow referente à liberação pedido de venda", visualizamos a tela de liberação de Pedido de Compra, podendo ser aprovado diretamente por ela:

![](./assets/alcadasregras/19_transferencia_liberacao_compra.png){.flow-image}

- <strong>Aprovado/Reprovado:</strong> Selecione o desejado.<br>
- <strong>Observação:</strong> Informe uma observação.<br>

Pelo sistema, através do grupo de "Alçadas" podemos clicar sobre "Aprovações". Para liberar um documento pendente podemos clicar sobre o botão "Liberar" e/ou consultar as Aprovações de Documentos pelo botão "Cons. Aprov.":

![](./assets/alcadasregras/20_trasnferencia_visualiza_outro_aprovador.png){.flow-image}

</div>
</details>

<hr>

<div style="text-align: center; margin-top: 20px;">
  <a href="/" class="md-button" style="text-decoration: none;">← Voltar para a Página Inicial</a>
</div>
<hr>