import type { SiteContent } from '../types/site'

export const siteContent: SiteContent = {
  metadata: {
    siteName: 'Sinners & Saints Coffee - Lehi',
    tagline: 'Welcome sinners and saints',
    description:
      'Family-inspired coffee shop in Lehi, Utah with order-ahead convenience, catering, and a warm neighborhood atmosphere.',
    sourceUrl: 'https://sinnersandsaintscoffee.com/'
  },
  navItems: [
    { label: 'Home', to: '/' },
    { label: 'Our Story', to: '/our-story' },
    { label: 'Menu', to: '/menu' },
    { label: 'Catering', to: '/catering' },
    { label: 'Work With Us', to: '/application' }
  ],
  headerCta: {
    label: 'Order Online',
    href: 'https://www.sinnersandsaintscoffee.com/order'
  },
  hero: {
    eyebrow: 'Lehi, Utah',
    title: 'Welcome sinners and saints',
    subtitle:
      'We are a mother-daughter duo inspired by coffee culture around the world and rooted in a warm, local Utah coffee experience.',
    primaryCta: {
      label: 'Skip The Line',
      href: 'https://www.sinnersandsaintscoffee.com/order'
    },
    secondaryCta: {
      label: 'Our Story',
      to: '/our-story'
    }
  },
  homeActions: [
    {
      title: 'Order Ahead',
      description: 'Place your order online and keep your morning moving.',
      imageUrl:
        'https://d1w7312wesee68.cloudfront.net/qek7kImSop_dMGxK3PFDzDo-Titirb_EtmOf_8Bqd_s/ext:webp/quality:85/c:4284:5685:ce:0:-13/plain/s3://toast-sites-resources-prod/restaurantImages/3b759c5b-d69d-4692-b047-2baec416d14f/IMG_0358.jpg',
      action: {
        label: 'Order Ahead',
        href: 'https://www.sinnersandsaintscoffee.com/order'
      }
    },
    {
      title: 'Catering',
      description:
        'Bring Sinners & Saints beverages to your next meeting or event.',
      imageUrl:
        'https://d1w7312wesee68.cloudfront.net/vUaOGu1NMcxS5q33uigBwlDB48xErLtW-pOOTb_auwE/ext:webp/quality:85/plain/s3://toast-sites-resources-prod/restaurantImages/3b759c5b-d69d-4692-b047-2baec416d14f/IMG_0976.jpg',
      action: {
        label: 'Inquire',
        to: '/catering'
      }
    },
    {
      title: 'Join The Team',
      description: 'Apply to work with a hospitality-first local coffee crew.',
      imageUrl:
        'https://d1w7312wesee68.cloudfront.net/F6UAM0TZrQgVtWJ47VJk6LHvRJEhZN9_MbP3C6CbTTA/ext:webp/quality:85/plain/s3://toast-sites-resources-prod/stockImages/person-holding-coffee.jpeg',
      action: {
        label: 'Apply',
        to: '/application'
      }
    }
  ],
  storyActions: [
    {
      title: 'View The Menu',
      description: 'See currently listed drinks and food before you visit.',
      action: {
        label: 'View Menu',
        href: 'https://www.sinnersandsaintscoffee.com/menu/sinners-saints-coffee-main-st'
      }
    },
    {
      title: 'Book Catering',
      description: 'Start a catering conversation for your next event.',
      action: {
        label: 'Book Your Event',
        to: '/catering'
      }
    }
  ],
  storyPage: {
    title: 'Our Story',
    subtitle: 'Family-led coffee culture, inspired by adventure.',
    paragraphs: [
      'Sinners & Saints Coffee is a mother-daughter duo inspired by adventures around the world and a shared love for great coffee.',
      'After exploring cafes abroad and falling in love with coffee culture, that inspiration came home to Utah as a welcoming beverage company focused on family, connection, and quality in every cup.',
      'The shop pairs coffee with fresh pastries and breakfast burritos, then extends that same experience to catering for gatherings and events.'
    ],
    highlights: [
      'Family-run coffee company',
      'Lehi, Utah location',
      'Order-ahead convenience',
      'Catering for events'
    ],
    imageUrl:
      'https://d1w7312wesee68.cloudfront.net/xsjwuvafoQUKxsNEobo6BhbjDN_sWo4I-nEZzkTTEX4/ext:webp/quality:85/c:2809:3747:ce:371:981/plain/s3://toast-sites-resources-prod/restaurantImages/3b759c5b-d69d-4692-b047-2baec416d14f/IMG_02061.jpg'
  },
  menuPage: {
    title: 'Menu & Ordering',
    subtitle: 'Find your favorites and order online when you are on the go.',
    intro:
      'Menu details are maintained on the live ordering platform so guests always see the latest availability and updates.',
    highlights: [
      'Coffee and specialty drinks',
      'Fresh pastries',
      'Breakfast burritos',
      'Live menu and online ordering'
    ],
    menuAction: {
      label: 'View Live Menu',
      href: 'https://www.sinnersandsaintscoffee.com/menu/sinners-saints-coffee-main-st'
    },
    orderAction: {
      label: 'Order Online',
      href: 'https://www.sinnersandsaintscoffee.com/order'
    }
  },
  cateringPage: {
    title: 'Catering',
    subtitle: 'Coffee service for meetings, celebrations, and community events.',
    intro:
      'Tell us about your event and we will follow up with catering availability and next steps.',
    highlights: [
      'Simple event intake',
      'Local Lehi-based service',
      'Great for team meetings and gatherings',
      'Responsive follow-up'
    ],
    inquiryAction: {
      label: 'View Source Catering Page',
      href: 'https://www.sinnersandsaintscoffee.com/catering'
    }
  },
  applicationPage: {
    title: 'Work With Us',
    subtitle: 'Join the team behind Sinners & Saints Coffee.',
    intro:
      'We are always interested in meeting people who care about hospitality, quality, and great customer experience.',
    highlights: [
      'Customer-first service mindset',
      'Coffee and cafe environment',
      'Team-oriented culture',
      'Direct application pathway'
    ],
    applyAction: {
      label: 'Open Application',
      href: 'https://www.sinnersandsaintscoffee.com/application'
    }
  },
  visit: {
    phone: 'See Live Listing',
    phoneHref:
      'https://www.sinnersandsaintscoffee.com/menu/sinners-saints-coffee-main-st',
    address: '184 Main Street, Lehi, UT 84043',
    mapHref:
      'https://google.com/maps/place?q=Sinners+%26+Saints+Coffee+-+Lehi%2C+184+Main+Street%2C+Lehi%2C+UT+84043',
    status: 'Open status updates on the live listing.',
    hoursLabel: 'View all hours online',
    menuAction: {
      label: 'View Menu',
      href: 'https://www.sinnersandsaintscoffee.com/menu/sinners-saints-coffee-main-st'
    },
    socials: [
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/sinnerssaintscoffee',
        icon: 'pi pi-instagram'
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/sinnerssaintscoffee',
        icon: 'pi pi-facebook'
      }
    ]
  },
  footer: {
    description:
      'Family-inspired coffee, welcoming service, and an easy path to order ahead in Lehi.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Home', to: '/' },
          { label: 'Our Story', to: '/our-story' },
          { label: 'Menu', to: '/menu' },
          { label: 'Catering', to: '/catering' },
          { label: 'Work With Us', to: '/application' }
        ]
      },
      {
        title: 'Quick Links',
        links: [
          {
            label: 'Order Online',
            href: 'https://www.sinnersandsaintscoffee.com/order'
          },
          {
            label: 'View Live Menu',
            href: 'https://www.sinnersandsaintscoffee.com/menu/sinners-saints-coffee-main-st'
          },
          {
            label: 'Directions',
            href: 'https://google.com/maps/place?q=Sinners+%26+Saints+Coffee+-+Lehi%2C+184+Main+Street%2C+Lehi%2C+UT+84043'
          }
        ]
      }
    ],
    copyright: 'Sinners & Saints Coffee - Lehi',
    legalLinks: [
      {
        label: 'Terms of Service',
        href: 'https://pos.toasttab.com/terms-of-service/#diner-tos'
      },
      {
        label: 'Privacy Statement',
        href: 'https://pos.toasttab.com/privacy'
      }
    ]
  }
}
