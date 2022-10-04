<template>
  <div class="back-bl" v-if="modalopen==true">
    <div class="modal">
      수정하시겠습니까?
      <button @click="modalopen=false">X</button>
    </div>
  </div>

  <div @click="goBack">뒤로가기 버튼</div>
  <div class="title-box"> 메모</div>
  <div class="memo-box">
    상세내용입니다
  </div>
  <button class="memo-button" @click="modalopen=true">수정</button>
  <button class="memo-button">삭제</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      modalopen : false,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);[2]
    },
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-box {
  border-radius: 15px;
  background-color: gray;
  height: 1.5cm;
  margin: 10px;
  text-align: left;
  padding-left: 20px;
  color: white;
  font-size: 20px;
}
.memo-box {
  border-radius: 15px;
  background-color: gray;
  height: 3cm;
  margin: 10px;
  text-align: left;
  padding-left: 10px;
  color: white;
  font-size: 20px;
}
.memo-button{
  float: right;
  border-radius: 15px;
  background-color: gray;
  height: 1cm;
  width: 3cm;
}
.back-bl{
  width: 100%;
  height:100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
}
.modal{
  width: 100%;
  background: white;
  border-radius: 8px ;
  padding: 20px;
  margin-top: 50px;
}
</style>
