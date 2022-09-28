<template>
    <div>
        <h4>TodoItem</h4>
        <div>
            <div v-for="item in allTodos" :key="item.id" class="todo-list">
                <div class="item">{{ item.title }}</div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'TodoItem',
    methods: {
        ...mapActions(['fetchTodos'])
    },
    computed: mapGetters(['allTodos']),
    created() {
        this.fetchTodos();
    }
}
</script>
<style scoped>
    .item {
        border: 2px solid black;
        padding: 1em;
        width: 100px;
        height: 100px;
    }
    .todo-list {
        display: inline-block;
        vertical-align: top;
        padding: .5em;
    }
</style>