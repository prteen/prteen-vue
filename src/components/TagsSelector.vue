<script>
export default {
  data() {
    return {
      tags: {
        drinks: {
          icon: "local_bar",
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
}

.tag_selected {
  color: red;
}
</style>

<template>
  <main>
    <template v-for="(item, index) in tags">
      <ico
        :name="item.icon" 
        class="ico" 
        :class="{ tag_selected: item.selected }" 
        @click="toggle_tag(index)"
      />
    </template>
  </main>
</template>
