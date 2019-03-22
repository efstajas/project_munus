<template>
    <div class="Dashboard">
        <div class="updates">
            <MainGrid>
                <SectionHead title="Campaigns"/>
            </MainGrid>
        </div>
        <div class="overview">
            <MainGrid>
                
            </MainGrid>
        </div>
    </div>
</template>

<script>
import SectionHead from "@/components/SectionHead"
import MainGrid from "@/components/MainGrid"

export default {
    name: "Dashboard",
    components: {
        SectionHead,
        MainGrid
    }
}
</script>

<style scoped lang="sass" src="./Campaigns.sass">