document.addEventListener('DOMContentLoaded', () => {
  // Dados do questionário (copiados do seu JSON original)
  const questionnaireData = {
    "sections": [
      {
        "name": "Fundamentos do Contrato da Agência",
        "weight": 0.30,
        "questions": [
          {"id":"F1","text":"Sua agência possui contratos específicos para cada tipo de produto ou serviço (como pacotes turísticos, passagens aéreas, hospedagem e roteiros personalizados)?","weight":2,"plan":"Crie modelos de contrato específicos para cada categoria principal de serviço da sua agência. Isso permite definir regras próprias de cancelamento, responsabilidade e reembolso, fortalecendo a segurança jurídica e evitando conflitos com o cliente."},
          {"id":"F2","text":"O contrato da sua agência foi elaborado ou revisado por um advogado especializado no setor de turismo?","weight":2,"plan":"Solicite uma revisão especializada do seu contrato com um advogado que conheça as particularidades do turismo. Isso garante que o documento esteja adequado à legislação vigente e às normas de consumo."},
          {"id":"F3","text":"O contrato da agência possui uma estrutura organizada, com seções que tratam de objeto, obrigações, prazos, valores e cancelamento de forma clara?","weight":1,"plan":"Estruture o contrato com seções padronizadas e objetivas, garantindo que todas as partes entendam suas obrigações e direitos."},
          {"id":"F4","text":"Sua equipe explica todas as condições e cláusulas importantes ao cliente antes de assinar o contrato?","weight":1,"plan":"Garanta que sua equipe apresente o contrato de forma transparente, explicando as cláusulas mais relevantes e confirmando o entendimento do cliente antes da assinatura."},
          {"id":"F5","text":"O contrato prevê uma cláusula de força maior que resguarda a agência em situações imprevisíveis, como greves, desastres naturais ou pandemia?","weight":1,"plan":"Inclua cláusula de força maior no contrato com exemplos e procedimento de comunicação ao cliente e fornecedores."}
        ]
      },
      {
        "name": "Clareza e Detalhamento do Contrato",
        "weight": 0.30,
        "questions": [
          {"id":"C1","text":"O contrato da sua agência detalha claramente os serviços incluídos e não incluídos no pacote contratado?","weight":2,"plan":"Adicione, em cada modelo, duas listas objetivas ('Inclui' e 'Não inclui'), com exemplos frequentes."},
          {"id":"C2","text":"O contrato caracteriza a atividade da agência como intermediação remunerada e informa a forma de remuneração (comissão e/ou taxa de serviço), conforme o art. 27 da Lei 11.771/2008 (redação atualizada)?","weight":2,"gargaloType":"IntermediacaoArt27","plan":"Inclua cláusula que qualifique a atuação da agência como intermediação remunerada, descreva como ocorre a remuneração e informe a sujeição às políticas dos fornecedores."},
          {"id":"C3","text":"O contrato define de forma expressa as obrigações da agência e do cliente durante a execução dos serviços?","weight":1,"plan":"Crie seções 'Deveres da Agência' e 'Deveres do Cliente' com prazos, documentos e deveres de informação."},
          {"id":"C4","text":"O contrato contém um item específico que descreve o itinerário e os serviços de cada etapa da viagem?","weight":1,"plan":"Anexe tabela por etapa (datas/horários/serviços/limitações) ao contrato."},
          {"id":"C5","text":"O contrato explicita a política de alterações, cancelamentos e no-show, indicando prazos, multas e regras aplicáveis dos fornecedores?","weight":2,"gargaloType":"PoliticaCancelamento","plan":"Inclua cláusula com prazos, multas, fluxo de solicitação e vínculo às políticas dos fornecedores."},
          {"id":"C6","text":"O contrato possui cláusula específica para serviços adicionais e suas condições de contratação?","weight":1,"plan":"Preveja que extras/upgrades dependem de disponibilidade, preço e aceite prévio por escrito."}
        ]
      },
      {
        "name": "Proteção de Dados e Transparência Digital",
        "weight": 0.20,
        "questions": [
          {"id":"D1","text":"O contrato descreve de forma clara quais dados pessoais do cliente são coletados e para quais finalidades específicas?","weight":1,"plan":"Liste os dados coletados e as finalidades (emissão, reserva, comunicação)."},
          {"id":"D2","text":"O contrato informa o cliente sobre por que seus dados são utilizados e como são compartilhados com parceiros e fornecedores?","weight":1,"plan":"Explique que dados são compartilhados apenas com fornecedores necessários à execução do serviço."},
          {"id":"D3","text":"O contrato contém cláusula de consentimento expresso do cliente para o uso e compartilhamento de seus dados pessoais?","weight":2,"gargaloType":"LGPDConsentimento","plan":"Inclua consentimento expresso e específico para uso e compartilhamento de dados pessoais."},
          {"id":"D4","text":"O contrato informa o cliente sobre seus direitos como titular de dados, incluindo acesso, correção, exclusão e revogação do consentimento?","weight":1,"plan":"Adicione cláusula com direitos do titular e um canal de contato."},
          {"id":"D5","text":"O contrato menciona as medidas de segurança e boas práticas adotadas pela agência para proteger os dados pessoais dos clientes?","weight":1,"plan":"Descreva medidas como armazenamento seguro, senhas, acesso restrito e confidencialidade."}
        ]
      },
      {
        "name": "Conformidade Legal e Gestão de Conflitos",
        "weight": 0.20,
        "questions": [
          {"id":"G1","text":"O contrato estabelece de forma clara as consequências e penalidades aplicáveis caso o cliente descumpra suas obrigações?","weight":1,"plan":"Indique consequências proporcionais (multas, perda de valores, responsabilização por danos)."},
          {"id":"G2","text":"O contrato define as hipóteses e procedimentos de rescisão ou extinção, incluindo cancelamento por iniciativa do cliente ou da agência?","weight":1,"plan":"Detalhe prazos, forma de aviso e obrigações pendentes."},
          {"id":"G3","text":"O contrato prevê métodos de solução de conflitos, como negociação direta, mediação ou foro competente?","weight":2,"plan":"Adote cláusula escalonada: negociação, mediação e, apenas se necessário, via judicial."},
          {"id":"G4","text":"O contrato foi revisado nos últimos 12 meses por um advogado especialista no setor de turismo?","weight":2,"gargaloType":"Revisao12m","plan":"Estabeleça rotina de revisão anual com especialista do setor."},
          {"id":"G5","text":"O contrato define as formas oficiais de comunicação entre a agência e o cliente (e-mail, endereço eletrônico, prazos)?","weight":1,"plan":"Defina canais oficiais e prazos de resposta para comunicações e notificações."}
        ]
      }
    ],
    "classification": {
      "section": [
        {"label":"Crítico","min":0.0,"max":0.34},
        {"label":"Necessita de melhorias","min":0.35,"max":0.64},
        {"label":"Bom","min":0.65,"max":0.84},
        {"label":"Excelente","min":0.85,"max":1.0}
      ],
      "overall": [
        {"label":"Crítico","min":0.0,"max":0.39},
        {"label":"Necessita de melhorias","min":0.40,"max":0.69},
        {"label":"Bom","min":0.70,"max":0.89},
        {"label":"Excelente","min":0.90,"max":1.0}
      ]
    },
    "caps": ["PoliticaCancelamento","IntermediacaoArt27","LGPDConsentimento","Revisao12m"]
  };

  // ===============================================
  // ⚡️ Elementos do DOM
  // ===============================================
  const loginCard = document.getElementById('loginCard');
  const signInForm = document.getElementById('signInForm');
  const diagnosisCard = document.getElementById('diagnosisCard');
  const resultsCard = document.getElementById('resultsCard');

  const sectionIndicator = document.getElementById('sectionIndicator');
  const sectionTitle = document.getElementById('sectionTitle');
  const questionsContainer = document.getElementById('questionsContainer');
  const prevSectionBtn = document.getElementById('prevSectionBtn');
  const nextSectionBtn = document.getElementById('nextSectionBtn');

  const agencyInfoDisplay = document.getElementById('agencyInfo');
  const overallScoreDisplay = document.getElementById('overallScoreDisplay');
  const overallClassificationDisplay = document.getElementById('overallClassificationDisplay');
  const sectionsResultsList = document.getElementById('sectionsResultsList');
  const restartBtn = document.getElementById('restartBtn');

  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  // ===============================================
  // ⚙️ Estado da Aplicação
  // ===============================================
  let currentSectionIndex = 0;
  let userAnswers = {}; // { questionId: 'yes' | 'no' | 'na' }
  let userData = {}; // { name, agency, email, phone }

  // ===============================================
  // 🌙 Lógica de Tema (Dark Mode)
  // ===============================================
  const DARK_MODE_CLASS = 'dark-mode';
  const THEME_STORAGE_KEY = 'theme';

  const ANIMATED_SUN_SVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path stroke-dasharray="36" stroke-dashoffset="36" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"/>
        </path>
        <path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1" opacity="0">
          <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"/>
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0"/>
          <set fill="freeze" attributeName="opacity" begin="0.6s" to="1"/>
          <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
        </path>
        <path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5" opacity="0">
          <animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"/>
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"/>
          <set fill="freeze" attributeName="opacity" begin="0.8s" to="1"/>
          <animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
        </path>
      </g>
    </svg>
  `;

  const ANIMATED_MOON_SVG = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
      <g fill="currentColor" fill-opacity="0">
        <path d="M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z">
          <animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.4s" values="0;1"></animate>
        </path>
        <path d="M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z">
          <animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"></animate>
        </path>
      </g>
      <path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z">
        <animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.5s" values="0;1"></animate>
        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></animate>
      </path>
    </svg>
  `;

  const renderThemeIcon = (isDark) => {
    themeToggle.innerHTML = isDark ? ANIMATED_MOON_SVG : ANIMATED_SUN_SVG;
  };

  const applySavedTheme = () => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (savedTheme === null && prefersDark)) {
      body.classList.add(DARK_MODE_CLASS);
      renderThemeIcon(true);
    } else {
      body.classList.remove(DARK_MODE_CLASS);
      renderThemeIcon(false);
    }
  };

  const toggleTheme = () => {
    body.classList.toggle(DARK_MODE_CLASS);
    const isDark = body.classList.contains(DARK_MODE_CLASS);

    renderThemeIcon(isDark);
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
  };

  applySavedTheme();
  themeToggle.addEventListener('click', toggleTheme);

  // ===============================================
  // 🚀 Lógica de Navegação e Diagnóstico
  // ===============================================

  /**
   * Mostra uma card e esconde as outras.
   * @param {HTMLElement} cardToShow - O elemento da card a ser mostrado.
   */
  const showCard = (cardToShow) => {
    [loginCard, diagnosisCard, resultsCard].forEach(card => {
      if (card === cardToShow) {
        card.style.display = 'flex'; // ou 'block' dependendo do layout
        card.classList.add('active');
      } else {
        card.style.display = 'none';
        card.classList.remove('active');
      }
    });
  };

  /**
   * Renderiza as perguntas da seção atual.
   */
  const renderQuestions = () => {
    const currentSection = questionnaireData.sections[currentSectionIndex];
    sectionTitle.textContent = currentSection.name;
    sectionIndicator.textContent = `Seção ${currentSectionIndex + 1} de ${questionnaireData.sections.length}`;
    questionsContainer.innerHTML = ''; // Limpa perguntas anteriores

    currentSection.questions.forEach(question => {
      const questionCard = document.createElement('div');
      questionCard.classList.add('question-card');

      const questionText = document.createElement('p');
      questionText.classList.add('question-text');
      questionText.textContent = question.text;
      questionCard.appendChild(questionText);

      const answerButtons = document.createElement('div');
      answerButtons.classList.add('answer-buttons');

      const createAnswerButton = (label, value) => {
        const button = document.createElement('button');
        button.classList.add(`answer-${value}`);
        button.textContent = label;
        if (userAnswers[question.id] === value) {
          button.classList.add('selected');
        }
        button.addEventListener('click', () => {
          userAnswers[question.id] = value;
          // Remove 'selected' de outros botões na mesma pergunta
          Array.from(answerButtons.children).forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
          // A lógica do plano de ação foi removida daqui, então nada acontece ao clicar em 'Não'
          updateNavigationButtons(); // Atualiza estado dos botões de navegação
        });
        return button;
      };

      answerButtons.appendChild(createAnswerButton('Sim', 'yes'));
      answerButtons.appendChild(createAnswerButton('Não', 'no'));
      answerButtons.appendChild(createAnswerButton('N/A', 'na'));
      questionCard.appendChild(answerButtons);

      questionsContainer.appendChild(questionCard);
    });

    updateNavigationButtons();
  };

  /**
   * Atualiza o estado dos botões de navegação (Anterior/Próxima).
   */
  const updateNavigationButtons = () => {
    prevSectionBtn.style.display = currentSectionIndex === 0 ? 'none' : 'flex';

    const currentSectionQuestions = questionnaireData.sections[currentSectionIndex].questions;
    const allAnsweredInCurrentSection = currentSectionQuestions.every(q => userAnswers[q.id] !== undefined);

    if (currentSectionIndex === questionnaireData.sections.length - 1) {
      nextSectionBtn.textContent = 'Ver Resultados';
      nextSectionBtn.disabled = !allAnsweredInCurrentSection;
    } else {
      nextSectionBtn.textContent = 'Próxima Seção';
      nextSectionBtn.disabled = !allAnsweredInCurrentSection;
    }
  };

  /**
   * Avança para a próxima seção ou finaliza o diagnóstico.
   */
  const goToNextSection = () => {
    const currentSectionQuestions = questionnaireData.sections[currentSectionIndex].questions;
    const allAnsweredInCurrentSection = currentSectionQuestions.every(q => userAnswers[q.id] !== undefined);

    if (!allAnsweredInCurrentSection) {
      alert('Por favor, responda a todas as perguntas desta seção antes de prosseguir.');
      return;
    }

    if (currentSectionIndex < questionnaireData.sections.length - 1) {
      currentSectionIndex++;
      renderQuestions();
    } else {
      // Última seção, mostrar resultados
      calculateAndDisplayResults();
      showCard(resultsCard);
    }
  };

  /**
   * Volta para a seção anterior.
   */
  const goToPrevSection = () => {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      renderQuestions();
    }
  };

  // ===============================================
  // 📊 Lógica de Cálculo e Exibição de Resultados
  // ===============================================

  /**
   * Retorna a classe CSS de classificação com base na pontuação e no tipo (seção ou geral).
   * @param {number} score - A pontuação (entre 0 e 1).
   * @param {'section' | 'overall'} type - O tipo de classificação.
   * @returns {string} A classe CSS correspondente.
   */
  const getClassificationClass = (score, type) => {
    const classifications = questionnaireData.classification[type];
    for (const cls of classifications) {
      if (score >= cls.min && score <= cls.max) {
        return `status-${cls.label.toLowerCase().replace(/\s/g, '-')}`;
      }
    }
    return ''; // Default caso não encontre
  };

  /**
   * Calcula e exibe os resultados do diagnóstico.
   */
  const calculateAndDisplayResults = () => {
    let totalWeightedScore = 0;
    let maxPossibleWeightedScore = 0;

    // Limpa exibições anteriores
    sectionsResultsList.innerHTML = '';

    questionnaireData.sections.forEach(section => {
      let sectionScore = 0;
      let sectionMaxScore = 0;

      section.questions.forEach(question => {
        sectionMaxScore += question.weight; // Cada pergunta contribui com seu peso para o máximo
        const answer = userAnswers[question.id];

        if (answer === 'yes') {
          sectionScore += question.weight;
        } else if (answer === 'na') {
            // Se a pergunta for N/A, ela não contribui para o score da seção nem para o maxScore da seção
            sectionMaxScore -= question.weight;
        }
      });

      // Evita divisão por zero se todas as perguntas forem N/A
      const sectionPercentage = sectionMaxScore > 0 ? (sectionScore / sectionMaxScore) : 1; // 100% se todas N/A
      const sectionDisplayPercentage = (sectionPercentage * 100).toFixed(0);

      // Classificação da seção
      const sectionClassification = questionnaireData.classification.section.find(
        cls => sectionPercentage >= cls.min && sectionPercentage <= cls.max
      );
      const sectionClassificationLabel = sectionClassification ? sectionClassification.label : 'Não classificado';
      const sectionClassificationClass = getClassificationClass(sectionPercentage, 'section');


      // Adiciona ao score geral ponderado
      totalWeightedScore += sectionPercentage * section.weight;
      maxPossibleWeightedScore += section.weight; // Soma o peso da seção ao máximo possível

      // Cria item da lista de seções para resultados
      const sectionItem = document.createElement('div');
      sectionItem.classList.add('section-item');
      sectionItem.innerHTML = `
        <span class="section-name">${section.name}</span>
        <div class="section-score-details">
            <span class="section-percentage">${sectionDisplayPercentage}%</span>
            <span class="section-status-badge ${sectionClassificationClass}">${sectionClassificationLabel}</span>
        </div>
      `;
      sectionsResultsList.appendChild(sectionItem);
    });

    // Calcula a pontuação geral ponderada final
    const overallScore = maxPossibleWeightedScore > 0 ? (totalWeightedScore / maxPossibleWeightedScore) : 0;
    const overallDisplayScore = (overallScore * 100).toFixed(0);

    // Classificação geral
    const overallClassification = questionnaireData.classification.overall.find(
      cls => overallScore >= cls.min && overallScore <= cls.max
    );
    const overallClassificationLabel = overallClassification ? overallClassification.label : 'Não classificado';
    const overallClassificationClass = getClassificationClass(overallScore, 'overall');

    overallScoreDisplay.textContent = `${overallDisplayScore}%`;
    overallClassificationDisplay.textContent = overallClassificationLabel;
    overallClassificationDisplay.className = `overall-classification ${overallClassificationClass}`; // Aplica a classe

    agencyInfoDisplay.textContent = `Diagnóstico para: ${userData.agency || 'Agência não informada'}`;
  };

  // ===============================================
  // EventListeners
  // ===============================================

  // Evento de submit do formulário de login
  signInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(signInForm);
    userData = Object.fromEntries(formData.entries());

    // Inicia o diagnóstico
    currentSectionIndex = 0;
    userAnswers = {}; // Limpa respostas anteriores
    showCard(diagnosisCard);
    renderQuestions();
  });

  // Botões de navegação do diagnóstico
  prevSectionBtn.addEventListener('click', goToPrevSection);
  nextSectionBtn.addEventListener('click', goToNextSection);

  // Botão de reiniciar diagnóstico
  restartBtn.addEventListener('click', () => {
    // Limpa o estado
    currentSectionIndex = 0;
    userAnswers = {};
    userData = {};

    // Volta para a tela de login
    signInForm.reset();
    showCard(loginCard);
  });

  // Inicializa a exibição na card de login
  showCard(loginCard);
});