<template>
    <div class="task-manager">
      <h1>Quản lý công việc</h1>
  
      <!-- Hiển thị modal xác nhận xóa -->
      <confirm-modal 
        :isVisible="isModalVisible" 
        @cancel="closeModal"
        @confirm="removeCompletedTasks"
      />
  
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
        <button @click="showConfirmModal">Xóa công việc hoàn thành</button>
        <button @click="removeAllTasks">Xóa tất cả công việc</button>
      </div>
    </div>
</template>
  
<script>
  import TaskList from '../bai3/TaskList.vue';
  import ConfirmModal from './ConfirmModal.vue'
  
  export default {
    components: {
      TaskList,
      ConfirmModal
    },
    data() {
      return {
        tasks: [],
        newTask: '',
        filter: 'all',
        isModalVisible: false, // Biến điều khiển modal xác nhận
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
      showConfirmModal() {
        this.isModalVisible = true; // Hiển thị modal xác nhận xóa
      },
      closeModal() {
        this.isModalVisible = false; // Đóng modal khi nhấn hủy
      },
      removeCompletedTasks() {
        // Xóa công việc hoàn thành
        this.tasks = this.tasks.filter(task => !task.completed);
        this.closeModal(); // Đóng modal sau khi xóa xong
      },
      removeAllTasks() {
        this.tasks = [];
      },
      filterTasks(filter) {
        this.filter = filter;
      }
    },
  };
</script>
  
<style scoped>
  .task-manager {
    max-width: 600px;
    margin: 0 auto;
  }
  .filters button.active {
    font-weight: bold;
  }
</style>
  