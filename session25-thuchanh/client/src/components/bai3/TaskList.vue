<template>
    <div class="task-list">
      <div v-for="task in tasks" :key="task.id">
        <task-item :task="task" @remove="removeTask" @update="updateTask" />
      </div>
    </div>
</template>
  
<script>
  import TaskItem from './TaskItem.vue';
  
  export default {
    components: {
      TaskItem,
    },
    props: {
      tasks: Array,
    },
    methods: {
      removeTask(id) {
        this.$emit('remove-task', id);
      },
      updateTask(task) {
        this.$emit('update-task', task);
      }
    }
  };
</script>
  