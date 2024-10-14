<template>
    <div>
        <h1>Counter: {{ count }}</h1>
        <h1>Double Counter : {{ doubleCount }} </h1>
        <button @click="handleIncrement">Increment</button>
        <button @click="handleDecrement">Decrement</button>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const count = computed(() => store.state.countModule.count); // 2

const doubleCount = computed(() => store.getters.doubleCount); // 4

const handleIncrement = () => {
    store.commit("increment");
}

const handleDecrement = () => {
    store.commit("decrement");
}
</script>

<style></style>