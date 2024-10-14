<template>
    <div class="task-manager">
      <h1>Quản lý công việc</h1>
      
      <!-- Filter Buttons -->
      <div class="filters">
        <button @click="filter = 'all'" :class="{ active: filter === 'all' }">Tất cả</button>
        <button @click="filter = 'completed'" :class="{ active: filter === 'completed' }">Hoàn thành</button>
        <button @click="filter = 'in-progress'" :class="{ active: filter === 'in-progress' }">Đang thực hiện</button>
      </div>
      
      <!-- Task List -->
      <ul class="task-list">
        <li v-for="task in filteredTasks" :key="task.id" :class="{ completed: task.completed }">
          <input type="checkbox" v-model="task.completed" />
          {{ task.name }}
        </li>
      </ul>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        filter: 'all',  // Filter can be 'all', 'completed', or 'in-progress'
        tasks: [
          { id: 1, name: 'Quét nhà', completed: false },
          { id: 2, name: 'Giặt quần áo', completed: true },
          { id: 3, name: 'Nấu cơm', completed: false },
        ],
      };
    },
    computed: {
      filteredTasks() {
        if (this.filter === 'completed') {
          return this.tasks.filter(task => task.completed);
        } else if (this.filter === 'in-progress') {
          return this.tasks.filter(task => !task.completed);
        }
        return this.tasks;
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
  