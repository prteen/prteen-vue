<script setup>
import VueGoogleAutocomplete from "vue-google-autocomplete";
</script>

<script>
export default {
  data() {
    return {
      string: "",
      coords: {},
      initial: ""
    }
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
  },
  mounted() {
    let data = JSON.parse(this.modelValue)
    this.string = data.string
    this.coords = data.coords
    this.initial = data.string
  },
  methods: {
    update(data) {
      this.string = data.formatted_address;
      this.coords = {
        lat: data.latitude,
        lng: data.longitude
      };
      this.$emit("update:modelValue", JSON.stringify({string: this.string, coords: this.coords}))
    }
  },
  components: {
    VueGoogleAutocomplete
  },
}
</script>

<template>
  <main>
    <vue-google-autocomplete placeholder="Party Location" :types="['address','(establishment)']" v-model="initial" id="map" :country="['it']" classname="form-control" v-on:placechanged="update">
    </vue-google-autocomplete>
  </main>
</template>
