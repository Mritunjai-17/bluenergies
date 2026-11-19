export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'board' | 'management';
  image?: string;
  excerpt: string;
  bio: string;
  bioParagraphs: string[];
  isIndependent?: boolean;
  committee?: string;
}

export const team: TeamMember[] = [
  // ==========================================
  // 1. BOARD OF DIRECTORS
  // ==========================================
  {
    id: 'craig-steinke',
    name: 'Craig Steinke',
    role: 'CEO and Director',
    category: 'board',
    image: '/img/team/craig-steinke.jpg',
    excerpt: 'Over 30 years of global energy leadership identifying, developing, and financing natural resource ventures across emerging and frontier basins.',
    bio: 'Mr. Steinke has a wealth of experience in identifying, successfully developing and financing oil and natural gas exploration and production projects in North America, Africa, Latin America, Europe and Asia, and has successfully held numerous senior executive roles throughout his career.\n\nSince the inception of BluEnergies in 2021, Mr. Steinke, together with long-time partners, guided the Company through a thorough, proactive, and technology-driven selection process, privately funding its growth prior to the go-public transaction in April 2025.',
    bioParagraphs: [
      'Mr. Steinke has a wealth of experience in identifying, successfully developing and financing oil and natural gas exploration and production projects in North America, Africa, Latin America, Europe and Asia, and has successfully held numerous senior executive roles throughout his career.',
      'Since the inception of BluEnergies in 2021, Mr. Steinke, together with long-time partners, guided the Company through a thorough, proactive, and technology-driven selection process, privately funding its growth prior to the go-public transaction in April 2025.'
    ],
    isIndependent: false
  },
  {
    id: 'carol-law',
    name: 'Carol Law',
    role: 'Independent Director',
    category: 'board',
    image: '/img/team/carol-law.jpg',
    excerpt: '40 years of international petroleum leadership; former Exploration Manager East Africa at Anadarko, leading the team that made the world-class Mozambique Rovuma Basin gas discovery.',
    bio: 'Carol Law brings 40 years of experience in the petroleum industry with roles in leadership, strategic decision making, exploration geology, research, and consulting. Carol spent the majority of her technical career developing and applying state of the art petroleum systems technology and leading teams in exploration efforts in over 50 countries around the world with major and independent oil companies including Amoco, BP, Kerr McGee and Anadarko. She has worked in 28 African countries, where she was involved in exploration drilling and international government relations.\n\nCarol retired in 2011 from her role as Exploration Manager for East Africa and Caribbean at Anadarko Petroleum, where she led the team which discovered the world class gas discovery in the offshore Mozambique Rovuma Basin. Over the last 14 years Carol has had roles as CEO/COO/Board Member, and advisor for a number of small cap oil and gas companies.\n\nCarol is passionate about being part of a successful world class organization, leading people and working with them to achieve their highest potential, creating effective but efficient business practices, and building business success.',
    bioParagraphs: [
      'Carol Law brings 40 years of experience in the petroleum industry with roles in leadership, strategic decision making, exploration geology, research, and consulting. Carol spent the majority of her technical career developing and applying state of the art petroleum systems technology and leading teams in exploration efforts in over 50 countries around the world with major and independent oil companies including Amoco, BP, Kerr McGee and Anadarko. She has worked in 28 African countries, where she was involved in exploration drilling and international government relations.',
      'Carol retired in 2011 from her role as Exploration Manager for East Africa and Caribbean at Anadarko Petroleum, where she led the team which discovered the world class gas discovery in the offshore Mozambique Rovuma Basin. Over the last 14 years Carol has had roles as CEO/COO/Board Member, and advisor for a number of small cap oil and gas companies.',
      'Carol is passionate about being part of a successful world class organization, leading people and working with them to achieve their highest potential, creating effective but efficient business practices, and building business success.'
    ],
    isIndependent: true
  },
  {
    id: 'cyrus-driver',
    name: 'Cyrus Driver',
    role: 'Director and Audit Committee Chair',
    category: 'board',
    image: '/img/team/cyrus-driver.jpg',
    excerpt: 'Chartered Professional Accountant with over 30 years of public company audit, financial governance, and regulatory compliance experience advising TSX and TSX-V issuers.',
    bio: 'Cyrus is a Chartered Accountant and a retired partner from the firm of Davidson & Company of Vancouver, BC. Prior to March 2002 he was a partner with the accounting firm of Driver Anderson which he co-founded in 1982. Cyrus has over 30 years of accounting experience with public companies; and is and has been the Chief Financial Officer and/or director of a number of junior natural resource companies listed on the Exchange. While providing general accounting and tax services to a wide range of clients, he specializes in managing and servicing publicly traded companies and members of the brokerage community.',
    bioParagraphs: [
      'Cyrus is a Chartered Accountant and a retired partner from the firm of Davidson & Company of Vancouver, BC. Prior to March 2002 he was a partner with the accounting firm of Driver Anderson which he co-founded in 1982. Cyrus has over 30 years of accounting experience with public companies; and is and has been the Chief Financial Officer and/or director of a number of junior natural resource companies listed on the Exchange. While providing general accounting and tax services to a wide range of clients, he specializes in managing and servicing publicly traded companies and members of the brokerage community.'
    ],
    isIndependent: true,
    committee: 'Audit Committee Chair'
  },
  {
    id: 'don-crossley',
    name: 'Don Crossley',
    role: 'Independent Director',
    category: 'board',
    image: '/img/team/don-crossley.jpg',
    excerpt: 'Canadian CPA with 35+ years of senior executive governance experience across resource companies, holding positions as Director, CEO, and CFO.',
    bio: 'After graduating with a Bachelor of Commerce degree from UBC, Don obtained his Canadian CPA designation and worked for several years with KPMG. He has been involved with a variety of public companies over the past 35 years holding positions as a Director, CEO, and CFO, while also providing management services. Most recently Don has been semi-retired while still providing some services to resource companies.',
    bioParagraphs: [
      'After graduating with a Bachelor of Commerce degree from UBC, Don obtained his Canadian CPA designation and worked for several years with KPMG. He has been involved with a variety of public companies over the past 35 years holding positions as a Director, CEO, and CFO, while also providing management services. Most recently Don has been semi-retired while still providing some services to resource companies.'
    ],
    isIndependent: true
  },

  // ==========================================
  // 2. MANAGEMENT
  // ==========================================
  {
    id: 'vivien-chuang',
    name: 'Vivien Chuang',
    role: 'Chief Financial Officer (CFO)',
    category: 'management',
    excerpt: 'CPA with 15+ years of financial leadership in resource and mining, formerly with PwC, specializing in financial reporting, equity financing, and risk controls.',
    bio: 'Ms. Chuang is a Chartered Professional Accountant with more than fifteen years of experience in the resource and mining sector. She has served as Chief Financial Officer, director and audit committee chair of various public companies listed on the TSX-V and CSE. Her professional experience includes financial reporting, budgeting, equity financing, internal controls and risk management. Ms. Chuang articled with PricewaterhouseCoopers LLP and was a senior manager at a medium sized audit firm.',
    bioParagraphs: [
      'Ms. Chuang is a Chartered Professional Accountant with more than fifteen years of experience in the resource and mining sector. She has served as Chief Financial Officer, director and audit committee chair of various public companies listed on the TSX-V and CSE. Her professional experience includes financial reporting, budgeting, equity financing, internal controls and risk management. Ms. Chuang articled with PricewaterhouseCoopers LLP and was a senior manager at a medium sized audit firm.'
    ]
  },
  {
    id: 'michelle-borthwick',
    name: 'Michelle Borthwick',
    role: 'Corporate Secretary',
    category: 'management',
    excerpt: 'Corporate governance and finance professional with 25+ years advising TSX, TSXV, CSE, and OTC issuers, former VP Corporate Affairs & Corporate Secretary at Endeavour Mining.',
    bio: 'Ms. Borthwick is a corporate finance and governance professional with over 25 years of experience in senior corporate finance and governance roles providing advice and support to various Canadian publicly listed issuers on the Toronto Stock Exchange, TSXV, CSE and OTC markets. She has extensive experience in the areas of equity and debt financings, domestic and cross-border M&A and general corporate and commercial transactions and has provided executive leadership teams with strategic advice and hands-on support in all phases of corporate growth. Additionally, Michelle is well versed in all areas of public company governance, administration and reporting requirements and advises boards and management on best practices. She is the founder and principal of Peakshore Consulting Inc. since January 2013 and Senior Vice President, Corporate Finance of Fiore Management & Advisory Corp. since July 2020. Prior to this time, she was Vice President, Corporate Affairs and Corporate Secretary of Endeavour Mining Corporation (TSX: EDV), one of the world’s leading gold producers and the largest in West Africa.',
    bioParagraphs: [
      'Ms. Borthwick is a corporate finance and governance professional with over 25 years of experience in senior corporate finance and governance roles providing advice and support to various Canadian publicly listed issuers on the Toronto Stock Exchange, TSXV, CSE and OTC markets. She has extensive experience in the areas of equity and debt financings, domestic and cross-border M&A and general corporate and commercial transactions and has provided executive leadership teams with strategic advice and hands-on support in all phases of corporate growth. Additionally, Michelle is well versed in all areas of public company governance, administration and reporting requirements and advises boards and management on best practices. She is the founder and principal of Peakshore Consulting Inc. since January 2013 and Senior Vice President, Corporate Finance of Fiore Management & Advisory Corp. since July 2020. Prior to this time, she was Vice President, Corporate Affairs and Corporate Secretary of Endeavour Mining Corporation (TSX: EDV), one of the world’s leading gold producers and the largest in West Africa.'
    ]
  },
  {
    id: 'sergio-laura',
    name: 'Sergio Laura',
    role: 'Vice President, Exploration',
    category: 'management',
    image: '/img/team/sergio-laura.jpg',
    excerpt: 'Senior exploration executive advisor with 40-year career at Eni (AGIP), former Managing Director Eni Côte d\'Ivoire, instrumental in the giant deepwater Baleine discovery.',
    bio: 'Sergio is a senior oil & gas exploration executive advisor; he holds a degree in Geological Sciences (Hons.) from the University of Genoa, Italy.\n\nHe spent his entire 40 year international career with the Italian major energy company Eni (formerly AGIP), working and living in: Italy, UK, China, Egypt, Indonesia, India, Poland, Ghana, and Cote d\'Ivoire, gradually taking increasing responsibilities as Chief Geologist, Exploration Manager, Sr. Business Advisor, Vice President, Director and since 2006 as Managing Director of several foreign Eni subsidiaries in Africa, South Asia, Middle & Far East and Europe. In 2004, he was the Project Manager of the Eni Exploration Management System.\n\nSergio has gained experience in most oil & gas basins worldwide as a leading member of several exploration new venture and successful project teams: he took part in several major oil & gas discoveries, in Egypt, Indonesia, Mozambique, Ghana, Cote d\'Ivoire and in successful E&P business projects as VP Exploration and Business Advisor for the Sub Sahara Africa region.\n\nHe concluded his international career as Managing Director of Eni Cote d\'Ivoire and retired, after providing a major contribution to the historical discovery of the Baleine oil & gas deep-water giant field, for which he was also decorated to the merit by the Ivorian Government, in November 2023.',
    bioParagraphs: [
      'Sergio is a senior oil & gas exploration executive advisor; he holds a degree in Geological Sciences (Hons.) from the University of Genoa, Italy.',
      'He spent his entire 40 year international career with the Italian major energy company Eni (formerly AGIP), working and living in: Italy, UK, China, Egypt, Indonesia, India, Poland, Ghana, and Cote d\'Ivoire, gradually taking increasing responsibilities as Chief Geologist, Exploration Manager, Sr. Business Advisor, Vice President, Director and since 2006 as Managing Director of several foreign Eni subsidiaries in Africa, South Asia, Middle & Far East and Europe. In 2004, he was the Project Manager of the Eni Exploration Management System.',
      'Sergio has gained experience in most oil & gas basins worldwide as a leading member of several exploration new venture and successful project teams: he took part in several major oil & gas discoveries, in Egypt, Indonesia, Mozambique, Ghana, Cote d\'Ivoire and in successful E&P business projects as VP Exploration and Business Advisor for the Sub Sahara Africa region.',
      'He concluded his international career as Managing Director of Eni Cote d\'Ivoire and retired, after providing a major contribution to the historical discovery of the Baleine oil & gas deep-water giant field, for which he was also decorated to the merit by the Ivorian Government, in November 2023.'
    ]
  }
];
