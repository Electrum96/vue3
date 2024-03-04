<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
  <!-- забираю title из объекта post-->
    <input
        v-bind:value="post.title"
        @input="post.title = $event.target.value"
        class="input"
        type="text"
        placeholder="название поста">
    <!-- забираю body из объекта post-->
    <input
        v-bind:value="post.body"
        @input="post.body = $event.target.value"
        class="input"
        type="text"
        placeholder="описание поста">
    <button class="btn" @click="createPost"> Добавить</button>
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

  }

}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.input {
  width: 100%;
  border: 2px solid teal;
  padding: 15px;
  margin-top: 15px;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  border: 2px solid teal;
  padding: 15px;
  background: none;
}

</style>