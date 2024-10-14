<template>
    <div class="modal-overlay" v-if="isVisible">
      <div class="modal-container">
        <h2>Xác nhận</h2>
        <p>Bạn có chắc chắn muốn xóa tất cả các công việc đã hoàn thành?</p>
        <div class="modal-actions">
          <button @click="onCancel">Hủy</button>
          <button @click="onConfirm">Xác nhận</button>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      isVisible: {
        type: Boolean,
        default: false,
      }
    },
    methods: {
      onCancel() {
        this.$emit('cancel');
      },
      onConfirm() {
        this.$emit('confirm');
      }
    }
  };
</script>
  
<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-container {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 400px;
    text-align: center;
  }
  
  .modal-actions button {
    margin: 10px;
    padding: 10px 20px;
  }
</style>