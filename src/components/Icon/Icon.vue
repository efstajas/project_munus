<template>
    <div :style="{backgroundColor: (circle) ? `rgba(${rgba[0]},${rgba[1]},${rgba[2]},0.1)` : 'none'}" class="Icon" :class="{circle: circle}">
        <svg height="0" width="0">
            <defs>
                <filter :id="`recolorme-${_uid}`">
                    <feColorMatrix type="matrix" :values="`0 0 0 0 ${mV.r}
                                                           0 0 0 0 ${mV.g}
                                                           0 0 0 0 ${mV.b}
                                                           0 0 0 ${mV.a} 0`"/>
                </filter>
            </defs>
        </svg>
        <img class="icon" :style="{ filter: `url(#recolorme-${_uid})` }" :src="url">
    </div>
</template>

<script>
import calculateColorMatrix from './calculateColorMatrix.js'

export default {
    props: {
        url: {
            type: String,
            required: true
        },
        rgba: {
            type: Array,
            default() {
                return [0,0,0,1]
            } 
        },
        circle: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        mV() {
            return calculateColorMatrix(...this.rgba)
        }
    },
    methods: {
        calculateColorMatrix: calculateColorMatrix
    }
}
</script>

<style scoped lang="sass" src="./Icon.sass">
