export interface MediaItem {
  publication: string;
  headline: string;
  date: string;
  url: string;
  isVerified: boolean;
  notes?: string;
}

export const mediaArticles: MediaItem[] = [
  {
    publication: 'Offshore Energy',
    headline: 'TotalEnergies and BluEnergies advance deepwater exploration in Liberia',
    date: 'July 2026',
    url: 'https://www.offshore-energy.biz/totalenergies-advances-liberia-exploration-with-bluenergies/',
    isVerified: true,
    notes: 'Coverage of the 3D seismic reprocessing and MBES seabed survey program across blocks LB-26, LB-30, and LB-31.'
  },
  {
    publication: 'Offshore Magazine',
    headline: 'Exploration momentum builds in West Africa transform margin',
    date: 'August 2026',
    url: '#',
    isVerified: false,
    notes: '[CONTENT NEEDED: paste verified article URL and archive link]'
  },
  {
    publication: 'Oil & Gas Journal',
    headline: 'Frontier deepwater basin floor fans evaluated offshore Liberia',
    date: 'February 2026',
    url: '#',
    isVerified: false,
    notes: '[CONTENT NEEDED: paste verified article URL and archive link]'
  },
  {
    publication: 'The Energy Year',
    headline: 'Liberia’s Harper Basin emerges on the international exploration map',
    date: 'May 2026',
    url: '#',
    isVerified: false,
    notes: '[CONTENT NEEDED: paste verified article URL and archive link]'
  },
  {
    publication: 'World Oil',
    headline: 'Seismic and geochemical survey operations commence offshore West Africa',
    date: 'July 2026',
    url: '#',
    isVerified: false,
    notes: '[CONTENT NEEDED: paste verified article URL and archive link]'
  },
  {
    publication: 'energy-pedia',
    headline: 'TotalEnergies and BluEnergies enter Harper Basin reconnaissance license',
    date: 'January 2026',
    url: '#',
    isVerified: false,
    notes: '[CONTENT NEEDED: paste verified article URL and archive link]'
  }
];
