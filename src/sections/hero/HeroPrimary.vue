<script setup lang="ts">
import PageContainer from '../../components/ui/PageContainer.vue'
import PrimaryButton from '../../components/ui/PrimaryButton.vue'

import type { HeroContent } from '../../types/site'

defineProps<{
  content: HeroContent
}>()
</script>

<template>
  <section class="relative overflow-hidden py-20 sm:py-24">
    <div
      class="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(240,29,28,0.18),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(44,34,28,0.15),transparent_50%),linear-gradient(180deg,#faf7f5_0%,#f5f1ee_100%)]"
      aria-hidden="true"
    />

    <div
      class="absolute inset-x-0 top-0 -z-10 h-2 bg-[color:var(--brand-primary)]"
      aria-hidden="true"
    />

    <PageContainer>
      <div class="mx-auto max-w-4xl space-y-8 text-center">
        <p
          v-if="content.eyebrow"
          class="inline-flex rounded-full border border-stone-300 bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700"
        >
          {{ content.eyebrow }}
        </p>

        <h1 class="text-4xl font-semibold uppercase tracking-wide text-stone-900 sm:text-6xl">
          {{ content.title }}
        </h1>

        <p class="mx-auto max-w-3xl text-lg leading-relaxed text-stone-700 sm:text-xl">
          {{ content.subtitle }}
        </p>

        <div class="flex flex-wrap items-center justify-center gap-3">
          <PrimaryButton
            :label="content.primaryCta.label"
            :to="content.primaryCta.to"
            :href="content.primaryCta.href"
          />
          <PrimaryButton
            v-if="content.secondaryCta"
            :label="content.secondaryCta.label"
            :to="content.secondaryCta.to"
            :href="content.secondaryCta.href"
            outlined
          />
        </div>
      </div>
    </PageContainer>
  </section>
</template>
