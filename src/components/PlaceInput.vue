<script setup>
import VueGoogleAutocomplete from "vue-google-autocomplete";
</script>

<script>
import { PLACES_API_KEY } from "../config.js";

export default {
  data() {
    return {
      string: "",
      coords: {} 
    }
  },
  props: {
    modelValue: {
      type: String,
      default: ""
    },
  },
  mounted() {
    console.log(this.modelValue)
    let data = JSON.parse(this.modelValue)
    this.string = data.string
    this.coords = data.coords
    this.initial = data.string
  },
  methods: {
    update(data) {
      this.string = data.formatted_address;
      this.coords = {
        lat: data.geometry.location.lat(),
        lng: data.geometry.location.lng()
      };
      console.log(this.coords, this.string);
      this.$emit("update:modelValue", JSON.stringify({string: this.string, coords: this.coords}));
    }
  },
  components: {
    VueGoogleAutocomplete
  },
}
</script>

<template>
  <main>
    <vue-google-autocomplete placeholder="Party Location" :types="[address,(establishment)]" v-model="initial" id="map" :country="['it']" classname="form-control" v-on:placechanged="update">
    </vue-google-autocomplete>
  </main>
</template>
