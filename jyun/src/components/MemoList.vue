
<template>
  <router-link to="memolist/detail">
    <div v-for="(a,i) in list" :key="i" class="memo-box">
      <h4 class="title">메모</h4>
      <p>내용</p>
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
  background-color: gray;
  height: 3cm;
  margin: 10px;
  text-align: left;
  padding-left: 10px;
}
.title{
  font-size: 20px;
}
</style>