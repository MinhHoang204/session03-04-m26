<template>
    <div class="task-manager">
      <h1>Quản lý công việc</h1>
  
      <!-- Form thêm công việc -->
      <div>
        <input 
          v-model="newTask" 
          type="text" 
          placeholder="Nhập tên công việc" 
          @keyup.enter="addTask"
          ref="taskInput"
        />
        <button @click="addTask">Thêm công việc</button>
  
        <!-- Hiển thị lỗi -->
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </div>
  
      <!-- Task List -->
      <task-list 
        :tasks="tasks" 
        @remove-task="removeTask"
        @update-task="updateTask"
      />
    </div>
</template>
  
<script>
  import TaskList from './TaskList.vue'
  
  export default {
    components: {
      TaskList
    },
    data() {
      return {
        tasks: [],         // Danh sách công việc
        newTask: '',       // Công việc mới nhập
        errorMessage: '',  // Thông báo lỗi
      };
    },
    methods: {
      async addTask() {
        // Xóa thông báo lỗi trước khi validate
        this.errorMessage = '';
  
        // Validate tên công việc không được để trống
        if (!this.newTask.trim()) {
          this.errorMessage = 'Tên công việc không được phép để trống';
          return;
        }
  
        // Validate tên công việc không được trùng
        const isDuplicate = this.tasks.some(task => task.name.toLowerCase() === this.newTask.toLowerCase());
        if (isDuplicate) {
          this.errorMessage = 'Tên công việc không được phép trùng';
          return;
        }
  
        try {
          // Gọi API thêm công việc vào database
          const response = await fetch('https://your-api-endpoint/tasks', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.newTask,
              completed: false
            }),
          });
          const newTaskFromServer = await response.json();
  
          // Cập nhật danh sách công việc sau khi thêm
          this.tasks.push(newTaskFromServer);
  
          // Xóa giá trị input và focus lại vào input
          this.newTask = '';
          this.$refs.taskInput.focus();
        } catch (error) {
          console.error('Lỗi khi thêm công việc:', error);
          this.errorMessage = 'Có lỗi xảy ra khi thêm công việc';
        }
      },
      removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      },
      async fetchTasks() {
        try {
          const response = await fetch('https://your-api-endpoint/tasks');
          this.tasks = await response.json();
        } catch (error) {
          console.error('Lỗi khi lấy danh sách công việc:', error);
        }
      }
    },
    mounted() {
      // Gọi API để lấy danh sách công việc khi component được mount
      this.fetchTasks();
    }
  };
</script>
  
<style scoped>
  .error {
    color: red;
    font-size: 0.9rem;
  }
</style>
  