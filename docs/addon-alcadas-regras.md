---
template: main.html
hide:  
  - toc
---

# Alçadas - Regras {.home-hero}

<!--############################################### 01 #######################################################-->

<div class="confluence-card" markdown="1">

<details class="custom-expand" open markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">01.</span> Visão Geral</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">1. Visão Geral</span>
Este ADDON é uma opção para controle de alçadas envolvendo procesoss do compras como solicitção e pedido de compras.

O ADDON permite que ao gerar um uma solicitação de compra ou pedido de compra, estes sejam analisados por regras de aprovação e conforme os criterios da regra de aprovação e o que foi informado no pedido de compra/solicitação de compra, o aprovador seja notificado via workflow e através o status do documento.

Para a construção das regras, é disponibilizado uma interface que possibilita ao usuário configurar por diversar formas, como:

- Tipo de Liberação: Usuário, Nivel de aprovação ou Documento
- Expressão: Abre o leque de opções pois permite criar uma expressão com base de informações contidas nos documentos (solicitação/pedido de compra) aumentando ou até melhorando a forma de avaliação sobre o documento.
- Nivel: Em casos de niveis de aprovação, defini quais os niveis de aprovação da alçada.
- Aprovador: Defini que será o aprovador da regra/nivel da regra

Além das regras de alçada, para o caso dos aprovadores, é possível determinar verbas de aprovação para os aprovadores.

Disponibiliza interface que permite efetuar a transferência de documentos que estão pendentes para aprovação de determinado usuário aprovador, e passar para outro usuário.

Também pemrite definir um usuário aprovador substituto, de forma temporária, no caso do aprovador principal ter um período ausente, por exemplo, férias.

<strong>É uma opção para controle de alçadas envolvendo processos do compras como solicitção e pedido de compras.
Permite que ao gerar um uma solicitação de compra ou pedido de compra, estes sejam analisados por regras de aprovação e conforme os criterios da regra de aprovação e o que foi informado no pedido de compra/solicitação de compra, o aprovador seja notificado via workflow e através o status do documento.

Para a construção das regras, é disponibilizado uma interface que possibilita ao usuário configurar por diversar formas, como:

- Tipo de Liberação: Usuário, Nivel de aprovação ou Documento
-  Expressão: Abre o leque de opções pois permite criar uma expressão com base de informações contidas nos documentos (solicitação/pedido de compra) aumentando ou até melhorando a forma de avaliação sobre o documento.
- Nivel: Em casos de niveis de aprovação, defini quais os niveis de aprovação da alçada.
- Aprovador: Defini que será o aprovador da regra/nivel da regra

Além das regras de alçada, para o caso dos aprovadores, é possível determinar verbas de aprovação para os aprovadores.

Disponibiliza interface que permite efetuar a transferência de documentos que estão pendentes para aprovação de determinado usuário aprovador, e passar para outro usuário.

Também pemrite definir um usuário aprovador substituto, de forma temporária, no caso do aprovador principal ter um período ausente, por exemplo, férias.
</strong>


#### Implementação de controle customizado de alçadas via workflow, integrando aprovações nativas aos processos do ERP.
<strong>Principais vantagens do produto:</strong>

- Cadastro de e-mails Destinatários de Workflow;
- Cadastro de Regras de Alçadas;
- Aprovação/Rejeição Manual do documento em alçadas - via tela (aprovação via workflow somente nos pacotes específicos de integração);
- Consulta Status Aprovação dos documentos em alçadas;
- Visualização do documento original em alçadas;
- Cadastro de Ausência temporária;
- Transferência de Aprovadores;

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
      <td>Alçadas</td>
      <td>Cadastro de Regras</td>
      <td>M001A02</td>
      <td>CONFIGURADOR</td>
      <td>03</td>
      <td>ZX0, ZX2</td>
    </tr>   
      <tr>
      <td>Atualizações</td>
      <td>Alçadas</td>
      <td>Aprovações</td>
      <td>M001A03</td>
      <td>CONFIGURADOR</td>
      <td>03</td>
      <td>ZXA</td>
    </tr>     
      <tr>
      <td>Atualizações</td>
      <td>Alçadas</td>
      <td>Ausências Temporária</td>
      <td>M001A04</td>
      <td>CONFIGURADOR</td>
      <td>03</td>
      <td>ZX0</td>
    </tr>   
      <tr>
      <td>Atualizações</td>
      <td>Alçadas</td>
      <td>Verbas por Aprovador</td>
      <td>M001A05</td>
      <td>CONFIGURADOR</td>
      <td>03</td>
      <td>ZX4</td>
    </tr>   
      <tr>
      <td>Atualizações</td>
      <td>Alçadas</td>
      <td>Destinatários WF</td>
      <td>C999A01</td>
      <td>CONFIGURADOR</td>
      <td>03</td>
      <td>ZX0</td>
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
      <td><strong>C999A01</strong></td>
      <td>Rotina para cadastro de destinatários de Workflow.</td>
    </tr>
    <tr>
      <td><strong>M001A01</strong></td>
      <td>RRotina com funções genéricas do controle de alçadas.</td>
    </tr>
    <tr>
      <td><strong>M001A02</strong></td>
      <td>Rotina para cadastro de regra de alçadas.</td>
    </tr>
    <tr>
      <td><strong>M001A03</strong></td>
      <td>Rotina para aprovações de alçadas.</td>
    </tr>
    <tr>
      <td><strong>M001A04</strong></td>
      <td>Rotina para cadastro de ausência temporária</td>
    </tr>
    <tr>
      <td><strong>M001A05</strong></td>
      <td>Rotina para cadastro de Verbas por Aprovador</td>
    </tr>
    <tr>
      <td><strong>UPD0A01</strong></td>
      <td>Rotina para aplicação do pacote e compatibilização dos SX’s</td>
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
      <td><strong>M001AAP</strong></td>
      <td>P.E. após gerar aprovação alçada – após transação.</td>
      <td><strong>1)</strong> CÓDIGO DO PROCESSO (ZX1->ZX1_PROCES) – SINTAXE: PARAMIXB<br>
          <strong>Tabela Posicionada: ZX1</strong></td>
      <td>Nenhum</td>
    </tr>
    <tr>
      <td><strong>M001ARP</strong></td>
      <td>P.E. após reprovação alçada – após transação.</td>
      <td>1)</strong> CÓDIGO DO PROCESSO (ZX1->ZX1_PROCES) – SINTAXE: PARAMIXB<br>
      <strong>Tabela Posicionada: ZX1</strong></td>
      <td>Nenhum</td>
    </tr>
    <tr>
      <td><strong>M001TR1</strong></td>
      <td>P.E. de validação – após mensagem de confirmação da transferência do documento – processo de aprovação MANUAL – porém antes da transação.
      <strong>P.E. não se aplica no processamento via Workflow.</strong></td>
      <td><strong>1)</strong> CÓDIGO DO PROCESSO (ZXA->ZXA_PROCES) – SINTAXE: PARAMIXB[1]<br>
          <strong>2)</strong> CÓDIGO DO DOCUMENTO (ZXA->ZXA_DOC) – SINTAXE: PARAMIXB[2]<br>
          <strong>3)</strong> STATUS DOCUMENTO (ZXA->ZXA_STATUS) – SINTAXE: PARAMIXB[3]<br>
          <strong>4)</strong> USUARIO SUPERIOR – SINTAXE: PARAMIXB[4]<br>
          <strong>Tabela Posicionada: ZXA</strong></td>
      <td>.T./.F.<br>
      CASO .T. CONTINUA GRAVAÇÃO DA TRANSFERENCIA<br> 
      CASO .F. CANCELA PROCESSAMENTO.</td>
    </tr>
    <tr>
      <td><strong>M1A5CPOS</strong></td>
      <td>P.E. durante a montagem da tela de Verbas por Aprovador (M001A05) para adicionar campos do cliente à tela. Deve ser utilizado em conjunto com o PE M1A5TELA.</td>
      <td>Nenhum</td>
      <td>Nenhum</td>
    </tr>
    <tr>
      <td><strong>M1A5TELA</strong></td>
      <td>P.E. durante a montagem da tela de Verbas por Aprovador (M001A05) para posicionar os campos do cabeçalho na tela modelo2. Deve ser utilizado em conjunto com o PE M1A5CPOS.</td>
      <td>Nenhum</td>
      <td>Nenhum</td>
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
      <td><strong>ZX0</strong></td>
      <td>DESTINATARIOS WF</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
    </tr>
    <tr>
      <td><strong>ZX1</strong></td>
      <td>REGRAS DE ALCADAS</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
    </tr>
    <tr>
      <td><strong>ZX2</strong></td>
      <td>ALCADAS - AUSENCIA TEMPORARIA</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
      <td>Exclusivo</td>
    </tr>
    <tr>
      <td><strong>ZX3</strong></td>
      <td>MOVIMENTOS ALCADAS</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX0_PROCES**</span>
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
      <td>ExistChav("ZX0")</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX0_DESCRI**</span>
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
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Descricao</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Descricao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe a descricao da Funcao.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX0_DEST**</span>
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
      <td>200</td>
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
      <td colspan="7">Destinat.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Destinatarios</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe os destinatarios do Workflow. Para mais de um, utilize (;).
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX0_USERGI**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>-</td>
      <th>Ordem</th>
      <td>05</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX0_USERGA**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>-</td>
      <th>Ordem</th>
      <td>06</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX0_STATUS**</span>
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
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Status Aprov</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Status Aprovacao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Stauts do movimento:<br>
<strong>1</strong> - Aguardando Aprovacao<br>
<strong>2</strong> - Aguardando Aprov. Nivel Anterior<br>
<strong>3</strong> - Aprovado<br>
<strong>4</strong> - Transferido p/ outro Aprovador<br>
<strong>5</strong> - Reprovado<br>
<strong>6</strong> - Nivel Anterior Reprovado
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_PROCES**</span>
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
      <td colspan="7">Processo</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Codigo do Processo</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe o codigo do processo (nome da funcao) referente a Alçada.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_DESCRI**</span>
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
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Descricao</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Descricao do Processo</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Descricao do Processo
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_SEQ**</span>
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
      <td>2</td>
      <th>Decimal</th>
      <td>0</td>
      <th>Formato</th>
      <td>99</td>
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
Sequencia
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_TPLIB**</span>
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
      <td>S</td>
      <th>Browse</th>
      <td>S</td>
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
Help	Informe o tipo de liberacao que deseja para esta regra de Alcadas:<br>
<strong>N</strong> = Nivel - Sistema respeitara os níveis configurados, encaminhando para o proximonivel somente após aprovação do nível anterior.<br>
<strong>U</strong> = Usuario - A liberacao do usuário pode ocorrer individualmente, sem considerar outros aprovadores constantes na regra.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_NIVEL**</span>
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
      <td colspan="7">Nivel</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Nivel</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe o nivel (2digitos).
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
      <td>aCols[n][nPosTPL] = 'N'</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_TPBUSC**</span>
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
      <td colspan="7">Tp. Busca</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Tipo de Busca</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Help	Informe o tipo de busca:
<strong>E</strong> = Entidade - O usuario poderá configurar qualquer tabela do sistema para verificar o aprovador do processo.<br>
<strong>U</strong> = Usuario - Configuracao de usuário "fixo" como aprovador.
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
      <td>E=Entidade; U=Usuario</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_IDUSER**</span>
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
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Aprovador</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Id do Aprovador</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe o codigo do usuario que seraresponsavel pela aprovação.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>USRZX1 (USUARIO ALCADAS)</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>aCols[n][nPosTPB]='U'</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>UsrExist(M->ZX1_IDUSER)</td>
    </tr>
    <tr>
      <th>Lista Opções</th>
      <td>E=Entidade; U=Usuario</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_NMUSER**</span>
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
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Nome</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Nome</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Nome do Aprovador.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_INDICE**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>N</td>
      <th>Ordem</th>
      <td>10</td>
      <th>Tamanho</th>
      <td>1</td>
      <th>Decimal</th>
      <td>0</td>
      <th>Formato</th>
      <td>9</td>
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
      <td colspan="7">Indice Alias</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Indice Alias</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe o indice de busca para posicionamento no campo a verificar o aprovador do processo.
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
      <td>aCols[n][nPosTPB]='E'</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_CAMPO**</span>
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
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Campo</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Campo</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informar o campo a ser verificado para selecionar o aprovador, quando selecionado o Tipo de Busca = Entidade.
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
      <td>aCols[n][nPosTPB]='E'</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>EXISTCPO("SX3",M->ZX1_CAMPO,2)</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_EXP**</span>
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
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Expressao</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Expressao</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Podera ser utilizada para criacao de regras diferentes para um mesmo processo. (Utilizar sempre a tabela posicionada no cabecalho do processo.)
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_PROCWF**</span>
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
      <td>N</td>
      <th>Browse</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Proc. WF</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Processo WorkFlow</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Help	Informe o nome do processo (rdmake) que será responsável por enviar WorkFlow para o controle de alcadas.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>ZX0</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>Vazio().OR.ExistCPO("ZX0")</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_ALIAS**</span>
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
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Alias</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Entidade (Alias)</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Sigla dos arquivos relacionados no processo. Ex: SA1, SB1, SD2, etc...
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>SX21 (Tabelas Sistema)</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>Vazio().OR.ExistCpo("SX2")</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_STATUS**</span>
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
      <td>S</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Regra Ativa?</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Regra Ativa?</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe se a regra esta ativa S=Sim, N=Nao.
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
      <td>S=Sim; N=Não</td>
    </tr>
    <tr>
      <th>Inicializador</th>
      <td>S</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_WFAVIS**</span>
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
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">WF Aviso</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">WorkFlow Aviso</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Informe o nome do processo (rdmake) que seraresponsavel por enviar WorkFlow de aviso da liberacao controle de alcadas.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
    <tr>
      <th>F3</th>
      <td>ZX0</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_WFALIA**</span>
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
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Alias WF</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Alias WF</td>
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
      <td>SX21 (Tabelas Sistema)</td>
    </tr>
    <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val. Usuário</th>
      <td>Vazio().OR.ExistCpo("SX2")</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_OBS**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>MEMO</td>
      <th>Ordem</th>
      <td>18</td>
      <th>Tamanho</th>
      <td>-</td>
      <th>Decimal</th>
      <td>-</td>
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
      <td colspan="7">Observacoes</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Observacoes</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_USERGI**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>-</td>
      <th>Ordem</th>
      <td>19</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX1_USERGA**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>-</td>
      <th>Ordem</th>
      <td>20</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX2_COD**</span>
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
      <td colspan="7">Codigo</td>
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
      <td>ExistChav("ZX2")</td>
    </tr>
    <tr>
      <th>Lista Opções</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Inicializador</th>
      <td>GETSXENUM("ZX2","ZX2_COD")</td>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **ZX2_APROV**</span>
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

### <span style="display: none;">11. Pontos de Entrada Específicos</span>

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