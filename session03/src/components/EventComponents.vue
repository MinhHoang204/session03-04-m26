<template>
   <button v-on:click="handleClick">Click me</button>
   <button v-on:click="handleDelete(1)">Delete</button>
   <button v-on:click="handleGetEvent">Event info</button>
   <form @submit.prevent="handleSubmit">
       <button type="sumnit">Submit</button>
   </form>
   <button @ckick="handleGetEvent"></button>
</template>

<script setup>
    const handleClick = () => {
        console.log("Clicked");
    };
    const handleDelete = (id) => {
        console.log("Id:", id);
    };
    const handleGetEvent = (event) = {
        console.log("Event", event);
    }
</script>

<style></style>