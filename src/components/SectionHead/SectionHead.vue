<template>
    <div class="SectionHead" :style="{gridColumnEnd: `span ${span}`}" :class="{ dark: $store.state.dark }">
        <p class="title">{{title}}</p>
        <div class="line" />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        span: {
            type: Number,
            default: 12
        }
    }
}
</script>

<style scoped lang="sass" src="./SectionHead.sass">
