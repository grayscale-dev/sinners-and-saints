<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'

import PrimaryButton from '../ui/PrimaryButton.vue'

import type { ActionLink, NavItem } from '../../types/site'

const props = defineProps<{
  siteName: string
  navItems: NavItem[]
  cta: ActionLink
}>()

const mobileMenuOpen = ref(false)
const route = useRoute()

const siteInitials = computed(() => {
  const words = props.siteName.split(' ').filter(Boolean)
  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase()
})

function isActive(path: string): boolean {
  if (path === '/') {
    return route.path === '/'
  }

  return route.path.startsWith(path)
}

function closeMobileMenu(): void {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-stone-200/80 bg-stone-50/95 backdrop-blur"
  >
    <div
      class="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8"
    >
      <RouterLink to="/" class="flex items-center gap-3">
        <span
          class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--brand-primary)] text-sm font-semibold text-white"
        >
          {{ siteInitials }}
        </span>
        <span class="text-sm font-semibold tracking-wide text-stone-900 sm:text-base">
          {{ siteName }}
        </span>
      </RouterLink>

      <nav class="hidden items-center gap-1 md:flex">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-full px-3 py-2 text-sm font-medium transition-colors"
          :class="
            isActive(item.to)
              ? 'bg-stone-900 text-white'
              : 'text-stone-700 hover:bg-stone-200 hover:text-stone-900'
          "
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2">
        <div class="hidden md:block">
          <PrimaryButton
            :label="cta.label"
            :to="cta.to"
            :href="cta.href"
            size="small"
          />
        </div>

        <div class="md:hidden">
          <PrimaryButton
            :label="cta.label"
            :to="cta.to"
            :href="cta.href"
            size="small"
          />
        </div>

        <Button
          icon="pi pi-bars"
          text
          rounded
          aria-label="Open navigation menu"
          class="md:hidden"
          @click="mobileMenuOpen = true"
        />
      </div>
    </div>

    <Drawer
      v-model:visible="mobileMenuOpen"
      header="Navigation"
      position="right"
      class="w-[18rem]"
    >
      <nav class="flex flex-col gap-2 pt-2">
        <RouterLink
          v-for="item in navItems"
          :key="`mobile-${item.to}`"
          :to="item.to"
          class="rounded-lg px-3 py-2 text-sm font-medium transition-colors"
          :class="
            isActive(item.to)
              ? 'bg-stone-900 text-white'
              : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
          "
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </RouterLink>

        <div class="mt-3" @click="closeMobileMenu">
          <PrimaryButton
            :label="cta.label"
            :to="cta.to"
            :href="cta.href"
            class="w-full"
          />
        </div>
      </nav>
    </Drawer>
  </header>
</template>
