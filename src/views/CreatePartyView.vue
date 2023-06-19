<script setup>
import PartyForm from '@/components/PartyForm.vue'
</script>

<script>
import { user } from '../states/user.js'
import { read_party, update_party } from '../services/api.js'

export default {
  components: {
    PartyForm
  }
}
</script>

<template>
  <main>
    <h1>Create new Party</h1>
    <PartyForm />
  </main>
</template>
