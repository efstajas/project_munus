<template>
    <viewComponent />
</template>

<script>
const viewComponent = function() { import(`@/views/${ this.$route.params.view }.vue`) }

export default {
    components: {
        viewComponent
    }
}
</script>
