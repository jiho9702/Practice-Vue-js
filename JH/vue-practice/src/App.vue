<template>
  <div class="box" v-for="boxes in 4" :key="boxes">
    <h1>메모{{boxes}}</h1>
    <p><b>내용{{boxes}}</b></p>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.box{
  background: pink;
  border-radius: 20px;
  padding: 5px;
  margin: 20px;
  padding-bottom: 50px;
}

.box h1{
  border: 100px;
  text-align: left;
  padding-left: 30px;
}

.box p{
  border: 100px;
  text-align: left;
  padding-left: 30px;
}
</style>
