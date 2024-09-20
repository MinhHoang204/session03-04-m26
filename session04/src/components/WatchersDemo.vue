<template>
    <h1>Count: {{ count }}</h1>
</template>

<script>
import {ref} from "vue";

const count = ref(0);

const handleCount = () => {
    count.value++;
};

watch(count, (newValue, oldValue)=>{
    // Lắng nghe sự thay đổi của count
    console.log(`Old value: ${oldValue} - New value: ${newValue}`)
});
</script>

<style></style>