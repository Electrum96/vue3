<template> <!--секция для разметки-->
  <div class="app">
    <form @submit.prevent> <!--отменяю стандартное поведения браузера на событие submit при помощи preventDefault-->
      <h4>Создание поста</h4>
      <!-- v-bind позволяет связывать данные с конкретным компонентом здесь связываю инпут с title
      подписываюсь на изменения при помощи @input и встроенной функции $event-->
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

    <div class="post" v-for="post in posts"> <!--директива v-for для отрисовки элементов массива-->
      <div><strong>Название:</strong>{{ post.title }}</div> <!--динамически забираю название из post-->
      <div><strong>Описание:</strong>{{ post.body }}</div>
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
  methods: {
    createPost() {
      const newPost = { /*описываю объект пост в константу*/
        id: Date.now(),
        title: this.title, /*получаю значения из соответствующей модели*/
        body:  this.body
      }
      this.posts.push(newPost); /*добавление нового объекта в массив постов*/
      this.title = ''; /*очищаю поле  после добавления поста*/
      this.body = '';

    },

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