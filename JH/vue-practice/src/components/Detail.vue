<template>
  <div>
    <div class="left">
      <div class="top-bar">
        <b class="Arrow" @click="goHome"> {{" < "}} </b>
        <b class="title">상세페이지</b>
      </div>
    </div>
    <div>
      <div class="box">
        <h1>제목</h1>
      </div>
      <div class="box">
        <p>내용</p>
      </div>
      <div class="right">
        <span class="bt1">
          수정
        </span>
        <span class="bt2">
          삭제
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  methods:{
    goHome(){
      this.$router.push("/");
    }
  },
  components: {
  }
}
</script>

<style>
.left{
  float:left;
  margin-left: 20px;
}

.top-bar{
  margin-top:-40px;
}

.Arrow{
  font-size: 30px;
}

.title{
  font-size:25px;
}

.box{
  background: pink;
  border-radius: 20px;
  padding: 5px;
  margin: 20px;
  padding-bottom: 50px;
  font-weight: bold;
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

.right {
  float: right;
  margin-right: 20px;
}

.bt1 {
  background: pink;
  border-radius: 20px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 5px;
  font-weight:bolder;
}

.bt2 {
  background: pink;
  border-radius: 20px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight:bolder;
}
</style>