<template>
    <div class="SectionHead" :class="{ dark: $store.state.dark }">
        <p class="title">{{title}}</p>
        <div class="line" />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            required: true
        }
    }
}
</script>

<style scoped lang="sass" src="./SectionHead.sass">
