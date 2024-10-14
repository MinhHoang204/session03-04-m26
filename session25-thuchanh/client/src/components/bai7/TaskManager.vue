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
        />
        <button @click="addTask">Thêm công việc</button>
      </div>
  
      <!-- Task List -->
      <task-list 
        :tasks="tasks" 
        @toggle-task-completion="toggleTaskCompletion"
      />
  
      <!-- Modal hoàn thành công việc -->
      <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h2>Hoàn thành công việc</h2>
          <p>Bạn đã hoàn thành tất cả các công việc!</p>
          <button @click="closeModal">Đóng</button>
        </div>
      </div>
    </div>
</template>
  
<script>
  import TaskList from './TaskList.vue';
  
  export default {
    components: {
      TaskList
    },
    data() {
      return {
        tasks: [],           // Danh sách công việc
        newTask: '',         // Công việc mới nhập
        showModal: false,    // Trạng thái của modal hoàn thành công việc
      };
    },
    methods: {
      addTask() {
        if (!this.newTask.trim()) {
          alert("Tên công việc không được để trống!");
          return;
        }
        const isDuplicate = this.tasks.some(task => task.name.toLowerCase() === this.newTask.toLowerCase());
        if (isDuplicate) {
          alert("Tên công việc không được phép trùng!");
          return;
        }
  
        // Thêm công việc mới vào danh sách
        this.tasks.push({ id: Date.now(), name: this.newTask, completed: false });
        this.newTask = '';  // Xóa input sau khi thêm
      },
      toggleTaskCompletion(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        task.completed = !task.completed; // Đảo trạng thái hoàn thành
  
        // Kiểm tra nếu tất cả công việc đều hoàn thành
        const allCompleted = this.tasks.every(task => task.completed);
        if (allCompleted) {
          this.showModal = true; // Hiển thị modal hoàn thành công việc
        }
      },
      closeModal() {
        this.showModal = false; // Đóng modal
      }
    }
  };
</script>
  
<style scoped>
  .completed {
    text-decoration: line-through;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
</style>
  