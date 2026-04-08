---
template: main.html
hide:  
  - toc
---

# Alçadas - Workflow Alçadas {.home-hero}

!!! warning "Esta seção do manual técnico está passando por revisões de conformidade e formatação. Os modelos de dados e procedimentos operacionais estão sendo validados para garantir a precisão das instruções técnicas. O conteúdo completo estará disponível em breve."

<!--############################################### 01 #######################################################-->

<div class="confluence-card" markdown="1">

<details class="custom-expand" open markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">01.</span> Visão Geral</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">1. Visão Geral</span>
Este produto tem como objetivo disponibilizar a um determinado grupo de usuários chaves, envolvidos de forma direta na validação das informações dos principais cadastros que impactam os processos de compras e faturamento, uma alçada por setor de revisão.

Para facilitar o entendimento, temos o seguinte cenário:

- Criação do Cadastro - Usuário faturista (não tem conhecimento contábil ou fiscal)<br>
- Fiscal - será responsável pela verificação dos campos obrigatórios no cadastro para atender questões legais/fiscais<br>
- Contábil - Será responsável pela verificação dos campos obrigatórios no cadastro para atender questões contábies<br>

Em cenário hipotético teríamos uma pessoa responsável para cada revisão: criação, alterações fiscais, alterações cadastrais.

Uma vez revisado pelo nivel de criação, um Workflow é enviado para o próximo da alçada (fiscal) notificando da sua ação sobre o referido cadastro e uma vez o processo finalizado pelo nivel do fiscal , é enviado outro workflow para o próximo da alçada, uma vez o processo finalizado por este ultimo nivel o processo é encerrado

OS niveis de alçada são parametrizáveis (cascata ou escalável)

Os principais cadastros mapeados são:

- Cadastro de Cliente<br>
- Cadastro de Fonecedor
- Cadastro de Produto
- Cadastro de Indicador de Produtos
- Cadastro de Natureza

Nas rotinas acima mapeadas é disponibilizado funcionalidade de rastreabilidade.

Este add-on implementa o controle de alçadas em processos cadastrais, utilizando recursos de Workflow e Rastreabilidade.

Permite definir cadastros sujeitos à aprovação, estruturar fluxos de alçadas e automatizar a comunicação entre os responsáveis por e-mail, garantindo controle e visibilidade do processo.

<strong>Principais vantagens do produto:</strong>

 - Maior controle dos processos cadastrais; <br>
Permite definir regras de aprovação por alçada, evitando alterações indevidas.
 - Automatização de fluxos de aprovação; <br>
Reduz atividades manuais com uso de Workflow configurável.
 - Rastreabilidade completa; <br>
Possibilita acompanhar todo o histórico do processo, desde a solicitação até a aprovação final.
 - Comunicação automatizada; <br>
Envio de e-mails para os responsáveis em cada etapa do processo, garantindo agilidade.
 - Flexibilidade de configuração; <br>
Permite configurar diferentes processos e status diretamente pelo módulo configurador (SIGACFG).
 - Padronização dos processos; <br>
Garante que todos os cadastros sigam um fluxo definido e auditável.

</div>
</details>

<!--############################################### 02 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">02.</span> Menu</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">2. Menu</span>

!!! tip "Não se aplica"


</div>
</details>

<!--############################################### 03 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">03.</span> Arquivos do WorkFlow</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">3. Arquivos do Workflow</span>

Copiar os seguintes arquivos do Pacote para a pasta de trabalho do Workflow (protheus_data\web), configurado através do parâmetro MV_WFDIR:

<table class="banks-table">
  <thead>
    <tr>
      <th>Arquivo</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>W009a01.htm</strong></td>
      <td>Layout do e-mail enviado via WORKFLOW para os responsáveis da alçada.</td>
    </tr>
    <tr>
      <td><strong>Totvs.png</strong></td>
      <td>Logotipo marca registrada TOTVS encaminhado via e-mail.</td>
    </tr>
    <tr>
      <td><strong>lgemp9901.png</strong></td>
      <td>Logotipo da Empresa EE (Empresa = 01) FF (Filial = 01). <br>
          Tamanho padrão para a imagem 110 x 110 Pixels.
</td>
    </tr>

</div>
</details>

<!--############################################### 04 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">04.</span> Rotinas personalizadas específicas do Pacote</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">4. Rotinas personalizadas específicas do Pacote</span>

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
      <td><strong>P009A01</strong></td>
      <td>Rotina centralizadora para implementação de Pontos de Entrada do módulo de Compras.</td>
    </tr>
    <tr>
      <td><strong>UPD009A</strong></td>
      <td>Programa compatibilizador do Dicionário de Dados para aplicação do ADD-ON.</td>
    </tr>
    <tr>
      <td><strong>W009A01</strong></td>
      <td>Função responsável pelo controle do processo de alçadas cadastrais, envio do Workflow aos usuários relacionados.</td>
    </tr>
  </tbody>
</table>

</div>
</details>

<!--############################################### 05 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">05.</span> Pontos de Entradas Específicos</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">5. Pontos de Entradas Específicos</span>

<table class="banks-table">
  <thead>
    <tr>
      <th>Nome</th>
      <th>Chamada</th>     
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>FIN010ALT</strong></td>
      <td>U_P009A01("FIN010ALT", PARAMIXB)</td>
    </tr>    
    <tr>
      <td><strong>FIN010INC</strong></td>
      <td>U_P009A01("FIN010INC", PARAMIXB)</td>
    </tr>
      <tr>
      <td><strong>M020ALT</strong></td>
      <td>U_P009A01("M020ALT", PARAMIXB)</td>
    </tr>
    <tr>
      <td><strong>M020INC</strong></td>
      <td>U_P009A01("M020INC", PARAMIXB)</td>
    </tr>
    <tr>
      <td><strong>MALTCLI</strong></td>
      <td>U_P009A01("MALTCLI", PARAMIXB)</td>
    </tr>
    <tr>
      <td><strong>M030INC</strong></td>
      <td>U_P009A01("M030INC", PARAMIXB)</td>
    </tr>
    <tr>
      <td><strong>MA020ROT</strong></td>
      <td>U_P009A01("MA020ROT", PARAMIXB)</td>
    </tr>
    <tr>
      <td><strong>MA030ROT</strong></td>
      <td>U_P009A01("MA030ROT", PARAMIXB)</td>
    </tr>
    <tr>
      <td><strong>MT010ALT</strong></td>
      <td>U_P009A01("MT010ALT", PARAMIXB)</td>
    </tr>
    <tr>
      <td><strong>MT010BRW</strong></td>
      <td>U_P009A01("MT010BRW", PARAMIXB)</td>
    </tr>
    <tr>
      <td><strong>MT010INC</strong></td>
      <td>U_P009A01("MT010INC", PARAMIXB)</td>
    </tr>
                      
  </tbody>
</table>

</div>
</details>

<!--############################################### 06 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">06.</span> Campos padrões (WF1, WF2, B1) 
  </span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">6. Campos padrões (WF1, WF2, B1)</span>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub">
<span class="summary-number" style="color: #FF6000;">Campo</span><strong>WF1_X_HTML</strong>
</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Ordem</th>
      <td></td>
    </tr>
    <tr>
      <th>TIPO</th>
      <td>C</td>
    </tr>
    <tr>
      <th>TAMANHO</th>
      <td>1</td>
    </tr>
    <tr>
      <th>DECIMAL</th>
      <td>0</td>
    </tr>
    <tr>
      <th>FORMATO</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>CONTEXTO</th>
      <td>Real</td>
    </tr>
    <tr>
      <th>PROPRIEDADE</th>
      <td>Alterar</td>
    </tr>
    <tr>
      <th>TÍTULO</th>
      <td>-</td>
    </tr>
    <tr>
      <th>DESCRIÇÃO</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Não se aplica.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
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
     <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Consulta F3</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Usado</th>
      <td>-</td>
    </tr>
     <tr>
      <th>Obrigatório</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Browse</th>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>
</details>

  <details class="field-expand" markdown="1">
  <summary markdown="1">
  <span class="summary-title-sub">
  <span class="summary-number" style="color: #FF6000;">Campo</span><strong>WF1_X_EVID</strong>
  </span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Ordem</th>
      <td></td>
    </tr>
    <tr>
      <th>TIPO</th>
      <td>C</td>
    </tr>
    <tr>
      <th>TAMANHO</th>
      <td>1</td>
    </tr>
    <tr>
      <th>DECIMAL</th>
      <td>0</td>
    </tr>
    <tr>
      <th>FORMATO</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>CONTEXTO</th>
      <td>Real</td>
    </tr>
    <tr>
      <th>PROPRIEDADE</th>
      <td>Visualizar</td>
    </tr>
    <tr>
      <th>TÍTULO</th>
      <td>-</td>
    </tr>
    <tr>
      <th>DESCRIÇÃO</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Não se aplica.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
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
     <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Consulta F3</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Usado</th>
      <td>-</td>
    </tr>
     <tr>
      <th>Obrigatório</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Browse</th>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>
</details>

  <details class="field-expand" markdown="1">
  <summary markdown="1">
  <span class="summary-title-sub">
  <span class="summary-number" style="color: #FF6000;">Campo</span><strong>WF2_X_MSG</strong>
  </span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Ordem</th>
      <td></td>
    </tr>
    <tr>
      <th>TIPO</th>
      <td>C</td>
    </tr>
    <tr>
      <th>TAMANHO</th>
      <td>6</td>
    </tr>
    <tr>
      <th>DECIMAL</th>
      <td>0</td>
    </tr>
    <tr>
      <th>FORMATO</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>CONTEXTO</th>
      <td>Real</td>
    </tr>
    <tr>
      <th>PROPRIEDADE</th>
      <td>Visualizar</td>
    </tr>
    <tr>
      <th>TÍTULO</th>
      <td>-</td>
    </tr>
    <tr>
      <th>DESCRIÇÃO</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Não se aplica.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
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
     <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Consulta F3</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Usado</th>
      <td>-</td>
    </tr>
     <tr>
      <th>Obrigatório</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Browse</th>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>
</details>

<details class="field-expand" markdown="1">
<summary markdown="1">
<span class="summary-title-sub">
<span class="summary-number" style="color: #FF6000;">Campo</span><strong>WF2_X_TIPO</strong>
</span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Ordem</th>
      <td></td>
    </tr>
    <tr>
      <th>TIPO</th>
      <td>C</td>
    </tr>
    <tr>
      <th>TAMANHO</th>
      <td>60</td>
    </tr>
    <tr>
      <th>DECIMAL</th>
      <td>0</td>
    </tr>
    <tr>
      <th>FORMATO</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>CONTEXTO</th>
      <td>Real</td>
    </tr>
    <tr>
      <th>PROPRIEDADE</th>
      <td>Visualizar</td>
    </tr>
    <tr>
      <th>TÍTULO</th>
      <td>-</td>
    </tr>
    <tr>
      <th>DESCRIÇÃO</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Não se aplica.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
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
     <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Consulta F3</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Usado</th>
      <td>-</td>
    </tr>
     <tr>
      <th>Obrigatório</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Browse</th>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>
</details>

  <details class="field-expand" markdown="1">
  <summary markdown="1">
  <span class="summary-title-sub">
  <span class="summary-number" style="color: #FF6000;">Campo</span><strong>WF2_X_RULE</strong>
  </span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Ordem</th>
      <td></td>
    </tr>
    <tr>
      <th>TIPO</th>
      <td>C</td>
    </tr>
    <tr>
      <th>TAMANHO</th>
      <td>1</td>
    </tr>
    <tr>
      <th>DECIMAL</th>
      <td>0</td>
    </tr>
    <tr>
      <th>FORMATO</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>CONTEXTO</th>
      <td>Real</td>
    </tr>
    <tr>
      <th>PROPRIEDADE</th>
      <td>Visualizar</td>
    </tr>
    <tr>
      <th>TÍTULO</th>
      <td>-</td>
    </tr>
    <tr>
      <th>DESCRIÇÃO</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Não se aplica.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
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
     <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Consulta F3</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Usado</th>
      <td>-</td>
    </tr>
     <tr>
      <th>Obrigatório</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Browse</th>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>
</details>

  <details class="field-expand" markdown="1">
  <summary markdown="1">
  <span class="summary-title-sub">
  <span class="summary-number" style="color: #FF6000;">Campo</span><strong>B1_X_WFID</strong>
  </span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Ordem</th>
      <td></td>
    </tr>
    <tr>
      <th>TIPO</th>
      <td>C</td>
    </tr>
    <tr>
      <th>TAMANHO</th>
      <td>50</td>
    </tr>
    <tr>
      <th>DECIMAL</th>
      <td>0</td>
    </tr>
    <tr>
      <th>FORMATO</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>CONTEXTO</th>
      <td>Real</td>
    </tr>
    <tr>
      <th>PROPRIEDADE</th>
      <td>Alterar</td>
    </tr>
    <tr>
      <th>TÍTULO</th>
      <td>-</td>
    </tr>
    <tr>
      <th>DESCRIÇÃO</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Não se aplica.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
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
     <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Consulta F3</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Usado</th>
      <td>-</td>
    </tr>
     <tr>
      <th>Obrigatório</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Browse</th>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>
</details>

  <details class="field-expand" markdown="1">
  <summary markdown="1">
  <span class="summary-title-sub">
  <span class="summary-number" style="color: #FF6000;">Campo</span><strong>B1_X_WFST</strong>
  </span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Ordem</th>
      <td></td>
    </tr>
    <tr>
      <th>TIPO</th>
      <td>C</td>
    </tr>
    <tr>
      <th>TAMANHO</th>
      <td>1</td>
    </tr>
    <tr>
      <th>DECIMAL</th>
      <td>0</td>
    </tr>
    <tr>
      <th>FORMATO</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>CONTEXTO</th>
      <td>Real</td>
    </tr>
    <tr>
      <th>PROPRIEDADE</th>
      <td>Alterar</td>
    </tr>
    <tr>
      <th>TÍTULO</th>
      <td>-</td>
    </tr>
    <tr>
      <th>DESCRIÇÃO</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Não se aplica.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
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
     <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Consulta F3</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Usado</th>
      <td>-</td>
    </tr>
     <tr>
      <th>Obrigatório</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Browse</th>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>
</details>

  <details class="field-expand" markdown="1">
  <summary markdown="1">
  <span class="summary-title-sub">
  <span class="summary-number" style="color: #FF6000;">Campo</span><strong>B1_X_WFTK</strong>
  </span>
</summary>
<div class="content-body" markdown="1">
<table class="banks-table">
  <tbody>
    <tr>
      <th>Ordem</th>
      <td></td>
    </tr>
    <tr>
      <th>TIPO</th>
      <td>C</td>
    </tr>
    <tr>
      <th>TAMANHO</th>
      <td>1</td>
    </tr>
    <tr>
      <th>DECIMAL</th>
      <td>0</td>
    </tr>
    <tr>
      <th>FORMATO</th>
      <td>@!</td>
    </tr>
    <tr>
      <th>CONTEXTO</th>
      <td>Real</td>
    </tr>
    <tr>
      <th>PROPRIEDADE</th>
      <td>Alterar</td>
    </tr>
    <tr>
      <th>TÍTULO</th>
      <td>-</td>
    </tr>
    <tr>
      <th>DESCRIÇÃO</th>
      <td>-</td>
    </tr>
  </tbody>
</table>
#### **Help**
<div class="help-box" markdown="1">
Não se aplica.
</div>
#### **Configurações adicionais**
<table class="banks-table">
  <tbody>
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
     <tr>
      <th>Modo Edição</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Consulta F3</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Val Usuário</th>
      <td>-</td>
    </tr>
    <tr>
      <th>Usado</th>
      <td>-</td>
    </tr>
     <tr>
      <th>Obrigatório</th>
      <td>N</td>
    </tr>
    <tr>
      <th>Browse</th>
      <td>N</td>
    </tr>
  </tbody>
</table>
</div>

</div>
</details>


<!--############################################### 07 #######################################################-->

<details class="custom-expand" markdown="1">
<summary markdown="1">
  <span class="summary-title"><span class="summary-number">07.</span> Manual de operação</span>
</summary>
<div class="content-body" markdown="1">

### <span style="display: none;">12. Manual de operação</span>

#### 1. Cadastros




</div>
</details>

<hr>

<div style="text-align: center; margin-top: 20px;">
  <a href="/" class="md-button" style="text-decoration: none;">← Voltar para a Página Inicial</a>
</div>
<hr>