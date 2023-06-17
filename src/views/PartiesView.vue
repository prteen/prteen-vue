<script setup>
  import PartyCard from '../components/PartyCard.vue'
  import { get_parties } from '../services/api.js' 
</script>


<template>
  <div>
    <div class="title">
      <h1>Parties</h1>
      <div class="buttons">
        <button @click="refresh">Refresh</button>
      </div>
    </div>
    <div v-for="item in parties">
        <PartyCard v-bind:item="item" />
    </div>
  </div>
</template>


<script>

export default {
  data() {
    return {
      parties: [],
    }
  },
  mounted() {
    this.refresh()
  },
  methods: {
    refresh() {
      get_parties().then(response => {
        console.log(response)
        this.parties = response
        console.log(this.parties)
      }).catch(error => {
        console.log(error)
        alert(JSON.stringify(error))
      })
    }
 }
}
</script>
