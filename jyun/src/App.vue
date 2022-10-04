<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-link to="/memolist"><div>메모장으로 가자 </div></router-link>
  <router-view>
  </router-view>
</template>

<script>
// import MemoDetail from './components/MemoDetail.vue';
// import MemoList from './components/MemoList.vue';

export default {
  name: 'App',
  components: {
    // MemoList,
    // MemoDetail,
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
</style>
