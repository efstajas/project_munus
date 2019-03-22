<template>
    <div class="UpdateCard" :style="{gridColumnEnd: `span ${span}`}">
        <BaseCard>
            <h4 class="type">New Feature</h4>
            <h2 class="title">Schedule future campaigns</h2>
            <p class="content">Schedule a campaign for the future by specifying a “Start date” in the campaign creator.</p>
            <SButton/>
        </BaseCard>
    </div>
</template>

<script>
import BaseCard from "../components/Base"
import SButton from "@/components/SButton"

export default {
    props: {
        span: {
            type: Number,
            default: 6
        }
    },
    components: {
        BaseCard,
        SButton
    }
}
</script>

<style scoped lang="sass" src="./UpdateCard.sass">
