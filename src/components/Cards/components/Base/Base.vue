<template>
    <div class="BaseCard" :class="{ dark: $store.state.dark }">
        <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="sass" src="./Base.sass">
