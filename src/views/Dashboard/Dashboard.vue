<template>
    <div class="Dashboard">
        <div class="updates">
            <MainGrid>
                <SectionHead title="Updates to your views"/>
                <UpdateCard />
                <UpdateCard />
            </MainGrid>
        </div>
        <div class="overview">
            <SectionHead title="Overview"/>
            <div v-for="(fragment, index) in fragments" :key="index" class="fragment">
                <h1 class="viewTitle">{{ fragment.view_title }}</h1>
                <p class="summary">{{ fragment.summary }}</p>
                <MainGrid>
                    <KpiCard v-for="(kpi, index) in fragment.cards" :key="index" v-bind="kpi"/>
                </MainGrid>
            </div>
        </div>
    </div>
</template>

<script>
import SectionHead from "@/components/SectionHead"
import { UpdateCard, KpiCard } from "@/components/Cards"
import MainGrid from "@/components/MainGrid"

import exampleKpiResponse from "./exampleKpiResponse.js"

export default {
    name: "Dashboard",
    components: {
        SectionHead,
        UpdateCard,
        KpiCard,
        MainGrid
    },
    data() {
        return {
            fragments: null
        }
    },
    created() {
        this.loadFragments()
    },
    methods: {
        loadFragments() {
            this.fragments =  exampleKpiResponse
        }
    }
}
</script>

<style scoped lang="sass" src="./Dashboard.sass">