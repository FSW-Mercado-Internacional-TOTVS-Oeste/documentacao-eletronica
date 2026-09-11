---
template: main.html
hide:
  - navigation
  - toc
---

<!--
  * Vinicius Marques - 07/05/2026
  * Atualização do Titulo Hero e Ajustes do Padding no CSS
-->

<div class="fs-home">

  <!-- ░░ HERO ░░ -->
  <section class="fs-hero">
    <div class="fs-hero__bg">
      <div class="fs-hero__grid"></div>
    </div>
    <div class="fs-hero__inner">
      <div class="fs-hero__badge">
        <span class="fs-hero__badge-dot"></span>
        Documentação Técnica · TOTVS Protheus
      </div>
      <h1 class="fs-hero__title">Documentação<br><span>Eletrônica</span></h1>
      <p class="fs-hero__subtitle">Módulos, integrações e add-ons desenvolvidos para ampliar e aperfeiçoar os processos do Protheus.</p>
      <div class="fs-hero__stats">
        <div class="fs-hero__stat">
          <span class="fs-hero__stat-num">25</span>
          <span class="fs-hero__stat-label">Projetos</span>
        </div>
        <div class="fs-hero__stat-div"></div>
        <div class="fs-hero__stat">
          <span class="fs-hero__stat-num">14</span>
          <span class="fs-hero__stat-label">Módulos</span>
        </div>
        <div class="fs-hero__stat-div"></div>
        <div class="fs-hero__stat">
          <span class="fs-hero__stat-num">ADDONS</span>
          <span class="fs-hero__stat-label">Protheus</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ░░ PROJETOS ░░ -->
  <div class="fs-projects">
    <!-- FS99_001 -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_001</div>
        <h2 class="fs-project__title">Alçadas & Workflow</h2>
        <p class="fs-project__desc">Controle de alçadas com aprovação via Workflow integrado aos principais processos do ERP.</p>
      </div>
      <div class="fs-cards">
        <a href="addon-alcadas-regras" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - Alçadas — Regras</h3>
            <p class="fs-card__text">Rotina customizada para controle de alçadas com aprovação via Workflow, integrando processos básicos do ERP.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-alcadas-pedido-venda" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">B - Workflow — Pedido de Venda</h3>
            <p class="fs-card__text">Controle de alçadas integrado ao bloqueio por crédito em Pedidos de Venda.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-alcadas-pedido-compras" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">C - Workflow — Pedidos de Compras / Solicitação de compra</h3>
            <p class="fs-card__text">Alçadas integradas aos processos do módulo Compras do Protheus.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-alcadas-contas-pagar" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">D - Workflow — Contas a Pagar</h3>
            <p class="fs-card__text">Alçadas integradas a Títulos a Pagar e Borderô a Pagar do módulo Financeiro.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>        
      </div>        
    </section>    
    <!-- FS99_003 -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_003</div>
        <h2 class="fs-project__title">CNAB — Integração Bancária</h2>
        <p class="fs-project__desc">Gestão completa de arquivos de remessa, retorno e extrato para integração bancária automatizada.</p>
      </div>
      <div class="fs-cards">
        <a href="addon-cnab-a-receber" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - CNAB — A Receber</h3>
            <p class="fs-card__text">Gestão eficiente de arquivos de remessa e retorno para cobrança bancária automatizada.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-cnab-a-pagar" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">B - CNAB — A Pagar</h3>
            <p class="fs-card__text">Controle total de pagamentos a fornecedores e tributos via integração bancária.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-cnab-folha" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">C - CNAB — Folha</h3>
            <p class="fs-card__text">Processamento seguro de arquivos de pagamento de salários e benefícios.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-cnab-extrato-bancario" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">D - CNAB — Extrato Bancário</h3>
            <p class="fs-card__text">Conciliação bancária ágil com importação automática de extratos multifuncionais.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
      </div>      
    </section>
    <!-- FS99_004 -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_004</div>
        <h2 class="fs-project__title">XML</h2>
        <p class="fs-project__desc">Destina-se ao gerenciamento de XMLs de NF-e e CT-e recebidos de terceiros.</p>
      </div>
      <div class="fs-cards">
        <a href="addon-xml-terceiro" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - Importação de XML</h3>
            <p class="fs-card__text">Realiza a gestão de documentos fiscais eletrônicos (NF-e e CT-e) de terceiros.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>       
      </div>
    </section>
    <!-- FS99_006 -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_006</div>
        <h2 class="fs-project__title">Comissões</h2>
        <p class="fs-project__desc">Implementação de lógica customizável para definição e cálculo de comissões de venda</p>
      </div>
      <div class="fs-cards">
        <a href="addon-comissoes-faturamento" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - Comissões — Faturamento</h3>
            <p class="fs-card__text">Flexibiliza as regras para composição das comissões de venda.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>       
      </div>
    </section>
     <!-- FS99_007 -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_007</div>
        <h2 class="fs-project__title">Laticínios</h2>
        <p class="fs-project__desc">Gestão customizada dos processos da indústria de laticínios.</p>
      </div>
      <div class="fs-cards">
        <a href="addon-leite" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - ADDON Leite</h3>
            <p class="fs-card__text">Gerencia o ciclo completo de produção e comercialização de leite.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>       
      </div>
    </section>    
    <!-- FS99_009 -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_009</div>
        <h2 class="fs-project__title">Workflow Cadastral</h2>
        <p class="fs-project__desc">Fluxo de aprovação para cadastros com notificação automática por e-mail.</p>
      </div>
      <div class="fs-cards">
        <a href="addon-alcadas-workflow-cadastrais" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - Alçadas Cadastrais</h3>
            <p class="fs-card__text">Controle de alçadas cadastrais via Workflow com e-mail automático.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>       
      </div>      
    </section>
    <!-- FS99_010A -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_010</div>
        <h2 class="fs-project__title">Mensagens DANFE</h2>
        <p class="fs-project__desc">Mensagens Fiscais x Operações</p>
      </div>
      <div class="fs-cards">
        <a href="addon-mensagens-danfe" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - Automação Fiscal x Operação</h3>
            <p class="fs-card__text">Este ADD-ON tem por objetivo automatizar a geração de mensagens Fiscais, Cliente e Produto nas operações de Venda / Compra .</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>       
      </div>
    </section>
 <!-- FS99_011A -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_011</div>
        <h2 class="fs-project__title">Plugins</h2>
        <p class="fs-project__desc">Integrações CRM</p>
      </div>
      <div class="fs-cards">
        <a href="addon-plugin-totvscrm" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - TOTVS CRM</h3>
            <p class="fs-card__text">Este ADD-ON tem por objetivo automatizar a integração entre a plataforma TOTVS CRM com o Protheus.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="em-construcao" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">B - RD STATION</h3>
            <p class="fs-card__text">Este ADD-ON tem por objetivo automatizar a integração entre a plataforma RD STATION com o Protheus.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>       
      </div>
    </section> 
    <!-- FS99_012A -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_012</div>
        <h2 class="fs-project__title">Cereais</h2>
        <p class="fs-project__desc">Originação de Grãos x Cultivos</p>
      </div>
      <div class="fs-cards">
        <a href="addon-mensagens-danfe" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - Gestão de Cereais</h3>
            <p class="fs-card__text">O Addon Gestão de Cereais é uma solução complementar ao ERP Totvs Microsiga Protheus com foco no atendimento de processos de originação de grãos.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-gestaocereais" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">B - Controle de Cultivos</h3>
            <p class="fs-card__text">Este ADD-ON permite realizar o controle simplificado da gestão de cultivos em áreas agrícolas com controle dos insumos e demais itens utilizados durante o ciclo de cultivo.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>       
      </div>
    </section> 
    <!-- FS99_013A -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FS99_013</div>
        <h2 class="fs-project__title">Separação / Expedição</h2>
        <p class="fs-project__desc">Controle de quantidade na separação e expedição de mercadorias.</p>
      </div>
      <div class="fs-cards">
        <a href="addon-rotina-expedicao" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - Rotina de Separação / Expedição - Faturamento</h3>
            <p class="fs-card__text">Este ADD-ON tem por objetivo aperfeiçoar o Processo de Expedição de mercadorias.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>       
      </div>
    </section> 
  <!-- FS99_998 -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_015</div>
        <h2 class="fs-project__title">Financeiro</h2>
        <p class="fs-project__desc">Automação/Gestão</p>
      </div>
      <div class="fs-cards">
        <a href="controle-de-cheques" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - DRE Financeiro</h3>
            <p class="fs-card__text">Permite gerar um demonstrativo de resultado/exercício (formato de relatório) sobre as movimentações financeiras</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-dre-financeiro" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">B - Controle de Cheques</h3>
            <p class="fs-card__text">Permite o controle do ciclo de utilização dos cheques recebidos como forma de pagamento sobre operações de venda.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>         
      </div>
    </section>
    <!-- FS99_016 -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_016</div>
        <h2 class="fs-project__title">Contabilidade</h2>
        <p class="fs-project__desc">Automação</p>
      </div>
      <div class="fs-cards">
        <a href="controle-de-cheques" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - Regras de Contabilização</h3>
            <p class="fs-card__text">Disponiliza ao usuário um conjunto de regras para otimizar à contabilização de movimentos além de funcionalidades que impactam diretamente na contablidade</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
      </div>
    </section>
        <!-- FS99_017 -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_017</div>
        <h2 class="fs-project__title">PCO</h2>
        <p class="fs-project__desc">Automação</p>
      </div>
      <div class="fs-cards">
        <a href="controle-de-cheques" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - Regras para PCO</h3>
            <p class="fs-card__text">disponibiliza uma pré-configuração padrão dos principais pontos de bloqueio e lançamento, permitindo que o ambiente já possua uma base inicial de parametrização</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
      </div>
    </section>    
    <!-- FS99_704 -->
    <section class="fs-project">
      <div class="fs-project__header">
        <div class="fs-project__tag">FSW99_018</div>
        <h2 class="fs-project__title">Aceleradores</h2>
        <p class="fs-project__desc">Facilitadores Implantação</p>
      </div>
      <div class="fs-cards">
        <a href="addon-acelerador-gatilho" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">A - Gatilho Cliente / Fornecedor / Produto</h3>
            <p class="fs-card__text">Gerador de código para cliente / fornecedor e produto</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a> 
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">B - UPD Tamanho Campos</h3>
            <p class="fs-card__text">Ajuste de tamanho/decimais campos numéricos</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">C - Campos Reservados</h3>
            <p class="fs-card__text">Facilitador para criação em massa de campos reservados</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">D - Consulta Genérica</h3>
            <p class="fs-card__text">Consulta Genérica para produtos, fornecedores e clientes</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">E - Importação Saldo Inicial</h3>
            <p class="fs-card__text">Permite através de um arquivo no padrão .CSV importar saldos de outro sistema e gerar os saldos iniciais no ERP</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">F - Carrega XML</h3>
            <p class="fs-card__text">Permite Importar arquivos XML para uma pasta especifica no TCLoud</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>      
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">G - Replica Tabelas</h3>
            <p class="fs-card__text">Permite onde existe a necessidade de ter duas bases rodando em paralelo (fiscal / gerencial) onde quando os dados de um servidor são gerados, devem ser replicados para outro servidor.</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">H - Impressão Pedido de Compra</h3>
            <p class="fs-card__text">Permite a impressão do pedido de compras (modo gráfico)</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">I - Impressão Pedido de Venda / Orçamento</h3>
            <p class="fs-card__text">Permite a impressão do pedido de vendas/orçamentos (impressão modo texto)</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
         <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">J - Impressão Duplicata / Recibos</h3>
            <p class="fs-card__text">Permite que seja gerada a impressão de duplicata em modo gráfico</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">K - Impressão Recibo Baixas a Receber</h3>
            <p class="fs-card__text">Permite imprimir recibos de valores recebidos sobre títulos em modo gráfico</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">L - Taxa da Moeda</h3>
            <p class="fs-card__text">Possibilita que seja trabalhado com até 3 cotações distintas para as moedas configuradas no ERP Protheus</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>
        <a href="addon-acelerador-consultas-generica" class="fs-card">
          <div class="fs-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <div class="fs-card__body">
            <h3 class="fs-card__title">M - Simulação de Carga</h3>
            <p class="fs-card__text">Disponibiliza ao usuário uma interface onde é possível simular uma montagem de carga sobre pedidos de vendas.
</p>
          </div>
          <div class="fs-card__arrow">→</div>
        </a>            
      </div>
    </section> 
  </div><!-- /fs-projects -->

  <!-- ░░ CONTACT FOOTER ░░ -->
  <div class="fs-contact">
    <!-- <div class="fs-contact__glow"></div> -->
    <div class="fs-contact__inner">
      <p class="fs-contact__eyebrow">Suporte técnico</p>
      <h2 class="fs-contact__title">Como podemos ajudar?</h2>
      <p class="fs-contact__sub">Nossa equipe está pronta para auxiliar em dúvidas técnicas, implementações e customizações.</p>
      <a href="/suporte/" class="fs-contact__btn">
        Entre em contato
        <svg viewBox="0 0 20 20" fill="currentColor" width="18" height="18"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
      </a>
    </div>
  </div>

</div><!-- /fs-home -->
</div><!-- /fs-container -->
</div>