<template>
    <div>
      <p>Width: {{ width }} px</p>
      <p>Height: {{ height }} px</p>
      <p>Area: {{ area }} px²</p>
      <button @click="increaseWidth">Increase width</button>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        width: 100, // Giá trị mặc định của chiều dài
        height: 50  // Giá trị mặc định của chiều cao
      };
    },
    computed: {
      area() {
        return this.width * this.height;
      }
    },
    methods: {
      increaseWidth() {
        this.width += 10;
      }
    }
  };
</script>
  