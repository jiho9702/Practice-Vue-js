<template>
  <div class="back-bl" v-if="editopen==true">
    <div class="modal">
      수정하시겠습니까?
      <div>
        <div class="modal-button" @click="editopen=false">OK</div>
      </div>
    </div>
  </div>
  <div class="back-bl" v-if="deletopen==true">
    <div class="modal">
      삭제하시겠습니까?
      <div>
        <div class="modal-button" @click="deletopen=false">OK</div>
      </div>
    </div>
  </div>


  <div class="back-button" @click="goBack"> &lt; 상세페이지</div>
  <div class="title-box"> 메모</div>
  <div class="memo-box">
    상세내용입니다
  </div>
  <div class="memo-button" @click="editopen=true">수정</div>
  <div class="memo-button" @click="deletopen=true">삭제</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      editopen : false,
      deletopen : false
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
  background-color: #D9D9D9;
  height: 1.5cm;
  margin: 10px;
  margin-top: 20px;
  text-align: left;
  padding-left: 20px;
  padding-top:10px ;
  color: black;
  font-size: 20px;
  font-weight: 500;
}
.memo-box {
  border-radius: 15px;
  background-color: #D9D9D9;
  height: 3cm;
  margin: 10px;
  text-align: left;
  padding-left: 10px;
  padding-top:10px ;
  color: black;
  font-size: 20px;
}
.memo-button{
  float: right;
  border-radius: 15px;
  background-color: #D9D9D9;
  height: 1cm;
  width: 3cm;
  text-align: center;
  padding-top:12px;
  margin: 10px;
}
.back-bl{
  width: 100%;
  height:100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
}
.modal{
  font-size: large;
  width: 90%;
  height: 20%;
  margin: auto;
  margin-top: 30%;
  background: white;
  border-radius: 8px ;
  padding: 20px;
  text-align: center;
}
.modal-button{
  border-radius: 30px;
  background-color: #D9D9D9;
  height: 1cm;
  width: 3cm;
  margin-top: 2cm;
  align-items: center;
  padding-top: 10px;
  display: inline-block;
  text-align: center;
}
.back-button{
  font-size: large;
}
</style>
