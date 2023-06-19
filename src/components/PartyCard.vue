<script setup>
  const props = defineProps(['item'])
  console.log(props)
</script>

<script>
  export default {
    name: 'PartyCard',
    props: ['item'],
    data() {
      return {
      }
    },
    mounted() {
    },
    methods: {
      view_details() {
        const id = this.item._id
        this.$router.push({ path: `/parties/id/${id}` })
      },
    }
  }
</script>

<template>
    <v-card class="card-content">
      <tr>
      Image: <v-img src="{{ item.image }}" alt="" contain height="50px" width="50px">
</v-img>
      </tr>
      <tr>
          Title: {{ item.title }}
      </tr>
      <tr>
          Date: {{ item.date }}
      </tr>
      <tr>
          Location: {{ item.location }}
      </tr>
      <div class="card-footer">
            <button class="button is-success" @click="view_details()">
              View
            </button>
      </div> 
    </v-card>
</template>

<style scoped>

.card-content {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  border-radius: 10px;
  background-color: #f1f1f1;
  margin: 8px;
  padding: 10px;
  width: 500px;
}
.card-footer {
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: center;
}
</style>
