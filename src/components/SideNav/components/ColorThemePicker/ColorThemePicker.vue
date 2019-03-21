<template>
    <div class="ColorThemePicker">
        <SideNavItem
            title="Color"
            v-on:click.native="switchColor"
            :icon="require('@/assets/Eye.svg')"
        />
    </div>
</template>

<script>
import SideNavItem from '../SideNavItem'

export default {
    components: {
        SideNavItem
    },
    methods: {
        switchColor() {
            if (this.$store.state.dark) {
                this.$store.dispatch("disableDarkMode")
            } else {
                this.$store.dispatch("enableDarkMode")
            }
        }
    }
}
</script>

<style>

</style>
