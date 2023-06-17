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
        location: "{\"string\": \"Trento, Autonomous Province of Trento, Italy\", \"coords\": {\"lat\": 46.066422, \"lng\": 11.125760}}",
        max_participants: 20,
        participants: [],
        invited: [],
        self_participating: true
      }
    }
  },
  methods: {
    submit() {
      const data = {}
      Object.keys(this.form).forEach(key => {
        data[key] = this.form[key]
      })

      //processing
      if(data.private) {
        data.participants = []
      } else {
        data.invited = []
      }
      if(data.self_participating) {
        data.participants.push(user.id)
      }
      delete data.self_participating
      
      create_party(data).then(response => {
        if(response.type == "success") {
          alert("Party created!")
        } else {
          alert("Party creation failed!")
        }
      }).catch(error => {
        alert("Party creation failed!")
      })
    },
    change_privacy() {
    }
  }
}
</script>

<template>
  <main>
    <form @submit.prevent="submit">
      <table>
        <tr>
          <td>Title</td>
          <td><input type="text" v-model="form.title" /></td>
        </tr>
        <tr>
          <td>Description</td>
          <td><input type="text" v-model="form.description" /></td>
        </tr>
        <tr>
          <td>Date</td>
          <td><VueDatePicker v-model="form.date" format="yyyy/mm/dd HH:MM" /></td> 
        </tr>
        <tr>
          <td>Privacy</td>
          <td>
            <input type="checkbox" v-model="form.private" @change="change_privacy" />
            <span v-if="form.private">Private</span>
            <span v-else>Public</span>
          </td> 
        </tr>
        <tr v-if="form.private" style="/* border: 1px solid black */">
          <td>Invintees</td>
          <td style="padding-left: 15px">
            <UserSelector v-model="form.invited" /> 
          </td>
        </tr>
        <tr>
          <td>Will you join?</td>
          <td><input type="checkbox" v-model="form.self_participating" /></td>
        </tr>
        <tr>
          <td>Tags</td>
          <td>
            <TagsSelector v-model="form.tags" />
          </td>
        </tr>
        <tr>
          <td>Location</td>
          <td><PlaceInput v-model="form.location" /></td>
        </tr>
        <tr>
          <td>Max Participants</td>
          <td><input type="number" v-model="form.max_participants" /></td>
        </tr>
        <input type="submit" value="Create Party" />
      </table>
    </form>
    <pre>
{{ form }}
    </pre>
  </main>
</template>

