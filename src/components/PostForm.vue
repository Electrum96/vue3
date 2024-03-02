<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="название поста">
    <!--тоже самое для body-->
    <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="описание поста">
    <button class="btn" @click="createPost"> Добавить</button>
  </form>
</template>

<script>
export default {

}
</script>

<style  scoped>
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