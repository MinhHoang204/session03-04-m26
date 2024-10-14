<template>
    <div>
      <h1>TodoList</h1>
      <input type="text"/>
      <button @click="handleAddJob">Them</button>
      <ul v-for="job in listJob" :key="job.id" >
        <li>
            {{ job.name }}
        </li>
      </ul>
    </div>  
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const inputValue = ref("");

const listJob = computed(() => store.state.todoListModule.jobs);

const handleAddJob = () => {
    const jobInfo = {
        id: Math.ceil(Math.random() * 1000000),
        name: inputValue.value,
        status: false,
    }
    store.commit("addJob", jobInfo);

    inputValue.value = "";
};
</script>

<style></style>