<script>
  import { delete_party } from '../services/api.js' 
  export default {
    name: 'PartyCard',
    props: {
      item: Object,
      buttons: Object,
    },
    props: {
      item: Object,
    },
    mounted() {
    },
    methods: {
      delete_party(item) {
        this.$emit("delete")
        delete_party(this.item._id).then(() => {
          this.$emit("delete", this.item._id)
        }).catch(err => {
          console.log("Cannot delte party: " + JSON.stringify(err))
        })
      },
    }
  }
</script>

<template>
    <v-card :ref="item._id" class="card-content">
      Image: <v-img src="{{ item.image }}" alt="" contain height="50px" width="50px"></v-img><br>
      Title: {{ item.title }}<br>
      Date: {{ item.date }}<br>
      Location: {{ item.location }}<br>
      <span>
        Privacy:
        <i v-if="!item.private" class="material-icons">public</i>
        <i v-else class="material-icons">lock</i>
      </span><br>
      <div class="card-footer">
        <RouterLink :to="item._id + '/edit'"><input type="button" class="button is-success" value="Edit"></RouterLink>
        <input type="button" class="button is-success" @click="delete_party" value="Delete">
      </div> 
    </v-card>
</template>

<style scoped>
span {
  display: flex;
  vertical-align: middle;
}

i.material-icons {
  margin-left: 0.3em;
}

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
