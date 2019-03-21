<template>
  <div class="app" :class="{dark: $store.state.dark}">
    <SideNav />
    <MainGrid>
      <router-view/>
    </MainGrid>
  </div>
</template>

<script>
import SideNav from '@/components/SideNav'
import MainGrid from '@/components/MainGrid'

export default {
  components: {
    SideNav,
    MainGrid
  }
}
</script>


<style lang="sass">
@import '@/styles/Global.sass'
</style>
