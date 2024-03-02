<template> <!--секция для разметки-->
  <div class="app">
      <form>
        <h4>Создание поста</h4>
        <!-- v-bind позволяет связывать данные с конкретным компонентом здесь связываю инпут с title
        подписываюсь на изменения внутри инпута при помощи @input-->
        <input
            v-bind:value="title"
            @input="inputTitle"
            class="input"
            type="text"
            placeholder="название поста">
        <!--тоже самое для body-->
        <input
            v-bind:value="body"
            @input="inputBody"
            class="input"
            type="text"
            placeholder="описание поста">
        <button class="btn" @click="createPost"> Добавить</button>
      </form>

    <div class="post" v-for="post in posts"> <!--директива v-for для отрисовки элементов массива-->
      <div><strong>Название:</strong>{{post.title}}</div> <!--динамически забираю название из post-->
      <div><strong>Описание:</strong>{{post.body}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {id: 1, title: 'Title', body: 'Описание поста'},
        {id: 2, title: 'Title 2', body: 'Описание поста 2'},
        {id: 3, title: 'Title 3', body: 'Описание поста 3'},
      ],
      title: '',
      body: ''
    }
  },
  methods: { /*поле для функций*/
    createPost() {

    },
    inputTitle(e) {
      this.title = e.target.value; /*помещаю значание из инпута в переменную title*/

    },
    inputBody(e) {
      this.body = e.target.value;

    }





  }

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
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