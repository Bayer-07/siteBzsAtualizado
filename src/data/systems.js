import recicleIcon from "../assets/systems/recicle-icon.jpg";
import recicleScreen from "../assets/systems/recicle-screen.png";
import selfieIcon from "../assets/systems/selfie-icon.jpg";
import selfieScreen from "../assets/systems/selfie-screen.jpg";
import selfieGalleryOne from "../assets/systems/selfie-gallery-1.jpg";
import selfieGalleryTwo from "../assets/systems/selfie-gallery-2.jpg";
import selfieGalleryThree from "../assets/systems/selfie-gallery-3.jpg";
import selfieGalleryFour from "../assets/systems/selfie-gallery-4.jpg";
import aguaGasIcon from "../assets/systems/agua-gas-icon.png";
import aguaGasScreen from "../assets/systems/agua-gas-screen.png";
import transporteIcon from "../assets/systems/transporte-icon.png";
import transporteScreen from "../assets/systems/transporte-screen.jpg";
import transporteDetail from "../assets/systems/transporte-detail.jpg";
import bibliotecasIcon from "../assets/systems/bibliotecas-icon.png";
import bibliotecasScreen from "../assets/systems/bibliotecas-screen.jpg";

export const systems = [
  {
    slug: "bzs-recicle",
    title: "BZS Recicle",
    headline: "Gestão completa para cooperativas e associações de reciclagem",
    summary:
      "Uma solução em nuvem para controlar coleta, armazenagem, rastreamento, venda, faturamento e gestão financeira de cooperativas e associações de reciclagem.",
    intro:
      "O BZS Recicle nasceu para profissionalizar uma cadeia que combina impacto ambiental, renda e dignidade. A plataforma centraliza informações da operação, melhora a rastreabilidade dos materiais e ajuda a transformar o dia a dia da cooperativa em uma gestão mais previsível.",
    audience: "Cooperativas, associações de reciclagem e operações ambientais.",
    icon: recicleIcon,
    image: recicleScreen,
    iconKey: "recycle",
    systemUrl: "https://sgr.bzs.com.br/site/login",
    sourceUrl: "https://www.bzs.com.br/solucoes/bzs-recicle/6",
    videoUrl: "https://www.youtube.com/embed/DBqW401HBSY",
    tags: ["Reciclagem", "Estoque", "Financeiro", "QRCode"],
    contextTitle: "Da chegada do material ao resultado financeiro",
    contextText:
      "A tela do sistema deixa a operação mais legível: cada entrada, movimentação e venda passa a ter registro, rastreabilidade e impacto financeiro acompanhado pela equipe.",
    contextPoints: [
      "Identificação de produtos com QRCode para reduzir perda de informação.",
      "Baixa de estoque conectada ao pedido de venda.",
      "Relatórios para acompanhar produção, saídas, financeiro e rateio.",
    ],
    modules: [
      {
        title: "Cadastros",
        text: "Fornecedores, clientes, produtos, agentes ambientais e tabelas essenciais para a operação.",
      },
      {
        title: "Controle de estoque",
        text: "Produtos com QRCode para apoiar peso, quantidade, entrada, saída e rastreabilidade.",
      },
      {
        title: "Pedidos e venda",
        text: "Emissão de pedidos, controle de saídas e integração com a rotina financeira.",
      },
      {
        title: "Aplicativo",
        text: "Leitura de QRCode e inclusão de itens no pedido de venda, com baixa automática do estoque.",
      },
      {
        title: "Agentes ambientais",
        text: "Controle de pagamentos e histórico das ações realizadas pelos agentes.",
      },
      {
        title: "Rateio de lucros",
        text: "Acompanhamento individual para distribuição de resultados entre cooperados.",
      },
      {
        title: "Financeiro",
        text: "Ferramentas de pagamentos, recebimentos, caixa e bancos.",
      },
      {
        title: "Relatórios",
        text: "Consultas financeiras, estoque, pedidos, produtos, entradas e saídas.",
      },
      {
        title: "Sistema em nuvem",
        text: "Acesso via desktop, notebook, smartphone ou tablet, com simplicidade e segurança.",
      },
    ],
    benefits: [
      "Centraliza a cadeia do processo de reciclagem.",
      "Aumenta a rastreabilidade dos produtos.",
      "Organiza estoque, vendas, financeiro e relatórios em uma mesma operação.",
      "Ajuda a cooperativa a tomar decisões com dados mais rápidos e confiáveis.",
    ],
    gallery: [],
  },
  {
    slug: "selfie",
    title: "Selfie",
    headline: "Um autorretrato do município para apoiar decisões estratégicas",
    summary:
      "Tecnologia para mapear áreas do município e apoiar planejamento em indústria, comércio, agricultura, educação, saúde e segurança.",
    intro:
      "O Selfie organiza informações municipais para que a gestão pública enxergue melhor o território, identifique oportunidades e planeje melhorias com base em dados. A solução foi pensada para acesso seguro, rápido e fácil, com suporte e treinamento da equipe BZS.",
    audience: "Prefeituras, secretarias municipais e equipes de planejamento.",
    icon: selfieIcon,
    image: selfieScreen,
    iconKey: "selfie",
    systemUrl: "https://selfie.bzs.com.br/site/login",
    sourceUrl: "https://www.bzs.com.br/solucoes/selfie/13",
    tags: ["Gestão pública", "Diagnóstico", "Mapas", "Agricultura"],
    contextTitle: "Uma leitura territorial para planejar melhor",
    contextText:
      "O Selfie combina cadastro, mapas e informações de campo para montar uma fotografia prática do município. O resultado é uma base mais clara para priorizar ações e atender melhor o contribuinte.",
    contextPoints: [
      "Cadastro estruturado de propriedades e atividades rurais.",
      "Mapeamento de produção, estruturas e demandas por região.",
      "Relatórios para orientar secretarias e equipes de planejamento.",
    ],
    modules: [
      {
        title: "Cadastro de propriedades rurais",
        text: "Cadastro completo, requerimentos, ordens de serviço, relatórios gerenciais, mapas e atendimento por contribuinte.",
      },
      {
        title: "Mapeamento agrícola detalhado",
        text: "Levantamento de atividades e estruturas rurais, como ordenha, produção agrícola, gado, aviários, apicultura e áreas de pastagem.",
      },
      {
        title: "Planejamento municipal",
        text: "Informações organizadas para orientar ações em setores como indústria, comércio, agricultura, educação, saúde e segurança.",
      },
      {
        title: "Acesso seguro",
        text: "Consulta rápida e fácil para equipes autorizadas, com suporte para implantação e uso da ferramenta.",
      },
    ],
    benefits: [
      "Cria uma visão ampla e detalhada do município.",
      "Apoia decisões baseadas em informação, não em percepção isolada.",
      "Facilita o atendimento por contribuinte e a geração de relatórios.",
      "Ajuda a priorizar investimentos e políticas públicas.",
    ],
    gallery: [
      selfieGalleryOne,
      selfieGalleryTwo,
      selfieGalleryThree,
      selfieGalleryFour,
    ],
  },
  {
    slug: "controle-agua-gas",
    title: "Controle Água e Gás",
    headline: "Medição individualizada com menos retrabalho e mais transparência",
    summary:
      "Sistema para automatizar etapas de medição, cálculo, faturamento, cobrança e acompanhamento financeiro de água e gás em condomínios.",
    intro:
      "Empresas que fazem medição de água e gás convivem com coleta manual, inserção duplicada de dados, erros, cobranças demoradas e controle difícil de inadimplência. O Controle Água e Gás automatiza o fluxo para dar mais precisão, agilidade e qualidade no atendimento aos condomínios.",
    audience: "Empresas terceirizadas de medição, administradoras e condomínios.",
    icon: aguaGasIcon,
    image: aguaGasScreen,
    iconKey: "droplets",
    systemUrl: "https://sga.bzs.com.br/site/login",
    sourceUrl: "https://www.bzs.com.br/solucoes/controle-agua-e-gas/17",
    tags: ["Condomínios", "Medição", "Faturas", "Financeiro"],
    contextTitle: "Da leitura em campo à cobrança individual",
    contextText:
      "A rotina deixa de depender de controles soltos. O técnico registra a leitura no aplicativo, o sistema calcula os consumos e a empresa acompanha faturamento, recebimentos e inadimplência em um fluxo único.",
    contextPoints: [
      "Registro de leitura individualizada com apoio de imagem.",
      "Emissão de faturas por unidade, com segunda via online.",
      "Acompanhamento financeiro e controle de inadimplência.",
    ],
    modules: [
      {
        title: "Coleta por aplicativo",
        text: "Leitura individualizada em campo, com opção de registro fotográfico pelo técnico leiturista.",
      },
      {
        title: "Faturas individuais",
        text: "Emissão de faturas impressas, por e-mail ou por acesso no site da empresa.",
      },
      {
        title: "Gestão financeira",
        text: "Cobranças, recebimentos, inadimplência e acompanhamento de pagamentos.",
      },
      {
        title: "Segunda via",
        text: "Link para acesso à segunda via da conta no site da empresa.",
      },
      {
        title: "Corte individualizado",
        text: "Controle de inadimplência e bloqueio de fornecimento de forma individual.",
      },
      {
        title: "Rateio quando necessário",
        text: "Quando não há medidores individualizados, o app permite rateio entre condôminos com regras para residencial e comercial.",
      },
    ],
    benefits: [
      "Automatiza o fluxo de trabalho e reduz processos manuais.",
      "Torna a cobrança mais transparente para moradores e condomínio.",
      "Aumenta a segurança dos dados e a confiabilidade das leituras.",
      "Ajuda a empresa prestadora a crescer com operação mais organizada.",
    ],
    gallery: [],
  },
  {
    slug: "transporte-escolar",
    title: "Gestão de Transporte Escolar",
    headline: "Rotas, veículos, alunos e prestação de contas em uma plataforma",
    summary:
      "Solução em nuvem para mapear rotas, consultar veículos, cadastrar alunos e gerar relatórios e gráficos para a gestão do transporte escolar.",
    intro:
      "O sistema de Transporte Escolar reúne informações necessárias para a operação municipal e para a prestação de contas com a esfera estadual. A proposta é atender a população com mais praticidade, agilidade e segurança.",
    audience: "Municípios, secretarias de educação e equipes de transporte escolar.",
    icon: transporteIcon,
    image: transporteScreen,
    secondaryImage: transporteDetail,
    iconKey: "bus",
    systemUrl: "http://ste.bzs.com.br/site/login",
    sourceUrl: "https://www.bzs.com.br/solucoes/gestao-de-transporte-escolar/19",
    videoUrl: "https://www.youtube.com/embed/IQOZVInapPs",
    tags: ["Rotas", "Alunos", "Veículos", "Prestação de contas"],
    contextTitle: "Rotas e dados reunidos para a gestão municipal",
    contextText:
      "A plataforma aproxima secretaria, veículos e estudantes em uma visão centralizada. Com isso, a equipe ganha mais base para consulta, organização e prestação de contas.",
    contextPoints: [
      "Mapeamento e acompanhamento das rotas escolares.",
      "Consulta de veículos e estudantes atendidos.",
      "Relatórios e gráficos para análise e prestação de contas.",
    ],
    modules: [
      {
        title: "Mapeamento de rotas",
        text: "Organização das rotas do transporte escolar com visão centralizada da operação.",
      },
      {
        title: "Consulta de veículos",
        text: "Acompanhamento das informações dos veículos ligados ao serviço.",
      },
      {
        title: "Cadastro de alunos",
        text: "Controle dos estudantes atendidos pelo transporte escolar.",
      },
      {
        title: "Relatórios e gráficos",
        text: "Informações consolidadas para acompanhamento, análise e prestação de contas.",
      },
    ],
    benefits: [
      "Centraliza dados críticos do transporte escolar.",
      "Facilita a prestação de contas.",
      "Melhora a consulta de veículos, alunos e rotas.",
      "Apoia uma gestão municipal mais ágil e segura.",
    ],
    gallery: [],
  },
  {
    slug: "bibliotecas",
    title: "Gestão de Bibliotecas",
    headline: "Controle de acervo, circulação e consulta em nuvem",
    summary:
      "Sistema para organizar reserva, empréstimo, renovação, devolução e controle de cadastros do acervo bibliográfico municipal.",
    intro:
      "Bibliotecas também precisam acompanhar a era digital. O sistema de Gestão de Bibliotecas da BZS traz agilidade, segurança e controle sobre a rotina de circulação de publicações, otimizando a administração da biblioteca pública do município.",
    audience: "Bibliotecas públicas, secretarias de cultura e educação.",
    icon: bibliotecasIcon,
    image: bibliotecasScreen,
    iconKey: "library",
    sourceUrl: "https://www.bzs.com.br/solucoes/gestao-de-bibliotecas/20",
    tags: ["Acervo", "Empréstimos", "Consulta", "BKP automático"],
    contextTitle: "Acervo e circulação com controle digital",
    contextText:
      "A biblioteca ganha uma rotina mais organizada para localizar obras, registrar circulação e oferecer consulta pública com segurança. A equipe trabalha com dados centralizados e backup automático.",
    contextPoints: [
      "Controle de reserva, empréstimo, renovação e devolução.",
      "Consulta pública sem permissão de alteração dos dados.",
      "Acesso em nuvem com usuário, senha e backup automático.",
    ],
    modules: [
      {
        title: "Circulação de obras",
        text: "Controle de reserva, empréstimo, renovação e devolução de publicações.",
      },
      {
        title: "Cadastros do acervo",
        text: "Organização, rapidez e controle dos registros bibliográficos.",
      },
      {
        title: "Consulta pública",
        text: "Possibilidade de disponibilizar acesso de consulta no site da prefeitura, sem permissão de alteração.",
      },
      {
        title: "Plataforma em nuvem",
        text: "Acesso fácil de qualquer lugar com internet, mediante usuário e senha.",
      },
      {
        title: "BKP automático",
        text: "Rotina de backup automático do banco de dados.",
      },
    ],
    benefits: [
      "Agiliza a rotina de circulação do acervo.",
      "Melhora a organização e o controle dos cadastros.",
      "Permite consulta pública com segurança.",
      "Apoia a modernização da biblioteca pública municipal.",
    ],
    gallery: [],
  },
];

export function getSystemBySlug(slug) {
  return systems.find((system) => system.slug === slug);
}
