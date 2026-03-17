<script setup lang="ts">
import { onMounted } from 'vue'
import Chip from 'primevue/chip'

import PageContainer from '../components/ui/PageContainer.vue'
import PrimaryButton from '../components/ui/PrimaryButton.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import { siteContent } from '../content/site-content'
import { applyPageSeo } from '../lib/seo'
import InquiryFormSection from '../sections/forms/InquiryFormSection.vue'

const cateringPage = siteContent.cateringPage

onMounted(() => {
  applyPageSeo({
    title: 'Catering',
    description: cateringPage.subtitle + ' ' + cateringPage.intro
  })
})
</script>

<template>
  <PageContainer>
    <section class="pt-16 sm:pt-20">
      <div class="space-y-8">
        <SectionHeading
          :title="cateringPage.title"
          :subtitle="cateringPage.subtitle"
        />

        <p class="max-w-3xl text-base leading-relaxed text-stone-700">
          {{ cateringPage.intro }}
        </p>

        <div class="flex flex-wrap gap-2">
          <Chip
            v-for="highlight in cateringPage.highlights"
            :key="highlight"
            :label="highlight"
            class="border border-stone-200 bg-white text-stone-700"
          />
        </div>

        <PrimaryButton
          v-if="cateringPage.inquiryAction"
          :label="cateringPage.inquiryAction.label"
          :to="cateringPage.inquiryAction.to"
          :href="cateringPage.inquiryAction.href"
          outlined
        />
      </div>
    </section>
  </PageContainer>

  <InquiryFormSection
    intent="catering"
    title="Tell Us About Your Event"
    description="Share your event details and our team will follow up with catering options."
    submit-label="Send Catering Request"
  />
</template>
