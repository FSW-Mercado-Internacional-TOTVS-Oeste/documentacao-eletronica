# Alçadas - Contas a Pagar (Título / Borderô) {.home-hero}

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

### 1. Visão Geral

#### Este manual descreve a implementação de um Controle de Alçadas customizado com Workflow para o módulo Financeiro (Contas a Pagar e Borderô), integrado ao padrão do ERP.

<strong>Principais vantagens do produto:</strong>

- Regra Geral: Títulos incluídos (manualmente ou via outros módulos) entram como "Pendente de liberação".

- Bloqueios e Filtros: Processos de baixa (manual/automática), compensações e envio de CNAB passam a exigir o status "Aprovado".

- Substituições de Rotinas: As rotinas padrão de Borderô (FINA240), Manutenção de Borderô (FINA590) e Liberação para Baixa (FINA580) foram desativadas.

- Novas Funções: Introdução das rotinas customizadas M001D05 e M001D06, que gerenciam o envio de Workflows para aprovação e controle de status.

- Exceções: Funções como Faturas, Cheques, Liquidação e Retorno CNAB não controlam status de alçada.

</div>
</details>

<!--############################################### 02 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">02.</span> Menu</span>
</summary>
<div class="content-body" markdown="1">

### 2. Menu

!!! tip "Ver manual do Addon [**Alçadas - Regras**](/addon-alcadas-regras/#2-menu) na seção "2. Menu"." 

</div>
</details>

<!--############################################### 03 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">03.</span> Rotinas personalizadas específicas do Pacote</span>
</summary>
<div class="content-body" markdown="1">

### 3. Rotinas personalizadas específicas do Pacote

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
      <td><strong>M001D01</strong></td>
      <td>Rotina para ENVIO do Processo de Workflow - TITULO A PAGAR (AVULSO)</td>
    </tr>
    <tr>
      <td><strong>M001D02</strong></td>
      <td>Rotina para RETORNO do Processo de Workflow - TITULO A PAGAR (AVULSO).</td>
    </tr>
    <tr>
      <td><strong>M001D03</strong></td>
      <td>RRotina para ENVIO do Processo de Workflow - BORDERO A PAGAR</td>
    </tr>
    <tr>
      <td><strong>M001D04</strong></td>
      <td>Rotina para RETORNO do Processo de Workflow - BORDERO A PAGAR</td>
    </tr>
    <tr>
      <td><strong>M001D05</strong></td>
      <td>Rotina para Geração de Borderô de Pagamento. Substituição da rotina padrão FINA240 para uso em conjunto com o parâmetro MV_CTLIPAG ativado.</td>
    </tr>
    <tr>
      <td><strong>M001D06</strong></td>
      <td>Rotina para Manutenção de Borderô (Incluir/Excluir Titulos). Substituição da rotina padrão FINA240 para uso em conjunto com o parâmetro MV_CTLIPAG ativado.</td>
    </tr>
    <tr>
      <td><strong>P001D01</strong></td>
      <td>Rotina centralizadora das chamadas dos Pontos de Entrada para integração do ADD-ON com as rotinas do módulo FINANCEIRO.</td>
    </tr>
        <tr>
      <td><strong>T001D01</strong></td>
      <td>Rotina para chamada da Tela de Consulta Alçadas - TITULO A PAGAR</td>
    </tr>
        <tr>
      <td><strong>UPD001D</strong></td>
      <td>Rotina de aplicação do ADD-ON</td>
    </tr>
        <tr>
      <td><strong>W001D01</strong></td>
      <td>Rotina para geração do Workflow para Liberação - TITULO A PAGAR (AVULSO)</td>
    </tr>
        <tr>
      <td><strong>W001D02</strong></td>
      <td>Rotina para geração do Workflow de Aviso da Aprovação/Rejeição - TITULO A PAGAR (AVULSO)</td>
    </tr>
        <tr>
      <td><strong>W001D03</strong></td>
      <td>Rotina para geração do Workflow para Liberação - TITULO A PAGAR (AVULSO)</td>
    </tr>
        <tr>
      <td><strong>W001D04</strong></td>
      <td>Rotina para geração do Workflow de Aviso da Aprovação/Rejeição - BORDERO A PAGAR</td>
    </tr>
        <tr>
      <td><strong>X001D01</strong></td>
      <td>Rotina centralizadora das Funções Genéricas do ADD-ON de Alçadas a Pagar.</td>
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

### 4. Pontos de Entradas Disponiveis para Desenvolvimento

<table class="banks-table">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Descrição</th>
      <th>Implementação</th>      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>F050ALT</strong></td>
      <td>Ponto de entrada na rotina FINA050 Contas a Pagar chamado no final após a ALTERAÇÃO do título.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F050ALT</span>
  </div>
  <pre><code> 
If nOpc == 1
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("M001D01")
   U_M001D01(,,,"A") // Exclui o movimento das alçadas e Reenvia
EndIf
Endif
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F050ROT</strong></td>
      <td>Ponto de entrada na rotina FINA050 Contas a Pagar utilizado para adicionar itens no menu da rotina.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F050ROT</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001D01")
   aRet := U_P001D01("F050ROT")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F080FIL</strong></td>
      <td>Ponto de entrada na rotina FINA080 Baixa Pagar Manual utilizado para montar o filtro dos titulos a pagar.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F080FIL</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("X001D01")
   cRet := U_X001D01("RETFILTRO","A")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F090FIL</strong></td>
      <td>Ponto de entrada na rotina FINA090 Baixa Pagar Automatica utilizado para montar o filtro dos titulos a pagar.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F090FIL</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("X001D01")
   cRet := U_X001D01("RETFILTRO","A")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F240BORD</strong></td>
      <td>Ponto de entrada na rotina FINA240 Bordero a Pagar chamado após a gravação do Bordero.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F240BORD</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("M001D03")
   U_M001D03(,,,"I") // Inclui o movimento das alçadas
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F240BROWSE</strong></td>
      <td>Ponto de entrada na rotina FINA240 Bordero a Pagar permite efetuar filtro na abertura do Browse da rotina</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F240BROWSE</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001D01")
   cRet := U_P001D01("F240BROWSE")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F240CAN</strong></td>
      <td>Ponto de entrada na rotina FINA240 Bordero a Pagar chamado após o cancelamento do Bordero.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F240CAN</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("M001D03")
   U_M001D03(,,,"E") // Exclui o movimento das alçadas
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F240FIL</strong></td>
      <td>Ponto de entrada na rotina FINA240 Bordero a Pagar utilizado para montar o filtro dos titulos a pagar.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F240FIL</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("X001D01")
   cRet := U_X001D01("RETFILTRO","P")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F240FILTC</strong></td>
      <td>Ponto de entrada na rotina FINA240 Bordero a Pagar na chamada da geração do(s) arquivo(s) do SISPAG (FINA300), utilizado para montar o filtro dos titulos a pagar.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F240FILTC</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("X001D01")
   cRet := U_X001D01("RETFILTRO","A")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F340LEGE</strong></td>
      <td>Ponto de entrada na rotina FINA340 Compensação a Pagar para customizar a Legenda do Browse.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F340LEGE</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001D01")
   aRet := U_P001D01("F340LEGE")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F420FIL</strong></td>
      <td>Ponto de entrada na rotina FINA420 Remessa CNAB a Pagar utilizado para montar o filtro dos titulos a pagar.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F420FIL</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("X001D01")
   cRet := U_X001D01("RETFILTRO","A")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>F580BROW</strong></td>
      <td>Ponto de entrada na rotina FINA580 Liberacao p/ Baixa Pagar executado antes da abertura do Browse da rotina.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">F580BROW</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001D01")
   U_P001D01("F580BROW")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>FA050B01</strong></td>
      <td>Ponto de entrada na rotina FINA050 Contas a Pagar chamado após confirmar a EXCLUSÃO do título.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">FA050B01</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("M001D01")
   U_M001D01(,,,"E") // Exclui o movimento das alçadas
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>FINALEG</strong></td>
      <td>Ponto de entrada para customizar as Legendas nas rotinas do Financeiro: Pagar e Receber.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">FINALEG</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001D01")
   xRet := U_P001D01("FINALEG")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>FA590AROT</strong></td>
      <td>Ponto de entrada na rotina FINA590 Manutencao Bordero Pagar para adicionar itens no menu da rotina.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">FA590AROT</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001D01")
   aRet := U_P001D01("FA590AROT")
EndIf
</code></pre>
  </div>
      </td>      
    </tr>

    <tr>
      <td><strong>FA590BOR</strong></td>
      <td>Ponto de entrada na rotina FINA590 Manutencao Bordero Pagar para validar se o Bordero pode ser alterado.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">FA590BOR</span>
  </div>
  <pre><code> 
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (CONTAS A PAGAR)   ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001D01")
   lRet := U_P001D01("FA590BOR")
EndIf
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

### 5. Tabelas (SX2) 

!!! tip "Ver manual do Addon [**Alçadas - Regras**](/addon-alcadas-regras/#6-campos-sx3) na seção "6. Tabelas (SX2)"." 

</div>
</details>

<!--############################################### 06 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">06.</span> Campos (SX3)</span>
</summary>
<div class="content-body" markdown="1">

### 6. Campos (SX3)

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **E2_X_IDAL**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>* Próxima disponível</td>
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
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">ID ALCADA</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">IDALC</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Identificador do Controle de Alcadas.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **E2_X_DOC**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>* Próxima disponível</td>
      <th>Tamanho</th>
      <td>31</td>
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
      <td colspan="7">Num. Doc.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Número Documento.</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Numero/Codigo do Documento com integracao no Controle de Alcadas.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **E2_X_STS**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>* Próxima disponível</td>
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
      <td colspan="7">Status Aprov</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Status da Aprovação</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Status do movimento de alçada:<br>
1 - Aguardando Aprovacao<br>
2 - Aguardando Aprov. Nivel Anterior<br>
3 - Aprovado<br>
4 - Transferido p/ outro Aprovador<br>
5 - Reprovado<br>
6 - Nivel Anterior Reprovado
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **E2_X_SOL**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>* Próxima disponível</td>
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
      <td colspan="7">Solicitante</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Usuario Solicitante</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Codigo do Usuario Solicitante
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **EA_X_IDAL**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>* Próxima disponível</td>
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
      <td>N</td>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">ID ALCADA</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">IDALC</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Identificador do Controle de Alcadas.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **EA_X_DOC**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>* Próxima disponível</td>
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
      <td colspan="7">Num. Doc.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Número Documento.</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Numero/Codigo do Documento com integracao no Controle de Alcadas.
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **EA_X_STS**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>* Próxima disponível</td>
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
      <td colspan="7">Status Aprov</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Status da Aprovação</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Status do movimento de alçada:<br>
1 - Aguardando Aprovacao<br>
2 - Aguardando Aprov. Nivel Anterior<br>
3 - Aprovado<br>
4 - Transferido p/ outro Aprovador<br>
5 - Reprovado<br>
6 - Nivel Anterior Reprovado
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **EA_X_SOL**</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Tipo</th>
      <td>C</td>
      <th>Ordem</th>
      <td>* Próxima disponível</td>
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
      <td colspan="7">Solicitante</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Usuario Solicitante</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Codigo do Usuario Solicitante
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

</div>
</details>

<!--############################################### 07 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">07.</span> Parâmetros (SX6)</span>
</summary>
<div class="content-body" markdown="1">

### 7. Parâmetros (SX6)

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
      <td><strong>MV_CTLIPAG</strong></td>
      <td>Lógico</td>
      <td>Controla as baixas a pagar através da data de liberação preenchida, caso .T. o sistema verifica se o campo E2_DATALIB está preenchido, caso contrário não controla.</td>
      <td>T</td>
    </tr>
    <tr>
      <td><strong>MV_VLMINPG</strong></td>
      <td>Numérico</td>
      <td>Valor mínimo para executar a baixa do título, mesmo que o campo E2_DATALIB não esteja preenchido e o parâmetro MV_CTLIPAG seja .T.</td>
      <td>0</td>
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

### 8. Gatilhos (SX7)

!!! tip "Ver manual do Addon [**Alçadas - Regras**](/addon-alcadas-regras/#8-gatilhos-sx7) na seção "8. Gatilhos"." 

</div>
</details>

<!--############################################### 09 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">09.</span> Índices (SIX)</span>
</summary>
<div class="content-body" markdown="1">

### 9. Índices (SIX)

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
      <td><strong>SE2</strong></td>
      <td>* Próxima disponível</td>
      <td>E2_FILIAL+E2_X_IDAL</td>
      <td>ID ALCADA</td>
      <td>SE2ALC</td>      
    </tr>    
    <tr>
      <td><strong>SEA</strong></td>
      <td>* Próxima disponível</td>
      <td>EA_FILIAL+EA_X_IDAL</td>
      <td>ID ALCADA</td>
      <td>SEAALC</td>      
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

### 10. Consulta Padrão (SXB)

!!! tip "Ver manual do Addon [**Alçadas - Regras**](/addon-alcadas-regras/#10-consulta-padrao-sxb) na seção "10. Consulta Padrão (SXB)"." 

</div>
</details>

<!--############################################### 11 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">11.</span> Manual de operação</span>
</summary>
<div class="content-body" markdown="1">

### 11. Manual de operação

#### 1. Cadastro


</div>
</details>

<hr>

<div style="text-align: center; margin-top: 20px;">
  <a href="/" class="md-button" style="text-decoration: none;">← Voltar para a Página Inicial</a>
</div>
<hr>