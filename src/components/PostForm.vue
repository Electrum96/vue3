<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
  <!-- двустороннее связывание при помощи директивы v-model-->
    <my-input
        v-model="post.title"
        type="text"
        placeholder="название поста"/>
    <!-- двустороннее связывание при помощи директивы v-model-->
    <my-input
        v-model="post.body"
        type="text"
        placeholder="описание поста"/>
    <my-button
        class="btn"
        style="align-self: flex-end; margin-top: 15px;"
        @click="createPost">
      Добавить
    </my-button>
  </form>
</template>

<script>


export default {

  data() {           /*   описываю модель поста*/
    return {
      post: {
        title: '',
        body: ''
      }
    }

  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post) /*генерация события в ребенке на которое подпишется родитель*/
      this.post ={
        title: '',
        body: ''
      }

    }
  }

}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}





</style>