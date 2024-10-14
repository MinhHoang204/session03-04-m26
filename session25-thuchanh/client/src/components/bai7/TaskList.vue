<template>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        <input type="checkbox" :checked="task.completed" @change="$emit('toggle-task-completion', task.id)" />
        <span :class="{ completed: task.completed }">{{ task.name }}</span>
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
  