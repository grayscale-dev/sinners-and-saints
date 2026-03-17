<script setup lang="ts">
import { onMounted } from 'vue'

import { siteContent } from '../content/site-content'
import { applyPageSeo } from '../lib/seo'
import HeroPrimary from '../sections/hero/HeroPrimary.vue'
import ActionCardsSection from '../sections/shared/ActionCardsSection.vue'
import VisitInfoSection from '../sections/shared/VisitInfoSection.vue'

onMounted(() => {
  applyPageSeo({
    title: 'Home',
    description: siteContent.metadata.description
  })
})
</script>

<template>
  <HeroPrimary :content="siteContent.hero" />

  <ActionCardsSection
    title="Order, Cater, or Join The Team"
    subtitle="Choose the path that fits your day, your event, or your next role."
    :cards="siteContent.homeActions"
  />

  <VisitInfoSection
    title="Visit Sinners & Saints"
    subtitle="Stop by our Lehi location for coffee, pastries, and breakfast burritos, or place your order online before you head over."
    :visit="siteContent.visit"
  />
</template>
