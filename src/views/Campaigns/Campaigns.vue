<template>
    <div class="Dashboard">
        <div class="opener">
            <Icon class="icon" :url="$route.meta.icon" :rgba="$route.meta.color" circle/>
            <h1>Campaigns</h1>
        </div>
        <div class="updates">
            <MainGrid>
            </MainGrid>
        </div>
        <div class="overview">
            <MainGrid>
                
            </MainGrid>
        </div>
    </div>
</template>

<script>
import MainGrid from "@/components/MainGrid"
import Icon from "@/components/Icon"

export default {
    name: "Dashboard",
    components: {
        MainGrid,
        Icon
    }
}
</script>

<style scoped lang="sass" src="./Campaigns.sass">