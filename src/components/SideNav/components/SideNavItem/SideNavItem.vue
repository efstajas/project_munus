<template>
  <router-link :style="{backgroundColor: backgroundColor}" :to="slug" :class="{ active: active, dark: $store.state.dark }" v-ripple.600="'rgba(0, 0, 0, 0.1)'" class="SideNavItem">
    <div class="icon">
      <!--img :src="icon"/>-->
      <Icon :url="icon" :rgba="iconColor"/>
    </div>
    <transition name="fade">
      <div v-if="!minimized" class="content">{{ title }}</div>
    </transition>
  </router-link>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  props: {
    active: Boolean,
    title: String,
    minimized: Boolean,
    icon: String,
    rgb: {
      type: Array,
    },
    slug: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconColor() {
      if (this.rgb && this.active) {
        return this.rgb
      } else if (this.$store.state.dark) {
        return [255,255,255]
      } else {
        return [0,0,0]
      }
    },
    backgroundColor() {
      if (this.rgb && this.active) {
        return `rgba(${this.rgb[0]},${this.rgb[1]},${this.rgb[2]},0.1)`
      } else if (this.active && this.$store.state.dark) {
        return 'rgba(255,255,255,0.07)'
      } else {
        return 'rgba(0,0,0,0.07)'
      }
      
    }
  },
  created() {
    this.svg = require('@/assets/hamburger.svg')
  },
  components: {
    Icon
  }
};
</script>

<style scoped lang="sass" src="./SideNavItem.sass">