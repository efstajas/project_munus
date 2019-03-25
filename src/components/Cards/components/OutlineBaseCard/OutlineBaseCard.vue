<template>
    <div class="OutlineBaseCard" :class="{ dark: $store.state.dark }">
        <div v-if="title" class="title">
            {{ title }}
        </div>
        <div class="content">
            <div :class="{withTitle: (title)}" class="inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        }
    }
}
</script>

<style scoped lang="sass" src="./OutlineBaseCard.sass">
