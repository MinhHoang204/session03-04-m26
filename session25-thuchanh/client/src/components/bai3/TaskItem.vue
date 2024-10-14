<template>
    <div class="task-item">
      <input type="checkbox" v-model="task.completed" @change="toggleComplete" />
      <span :class="{ 'completed': task.completed }">{{ task.name }}</span>
      <button @click="editTask">✏️</button>
      <button @click="removeTask">🗑️</button>
    </div>
</template>
  
<script>
  export default {
    props: {
      task: Object,
    },
    methods: {
      toggleComplete() {
        this.$emit('update', { ...this.task, completed: !this.task.completed });
      },
      editTask() {
        const newName = prompt('Edit Task', this.task.name);
        if (newName) {
          this.$emit('update', { ...this.task, name: newName });
        }
      },
      removeTask() {
        this.$emit('remove', this.task.id);
      }
    }
  };
</script>
  
<style scoped>
  .completed {
    text-decoration: line-through;
  }
</style>
  