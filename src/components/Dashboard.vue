<template>
    <div>
        <h2>Dashboard</h2>
        <TodoItem />
    </div>
</template>
<script>
import TodoItem from "../components/TodoItem";

export default {
    name: 'Dashboard',
    components: {TodoItem},
    data() {
        return {

        }
    }
}
</script>