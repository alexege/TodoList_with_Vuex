import axios from 'axios';

const state = {
    todos: []
};

const getters = {
    allTodos: state => state.todos
  };

const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/todos'
        );    
        commit('setTodoItems', response.data);
      },

      async addTodoItem({ commit }, title) {
        const response = await axios.post(
          'https://jsonplaceholder.typicode.com/todos', { title, completed: false }
        );
        commit('addATodoItem', response.data);
      },

      async deleteTodoItem({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodoItem', id);
      },

      async filterTodoItems({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        console.log("limit:", limit);
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setTodoItems', response.data);
      },

      async updateTodoItem({ commit }, updateTodoItem) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updateTodoItem.id}`, updateTodoItem);
        console.log("response:", response);
        commit('updateTodoItem', response.data);

      }
};

const mutations = {
    setTodoItems: (state, todos) => (state.todos = todos),
    addATodoItem: (state, todo) => state.todos.unshift(todo),
    removeTodoItem: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodoItem: (state, todoItem) => {
      console.log("updating todo item", todoItem);
      const index = state.todos.findIndex(todo => todo.id === todoItem.id);
      console.log("index:", index);
      if(index !== -1){
        state.todos.splice(index, 1, todoItem);
      }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}