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
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  mounted() {
    this.modelValue.forEach(tag => {
      this.tags[tag].selected = true
    })
  },
  methods: {
    toggle_tag(tag) {
      this.tags[tag].selected = !this.tags[tag].selected
      this.$emit("update:modelValue", Object.keys(this.tags).filter(tag => this.tags[tag].selected))
    }
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
  <main>
    <template v-for="(item, index) in tags">
      <i
        class="material-icons ico"
        :class="{ tag_selected: item.selected }"
        :title="index[0].toUpperCase() + index.slice(1).replace('_', ' ')"
        @click="toggle_tag(index)"
        >{{ item.icon }}</i>
    </template>
  </main>
</template>
