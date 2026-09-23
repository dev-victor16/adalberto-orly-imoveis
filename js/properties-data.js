/**
 * Base de Dados Oficial de Imóveis — Adalberto Orly Imóveis
 * 32 anos de tradição em Ibirité, Bonfim e Região Metropolitana de Belo Horizonte (RMBH)
 */

const PROPERTIES_DATA = [
  {
    id: "397",
    code: "AO-397",
    title: "Casa Contemporânea com Quintal Amplo",
    subtitle: "Residência linear com acabamento refinado e excelente iluminação natural",
    type: "Casa",
    purpose: "comprar",
    price: 800000,
    priceFormatted: "R$ 800.000",
    iptu: "R$ 1.250/ano",
    condo: "Isento",
    city: "Ibirité",
    neighborhood: "Jardim das Flores",
    state: "MG",
    area: 360,
    bedrooms: 3,
    suites: 1,
    bathrooms: 2,
    parking: 4,
    featured: true,
    tag: "Destaque Residencial",
    image: "assets/img/casa-jardim-flores.jpg",
    gallery: [
      "assets/img/casa-jardim-flores.jpg",
      "assets/img/hero-architecture.jpg"
    ],
    description: "Excelente casa edificada em lote de 360m² no tradicional bairro Jardim das Flores em Ibirité. Projeto bem distribuído com 3 quartos amplos (sendo 1 suíte espaçosa), sala integrada para dois ambientes com rebaixo em gesso, cozinha arejada com bancadas em granito, banho social com nicho e ventilação natural. Área externa gramada nos fundos com potencial para espaço gourmet e piscina. Garagem confortável para até 4 veículos. Documentação 100% regularizada para financiamento bancário pela Caixa Econômica e demais instituições financeiras.",
    features: [
      "Lote de 360 m²",
      "Garagem para 4 carros",
      "1 Suíte com Closet",
      "Área de serviço independente",
      "Quintal privativo para lazer",
      "Aceita Financiamento & FGTS",
      "Próximo a comércios e escolas"
    ]
  },
  {
    id: "389",
    code: "AO-389",
    title: "Imóvel Comercial Estratégico no Centro",
    subtitle: "Complexo corporativo com 1.572m² de área construída na área central de Ibirité",
    type: "Comercial",
    purpose: "comprar",
    price: 1700000,
    priceFormatted: "R$ 1.700.000",
    iptu: "Consulte",
    condo: "Isento",
    city: "Ibirité",
    neighborhood: "Centro",
    state: "MG",
    area: 1572,
    bedrooms: 0,
    suites: 0,
    bathrooms: 6,
    parking: 10,
    featured: true,
    tag: "Oportunidade Comercial",
    image: "assets/img/comercial-centro.jpg",
    gallery: [
      "assets/img/comercial-centro.jpg"
    ],
    description: "Propriedade comercial de grande porte com 1.572m² localizada em ponto nobre e de altíssimo fluxo no Centro de Ibirité. Estrutura versátil ideal para agências corporativas, clínicas médicas, centros de distribuição, instituições de ensino, supermercados ou lojas de departamento. Fachada imponente com recuo frontal para estacionamento de clientes, doca para carga e descarga, acessibilidade e múltiplos sanitários já estruturados. Um dos ativos imobiliários mais estratégicos da região central.",
    features: [
      "1.572 m² de área total",
      "Localização central privilegiada",
      "Estacionamento para 10+ veículos",
      "Doca para carga e descarga",
      "Piso de alta resistência",
      "Infraestrutura trifásica instalada",
      "Potencial de alta rentabilidade para locação"
    ]
  },
  {
    id: "398",
    code: "AO-398",
    title: "Lote / Área Urbana com 1.080m² no Bosque",
    subtitle: "Terreno plano com excelente frente e potencial multifamiliar ou comercial",
    type: "Lote",
    purpose: "comprar",
    price: 750000,
    priceFormatted: "R$ 750.000",
    iptu: "R$ 980/ano",
    condo: "Isento",
    city: "Ibirité",
    neighborhood: "Bosque",
    state: "MG",
    area: 1080,
    bedrooms: 0,
    suites: 0,
    bathrooms: 0,
    parking: 0,
    featured: false,
    tag: "Terreno Nobre",
    image: "assets/img/lote-bosque.jpg",
    gallery: [
      "assets/img/lote-bosque.jpg"
    ],
    description: "Área urbana nobre de 1.080m² no Bairro Bosque, uma das regiões de maior valorização em Ibirité. Topografia plana e testada frontal generosa, permitindo tanto a construção de condomínio de casas geminadas/prédio de apartamentos residenciais quanto implantação de galpão comercial ou sede empresarial. Rua asfaltada com infraestrutura completa de água (Copasa), energia (Cemig) e rede pluvial. Registro e escritura com matrícula individualizada.",
    features: [
      "1.080 m² de topografia plana",
      "Excelente testada frontal",
      "Zoneamento flexível (residencial/misto)",
      "Infraestrutura urbana completa",
      "Escritura e Registro prontos",
      "Ideal para construtoras e investidores"
    ]
  },
  {
    id: "374",
    code: "AO-374",
    title: "Chácara & Sítio em Bonfim (Caetano José)",
    subtitle: "Refúgio verde de 1.000m² com vista panorâmica para as montanhas mineiras",
    type: "Rural",
    purpose: "rural",
    price: 69000,
    priceFormatted: "R$ 69.000",
    iptu: "Rural (INCRA)",
    condo: "Isento",
    city: "Bonfim",
    neighborhood: "Caetano José",
    state: "MG",
    area: 1000,
    bedrooms: 0,
    suites: 0,
    bathrooms: 0,
    parking: 4,
    featured: true,
    tag: "Oportunidade Rural",
    image: "assets/img/chacara-bonfim.jpg",
    gallery: [
      "assets/img/chacara-bonfim.jpg",
      "assets/img/chacara-rural.jpg"
    ],
    description: "Chácara de 1.000m² localizada em Bonfim, no tradicional distrito de Caetano José, a poucos minutos de Ibirité e Betim. Terreno com terra fértil, topografia suave, acesso transitável durante todo o ano e linda vista para vales verdes. Região com atmosfera de paz, vizinhos moradores e ambiente perfeito para construir sua casa de campo, pomar, horta orgânica e espaço de descanso com a família nos fins de semana.",
    features: [
      "1.000 m² de tranquilidade",
      "Vista definitiva para montanhas",
      "Solo propício para pomar e horta",
      "Fácil acesso a partir de Bonfim e Ibirité",
      "Rede de energia elétrica próxima",
      "Preço de ocasião para compra à vista"
    ]
  },
  {
    id: "378",
    code: "AO-378",
    title: "Lote Residencial no Bairro Lago Azul",
    subtitle: "Terreno de 450m² em rua tranquila com vista panorâmica",
    type: "Lote",
    purpose: "comprar",
    price: 220000,
    priceFormatted: "R$ 220.000",
    iptu: "R$ 480/ano",
    condo: "Isento",
    city: "Ibirité",
    neighborhood: "Lago Azul",
    state: "MG",
    area: 450,
    bedrooms: 0,
    suites: 0,
    bathrooms: 0,
    parking: 0,
    featured: false,
    tag: "Excelente Custo-Benefício",
    image: "assets/img/lote-lago-azul.jpg",
    gallery: [
      "assets/img/lote-lago-azul.jpg"
    ],
    description: "Lote residencial de 450m² no Lago Azul em Ibirité. Bairro residencial consolidado, com linhas de transporte público, comércio local e fácil acesso à rodovia Renato Azeredo e MG-040. Perfeito para quem busca construir a casa própria com quintal espaçoso ou desenvolver projeto de casas para revenda. Documentação regularizada.",
    features: [
      "450 m² com boa geometria",
      "Vizinhança tranquila",
      "Acesso pavimentado",
      "Água e energia na porta",
      "Aceita veículo na negociação (sob análise)"
    ]
  },
  {
    id: "392",
    code: "AO-392",
    title: "Apartamento 2 Quartos com Vaga Coberta",
    subtitle: "Prédio individual com excelente padrão de acabamento no Centro de Ibirité",
    type: "Apartamento",
    purpose: "alugar",
    price: 1350,
    priceFormatted: "R$ 1.350 /mês",
    iptu: "R$ 45/mês",
    condo: "R$ 180/mês",
    city: "Ibirité",
    neighborhood: "Centro",
    state: "MG",
    area: 68,
    bedrooms: 2,
    suites: 1,
    bathrooms: 2,
    parking: 1,
    featured: false,
    tag: "Locação Residencial",
    image: "assets/img/casa-jardim-flores.jpg",
    gallery: [
      "assets/img/casa-jardim-flores.jpg"
    ],
    description: "Apartamento aconchegante e arejado em prédio individual com apenas 8 unidades. Composto por 2 quartos (1 suíte com armário planejado), sala espaçosa para 2 ambientes com rebaixo em gesso e luminárias embutidas, cozinha com armários sob a pia e área de lavanderia privativa. Vaga de garagem coberta e demarcada. Localização ímpar a 300 metros da Praça da Matriz e comércio geral.",
    features: [
      "Prédio individual e privativo",
      "Suíte com armários planejados",
      "Vaga coberta e demarcada",
      "Medidores individuais",
      "Locação rápida sem fiador tradicional (sob análise CredPago / Seguro Fiança)"
    ]
  },
  {
    id: "385",
    code: "AO-385",
    title: "Chácara Completa para Temporada & Eventos",
    subtitle: "Estrutura pronta para lazer familiar, confraternizações e finais de semana",
    type: "Rural",
    purpose: "rural",
    price: 1200,
    priceFormatted: "R$ 1.200 /fim de semana",
    iptu: "Incluso",
    condo: "Isento",
    city: "Ibirité / Bonfim",
    neighborhood: "Região Rural",
    state: "MG",
    area: 2500,
    bedrooms: 4,
    suites: 2,
    bathrooms: 4,
    parking: 10,
    featured: true,
    tag: "Temporada & Eventos",
    image: "assets/img/chacara-rural.jpg",
    gallery: [
      "assets/img/chacara-rural.jpg"
    ],
    description: "Chácara maravilhosa estruturada para receber famílias e grupos para finais de semana, feriados e confraternizações. Casa sede com ampla varanda colonial, 4 quartos (2 suítes), sala de estar, fogão a lenha mineiro com forno, churrasqueira, piscina com cascata, campo de futebol society e amplo estacionamento. Agendamento antecipado com contrato de locação por temporada seguro e transparente.",
    features: [
      "Piscina com cascata",
      "Espaço gourmet com fogão a lenha",
      "Campo de futebol gramado",
      "Acomoda até 20 pessoas para pernoite",
      "Estacionamento para 10 carros",
      "Ambiente familiar e reservado"
    ]
  },
  {
    id: "360",
    code: "AO-360",
    title: "Galpão Industrial com Pátio para Manobra",
    subtitle: "Pé-direito de 7m, piso usinado e fácil acesso à MG-040",
    type: "Comercial",
    purpose: "alugar",
    price: 6500,
    priceFormatted: "R$ 6.500 /mês",
    iptu: "R$ 420/mês",
    condo: "Isento",
    city: "Ibirité",
    neighborhood: "Distrito Industrial",
    state: "MG",
    area: 720,
    bedrooms: 0,
    suites: 0,
    bathrooms: 3,
    parking: 6,
    featured: false,
    tag: "Galpão Industrial",
    image: "assets/img/comercial-centro.jpg",
    gallery: [
      "assets/img/comercial-centro.jpg"
    ],
    description: "Galpão moderno com 720m² de área construída, pé-direito livre de 7 metros e piso industrial polido com capacidade de 5 ton/m². Portão automatizado para entrada de carretas, escritório administrativo com 2 salas climatizadas, refeitório e vestiários masculino e feminino. Pátio frontal para estacionamento e manobra de veículos pesados.",
    features: [
      "720 m² de área útil",
      "Pé-direito de 7 metros",
      "Piso usinado 5 ton/m²",
      "Entrada para carretas",
      "Vestiários e refeitório",
      "Escritório com ar-condicionado"
    ]
  }
];

// Dados institucionais e canais oficiais
const SITE_CONFIG = {
  name: "Adalberto Orly Corretor de Imóveis",
  tagline: "Atuação em Ibirité, Bonfim e RMBH desde 1994",
  creci: "CRECI/MG 11.253",
  phone: "(31) 99955-3133",
  phoneClean: "5531999553133",
  whatsappMessage: "Olá! Gostaria de falar com o corretor Adalberto Orly sobre imóveis em Ibirité e região.",
  email: "trianguloimoveis.mg@uol.com.br",
  address: "Ibirité - MG, CEP 32400-000",
  hours: "Segunda a Sexta: 08:30 às 18:00 | Sábado: 08:30 às 12:30",
  citiesCovered: ["Ibirité", "Bonfim", "Betim", "Contagem", "Brumadinho", "Sarzedo", "Belo Horizonte"]
};
