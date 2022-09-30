<template>
    <div>
        <h4>TodoItem</h4>
        <div>
            <div v-for="item in allTodos" :key="item.id" :class="{'is-complete':item.completed}" class="todo-list" @dblclick="onDoubleClick(item)">
                <div class="item">
                    {{ item.title }}
                    <span @click="deleteTodoItem(item.id)">x</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'TodoItem',
    methods: {
        ...mapActions(['fetchTodos', 'deleteTodoItem', "updateTodoItem"]),
        onDoubleClick(item) {
            const updateTodo = {
                id: item.id,
                title: item.title,
                completed: !item.completed
            }

            this.updateTodoItem(updateTodo);
        }
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

    .is-complete {
        background: #35495e;
        color: white;
    }
</style>