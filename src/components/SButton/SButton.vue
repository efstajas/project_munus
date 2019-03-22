<template>
    <div class="SButton" :class="{ dark: $store.state.dark }">
        <div class="inner">
            {{ title }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Button'
        }
    }
}
</script>

<style scoped lang="sass" src="./SButton.sass">