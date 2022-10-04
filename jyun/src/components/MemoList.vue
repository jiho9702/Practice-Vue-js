
<template>
  <router-link to="/detail">
    <div class="memo-box" v-for="(a,i) in list" :key="i">
      <h4 class="title">메모</h4>
      <p class="detail">내용</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'MemoList',
  data() {
    return {
      list: ['메모1', '메모2', '메모3']
    }
  }
}
</script>

<style>
.memo-box {
  border-radius: 15px;
  background-color: #D9D9D9;
  height: 3cm;
  margin: 10px;
  text-align: left;
}
.title{
  font-size: 20px;
  padding: 10px;
}
.detail{
  padding-left: 10px;
}
a{
  text-decoration: none;
  color: inherit;
}
</style>