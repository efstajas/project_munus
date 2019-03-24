<template>
    <div class="Updates">
        <h1>Updates</h1>
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
import SectionHead from "@/components/SectionHead"
import MainGrid from "@/components/MainGrid"

export default {
    name: "Updates",
    components: {
        SectionHead,
        MainGrid
    }
}
</script>

<style scoped lang="sass" src="./Updates.sass">