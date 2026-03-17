<script setup lang="ts">
import Card from 'primevue/card'

import PageContainer from '../../components/ui/PageContainer.vue'
import PrimaryButton from '../../components/ui/PrimaryButton.vue'
import SectionHeading from '../../components/ui/SectionHeading.vue'

import type { ActionCard } from '../../types/site'

withDefaults(
  defineProps<{
    title: string
    subtitle?: string
    cards: ActionCard[]
  }>(),
  {
    subtitle: ''
  }
)
</script>

<template>
  <section class="py-16 sm:py-20">
    <PageContainer>
      <div class="space-y-10">
        <SectionHeading :title="title" :subtitle="subtitle" align="center" />

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Card
            v-for="card in cards"
            :key="card.title"
            class="h-full overflow-hidden border border-stone-200 bg-white shadow-sm"
          >
            <template #content>
              <div class="flex h-full flex-col gap-5">
                <img
                  v-if="card.imageUrl"
                  :src="card.imageUrl"
                  :alt="card.title"
                  class="h-44 w-full rounded-lg object-cover"
                  loading="lazy"
                />

                <div class="space-y-3">
                  <h3 class="text-xl font-semibold text-stone-900">
                    {{ card.title }}
                  </h3>
                  <p class="text-sm leading-relaxed text-stone-600">
                    {{ card.description }}
                  </p>
                </div>

                <div class="mt-auto pt-2">
                  <PrimaryButton
                    :label="card.action.label"
                    :to="card.action.to"
                    :href="card.action.href"
                    size="small"
                  />
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </PageContainer>
  </section>
</template>
