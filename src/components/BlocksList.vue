<template>
    <div>
        <div class="simple">
            <div class="simple-list flex-wrap">
                <BlocksItem 
                    v-for="(block, index) in $store.state.blocks" 
                    v-bind:key="index" 
                    :block="block"
                    :id="index"
                ></BlocksItem>
            </div>
        </div>
    </div>
</template>

<script>
    import BlocksItem from './BlocksItem.vue';
    
    export default {
        components: {
            BlocksItem
        }
    }
</script>