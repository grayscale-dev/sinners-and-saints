<script setup lang="ts">
import { onMounted } from 'vue'
import Chip from 'primevue/chip'

import PageContainer from '../components/ui/PageContainer.vue'
import PrimaryButton from '../components/ui/PrimaryButton.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import { siteContent } from '../content/site-content'
import { applyPageSeo } from '../lib/seo'
import InquiryFormSection from '../sections/forms/InquiryFormSection.vue'

const applicationPage = siteContent.applicationPage

onMounted(() => {
  applyPageSeo({
    title: 'Work With Us',
    description: applicationPage.subtitle + ' ' + applicationPage.intro
  })
})
</script>

<template>
  <PageContainer>
    <section class="pt-16 sm:pt-20">
      <div class="space-y-8">
        <SectionHeading
          :title="applicationPage.title"
          :subtitle="applicationPage.subtitle"
        />

        <p class="max-w-3xl text-base leading-relaxed text-stone-700">
          {{ applicationPage.intro }}
        </p>

        <div class="flex flex-wrap gap-2">
          <Chip
            v-for="highlight in applicationPage.highlights"
            :key="highlight"
            :label="highlight"
            class="border border-stone-200 bg-white text-stone-700"
          />
        </div>

        <PrimaryButton
          :label="applicationPage.applyAction.label"
          :to="applicationPage.applyAction.to"
          :href="applicationPage.applyAction.href"
          outlined
        />
      </div>
    </section>
  </PageContainer>

  <InquiryFormSection
    intent="application"
    title="Send Your Interest"
    description="Share your contact details and experience. We will follow up with next steps."
    submit-label="Submit Interest"
  />
</template>
