<template>
  <div>
    <div class="Box">
      <h1>제목</h1>
    </div>
    <div class="Box">
      <p>내용</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Detail',
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