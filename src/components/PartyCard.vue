<script>
  export default {
    name: 'PartyCard',
    props: {
      item: Object,
      buttons: Object,
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
      Image: <v-img src="{{ item.image }}" alt="" contain height="50px" width="50px"></v-img><br>
      Title: {{ item.title }}<br>
      Date: {{ item.date }}<br>
      Location: {{ item.location }}<br>
      <div class="card-footer">
        <RouterLink :to="item._id"><input type="button" class="button is-success" value="View"></RouterLink>
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
