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
      }
};

const mutations = {
    setTodoItems: (state, todos) => (state.todos = todos),
    addATodoItem: (state, todo) => state.todos.unshift(todo),
    removeTodoItem: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
};

export default {
    state,
    getters,
    actions,
    mutations
}