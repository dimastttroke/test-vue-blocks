<template>
    <div>
        <div class="navbar">
            <div class="navbar__wrap flex flex-between flex-center">
                <button class="navbar__add" @click="addNew">Добавить простой блок</button>
                <div class="navbar__item navbar__count">
                    Количество блоков: <strong>{{totalCount}}</strong>
                </div>
                <div class="navbar__item navbar__clicked">
                    Количество выделенных блоков: <strong>{{clickedBlocks}}</strong>
                </div>
                <div class="navbar__item navbar__color">
                    Красные блоки: <strong>{{redBlocks}}</strong><br>
                    Зеленые блоки: <strong>{{greenBlocks}}</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            totalCount() {
                return this.$store.getters.totalCount;
            },
            clickedBlocks() {
                return this.$store.getters.clickedBlocks;
            },
            redBlocks() {
                return this.$store.getters.redBlocks;
            },
            greenBlocks() {
                return this.$store.getters.greenBlocks;
            }
        },
        methods: {
            addNew() {
                this.$store.dispatch('addBlock', { text: 'Новый простой блок', clicked: false, extends: false })
            }
        }
    }
</script>