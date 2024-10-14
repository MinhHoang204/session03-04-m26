<template>
    <div class="task-manager">
      <h1>Quản lý công việc</h1>
  
      <!-- Danh sách công việc -->
      <task-list 
        :tasks="tasks" 
        @edit-task="openEditModal"
      />
  
      <!-- Modal chỉnh sửa công việc -->
      <div v-if="showEditModal" class="modal">
        <div class="modal-content">
          <h2>Chỉnh sửa công việc</h2>
          <input 
            v-model="editTaskName" 
            type="text" 
            placeholder="Cập nhật tên công việc" 
          />
          <div class="modal-actions">
            <button @click="cancelEdit">Hủy</button>
            <button @click="updateTask">Cập nhật</button>
          </div>
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
        tasks: [],              // Danh sách công việc
        showEditModal: false,   // Trạng thái modal sửa công việc
        editTaskId: null,       // ID công việc cần chỉnh sửa
        editTaskName: '',       // Tên công việc cần chỉnh sửa
      };
    },
    methods: {
      openEditModal(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        this.editTaskId = taskId;
        this.editTaskName = task.name;  // Hiển thị tên công việc hiện tại
        this.showEditModal = true;      // Hiển thị modal
      },
      cancelEdit() {
        this.showEditModal = false;  // Đóng modal khi hủy
        this.editTaskId = null;
        this.editTaskName = '';
      },
      updateTask() {
        // Kiểm tra tên công việc không để trống
        if (!this.editTaskName.trim()) {
          alert("Tên công việc không được để trống!");
          return;
        }
  
        // Kiểm tra tên công việc không trùng
        const isDuplicate = this.tasks.some(
          task => task.name.toLowerCase() === this.editTaskName.toLowerCase() && task.id !== this.editTaskId
        );
        if (isDuplicate) {
          alert("Tên công việc không được phép trùng!");
          return;
        }
  
        // Gọi API cập nhật dữ liệu (giả lập)
        const task = this.tasks.find(task => task.id === this.editTaskId);
        task.name = this.editTaskName;  // Cập nhật tên công việc
  
        // Đóng modal sau khi cập nhật
        this.showEditModal = false;
        this.editTaskId = null;
        this.editTaskName = '';
  
        // Render lại dữ liệu (có thể là từ API)
        alert("Công việc đã được cập nhật thành công!");
      }
    }
  };
</script>
  
<style scoped>
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
    width: 400px;
    text-align: center;
  }
  
  .modal-actions {
    margin-top: 20px;
  }
  
  button {
    margin: 0 10px;
    padding: 10px 20px;
  }
</style>
  