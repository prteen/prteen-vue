<script>
import { user } from '../states/auth.js'
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
        location: "here",
        max_participants: 20,
        participants: [],
        invited: []
      }
    }
  },
  methods: {
    submit() {
      const data = {}
      Object.keys(this.form).forEach(key => {
        data[key] = this.form[key]
      })
      create_party(data).then(response => {
        if(response.type == "success") {
          alert("Party created!")
        } else {
          alert("Party creation failed!")
        }
      }).catch(error => {
        alert("Party creation failed!")
      })
    }
  }
}
</script>

<template>
  <main>
    <form @submit.prevent="submit">
      <table style="width: 100%">
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
          <td><input type="checkbox" v-model="form.private" /></td>
        </tr>
        <tr>
          <td>Tags</td>
          <td><input type="hidden" v-model="form.tags" /></td>
        </tr>
        <tr>
          <td>Location</td>
          <td><input type="text" v-model="form.location" /></td>
        </tr>
        <tr>
          <td>Max Participants</td>
          <td><input type="number" v-model="form.max_participants" /></td>
        </tr>
        <input type="submit" value="Create Party" />
      </table>
    </form>
    {{ form }}
  </main>
</template>

