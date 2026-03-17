<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { FooterData } from '../../types/site'

defineProps<{
  siteName: string
  footer: FooterData
}>()
</script>

<template>
  <footer class="border-t border-stone-200 bg-stone-100">
    <div
      class="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8"
    >
      <div class="space-y-3">
        <h2 class="text-lg font-semibold uppercase tracking-wide text-stone-900">
          {{ siteName }}
        </h2>
        <p class="max-w-sm text-sm leading-relaxed text-stone-600">
          {{ footer.description }}
        </p>
      </div>

      <div
        v-for="column in footer.columns"
        :key="column.title"
        class="space-y-3"
      >
        <h3 class="text-sm font-semibold uppercase tracking-wide text-stone-900">
          {{ column.title }}
        </h3>

        <ul class="space-y-2">
          <li
            v-for="link in column.links"
            :key="`${column.title}-${link.label}`"
          >
            <RouterLink
              v-if="link.to"
              :to="link.to"
              class="text-sm text-stone-600 transition-colors hover:text-stone-900"
            >
              {{ link.label }}
            </RouterLink>
            <a
              v-else-if="link.href"
              :href="link.href"
              target="_blank"
              rel="noreferrer"
              class="text-sm text-stone-600 transition-colors hover:text-stone-900"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-stone-200">
      <div
        class="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 text-sm text-stone-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8"
      >
        <span>{{ footer.copyright }}</span>

        <div class="flex flex-wrap items-center gap-4">
          <a
            v-for="legalLink in footer.legalLinks"
            :key="legalLink.label"
            :href="legalLink.href"
            target="_blank"
            rel="noreferrer"
            class="transition-colors hover:text-stone-800"
          >
            {{ legalLink.label }}
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
