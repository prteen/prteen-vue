<script>
export default {
  data() {
    return {
      tags: {
        drinks: {
          icon: "local_bar",
          selected: false
        },
        food: {
          icon: "restaurant",
          selected: false
        },
        sports: {
          icon: "sports_volleyball",
          selected: false
        },
        music: {
          icon: "music_note",
          selected: false
        },
        movies: {
          icon: "movie",
          selected: false
        },
        photos: {
          icon: "photo_camera",
          selected: false
        },
        games: {
          icon: "sports_esports",
          selected: false
        },
        smoking: {
          icon: "smoking_rooms",
          selected: false 
        },
        lgbt_friendly: {
          icon: "transgender",
          selected: false
        }
      },
    }
  },
  props: {
    tags_selected: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped>
.ico {
  color: lightgrey;
  cursor: pointer;
}

.tag_selected {
  color: red;
}
</style>

<template>
  <template v-for="(item, index) in tags">
    <i
      class="material-icons ico"
      :class="{ tag_selected: tags_selected.includes(index) }"
      @click="debug"
      :title="index[0].toUpperCase() + index.slice(1).replace('_', ' ')"
      >{{ item.icon }}</i>
  </template>
</template>
