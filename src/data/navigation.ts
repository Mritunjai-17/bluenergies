export const navigation = [
  {
    label: 'Corporate',
    href: '/corporate/about-us/',
    children: [
      { label: 'About us', href: '/corporate/about-us/' },
      { label: 'Board & management', href: '/corporate/board-management/' },
      { label: 'Corporate governance', href: '/corporate/corporate-governance/' }
    ]
  },
  {
    label: 'Assets & operations',
    href: '/assets-and-operations/overview/'
  },
  {
    label: 'Investors',
    href: '/investors/outlook/',
    children: [
      { label: 'Outlook', href: '/investors/outlook/' },
      { label: 'Stock information', href: '/investors/stock-information/' },
      { label: 'Financials', href: '/investors/financials/' },
      { label: 'Presentations', href: '/investors/presentations/' },
      { label: 'AGM', href: '/investors/agm/' }
    ]
  },
  {
    label: 'News & media',
    href: '/news-and-media/news/',
    children: [
      { label: 'News', href: '/news-and-media/news/' },
      { label: 'In the media', href: '/news-and-media/in-the-media/' }
    ]
  },
  {
    label: 'Contact',
    href: '/contact/contact-details/',
    children: [
      { label: 'Contact details', href: '/contact/contact-details/' },
      { label: 'Request for information', href: '/contact/request-for-information/' }
    ]
  }
];
