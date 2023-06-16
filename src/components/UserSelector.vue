<script>
import { get_friendships, get_user_by_id as get_user } from "../services/api.js"
import { user } from "../states/user.js"

export default {
  data() {
    return {
      users: {},
    }
  },
  props: {
    modelValue: {
      type: Array,
      default: () => ["degra"]
    }
  },
  mounted() {
    console.log(this.modelValue)
    get_friendships().then(friends => {
      friends.sort()
      friends.filter(f => f.status == "accepted").map(f => f.from == user.id ? f.to : f.from).forEach(async friend => {
        this.users[friend] = await get_user(friend)
        if(this.modelValue.includes(friend)) {
          this.users[friend].selected = true
        } else {
          this.users[friend].selected = false
        }
      })
    })
  },
  methods: {
    update() {
      this.$emit("update:modelValue", Object.keys(this.users).filter(u => this.users[u].selected))
    }
  }
}
</script>

<style scoped>
.ico {
  color: lightgrey;
}

.tag_selected {
  color: red;
}

label {
  padding-left: 10px
}
</style>

<template>
  <main>
    <template v-for="(item, index) in users">
      <input type="checkbox" :id="index" v-model="item.selected" @change="update"> 
      <label :for="index">{{ item.username }}</label><br>
    </template>
  </main>
</template>
