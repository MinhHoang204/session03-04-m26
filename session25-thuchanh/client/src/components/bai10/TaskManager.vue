<template>
    <div class="task-manager">
      <h1>Quản lý công việc</h1>
      
      <!-- Input to Add Task -->
      <div class="add-task">
        <input v-model="newTaskName" placeholder="Nhập tên công việc" />
        <button @click="addTask">Thêm công việc</button>
      </div>
  
      <!-- Filter Buttons -->
      <div class="filters">
        <button @click="filter = 'all'" :class="{ active: filter === 'all' }">Tất cả</button>
        <button @click="filter = 'completed'" :class="{ active: filter === 'completed' }">Hoàn thành</button>
        <button @click="filter = 'in-progress'" :class="{ active: filter === 'in-progress' }">Đang thực hiện</button>
      </div>
  
      <!-- Task List -->
      <ul class="task-list">
        <li v-for="task in sortedTasks" :key="task.id" :class="{ completed: task.completed }">
          <input type="checkbox" v-model="task.completed" />
          {{ task.name }}
        </li>
      </ul>
  
      <!-- Delete Buttons -->
      <div class="delete-buttons">
        <button @click="deleteCompletedTasks" class="delete-completed">Xóa công việc hoàn thành</button>
        <button @click="deleteAllTasks" class="delete-all">Xóa tất cả công việc</button>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        filter: 'all',  // Filter can be 'all', 'completed', or 'in-progress'
        newTaskName: '', // For adding a new task
        tasks: [
          { id: 1, name: 'Quét nhà', completed: false, addedAt: new Date('2024-10-10T12:00:00') },
          { id: 2, name: 'Giặt quần áo', completed: true, addedAt: new Date('2024-10-12T09:00:00') },
          { id: 3, name: 'Nấu cơm', completed: false, addedAt: new Date('2024-10-13T14:30:00') },
        ],
      };
    },
    computed: {
      // Sorting the tasks by their 'addedAt' property
      sortedTasks() {
        let filteredTasks = this.filteredTasks;
  
        // Sort tasks in ascending order (older tasks on top, new tasks at the bottom)
        return filteredTasks.sort((a, b) => a.addedAt - b.addedAt);
      },
      filteredTasks() {
        if (this.filter === 'completed') {
          return this.tasks.filter(task => task.completed);
        } else if (this.filter === 'in-progress') {
          return this.tasks.filter(task => !task.completed);
        }
        return this.tasks;
      }
    },
    methods: {
      // Method to add a new task with the current timestamp
      addTask() {
        if (this.newTaskName.trim()) {
          this.tasks.push({
            id: this.tasks.length + 1,
            name: this.newTaskName,
            completed: false,
            addedAt: new Date(),  // Adds the current date and time
          });
          this.newTaskName = '';
        }
      },
      // Method to delete completed tasks
      deleteCompletedTasks() {
        this.tasks = this.tasks.filter(task => !task.completed);
      },
      // Method to delete all tasks
      deleteAllTasks() {
        this.tasks = [];
      }
    }
  };
</script>
  
<style>
  .completed {
    text-decoration: line-through;
  }
  .filters button {
    margin-right: 10px;
  }
  .filters button.active {
    font-weight: bold;
  }
</style>
  