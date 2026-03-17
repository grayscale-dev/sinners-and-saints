export interface NavItem {
  label: string
  to: string
}

export interface ActionLink {
  label: string
  to?: string
  href?: string
}

export interface SiteMetadata {
  siteName: string
  tagline: string
  description: string
  sourceUrl?: string
}

export interface HeroContent {
  eyebrow?: string
  title: string
  subtitle: string
  primaryCta: ActionLink
  secondaryCta?: ActionLink
}

export interface ActionCard {
  title: string
  description: string
  imageUrl?: string
  action: ActionLink
}

export interface StoryPageContent {
  title: string
  subtitle: string
  paragraphs: string[]
  highlights: string[]
  imageUrl?: string
}

export interface MenuPageContent {
  title: string
  subtitle: string
  intro: string
  highlights: string[]
  menuAction: ActionLink
  orderAction: ActionLink
}

export interface CateringPageContent {
  title: string
  subtitle: string
  intro: string
  highlights: string[]
  inquiryAction?: ActionLink
}

export interface ApplicationPageContent {
  title: string
  subtitle: string
  intro: string
  highlights: string[]
  applyAction: ActionLink
}

export interface VisitInfo {
  phone: string
  phoneHref: string
  address: string
  mapHref: string
  status: string
  hoursLabel: string
  menuAction: ActionLink
  socials: {
    label: string
    href: string
    icon: string
  }[]
}

export interface FooterLink {
  label: string
  to?: string
  href?: string
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export interface FooterData {
  description: string
  columns: FooterColumn[]
  copyright: string
  legalLinks: FooterLink[]
}

export interface SiteContent {
  metadata: SiteMetadata
  navItems: NavItem[]
  headerCta: ActionLink
  hero: HeroContent
  homeActions: ActionCard[]
  storyActions: ActionCard[]
  storyPage: StoryPageContent
  menuPage: MenuPageContent
  cateringPage: CateringPageContent
  applicationPage: ApplicationPageContent
  visit: VisitInfo
  footer: FooterData
}

// Legacy interfaces kept for compatibility with template sections that may
// remain in the repository but are not used by the remodel routes.
export interface FeatureBlock {
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface CtaContent {
  title: string
  body: string
  action: ActionLink
}

export interface ContactInfo {
  headline: string
  body: string
  email: string
  phone: string
  addressLines: string[]
  hours: string
}
