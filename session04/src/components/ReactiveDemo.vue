<script setup>
import {reacttive} from "vue";

    const userInfo = reacttive({
        id: 1,
        userName: "Nguyen Van A",
    });
        
    const handleIncreaseId = () => {
        userInfo.id++;
    }
</script>

<template>
    <div>
        <h1>Reacttive</h1>
    
        <p>Id: {{ userInfo.id }}</p>
        <p>UserName: {{ userInfo.userName }}</p>
    
        <button @click="handleIncreaseId">Increate Id</button>
    </div>
</template>
