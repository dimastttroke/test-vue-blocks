<template>
    <div class="simple-list__item">

        <button @click="deleteBlock(id, block.extends)">✖</button>

        <div v-if="block.extends" class="item__wrap" 
            @click="clickedItem(id)" 
            v-on:dblclick="changeColor(id)" 
            :class="{'clicked': block.clicked, 'red-block': block.color === 1, 'green-block': block.color === 2}">
            <div class="item__title">Редкий блок</div>
            {{ block.text }}
        </div>

        <div v-else class="item__wrap" @click="clickedItem(id)" :class="{ 'clicked': block.clicked }">
            <div class="item__title">Простой блок</div>
            {{ block.text }}
        </div>

    </div>
</template>

<script>
    export default {
        props: {
            id: {
                tupe: Number
            },
            block: {
                type: Object
            }
        },
        methods: {
            deleteBlock: function (id, extend) {
                if (extend) {
                    if (confirm("Вы уверены, что хотите удалить редкий блок? Это - вымирающий вид")) {
                        this.$store.dispatch('removeBlock', id);
                    }
                } else {
                    this.$store.dispatch('removeBlock', id);
                }
            },
            clickedItem: function (id) {
                this.$store.dispatch('addBorder', id);
            },
            changeColor: function (id) {
                this.$store.dispatch('changeColor', id);
            }
        }
    }
</script>