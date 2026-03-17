import { remodelConfig, type SiteRemodelConfig } from './config'

export function applyThemeFromConfig(
  config: Partial<SiteRemodelConfig> = remodelConfig
): void {
  if (typeof document === 'undefined') {
    return
  }

  const primary = config.primaryColor?.trim() || '#1d4ed8'
  const secondary = config.secondaryColor?.trim() || '#0f172a'

  const root = document.documentElement
  root.style.setProperty('--brand-primary', primary)
  root.style.setProperty('--brand-secondary', secondary)
  root.style.setProperty('--brand-primary-soft', `color-mix(in srgb, ${primary} 15%, white)`)
}
