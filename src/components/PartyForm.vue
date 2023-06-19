<script setup>
import TagsSelector from './TagsSelector.vue'
import UserSelector from './UserSelector.vue'
import PlaceInput from './PlaceInput.vue'
</script>

<script>
import { user } from '../states/user.js'
import { create_party } from '../services/api.js'

export default {
  data() {
    return {
      form: {
        title: "",
        description: "",
        date: new Date(),
        private: false,
        tags: [],
        location: "{}",
        max_participants: 20,
        participants: [],
        invited: [],
        self_participating: true
      },
      loading: true
    }
  },
  props: {
    modelValue: {
      type: Object,
      default: undefined
    }
  },
  mounted() {
    if(this.modelValue)
      this.form = this.modelValue
    if(this.form.participants.includes(user.id))
      this.form.self_participating = true
    else
      this.form.self_participating = false
    this.loading = false
  },
  methods: {
    submit() {
      const data = {}
      Object.keys(this.form).forEach(key => {
        data[key] = this.form[key]
      })

      // processing
      if(data.private) {
        data.participants = []
      } else {
        data.invited = []
      }
      if(data.self_participating && !data.participants.includes(user.id)) {
        data.participants.push(user.id)
      }
      delete data.self_participating
      delete data._id
      delete data.organizer
      
      this.$emit("submitParty", data)
    },
  }
}
</script>

<style scoped>
td.label {
  text-align: end;
  padding-right: 0.5em;
  border-right: 1px solid black;
}

td:not(.label) {
  padding-left: 0.5em;
}

input[type="checkbox"] {
  margin-right: 0.3em
}

</style>

<template>
  <main>
    <form @submit.prevent="submit" v-if="!loading">
      <table>
        <tr>
          <td class="label">Title</td>
          <td><input type="text" v-model="form.title" /></td>
        </tr>
        <tr>
          <td class="label">Description</td>
          <td><input type="text" v-model="form.description" /></td>
        </tr>
        <tr>
          <td class="label">Date</td>
          <td><VueDatePicker v-model="form.date" format="yyyy/MM/dd HH:mm" /></td> 
        </tr>
        <tr>
          <td class="label">Privacy</td>
          <td>
            <input type="checkbox" v-model="form.private" />
            <span v-if="form.private">Private</span>
            <span v-else>Public</span>
          </td> 
        </tr>
        <tr v-if="form.private">
          <td class="label">Invintees</td>
          <td style="padding-left: 15px">
            <UserSelector v-model="form.invited" /> 
          </td>
        </tr>
        <tr>
          <td class="label">Will you join?</td>
          <td>
            <input type="checkbox" v-model="form.self_participating" />
            <span v-if="form.self_participating">Yes</span>
            <span v-else>No</span>
          </td>
        </tr>
        <tr>
          <td class="label">Tags</td>
          <td>
            <TagsSelector v-model="form.tags" />
          </td>
        </tr>
        <tr>
          <td class="label">Location</td>
          <td><PlaceInput v-model="form.location" /></td>
        </tr>
        <tr>
          <td class="label">Max Participants</td>
          <td><input type="number" v-model="form.max_participants" /></td>
        </tr>
        <input type="submit" value="Submit" />
      </table>
    </form>
  </main>
</template>

