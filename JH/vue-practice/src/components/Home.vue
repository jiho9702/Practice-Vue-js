<template>
  <div>
    <b>My First Web App</b>
    <div class="box" v-for="boxes in 4" :key="boxes" @click="goDetail">
      <h1>메모{{boxes}}</h1>
      <p><b>내용{{boxes}}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goDetail(){
      this.$router.push("/detail");
    }
  }
}
</script>

<style>
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