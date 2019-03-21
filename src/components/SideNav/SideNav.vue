<template>
  <div class="SideNav" :class="{collapsed: collapsed, dark: $store.state.dark}">
    <div v-on:click="collapsed = !collapsed" v-ripple.600="'rgba(0, 0, 0, 0.1)'" class="hamburger">
      <img src="@/assets/hamburger.svg">
    </div>
    <div class="items">
      <div class="top">
        <SideNavItem
          v-on:click.native="selectedItem = item.id"
          :active="(selectedItem === item.id)"
          v-for="item in sideNavData.items"
          :key="item.id"
          :title="item.title"
          :minimized="collapsed"
          :icon="item.icon"
          class="topItem"
          :rgb="item.rgb"
					:slug="item.slug"
        />
      </div>
      <div class="bottom">
				<ColorThemePicker /> 
        <SideNavItem
          v-on:click.native="selectedItem = item.id"
          :active="(selectedItem === item.id)"
          v-for="item in sideNavData.bottomItems"
          :key="item.id"
          :title="item.title"
          :minimized="collapsed"
          :icon="item.icon"
          class="topItem"
					:slug="item.slug"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SideNavItem from "./components/SideNavItem";
import SideNavData from "./sideNavData";
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
      sideNavData: SideNavData,
      selectedItem: 1,
      collapsed: true,
      hamburgerImage: hamburgerIcon
    };
  }
};
</script>

<style scoped lang="sass" src="./SideNav.sass">
