export interface TeamMember {
  name: string;
  role: string;
  category: 'management' | 'board';
  bio: string;
}

export const team: TeamMember[] = [
  {
    name: 'Craig Steinke',
    role: 'Chief Executive Officer & Director',
    category: 'management',
    bio: 'Craig Steinke is the Chief Executive Officer and a Director of BluEnergies Ltd. A co-founder of the company, he has more than 30 years of international experience identifying, evaluating, structuring, and financing natural resource and energy exploration ventures across emerging and frontier basins worldwide. Under his leadership, BluEnergies identified and captured the Harper Basin deepwater play and negotiated the farm-in partnership with TotalEnergies.'
  },
  {
    name: 'Enzo Insalaco',
    role: 'Executive Vice-President and General Counsel',
    category: 'management',
    bio: 'Executive Vice-President and General Counsel of BluEnergies Ltd. Brings extensive international legal, regulatory, and commercial transaction experience within the upstream oil and gas sector across Africa and global frontier jurisdictions. [CONTENT NEEDED: additional biographical details]'
  },
  {
    name: 'Sergio Laura',
    role: 'Vice President of Exploration',
    category: 'management',
    bio: 'Sergio Laura is a petroleum geologist with over 40 years of international hydrocarbon exploration and reservoir geology experience. Formerly with major international operators including Eni/Agip, he has led technical evaluations, seismic interpretation programmes, and exploration campaigns across West Africa, North Africa, and the Mediterranean.'
  },
  {
    name: 'Carol Law',
    role: 'Independent Director',
    category: 'board',
    bio: 'Carol Law brings over 40 years of technical, managerial, and commercial leadership in the international petroleum exploration industry. She previously held senior exploration and asset management positions with major independent and international oil companies including Amoco, BP, and Anadarko Petroleum Corporation.'
  },
  {
    name: 'Cyrus Driver',
    role: 'Independent Director & Audit Committee Chair',
    category: 'board',
    bio: 'Cyrus Driver is a Chartered Professional Accountant (CPA, CA) and retired partner of Davidson & Company LLP, Chartered Professional Accountants, Vancouver, BC. He has over 30 years of public accounting and financial auditing experience advising TSX and TSX Venture Exchange listed exploration and mining issuers on corporate governance, audit standards, and regulatory compliance.'
  }
];
