<script setup>
  import PartyCard from '../components/PartyCardOrganizer.vue'
  import { get_parties_organizer } from '../services/api.js' 
</script>


<template>
  <div>
    <div class="title">
      <h1>Parties</h1>
      <form @submit.prevent="refresh">
        <input type="submit" value="Refresh" />
      </form>
    </div>
    <div v-for="item in parties">
      <PartyCard 
        :item="item"
        @delete="delete_card(item._id)"
      />
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
      get_parties_organizer().then(response => {
        console.log(response)
        this.parties = response
        console.log(this.parties)
      }).catch(error => {
        console.log(error)
        alert(JSON.stringify(error))
      })
    },
    delete_card(id) {
      this.parties = this.parties.filter(p => p._id != id)
    }
  },

}
</script>
