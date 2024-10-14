<template>
    <div class="todo-app">
      <h1>Quản lý công việc</h1>
      <div class="input-group">
        <input v-model="newTodo" placeholder="Nhập tên công việc" />
        <button @click="addTodo">Thêm công việc</button>
      </div>
      <div class="filters">
        <button @click="filterTodos('all')">Tất cả</button>
        <button @click="filterTodos('completed')">Hoàn thành</button>
        <button @click="filterTodos('incomplete')">Đang thực hiện</button>
      </div>
      <ul class="todo-list">
        <li v-for="todo in filteredTodos" :key="todo.id">
          <input type="checkbox" v-model="todo.completed" @change="toggleComplete(todo)" />
          <span :class="{ completed: todo.completed }">{{ todo.title }}</span>
          <button @click="editTodo(todo)">✏️</button>
          <button @click="deleteTodo(todo.id)">🗑️</button>
        </li>
      </ul>
      <div class="actions">
        <button @click="deleteCompletedTodos">Xóa công việc hoàn thành</button>
        <button @click="deleteAllTodos">Xóa tất cả công việc</button>
      </div>
    </div>
</template>
  
<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        todos: [],
        newTodo: '',
        filter: 'all',
      };
    },
    computed: {
      filteredTodos() {
        if (this.filter === 'completed') {
          return this.todos.filter((todo) => todo.completed);
        } else if (this.filter === 'incomplete') {
          return this.todos.filter((todo) => !todo.completed);
        }
        return this.todos;
      },
    },
    methods: {
      fetchTodos() {
        axios
          .get('http://localhost:5000/todos')
          .then((response) => (this.todos = response.data))
          .catch((error) => console.error('Error fetching todos:', error));
      },
      addTodo() {
        if (!this.newTodo.trim()) return;
        const newTodoItem = {
          title: this.newTodo,
          completed: false,
        };
        axios.post('http://localhost:5000/todos', newTodoItem).then(() => {
          this.newTodo = '';
          this.fetchTodos();
        });
      },
      toggleComplete(todo) {
        axios.put(`http://localhost:5000/todos/${todo.id}`, {
          ...todo,
          completed: !todo.completed,
        }).then(() => {
          this.fetchTodos();
        });
      },
      deleteTodo(id) {
        axios.delete(`http://localhost:5000/todos/${id}`).then(() => {
          this.fetchTodos();
        });
      },
      deleteCompletedTodos() {
        this.todos.forEach((todo) => {
          if (todo.completed) {
            this.deleteTodo(todo.id);
          }
        });
      },
      deleteAllTodos() {
        this.todos.forEach((todo) => this.deleteTodo(todo.id));
      },
      filterTodos(filter) {
        this.filter = filter;
      },
    },
    mounted() {
      this.fetchTodos();
    },
  };
</script>
  
<style scoped>
  .todo-app {
    width: 400px;
    margin: auto;
  }
  input[type="checkbox"] {
    margin-right: 10px;
  }
  .completed {
    text-decoration: line-through;
  }
  .filters button {
    margin-right: 10px;
  }
  .actions button {
    margin-right: 10px;
  }
</style>
  