// BNS Application Constants

export const COMPANY = {
  name: 'Bengal News Service PR & Consultancy Private Limited',
  shortName: 'BNS',
  fullName: 'Bengal News Service PR & Consultancy Private Limited',
  tagline: 'Voice Of Bengal, Vision For Bharat',
  cin: 'U73100WB2024PTC275987', // As per company profile
  gstin: '[GSTIN - To be confirmed by company]',
  pan: '[PAN - To be confirmed by company]',
  registeredAddress: 'West Bengal, India',
  email: 'contact@bengalnewsservice.com', // Placeholder - to be confirmed
  phone: '+91 [Phone - To be confirmed]', // Placeholder - to be confirmed
  website: 'https://bengalnewsservice.com',
  socialMedia: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#',
  },
};

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Leadership', path: '/leadership' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'digital-news-media',
    title: 'Digital News & Media',
    icon: 'Newspaper',
    description: 'Comprehensive digital news and media services covering regional, national, and international developments.',
    items: [
      'Online news publishing and digital media',
      'News articles, features, and editorial content',
      'Video news and multimedia journalism',
      'Interviews and special reports',
      'Podcasts and digital programmes',
      'Regional and local news coverage',
      'Social media news content and distribution',
    ],
  },
  {
    id: 'public-relations',
    title: 'Public Relations & Corporate Communications',
    icon: 'Megaphone',
    description: 'Strategic public relations and corporate communications to shape and protect your brand narrative.',
    items: [
      'Public relations strategy and execution',
      'Media relations and media outreach',
      'Press release drafting and distribution',
      'Corporate communications planning',
      'Brand communication and messaging',
      'Reputation management and crisis communications',
      'Media liaison and spokesperson support',
      'Publicity campaigns and event communications',
    ],
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Advertising',
    icon: 'TrendingUp',
    description: 'Data-driven digital marketing and advertising solutions to amplify your brand reach.',
    items: [
      'Digital advertising strategy and campaigns',
      'Social media marketing and management',
      'Content marketing and branded content',
      'Brand promotion and online presence building',
      'Online campaign planning and execution',
      'Search visibility and digital reach services',
      'Sponsored digital content (subject to applicable disclosure requirements)',
    ],
  },
  {
    id: 'consultancy',
    title: 'Consultancy',
    icon: 'Briefcase',
    description: 'Expert advisory services across media, PR, communications, and branding for businesses and organizations.',
    items: [
      'Media consultancy and advisory',
      'PR strategy consultancy',
      'Communication strategy and planning',
      'Branding consultancy and identity advisory',
      'Digital marketing consultancy',
      'Business communication advisory',
      'Market and media research',
      'Corporate image and reputation advisory',
    ],
  },
];

export const META = {
  defaultTitle: 'BNS — Bengal News Service | PR & Consultancy',
  titleTemplate: '%s | BNS Bengal News Service',
  defaultDescription: 'Bengal News Service PR & Consultancy Private Limited — Voice Of Bengal, Vision For Bharat. Digital news, media, public relations, corporate communications, digital marketing, and consultancy.',
  ogImage: '/bns-logo-full.png',
  twitterHandle: '@BengalNewsService',
};
