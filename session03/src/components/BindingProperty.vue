<template>
    <img v-bind:src="url" alt=""/>
    <!-- <img :src="url" alt=""/> -->
  
    <button v-bind:disabled="isDisabled">Click me</button>
  
    <button v-bind:disbled={isDisabled}></button>
  
    <input type="text" v-bind:disabled="isEnter"/>
  
    <div v-bind="divAttributes">Container</div>
  
    <!-- Binding 2 thuoc tinh id: "paragraph", area="paragrrap" -->
    <p v-bind="paragraphAttributes">Noi dung</p>
    <div v-blind:class="text-red">Hello world</div>
  </template>
  
  <script setup>
  const url = 
    "https://khoinguonsangtao.vn/wp-content/uploads/2022/08/anh-thien-nhien.jpg";
  
    const isDisabled = true;
  
    const isEnter = true;
  
    const divAttributes = {
      id: "container-id",
      class: "container-class",
    };
  
    const paragraphAttributes = {
      id= "paragraph",
      area: "paragraph",
    }
  
    const isTextRed = true;
  </script>
  
  <style>
  .text-red {
    color: red;
  }
  </style>