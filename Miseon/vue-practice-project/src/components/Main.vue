<template>
  <div class="container" v-if="contentView == false">
    <div class="main-title">My First Web App</div>

    <div class="memo" v-for="i in 4" :key="i" @click="contentView = true; $router.push('/detail')">
      <div class="memo-title">
        {{title[i - 1]}}
      </div>
      
      <div class="memo-content">
        {{content[i - 1]}}
      </div>
    </div>
  </div>

  <router-view v-if="contentView == true"></router-view>
</template>

<script>

export default {
  name: 'Main.vue',
  data() {
    return {
      contentView: false,
      title: ["메모 1", "메모 2", "메모 3", "메모 4"],
      content: ["내용 1", "내용 2", "내용 3", "내용 4"]
    }
  },
  components: {
  }
}
</script>

<style>

</style>