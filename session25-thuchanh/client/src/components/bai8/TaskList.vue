<template>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span :class="{ completed: task.completed }">{{ task.name }}</span>
        <button @click="$emit('edit-task', task.id)">
          <i class="fas fa-edit"></i> <!-- Icon sửa -->
        </button>
      </li>
    </ul>
</template>
  
<script>
  export default {
    props: {
      tasks: {
        type: Array,
        required: true
      }
    }
  };
</script>
  
<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>
  