<template>
    <div>
        <h2>Add Todo</h2>
        <div class="add">
            <form @submit.prevent="onSubmit">
                <input type="text" v-model="title" placeholder="Add Todo Item"/>
                <input type="submit" value="submit">
            </form>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'AddTodoItem',
    data() {
        return {
            title: null
        }
    },
    methods: {
        ...mapActions(['addTodoItem']),

        onSubmit(e) {
            e.preventDefault();
            this.addTodoItem(this.title);
        }
    }
}
</script>
<style scoped>
form {
    display: flex;
}

input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid black;
    outline: 0;
}

input[type="submit"] {
    flex: 2;
    background: black;
    color: white;
    border: 2px solid black;
    cursor: pointer;
}
</style>