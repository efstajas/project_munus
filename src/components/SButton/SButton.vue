<template>
    <div class="SButton" :class="{ dark: $store.state.dark }">
        <div class="inner" v-ripple.600="'rgba(0, 0, 0, 0.1)'">
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