<template>
    <div>
        <h2>Dashboard</h2>
        <AddTodoItem />
        <FilterTodoItems />
        <TodoItem />
    </div>
</template>
<script>
import TodoItem from "../components/TodoItem";
import AddTodoItem from "../components/AddTodoItem";
import FilterTodoItems from "../components/FilterTodoItems";

export default {
    name: 'Dashboard',
    components: {
        TodoItem, 
        AddTodoItem,
        FilterTodoItems,
    },
    data() {
        return {

        }
    }
}
</script>