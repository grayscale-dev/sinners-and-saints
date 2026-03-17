<script setup lang="ts">
import Card from 'primevue/card'

import PageContainer from '../../components/ui/PageContainer.vue'
import PrimaryButton from '../../components/ui/PrimaryButton.vue'

import type { VisitInfo } from '../../types/site'

defineProps<{
  title: string
  subtitle: string
  visit: VisitInfo
}>()
</script>

<template>
  <section class="bg-stone-900 py-16 text-stone-100 sm:py-20">
    <PageContainer>
      <div class="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div class="space-y-6">
          <h2 class="text-3xl font-semibold uppercase tracking-wide sm:text-4xl">
            {{ title }}
          </h2>
          <p class="max-w-2xl text-base leading-relaxed text-stone-200 sm:text-lg">
            {{ subtitle }}
          </p>

          <div class="grid gap-4 sm:grid-cols-2">
            <Card class="border border-stone-200 bg-white">
              <template #content>
                <div class="space-y-2">
                  <p class="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                    Contact
                  </p>
                  <a
                    :href="visit.phoneHref"
                    target="_blank"
                    rel="noreferrer"
                    class="text-lg font-semibold text-stone-900 hover:text-stone-700"
                  >
                    {{ visit.phone }}
                  </a>
                </div>
              </template>
            </Card>

            <Card class="border border-stone-200 bg-white">
              <template #content>
                <div class="space-y-2">
                  <p class="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                    Hours
                  </p>
                  <p class="text-lg font-semibold text-stone-900">{{ visit.status }}</p>
                  <p class="text-sm text-stone-600">{{ visit.hoursLabel }}</p>
                </div>
              </template>
            </Card>
          </div>
        </div>

        <Card class="border border-stone-200 bg-white">
          <template #content>
            <div class="space-y-6">
              <div class="space-y-2">
                <p class="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">
                  Address
                </p>
                <a
                  :href="visit.mapHref"
                  target="_blank"
                  rel="noreferrer"
                  class="text-base font-medium leading-relaxed text-stone-900 hover:text-stone-700"
                >
                  {{ visit.address }}
                </a>
              </div>

              <PrimaryButton
                :label="visit.menuAction.label"
                :to="visit.menuAction.to"
                :href="visit.menuAction.href"
              />

              <div class="flex items-center gap-2">
                <a
                  v-for="social in visit.socials"
                  :key="social.label"
                  :href="social.href"
                  :aria-label="social.label"
                  target="_blank"
                  rel="noreferrer"
                  class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-lg text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
                >
                  <span :class="social.icon" aria-hidden="true" />
                </a>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </PageContainer>
  </section>
</template>
