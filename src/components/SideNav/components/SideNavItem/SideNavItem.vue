<template>
  <router-link :to="slug" :class="{ active: active, dark: $store.state.dark }" v-ripple.600="'rgba(0, 0, 0, 0.1)'" class="SideNavItem">
    <div class="icon">
      <img :src="icon"/>
    </div>
    <transition name="fade">
      <div v-if="!minimized" class="content">{{ title }}</div>
    </transition>
  </router-link>
</template>

<script>
export default {
  props: {
    active: Boolean,
    title: String,
    minimized: Boolean,
    icon: String,
    rgb: Array,
    slug: {
      type: String,
      default: ""
    }
  },
  computed: {
    backgroundColor() {
      return this.rgb
        ? `rgba(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]},.3)`
        : 'rgba(0,0,0,0.07)';
    }
  },
  created() {
    this.svg = require('@/assets/hamburger.svg')
  }
};
</script>

<style scoped lang="sass" src="./SideNavItem.sass">