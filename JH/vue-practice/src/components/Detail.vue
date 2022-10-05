<template>
  <div>
    <div class="black-bg" v-if="rev == true">
        <div class="white-bg">
          <b>수정하시겠습니까?</b>
          <div class="btn" @click="revise2">OK</div>
        </div>
      </div>
      <div class="black-bg" v-if="del == true">
        <div class="white-bg">
          <b>삭제하시겠습니까?</b>
          <div class="btn" @click="deletes2">OK</div>
        </div>
      </div>
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
        <span class="bt1" @click="revise">
          수정
        </span>
        <span class="bt2" @click="deletes">
          삭제
        </span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Detail',
  data(){
    return{
      rev : false,
      del : false,
    }
  },
  methods:{
    goHome(){
      this.$router.push("/");
    },
    revise(){
      this.rev = true;
    },
    deletes(){
      this.del = true;
    },
    revise2(){
      this.rev = false;
    },
    deletes2(){
      this.del = false;
    }
  },
  components: {
  }
}
</script>

<style>
body{
  margin : 0;
  margin-top:-60px;
}
div {
  box-sizing: border-box;
}

.black-bg{
  display:flex;
  width:100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position:fixed; padding: 20px;
  justify-content: center;
  align-items: center;
}

.white-bg{
  width:300px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  margin-top:100px;
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

.btn {
  background: pink;
  border-radius: 20px;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight:bolder;
  margin-top:10px;
}
</style>