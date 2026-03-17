<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'
import Textarea from 'primevue/textarea'

import { isSupabaseConfigured, supabase } from '../../lib/supabase'

const props = defineProps<{
  intent: 'catering' | 'application'
  title: string
  description: string
  submitLabel: string
}>()

const isCatering = computed(() => props.intent === 'catering')
const isApplication = computed(() => props.intent === 'application')

const submitting = ref(false)
const submissionState = ref<'idle' | 'saved' | 'local'>('idle')

const formState = reactive({
  name: '',
  email: '',
  phone: '',
  eventDate: '',
  guestCount: '',
  availability: '',
  notes: ''
})

async function submitForm(): Promise<void> {
  submitting.value = true

  const payload = {
    intent: props.intent,
    name: formState.name,
    email: formState.email,
    phone: formState.phone,
    event_date: formState.eventDate || null,
    guest_count: formState.guestCount || null,
    availability: formState.availability || null,
    notes: formState.notes,
    submitted_at: new Date().toISOString()
  }

  if (!isSupabaseConfigured || !supabase) {
    submissionState.value = 'local'
  } else {
    const { error } = await supabase.from('lead_submissions').insert(payload)
    submissionState.value = error ? 'local' : 'saved'
  }

  formState.name = ''
  formState.email = ''
  formState.phone = ''
  formState.eventDate = ''
  formState.guestCount = ''
  formState.availability = ''
  formState.notes = ''

  submitting.value = false
}
</script>

<template>
  <section class="py-16 sm:py-20">
    <div class="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
      <Card class="border border-stone-200 shadow-sm">
        <template #content>
          <div class="space-y-6">
            <div class="space-y-3">
              <h2 class="text-3xl font-semibold text-stone-900">{{ title }}</h2>
              <p class="text-base leading-relaxed text-stone-600">
                {{ description }}
              </p>
            </div>

            <form class="grid gap-4 md:grid-cols-2" @submit.prevent="submitForm">
              <div class="space-y-2">
                <label for="name" class="text-sm font-medium text-stone-900">
                  Name
                </label>
                <InputText id="name" v-model="formState.name" class="w-full" required />
              </div>

              <div class="space-y-2">
                <label for="email" class="text-sm font-medium text-stone-900">
                  Email
                </label>
                <InputText
                  id="email"
                  v-model="formState.email"
                  type="email"
                  class="w-full"
                  required
                />
              </div>

              <div class="space-y-2">
                <label for="phone" class="text-sm font-medium text-stone-900">
                  Phone
                </label>
                <InputText id="phone" v-model="formState.phone" class="w-full" required />
              </div>

              <div v-if="isCatering" class="space-y-2">
                <label for="event-date" class="text-sm font-medium text-stone-900">
                  Event Date
                </label>
                <InputText
                  id="event-date"
                  v-model="formState.eventDate"
                  type="date"
                  class="w-full"
                />
              </div>

              <div v-if="isCatering" class="space-y-2">
                <label for="guest-count" class="text-sm font-medium text-stone-900">
                  Estimated Guests
                </label>
                <InputText id="guest-count" v-model="formState.guestCount" class="w-full" />
              </div>

              <div v-if="isApplication" class="space-y-2">
                <label for="availability" class="text-sm font-medium text-stone-900">
                  Availability
                </label>
                <InputText
                  id="availability"
                  v-model="formState.availability"
                  class="w-full"
                  placeholder="Weekdays, mornings, weekends, etc."
                />
              </div>

              <div class="space-y-2 md:col-span-2">
                <label for="notes" class="text-sm font-medium text-stone-900">
                  {{ isCatering ? 'Event Details' : 'Experience and Notes' }}
                </label>
                <Textarea
                  id="notes"
                  v-model="formState.notes"
                  rows="5"
                  class="w-full"
                  required
                />
              </div>

              <div class="md:col-span-2">
                <Button
                  type="submit"
                  :label="submitLabel"
                  icon="pi pi-send"
                  :loading="submitting"
                  :disabled="submitting"
                />
              </div>
            </form>

            <Message v-if="submissionState === 'saved'" severity="success" :closable="false">
              Thanks. Your request was submitted successfully.
            </Message>

            <Message v-if="submissionState === 'local'" severity="info" :closable="false">
              Thanks. Your request is captured in this session. To persist submissions,
              connect Supabase and create a lead_submissions table.
            </Message>
          </div>
        </template>
      </Card>
    </div>
  </section>
</template>
