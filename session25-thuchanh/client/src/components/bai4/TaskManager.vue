<template>
    <div class="task-manager">
      <h1>Quản lý công việc</h1>
  
      <!-- Hiển thị loading nếu đang tải dữ liệu -->
      <loading v-if="isLoading" />
  
      <!-- Nội dung chính -->
      <div v-else>
        <!-- Task Input -->
        <input v-model="newTask" type="text" placeholder="Nhập tên công việc" />
        <button @click="addTask">Thêm công việc</button>
  
        <!-- Task Filter Buttons -->
        <div class="filters">
          <button :class="{ active: filter === 'all' }" @click="filterTasks('all')">Tất cả</button>
          <button :class="{ active: filter === 'done' }" @click="filterTasks('done')">Hoàn thành</button>
          <button :class="{ active: filter === 'in-progress' }" @click="filterTasks('in-progress')">Đang thực hiện</button>
        </div>
  
        <!-- Task List -->
        <task-list 
          :tasks="filteredTasks" 
          @remove-task="removeTask"
          @update-task="updateTask"
        />
        
        <!-- Buttons for deleting tasks -->
        <div class="actions">
          <button @click="removeCompletedTasks">Xóa công việc hoàn thành</button>
          <button @click="removeAllTasks">Xóa tất cả công việc</button>
        </div>
      </div>
    </div>
</template>
  
<script>
  import TaskList from '../bai3/TaskList.vue';
  import Loading from './Loading.vue'
  import axios from 'axios';
  
  export default {
    components: {
      TaskList,
      Loading, // Import loading component
    },
    data() {
      return {
        tasks: [],
        newTask: '',
        filter: 'all',
        isLoading: true, // Trạng thái loading ban đầu
      };
    },
    computed: {
      filteredTasks() {
        if (this.filter === 'done') {
          return this.tasks.filter(task => task.completed);
        } else if (this.filter === 'in-progress') {
          return this.tasks.filter(task => !task.completed);
        }
        return this.tasks;
      }
    },
    methods: {
      async fetchTasks() {
        this.isLoading = true; // Hiển thị loading khi bắt đầu gọi API
        try {
          const response = await axios.get('http://localhost:3000/tasks');
          this.tasks = response.data;
        } catch (error) {
          console.error('Error fetching tasks:', error);
        } finally {
          this.isLoading = false; // Tắt loading sau khi hoàn thành gọi API
        }
      },
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.push({
            id: Date.now(),
            name: this.newTask,
            completed: false,
          });
          this.newTask = '';
        }
      },
      removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      },
      updateTask(updatedTask) {
        this.tasks = this.tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
      },
      removeCompletedTasks() {
        this.tasks = this.tasks.filter(task => !task.completed);
      },
      removeAllTasks() {
        this.tasks = [];
      },
      filterTasks(filter) {
        this.filter = filter;
      }
    },
    mounted() {
      this.fetchTasks(); // Fetch tasks when the component mounts
    }
  };
</script>
    