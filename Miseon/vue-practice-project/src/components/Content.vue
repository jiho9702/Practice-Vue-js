<template>
  <div class="container">
      <!-- 삭제 모달 -->
      <div v-if="removeModal == true">
        <!-- 삭제하겠습니까? -->
        <div class="modal-box">
          삭제하겠습니까?
          <!-- OK -->
          <div class="button" @click="removeModal = false">
            OK
          </div>
        </div>
        

        <div class="bg-black"></div>
      </div>

      <!-- 수정 모달 -->
      <div v-if="modifyModal == true">
        <!-- 수정하겠습니까? -->
        <div class="modal-box">
          수정하겠습니까?
          <!-- OK -->
          <div class="button" @click="modifyModal = false">
            OK
          </div>
        </div>
        
        
        <div class="bg-black"></div>
      </div>

    <div>
        <!-- 뒤로가기 버튼 -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-chevron-left detail-back" viewBox="0 0 16 16"  @click="$router.go(-1);">
            <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>

        <!-- 뒤로가기 글씨 -->
        <div class="detail">상세 페이지</div>

        <!-- 둘이 같은 라인에 있도록 float 초기화 -->
        <div style="clear: both"></div>
    </div>

    <div>
      <!-- 타이틀 -->
      <div class="memo detail-memo-title">
        <div class="memo-title">
          메모
        </div>
      </div>

      <!-- 내용 -->
      <div class="memo">
        <div class="memo-content detail-memo-content">
          내용
        </div>
      </div>

      <!-- 수정, 삭제 버튼 -->
      <div class="detail-remove" @click="removeModal = true;">
        삭제
      </div>
      <div class="detail-modify" @click="modifyModal = true;">
        수정
      </div>



    </div>
  </div>
</template>

<script>

export default {
  name: 'Content.vue',
  data() {
    return {
      removeModal: false,
      modifyModal: false,
    }
  },
  props: {
  },
  components: {
    
  }
}
</script>

<style>

</style>