<script>
import strftime from 'strftime'

export default {
  name: 'PartyCard',
  data() {
    return {
      loading: true
    }
  },
  props: {
    item: Object,
  },
  mounted() {
    try {
      this.item.location = JSON.parse(this.item.location)
    } catch(e) {
      this.item.location = "N/A"
    }
  },
  methods: {
    view_details() {
      const id = this.item._id
      this.$router.push({ path: `/parties/id/${id}` })
    },
    format_date() {
      return strftime("%y/%m/%d %H:%M", new Date(this.item.date))
    },
    location_string() {
      console.log(this.item)
      if(!this.item.location)
        return "none"
      if(this.item.location.string)
        return this.item.location.string
      if(this.item.location.coords)
        return this.item.location.coords
      return "none"
    }
  }
}
</script>

<template>
    <div class="card-content">
      Title: {{ item.title }}<br>
      Date: {{ format_date() }}<br>
      Location: {{ location_string() }}<br>
      <div class="card-footer">
        <RouterLink :to="item._id"><input type="button" class="button is-success" value="View"></RouterLink>
      </div>
    </div>
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
