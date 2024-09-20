<script setup>
import {ref} from "vue";
    const count = ref(0);
    const randomNumber = ref(1);
    // Khi dùng ref:
    // Để cập nhật lại giá trị thì bắt buộc phải truy cập vào value
    // Khi sử dụng thì không cần dùng value
    const handleCount = () => {
        // Cập nhật lại giá trị của count
      count.value++ ;
    };

    const handleRandom = () => {
        // Tạo số ngẫu nhiên từ 1 đến 10
        const random = Math.ceil(Math.random() * 10);

        // Gán lại giá trị cho biến randomNumber
        randomNumber.value() = random;
    }

    const handlePushNumber = () => {
        // Tạo số ngẫu nhiên từ 1 đến 10
        const random = Math.ceil(Math.random() * 10);
        // Push số random vào mảng  

        numbers.value() = [...numbers.value(), random] 
    }
</script>

<template>
    <div>
        <h2>Count: {{ count }}</h2>
        <h2>Random number: {{ randomNumber }}</h2>
        <h2>{{ number }}</h2>
        <button @click="handleCount">Count</button>
        <button @click="handleRandom">Random</button>
    </div>
</template>