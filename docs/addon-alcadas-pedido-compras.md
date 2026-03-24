# Alçadas - Workflow Pedido de Compras {.home-hero}

<!--############################################### 01 #######################################################-->

<div class="grid cards" markdown>

-   __Conteúdo em Desenvolvimento__
    
    Esta seção do manual técnico está passando por revisões de conformidade e formatação. Os modelos de dados e procedimentos operacionais estão sendo validados para garantir a precisão das instruções técnicas. O conteúdo completo estará disponível em breve.

</div>

<div class="confluence-card" markdown="1">

<details class="custom-expand" open markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">01.</span> Visão Geral</span>
</summary>
<div class="content-body" markdown="1">

### 1. Visão Geral

#### Sistema customizado para gestão de aprovações integradas ao módulo de Compras.

<strong>Principais vantagens do produto:</strong>

- Solicitação de Compras (MATA110) – validação das regras de alçadas;
- Gera Cotações (MATA130) – filtro para solicitações aprovadas por alçadas;
- Analisa Cotações (MATA160) – geração do pedido de compra com validação das regras de alçadas;
- Pedido de Compras (MATA120) – validação das regras de alçadas, filtro para solicitações aprovadas por alçadas;
- Documento de Entrada (MATA103) – filtro para pedidos de compra aprovados por alçadas;
- Aprovação/Rejeição de Solicitação de Compra - via Workflow;
- Aprovação/Rejeição de Pedido de Compra - via Workflow;
- Consulta Status de Aprovação da SC e PC em alçadas;


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
  <span class="summary-title"><span class="summary-number">03.</span> Fluxo Operacional</span>
</summary>
<div class="content-body" markdown="1">

### 3. Fluxo Operacional

![Fluxo Operacional](./assets/alcadaswfcadastrais/fluxograma.png){.flow-image}

</div>
</details>

<!--############################################### 04 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">04.</span> Rotinas personalizadas específicas do Pacote</span>
</summary>
<div class="content-body" markdown="1">

### 4. Rotinas personalizadas específicas do Pacote

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
      <td><strong>M001C01</strong></td>
      <td>Rotina para retorno do processo de Workflow – Solicitação de Compras</td>
    </tr>
    <tr>
      <td><strong>M001C02</strong></td>
      <td>Rotina para retorno do processo de Workflow – Pedido de Compras</td>
    </tr>
    <tr>
      <td><strong>P001C01</strong></td>
      <td>Rotina centralizadora das chamadas dos Pontos de Entrada de Pedido de Compras, Analisa Cotação e Documento de Entrada</td>
    </tr>
    <tr>
      <td><strong>T001C01</strong></td>
      <td>Rotina para Tela de Consulta Alçadas na rotina Solicitação de Compras</td>
    </tr>
    <tr>
      <td><strong>T001C02</strong></td>
      <td>Rotina para Tela de Consulta Alçadas na rotina Pedido de Compras</td>
    </tr>
    <tr>
      <td><strong>UPD001C</strong></td>
      <td>Rotina de aplicação do template</td>
    </tr>
    <tr>
      <td><strong>W001C01</strong></td>
      <td>Rotina para geração do Workflow de liberação da Solicitação de Compras</td>
    </tr>
    <tr>
      <td><strong>W001C02</strong></td>
      <td>Rotina para geração do Workflow de Aviso da Aprovação/Rejeição da Solicitação de Compras</td>
    </tr>
    <tr>
      <td><strong>W001C03</strong></td>
      <td>Rotina para geração do Workflow de liberação do Pedido de Compra</td>
    </tr>
    <tr>
      <td><strong>W001C04</strong></td>
      <td>Rotina para geração do Workflow de Aviso da Aprovação/Rejeição do Pedido de Compra</td>
    </tr>
  </tbody>
</table>

</div>
</details>

<!--############################################### 05 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">05.</span> Pontos de Entradas Disponiveis para Desenvolvimento</span>
</summary>
<div class="content-body" markdown="1">

### 5. Pontos de Entradas Disponiveis para Desenvolvimento

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
      <td><strong>A120F4FI</strong></td>
      <td>Ponto de entrada na rotina pedido de compra para filtro na Tabela SC1 ao acionar a tecla F5 no campo C7_PRODUTO</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">A120F4FI</span>
  </div>
  <pre><code>  
User Function A120F4FI()
Local aArea := GetArea()
Local aRet  := {}
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
   aRet := U_P001C02("A120F4FI", PARAMIXB)   
EndIf
RestArea(aArea)
Return(aRet)    
</div>
</code></pre>
      </td>      
    </tr>
    <tr>
      <td><strong>A120PIDF</strong></td>
      <td>Ponto de entrada na rotina de Pedido de Compra para filtro na Tabelas SC1 ao acionar a tecla de atalho F4 nos itens</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">A120PIDF</span>
  </div>
  <pre><code>  
User Function A120PIDF()
Local aArea := GetArea()
Local aRet  := {}
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
   aRet := U_P001C02("A120PIDF", PARAMIXB)   
EndIf
RestArea(aArea)
Return(aRet)
</div>
</code></pre>
      </td>      
    </tr>
    <tr>
      <td><strong>M110STTS</strong></td>
      <td>Ponto de entrada na rotina de Solicitação de Compras após a gravação da Solicitação em inclusão, alteração, exclusão.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">M110STTS</span>
  </div>
  <pre><code>  
User Function M110STTS()
Local aArea := GetArea()
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C01")
   U_P001C01("M110STTS", PARAMIXB)   
EndIf
RestArea(aArea)
Return
</div>
</code></pre>
      </td>      
    </tr>
    <tr>
      <td><strong>M130FIL</strong></td>
      <td>Ponto de entrada na rotina de Geração da Cotação para adicionar Filtro sobre as solicitações de compra</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">M130FIL</span>
  </div>
  <pre><code>  
User Function M130FIL()
Local aArea := GetArea()
Local cRet  := ""
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C01")
   cRet := U_P001C01("M130FIL", PARAMIXB)   
EndIf
RestArea(aArea)
Return(cRet)
</div>
</code></pre>
      </td>      
    </tr>
    <tr>
      <td><strong>MT131FIL</strong></td>
      <td>Ponto de entrada na rotina de Geração da Cotação para adicionar Filtro sobre as solicitações de compra.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT131FIL</span>
  </div>
  <pre><code>  
User Function M130FIL()
Local aArea := GetArea()
Local cRet  := ""
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C01")
   cRet := U_P001C01("MT131FIL", PARAMIXB)   
EndIf
RestArea(aArea)
Return(cRet)
</div>
</code></pre>
      </td>      
    </tr>
    <tr>
      <td><strong>MT103QPC</strong></td>
      <td>Ponto de entrada na rotina de Análise da Cotação para filtro na Tabelas SC7 ao acionar as teclas de atalho F4/F5</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT103QPC</span>
  </div>
  <pre><code>  
User Function MT103QPC()
Local aArea := GetArea()
Local cRet := ""
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
   cRet := U_P001C02("MT103QPC", PARAMIXB)   
EndIf
RestArea(aArea)
Return(cRet)
</div>
</code></pre>
      </td>      
    </tr>
    <tr>
      <td><strong>MT110COR</strong></td>
      <td>Ponto de entrada na rotina de Solicitação de Compras para manipular o Array com as regras de cores da Mbrowse</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT110COR</span>
  </div>
  <pre><code>  
User Function MT110COR()
Local aArea := GetArea()
Local aNewCores := aClone(PARAMIXB[1])
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C01")
   aNewCores := U_P001C01("MT110COR", PARAMIXB)   
EndIf
RestArea(aArea)
Return(aNewCores)
</div>
</code></pre>
      </td>      
    </tr>
     <tr>
      <td><strong>MT110LEG</strong></td>
      <td>Ponto de entrada na rotina de Solicitação de Compras para adicionar legendas das cores na Dialog de legenda</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT110LEG</span>
  </div>
  <pre><code>  
User Function MT110LEG()
Local aArea := GetArea()
Local aCores := aClone(PARAMIXB[1])
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C01")
   aCores := U_P001C01("MT110LEG", PARAMIXB)   
EndIf
RestArea(aArea)
Return(aCores)
</div>
</code></pre>
      </td>      
    </tr> 
    <tr>
      <td><strong>MT110ROT</strong></td>
      <td>Ponto de entrada na rotina de Solicitação de Compras para adicionar mais opções no aRotina.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT110ROT</span>
  </div>
  <pre><code>  
User Function MT110ROT()
Local aArea := GetArea()
Local aRot := aClone(aRotina)
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C01")
   aRot := U_P001C01("MT110ROT", PARAMIXB)   
EndIf
RestArea(aArea)
Return(aRot)
</div>
</code></pre>
      </td>      
    </tr>  
    <tr>
      <td><strong>MT120BRW</strong></td>
      <td>Ponto de entrada na rotina de Pedido de Compra para adicionar opções no aRotina</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT120BRW</span>
  </div>
  <pre><code>  
User Function MT120BRW()
Local aArea := GetArea()
Local aRot := aClone(aRotina)
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
   aRot := U_P001C02("MT120BRW", aRot)   
EndIf
RestArea(aArea)
Return(aRot)
</div>
</code></pre>
      </td>      
    </tr>  
    <tr>
      <td><strong>MT120COR</strong></td>
      <td>Ponto de entrada na rotina de Pedido de Compra para manipular o Array com as regras de cores da Mbrowse</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT120COR</span>
  </div>
  <pre><code>  
User Function MT120COR()
Local aArea := GetArea()
Local aNewCores := aClone(PARAMIXB[1])
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
   aNewCores := U_P001C02("MT120COR", aNewCores)   
EndIf
RestArea(aArea)
Return(aNewCores)
</div>
</code></pre>
      </td>      
    </tr>  
    <tr>
      <td><strong>MT120FIM</strong></td>
      <td>Ponto de entrada na rotina de Pedido de Compra após finalizar a gravação no final da função A120PEDIDO em inclusão, alteração, exclusão</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT120FIM</span>
  </div>
  <pre><code>  
User Function MT120FIM()
Local aArea := GetArea()
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
   U_P001C02("MT120FIM", PARAMIXB)   
EndIf
RestArea(aArea)
Return
</div>
</code></pre>
      </td>      
    </tr>  
    <tr>
      <td><strong>MT120LEG</strong></td>
      <td>Ponto de entrada na rotina de Pedido de Compra para adicionar legendas das cores na Dialog de legenda</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT120LEG</span>
  </div>
  <pre><code>  
User Function MT120LEG()
Local aArea := GetArea()
Local aCores := aClone(PARAMIXB[1])
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
   aCores := U_P001C02("MT120LEG", aCores)   
EndIf
RestArea(aArea)
Return(aCores)
</div>
</code></pre>
      </td>      
    </tr>  
    <tr>
      <td><strong>MT120SCR</strong></td>
      <td>Ponto de entrada na rotina de Pedido de Compra na montagem da tela do pedido</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT120SCR</span>
  </div>
  <pre><code>  
User Function MT120SCR()
Local aArea := GetArea()
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
   U_P001C02("MT120SCR", PARAMIXB)   
EndIf
RestArea(aArea)
Return
</div>
</code></pre>
      </td>      
    </tr>  
    <tr>
      <td><strong>MT160WF</strong></td>
      <td>Ponto de entrada na rotina de Análise da Cotação após a geração dos pedidos de compras</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT160WF</span>
  </div>
  <pre><code>  
User Function MT160WF()
Local aArea := GetArea()
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do Template de Alçadas (Bloqueio SC/PC)     ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
   U_P001C02("MT160WF", PARAMIXB)   
EndIf
RestArea(aArea)
Return
</div>
</code></pre>
      </td>      
    </tr>  
    <tr>
      <td><strong>MT103FIM</strong></td>
      <td>Ponto de entrada na rotina de Nota Fiscal de Enttrada, após finalizar a gravação.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT103FIM</span>
  </div>
  <pre><code>  
User Function MT103FIM()
Local aArea := GetArea()
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (Bloqueio SC/PC)       ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
    U_P001C02("MT103FIM", PARAMIXB)   
EndIf
RestArea(aArea)
Return
</div>
</code></pre>
      </td>      
    </tr>  
    <tr>
      <td><strong>MT106SC1</strong></td>
      <td>Ponto de entrada na rotina de geração de pré-requisição ao gerar uma solicitação de compras.</td>
      <td>
<div class="advpl-editor">
  <div class="header">
    <span class="title">ADVPL</span>
    <span class="filename">MT106SC1</span>
  </div>
  <pre><code>  
User Function MT106SC1 ()
Local aArea := GetArea()
//ÚÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
//³ Chamada específica para uso do ADD-ON de Alçadas (Bloqueio SC/PC)       ³
//ÀÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄÄ
If ExistBlock("P001C02")
    U_P001C02("MT106SC1", PARAMIXB[2])   
EndIf
RestArea(aArea)
Return
</div>
</code></pre>
      </td>      
    </tr>          
  </tbody>
</table>

</div>
</details>

<!--############################################### 06 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">06.</span> Tabelas (SX2) </span>
</summary>
<div class="content-body" markdown="1">

### 6. Tabelas (SX2) 

!!! tip "Ver manual do Addon [**Alçadas - Regras**](/addon-alcadas-regras/#6-campos-sx3) na seção "6. Tabelas (SX2)"." 

</div>
</details>

<!--############################################### 07 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">07.</span> Campos (SX3)</span>
</summary>
<div class="content-body" markdown="1">

### 7. Campos (SX3)

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **C1_X_IDAL**</span>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **C1_X_DOC**</span>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **C1_X_STS**</span>
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
      <td colspan="7">Status Aprov.</td>
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
<strong>1</strong> - Aguardando Aprovacao<br>
<strong>2</strong> - Aguardando Aprov. Nivel Anterior<br>
<strong>3</strong> - Aprovado<br>
<strong>4</strong> - Transferido p/ outro Aprovador<br>
<strong>5</strong> - Reprovado<br>
<strong>6</strong> - Nivel Anterior Reprovado<br>

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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **C1_X_SOL**</span>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **C7_X_IDAL**</span>
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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **C7_X_DOC**</span>
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
      <td>Alterar</td>
      <th>Obrigatório</th>
      <td>N</td>
      <th>Browse</th>
      <td>N</d>
    </tr>
    <tr>
      <th>Título</th>
      <td colspan="7">Num. Doc.</td>
    </tr>
    <tr>
      <th>Descrição</th>
      <td colspan="7">Número Documento</td>
    </tr>
  </tbody>
</table>

#### **Help**

<div class="help-box" markdown="1">
Numero/Codigo do Documento com integracao no Controle de Alcadas.

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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **C7_X_STS**</span>
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
<strong>1</strong> - Aguardando Aprovacao<br>
<strong>2</strong> - Aguardando Aprov. Nivel Anterior<br>
<strong>3</strong> - Aprovado<br>
<strong>4</strong> - Transferido p/ outro Aprovador<br>
<strong>5</strong> - Reprovado<br>
<strong>6</strong> - Nivel Anterior Reprovado<br>

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
<span class="summary-title-sub"><span class="summary-number" style="color: #FF6000;">Campo</span> **C7_X_SOL**</span>
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

<!--############################################### 08 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">08.</span> Parâmetros (SX6)</span>
</summary>
<div class="content-body" markdown="1">

### 8. Parâmetros (SX6)

!!! tip "Ver manual do Addon [**Alçadas - Regras**](/addon-alcadas-regras/#7-parametros-sx6) na seção "7. Parametros"." 
    
</div>
</details>

<!--############################################### 09 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">09.</span> Gatilhos (SX7)</span>
</summary>
<div class="content-body" markdown="1">

### 9. Gatilhos (SX7)

!!! tip "Ver manual do Addon [**Alçadas - Regras**](/addon-alcadas-regras/#8-gatilhos-sx7) na seção "8. Gatilhos"." 

</div>
</details>

<!--############################################### 10 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">10.</span> Índices (SIX)</span>
</summary>
<div class="content-body" markdown="1">

### 10. Índices (SIX)

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
      <td><strong>Z00</strong></td>
      <td>1</td>
      <td>Z00_FILIAL+Z00_PROCES</td>
      <td>Funcao</td>
      <td></td>      
    </tr>    
    <tr>
      <td><strong>Z01</strong></td>
      <td>1</td>
      <td>Z01_FILIAL+Z01_PROCES+Z01_SEQ</td>
      <td>Processo + Sequencia</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>Z01</strong></td>
      <td>2</td>
      <td>Chave	Z01_FILIAL+Z01_PROCES+Z01_NIVEL</td>
      <td>Processo + Nivel</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>Z01</strong></td>
      <td>3</td>
      <td>Z01_FILIAL+Z01_PROCES+Z01_STATUS</td>
      <td>Processo + Regra Ativa?</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>Z01</strong></td>
      <td>4</td>
      <td>Chave	Z01_FILIAL+Z01_IDUSER</td>
      <td>Aprovador</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>Z02</strong></td>
      <td>1</td>
      <td>Z02_FILIAL+Z02_COD</td>
      <td>Codigo</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>Z02</strong></td>
      <td>2</td>
      <td>Z02_FILIAL+Z02_APROV</td>
      <td>Aprovador</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>Z02</strong></td>
      <td>3</td>
      <td>Z02_FILIAL+Z02_SUBST</td>
      <td>Substituto</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZA0</strong></td>
      <td>1</td>
      <td>ZA0_FILIAL+ZA0_COD+ZA0_SEQ+ZA0_NIVEL</td>
      <td>Codigo + Sequencia + Nivel</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>Z03</strong></td>
      <td>2</td>
      <td>Z03_FILIAL+Z03_COD+Z03_IDUSER</td>
      <td>Codigo + Aprovador</td>
      <td></td>      
    </tr>  
    <tr>
      <td><strong>ZA0</strong></td>
      <td>3</td>
      <td>ZA0_FILIAL+ZA0_COD+ZA0_NIVEL+ZA0_SEQ</td>
      <td>Codigo + NivelAprov. + Sequencia</td>
      <td></td>      
    </tr> 
    <tr>
      <td><strong>SC5</strong></td>
      <td>Proxima Disponível</td>
      <td>C5_FILIAL+C5_X_IDAL</td>
      <td>IDALC</td>
      <td>SC5ALC</td>      
    </tr>   
  </tbody>
</table>

</div>
</details>

<!--############################################### 11 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">11.</span> Consulta Padrão (SXB)</span>
</summary>
<div class="content-body" markdown="1">

### 11. Consulta Padrão (SXB)

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
      <td>USRZ01</td>
      <td>UsuarioAlcadas</td>
      <td>ID, FULLNAME</td>
      <td>Nome Completo</td>      
    </tr>    
    <tr>
      <td><strong>DB</strong></td>
      <td>Z00</td>
      <td>Destinatarios WF</td>
      <td>Z00_PROCES, Z00_DESCRI, Z00_DEST</td>
      <td>Z00->Z00_PROCES</td>      
    </tr>      
  </tbody>
</table>

</div>
</details>


<!--############################################### 12 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">12.</span> Manual de operação</span>
</summary>
<div class="content-body" markdown="1">

### 12. Manual de operação

#### 1 Inclusão
#### 1.1 Acesso à Rotina e Inclusão

<strong>Caminho</strong>: Faturamento > Atualizações > Pedidos > Pedidos de Venda.<br>
<strong>Ação</strong>: Clique no botão "Incluir" para iniciar a digitação do novo pedido.

![](./assets/alcadaswfcadastrais/01_Inclusao_pedido_venda.png){.flow-image}

#### 1.2 Preenchimento dos Dados do Pedido

<strong>Cabeçalho</strong>: Selecione o Cliente (Ex: 000002 - Cliente Risco E) e a Condição de Pagamento (Ex: 002 - 30 dias).

![](./assets/alcadaswfcadastrais/02_selecao_cliente_risco.png){.flow-image}

<strong>Itens</strong>: Insira o produto (Ex: PRODUTO VENDA 1) e a quantidade desejada.<br>
<strong>Ação</strong>: Clique em "Confirmar" para salvar o registro.




#### 1.3 Solicitação de Liberação (Justificativa)

<strong>Interface</strong>: Devido às regras de negócio (neste caso, "Cliente Risco E"), o sistema não libera o pedido automaticamente e abre a janela "Observações do Solicitante".<br>
<strong>Ação</strong>: Digite a justificativa para a liberação (Ex: FAVOR LIBERAR ESTE PEDIDO. OBRIGADO.).<br>
<strong>Ação</strong>: Clique em "Ok" para concluir a gravação.

![](./assets/alcadaswfcadastrais/03_observacao_cliente_risco.png){.flow-image}

#### 1.4 Verificação do Status de Bloqueio

<strong>Análise Visual</strong>: Na tela principal de Pedidos de Venda, o pedido recém-criado (Ex: 000026) aparecerá com a legenda "Traço Vermelho".<br>
<strong>Legenda</strong>: Ao consultar Ações Relacionadas > Legenda, confirma-se que a traço vermelho indica "Pedido de Venda com Bloqueio de Alçada".<br>
<strong>Resultado</strong>: O pedido está agora aguardando a análise do aprovador via workflow para prosseguir para o faturamento.

![](./assets/alcadaswfcadastrais/06_legenda.png){.flow-image}

![](./assets/alcadaswfcadastrais/04_pedido_com_bloqueio.png){.flow-image}


#### 2. Aprovação via Workflow

#### 2.1 Consulta do Status do Pedido no ERP

<strong>Caminho</strong>: Faturamento > Atualizações > Pedidos > Pedidos de Venda.<br>
<strong>Ação</strong>: Selecionar o pedido desejado (Ex: Pedido 000026).<br>
<strong>Verificação de Legenda</strong>: Ao clicar em Ações Relacionadas > Legenda, observa-se que o pedido está com o "Traço vermelho", indicando "Pedido de Venda com Bloqueio de Alçada".<br>
<strong>Histórico de Aprovação</strong>: Em Ações Relacionadas > Workflow > Consultar, é possível visualizar que o documento está com o status "Aguardando Aprovação" para o usuário APROVADOR 01.<br>

![](./assets/alcadaswfcadastrais/08_consulta_aprovacao_documentos.png){.flow-image}

#### 2.2 Recebimento e Acesso ao Workflow (E-mail)

<strong>Ação</strong>: O aprovador recebe um e-mail com o assunto: "Liberar Pedido de Venda: [Número do Pedido]".<br>
<strong>Interface</strong>: O corpo do e-mail contém os dados básicos do pedido e um link/botão chamado "Processo".<br>
<strong>Ação</strong>: Clique no link "Processo" para abrir a interface de decisão no navegador.<br>

![](./assets/alcadaswfcadastrais/09_email_aguardando_lberacao.png){.flow-image}

#### 2.3 Execução da Aprovação/Rejeição (Web)

<strong>Interface</strong>: "Liberação de Pedido de Venda": Apresenta dados do cabeçalho (Cliente, Valor, Condição de Pagamento), itens do pedido, posição financeira do cliente e observações do solicitante.

![](./assets/alcadaswfcadastrais/10_liberacao_pedido_venda.png){.flow-image}

<strong>Ação de Decisão</strong>:<br>
<strong>No final da página</strong>, selecione a opção "Aprovado" (ou "Reprovado", se aplicável).<br>
<strong>No campo Observação</strong>, digite a justificativa ou nota (Ex: LIBERADO).<br>
<strong>Clique no botão</strong> "Enviar".<br>

![](./assets/alcadaswfcadastrais/11_resposta_enviada.png){.flow-image}

<strong>Confirmação</strong>: O navegador exibirá a mensagem: "Resposta enviada para o servidor".

#### 2.4 Validação da Liberação no ERP

<strong>Ação</strong>: Retorne à tela de Pedidos de Venda no Protheus.<br>
<strong>Resultado</strong>: O status do pedido mudará para a cor amarelo (Círculo Amarelo), indicando "Pedido de Venda Liberado".<br>
<strong>Auditoria</strong>: Ao consultar novamente em Ações Relacionadas > Workflow, o status aparecerá como "APROVADO", com a data, hora e a observação digitada no passo anterior.<br>

![](./assets/alcadaswfcadastrais/12_pedido_venda_liberado.png){.flow-image}

![](./assets/alcadaswfcadastrais/13_pedido_venda_liberado_consulta.png){.flow-image}

</div>
</details>

<hr>

<div style="text-align: center; margin-top: 20px;">
  <a href="/" class="md-button" style="text-decoration: none;">← Voltar para a Página Inicial</a>
</div>
<hr>