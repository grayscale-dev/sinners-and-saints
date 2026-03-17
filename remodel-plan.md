# Remodel Plan

## Source URL

- https://sinnersandsaintscoffee.com/
- Mirror/indexed source used for planning (Cloudflare on direct crawl): https://www.sinnersandsaintscoffee.com/

## Business Summary

Sinners & Saints Coffee is a Lehi, Utah coffee shop and beverage company with a family-led brand story (mother-daughter founders), in-store service, online ordering, catering, and hiring/application CTAs.

Core business intent to preserve:
- Local coffee shop identity and hospitality tone
- Story-led brand positioning (family, travel-inspired coffee culture)
- Conversion paths to order ahead, catering inquiry, and job application
- Practical location + hours information

## Target Audience

- Local Lehi-area coffee customers
- Commuters and nearby residents wanting fast order-ahead pickup
- Event organizers seeking coffee catering
- Job seekers interested in joining the team

## Sitemap

Observed source IA and CTA targets:
- `/` (Home)
- `/our-story`
- `/order`
- `/menu/sinners-saints-coffee-main-st`
- `/catering`
- `/application`
- Header includes `Work With Us` / careers pathway

Remodel sitemap in this repo:
- `/` Home
- `/our-story`
- `/menu`
- `/catering`
- `/application`
- Keep sensible legacy redirects from template routes where needed

## Page-by-Page Rebuild Plan

- Home:
  - Build a strong hero with clear brand story and immediate CTA stack
  - Add conversion cards for Order Ahead, Catering, and Work With Us
  - Add location/hours and social links section
  - Reuse source-safe content only (no fabricated proof blocks)
- Our Story:
  - Rebuild as a narrative page using source copy themes
  - Emphasize family origin + travel inspiration + Utah roots
  - Add practical CTAs to menu/order/catering
- Menu:
  - Position as a funnel page to live hosted menu/order destinations
  - Present known offerings without fabricated pricing/details
  - Keep CTA priority on viewing live menu and ordering online
- Catering:
  - Build a clean inquiry-focused page
  - Include concise event-use framing and an inquiry form
  - Wire optional Supabase submission path with safe fallback
- Application:
  - Build a hiring page with clear team-join CTA and interest form
  - Keep claims neutral and grounded

## Design Notes

- Use brand red (`#F01D1C`) as accent with warm neutrals for readability
- Improve visual hierarchy with stronger hero scale, cleaner section rhythm, and tighter CTA placement
- Use PrimeVue cards/buttons/inputs and section-level reusable components
- Keep motion minimal and purposeful
- Mobile-first spacing and clear tap targets

## Content Issues

- Source pages are partially protected by Cloudflare for non-browser crawlers
- Some deep pages (notably catering/application/menu/order) are not consistently crawlable in plain fetch
- Keep copy faithful to verified, indexed source text; avoid unsupported specifics

## Asset Issues

- Source images are hosted remotely; no direct local media bundle available
- Reuse source image URLs where stable, and avoid inventing logos/testimonials/metrics
- Keep implementation resilient if remote images fail (solid layout without them)

## Implementation Checklist

- [x] Confirm source page inventory
- [x] Confirm navigation and primary CTA paths
- [x] Update `site-remodel.config.json`
- [x] Update `src/content/site-content.ts`
- [x] Implement section/page updates
- [x] QA responsiveness and accessibility
- [x] Run lint and build
