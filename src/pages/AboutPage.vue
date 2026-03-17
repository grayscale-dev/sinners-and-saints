<script setup lang="ts">
import { onMounted } from 'vue'
import Chip from 'primevue/chip'

import PageContainer from '../components/ui/PageContainer.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import { siteContent } from '../content/site-content'
import { applyPageSeo } from '../lib/seo'
import ActionCardsSection from '../sections/shared/ActionCardsSection.vue'

const storyPage = siteContent.storyPage

onMounted(() => {
  applyPageSeo({
    title: 'Our Story',
    description: `${storyPage.subtitle} ${siteContent.metadata.description}`
  })
})
</script>

<template>
  <section class="py-16 sm:py-20">
    <PageContainer>
      <div class="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <div class="space-y-6">
          <SectionHeading :title="storyPage.title" :subtitle="storyPage.subtitle" />

          <p
            v-for="paragraph in storyPage.paragraphs"
            :key="paragraph"
            class="text-base leading-relaxed text-stone-700"
          >
            {{ paragraph }}
          </p>

          <div class="flex flex-wrap gap-2">
            <Chip
              v-for="highlight in storyPage.highlights"
              :key="highlight"
              :label="highlight"
              class="border border-stone-200 bg-white text-stone-700"
            />
          </div>
        </div>

        <img
          v-if="storyPage.imageUrl"
          :src="storyPage.imageUrl"
          alt="Sinners and Saints Coffee"
          class="h-full max-h-[540px] w-full rounded-2xl border border-stone-200 object-cover shadow-sm"
          loading="lazy"
        />
      </div>
    </PageContainer>
  </section>

  <ActionCardsSection
    title="From Story To Experience"
    subtitle="Explore what to order next or book Sinners & Saints for your event."
    :cards="siteContent.storyActions"
  />
</template>
