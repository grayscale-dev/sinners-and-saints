<script setup lang="ts">
import { onMounted } from 'vue'
import Card from 'primevue/card'

import PageContainer from '../components/ui/PageContainer.vue'
import PrimaryButton from '../components/ui/PrimaryButton.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import { siteContent } from '../content/site-content'
import { applyPageSeo } from '../lib/seo'

const menuPage = siteContent.menuPage

onMounted(() => {
  applyPageSeo({
    title: 'Menu',
    description: `${menuPage.subtitle} ${menuPage.intro}`
  })
})
</script>

<template>
  <section class="py-16 sm:py-20">
    <PageContainer>
      <div class="space-y-10">
        <SectionHeading :title="menuPage.title" :subtitle="menuPage.subtitle" />

        <p class="max-w-3xl text-base leading-relaxed text-stone-700">
          {{ menuPage.intro }}
        </p>

        <div class="grid gap-4 md:grid-cols-2">
          <Card
            v-for="highlight in menuPage.highlights"
            :key="highlight"
            class="border border-stone-200 shadow-sm"
          >
            <template #content>
              <p class="text-base font-medium text-stone-800">
                {{ highlight }}
              </p>
            </template>
          </Card>
        </div>

        <div class="flex flex-wrap gap-3">
          <PrimaryButton
            :label="menuPage.menuAction.label"
            :to="menuPage.menuAction.to"
            :href="menuPage.menuAction.href"
          />
          <PrimaryButton
            :label="menuPage.orderAction.label"
            :to="menuPage.orderAction.to"
            :href="menuPage.orderAction.href"
            outlined
          />
        </div>
      </div>
    </PageContainer>
  </section>
</template>
