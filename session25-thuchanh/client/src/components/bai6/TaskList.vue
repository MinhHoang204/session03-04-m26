<template>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <span :class="{ completed: task.completed }">{{ task.name }}</span>
        <button @click="$emit('remove-task', task.id)">Xóa</button>
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
  