<template>
  <div class="SideNav" :class="{collapsed: collapsed, dark: $store.state.dark}">
    <div v-on:click="collapsed = !collapsed" v-ripple.600="'rgba(0, 0, 0, 0.1)'" class="hamburger">
      <img src="@/assets/hamburger.svg">
    </div>
    <div class="items">
      <div class="top">
        <SideNavItem
          v-on:click.native="selectedSlug = item.meta.slug"
          :active="($route.name === item.meta.slug)"
          v-for="item in sideNavData"
          :key="item.meta.slug"
          :title="item.meta.title"
          :minimized="collapsed"
          :icon="item.meta.icon"
          class="topItem"
          :rgb="item.meta.color"
					:slug="item.meta.slug"
        />
      </div>
      <div class="bottom">
				<ColorThemePicker /> 
        <SideNavItem
          v-on:click.native="selectedSlug = item.meta.slug"
          :active="($route.name === item.meta.slug)"
          v-for="item in sideNavBottomData"
          :key="item.meta.slug"
          :title="item.meta.title"
          :minimized="collapsed"
          :icon="item.meta.icon"
          class="topItem"
					:slug="item.meta.slug"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SideNavItem from "./components/SideNavItem";
import ColorThemePicker from './components/ColorThemePicker'
import hamburgerIcon from "@/assets/hamburger.svg";

export default {
  name: 'SideNav',
  components: {
		SideNavItem,
		ColorThemePicker
  },
  data() { 
    return {
      sideNavData: this.$router.options.routes.filter(route => route.meta && route.meta.view && !route.meta.sideNavBottom),
      sideNavBottomData: this.$router.options.routes.filter(route => route.meta && route.meta.view && route.meta.sideNavBottom),
      selectedSlug: 1,
      collapsed: true,
      hamburgerImage: hamburgerIcon
    };
  }
};
</script>

<style scoped lang="sass" src="./SideNav.sass">
