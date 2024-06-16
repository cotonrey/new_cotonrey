import type { SiteConfig } from '$src/types/Config';

const config: SiteConfig = {
  title: 'Cesar Diaz',
  description: '',
  source: 'https://github.com/cotonrey/my-website',
  baseUrl: 'https://as93.net',
  initialFeeds: [{ label: 'Notes', url: 'https://raw.githubusercontent.com/Lissy93/feeds/main/blog.atom' }],
  additionalFeeds: [
    { label: 'Notes', url: 'https://notes.cotonrey.es/feed' },
    {
      label: 'Dev.to',
      url: 'https://raw.githubusercontent.com/cotonrey/feeds/main/dev-to.atom',
    },
    {
      label: 'BlogSpot',
      url: 'https://raw.githubusercontent.com/cotonrey/feeds/main/blogger.atom',
    },
    {
      label: 'GitHub',
      url: 'https://raw.githubusercontent.com/cotonrey/feeds/main/github.atom',
    },
    {
      label: 'StackOverflow',
      url: 'https://raw.githubusercontent.com/cotonrey/feeds/main/stackoverflow.atom',
    },
    {
      label: 'Reddit',
      url: 'https://raw.githubusercontent.com/cotonrey/feeds/main/reddit.atom',
    },
    {
      label: 'Mastodon',
      url: 'https://raw.githubusercontent.com/cotonrey/feeds/main/mastodon.atom',
    },
    {
      label: 'YouTube',
      url: 'https://raw.githubusercontent.com/cotonrey/feeds/main/youtube.atom',
    },
  ],

  routeLinks: [
    { label: 'Home', route: '/', color: 'var(--accent-1, #ff0099)' },
    {
      label: 'Projects',
      route: '/projects',
      color: 'var(--accent-3, #01c0f0)',
      description: 'Personal projects and open source work',
    },
    {
      label: 'Contact',
      route: '/contact',
      color: 'var(--accent-1, #ff0099)',
      description: 'Social profile links, GPG keys and contact form',
    },
    {
      label: 'About',
      route: '/about',
      color: 'var(--accent-4, #1de691)',
      description: 'Bio and professional experience',
    },
  ],
  footerInfo: {
    author: 'Cesar Diaz',
    authorSite: 'https://github.com/cotonrey',
    license: 'MIT',
    licenseLink: '',
    copyright: true,
  },
  githubUser: 'cotonrey',
  defaultTheme: 'callisto',
  defaultLanguage: 'en',
  colorSchemes: {
    dark: {
      background: '#101010',
      foreground: '#fafafa',
      'dimmed-text': '#808080',
      'card-background': '#1b1b1b',
      'card-border': '1px solid #2a2a2a',
      'code-background': '#333',
      accent: '#01c0f0',
      'accent-1': '#ff0099',
      'accent-2': '#b45eff',
      'accent-3': '#01c0f0',
      'accent-4': '#1de691',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--foreground)',
    },
    light: {
      background: '#ededed',
      foreground: '#2a3367',
      'card-background': '#F8F8FF',
      'card-border': '1px solid #0000001a',
      'home-accent-background': '#2a3367',
      'home-accent-foreground': 'var(--foreground)',
    },
    callisto: {
      background: '#0a192f',
      foreground: '#dcdcdc',
      'dimmed-text': '#8892b0',
      'card-background': '#0b1021',
      'card-border': '1px solid #ffffff1a',
      'accent-1': '#00ccb4',
      'accent-2': '#00ccb4',
      'accent-3': '#00ccb4',
      'accent-4': '#00ccb4',
      'voronoi-background': '#0a192f',

      'home-accent-background': '#00ccb4',
      'home-tile-background': '#0B1021',
      'voronoi-lines': '#4ee8d61a',

      'voronoi-c1': '#141B33',
      'voronoi-c2': '#131A31',
      'voronoi-c3': '#12192F',
      'voronoi-c4': '#11182D',
      'voronoi-c5': '#10172B',
      'voronoi-c6': '#0F1629',
      'voronoi-c7': '#0E1527',
      'voronoi-c8': '#0D1425',
      'voronoi-c9': '#0C1323',
      'voronoi-c10': '#0B1221',

      'voronoi-r0': '#141b33',
      'voronoi-r1': '#141b33',
      'voronoi-r2': '#12182e',
      'voronoi-r3': '#101629',
      'voronoi-r4': '#0e1324',
      'voronoi-r5': '#0c101f',
      'voronoi-r6': '#0c101f',
      'voronoi-r7': '#0a0e1a',
      'voronoi-r8': '#0a0e1a',
      'voronoi-r9': '#080b14',
      'voronoi-r10': '#06080f',
    },
  },
  workExperience: [
    {
      company: 'Decathlon Chile',
      companyUrl: 'https://decathlon.cl',
      companyLogo: 'https://www.decathlon.cl/themes/decashop_v5/assets/img/logo-decathlon-blue-1.svg',
      jobTitle: 'Senior Software Engineer',
      datesWorked: 'April 2022 - April 2024',
      projectType: 'IT',
      projects: [
        { name: 'Oneshop', logo: 'https://i.ibb.co/HtPLSg1/decathlon.jpg', description: 'E-Commerce', },
      ],
      technologies: [ 'PHP', 'Svelte'],
    },
    {
      company: 'Prisa',
      companyUrl: 'https://prisa.cl',
      companyLogo: 'https://www.prisa.cl/media/cache/attachment/filter/wysiwyg_original/11c00c6d0bd6b875afe655d3c9d4f942/33077/62d4d5723450c273641279.png',
      jobTitle: 'Project Leader',
      datesWorked: 'April 2018 - April 2022',
      projectType: 'IT',
      projects: [
        { name: 'Cobra', logo: 'https://i.ibb.co/17wDgst/cobra-logo.png', description: 'Warehouse Management System', },
      ],
      technologies: [ 'PHP', 'Svelte'],
    }
  ],
  projectComplimentaryData: [
    {
      name: 'AdGuardian-Term',
      thumbnail: 'https://i.ibb.co/wgJDXs2/adguardian-banner-2.png',
    },
  ],
  postComplimentaryData: [
    {
      postRef: '50 ways to bring in extra cash as a developer',
      thumbnail: 'https://i.ibb.co/DDQBHvL/developer-side-hustles.png',
    },
    { postRef: '', thumbnail: '' },
  ],
  contact: {
    name: 'Cesar Diaz',
    email: 'cotonrey@omg.lol',
    website: 'https://cotonrey.es',
    socials: {
      Twitter: 'cotonrey',
      GitHub: 'cotonrey',
      'Dev.to': 'cotonrey',
      Mastodon: '@cotonrey',
      LinkedIn: 'in/cotonrey',
      Instagram: 'cotonrey',
      YouTube: 'cotonrey',
      Reddit: 'cotonrey',
      StackOverflow: '979052/cotonrey',
      KeyBase: 'cotonrey',
      Facebook: 'cotonrey',
      PeerList: 'cotonrey',
      CodersRank: 'cotonrey',
      'OMG.lol': 'cotonrey',
    },
    socialButtonLimit: 6,
    mailerConfig: {
      service_id: 'gmail',
      template_id: 'website-contact-form',
      user_id: 'user_K6F041q1dQvz8SJLSOZCR',
      template_params: {},
    },
    pgpKeyLink: 'https://keybase.io/aliciasykes/pgp_keys.asc?fingerprint=0688f8d34587d954e9e51fb8fedb68f55c0283a7',
    pgpPublicKey: `-----BEGIN PGP PUBLIC KEY BLOCK-----
      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
      mFFVmpQe2X/qgZBVVYC+LjpxNEMt6w==
      =dpLK
      -----END PGP PUBLIC KEY BLOCK-----
`,
  },
  about: {
    intro: 'Just your average dev...',
    bio: [
      "I'm Cesar, a Spain-based software engineer.",

      `For work, I'm a senior software engineer at <a href="https://decathlon.es">Decathlon Spain</a>,
      where I work with the FrontEnd Dev team, help to upskill and mentor junior and mid-level
      developers and ensure that the code we're delivering is the best it can be.`,

      `Away from the keyboard, I like to travel, hanging out with friends, and going to the cinema.`,
    ],
    picture: 'https://i.ibb.co/5GjhSw5/foto-cesar.jpg',
  },
  techStack: {
    backend: [
      {
        language: 'PHP',
        projects: [ 'revision-quizzes'],
      },
      {
        language: 'Java',
        projects: ['Minesweper'],
      },
      {
        language: 'Python',
        projects: ['portainer-templates'],
      },
      {
        language: 'Node',
        projects: ['twitter-sentiment-visualisation'],
      }
    ],
    frontend: [
      {
        language: 'Vue',
        projects: ['cesar-diaz-website'],
      },
      {
        language: 'Svelte',
        projects: ['my-website'],
      },
      {
        language: 'React',
        projects: ['web-check'],
      },
      {
        language: 'HTML',
        projects: ['repo-badge-maker '],
      },
    ],
    mobile: [
      {
        language: 'Swift',
        projects: ['hasami-shogi'],
      },
      {
        language: 'Android',
        projects: ['Minesweper'],
      },
      {
        language: 'React Native',
        projects: [''],
      },
    ],
    other: [
      {
        language: 'Bash',
        projects: ['minimal-terminal-prompt'],
      },
      {
        language: 'Docker',
        projects: ['docker-tcpdump'],
      },
      {
        language: 'Config',
        projects: ['dotfiles'],
      }
    ],
  },
  techStackExtras: {
    devOps: [
      'Kubernetes', 'GitHubActions', 'Grafana',
    ],
    cloud: [
      'Cloudflare', 'AWS', 'GCP',
    ],
    databases: [
      'PostgreSQL', 'SQLite', 'Redis','MySQL',
    ],
    testing: [
      'Jest',
    ],
    security: [
      'Nmap',
    ],
  },
  plausible: {
    scriptSrc: 'https://no-track.as93.net/js/script.js',
    domain: 'cotonrey.es',
  },
};

export default config;
