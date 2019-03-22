<template>
  <div class="app" :class="{dark: $store.state.dark}">
    <SideNav />
    <transition name="viewTransition" mode="out-in">
      <router-view class="app-content"/>
    </transition>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav'

export default {
  components: {
    SideNav,
  }
}
</script>


<style lang="sass">
@import '@/styles/Global.sass'
</style>
