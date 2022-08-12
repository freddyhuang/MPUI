<template>
   <button class="mp-button-origin" 
   :class="[`mp-button-${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
    }]"
   @click="handleClick">
    <i v-if="icon"  class="mp-icon" :class="`mp-icon-${icon}`"></i>
    <span v-if="$slots.default"><slot></slot></span>
   </button>
</template>

<script>
 export default {
    name:"mp-button",
    props: {
        type: {
            type: String,
            default: 'default'
        },
        plain: {
            type:Boolean,
            default: false
        },
        round: {
            type:Boolean,
            default: false
        },
        circle: {
            type:Boolean,
            default: false
        },
        icon: {
           type: String,
            default: ""
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        handleClick (e) {
            if(!this.disabled) {
                this.$emit('click',e)
            }  
        }
    }
 }
</script>
