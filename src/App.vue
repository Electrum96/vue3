<template>
  <div>
      <form>
        <h4>Создание поста</h4>
        <input class="input" type="text" placeholder="Название">
        <input class="input" type="text" placeholder="Описание">
        <button>Создать</button>
      </form>
    <div class="post" v-for="post in posts">
      <div><strong>Название:</strong>{{post.title}}</div>
      <div><strong>Описание:</strong>{{post.body}}</div>

    </div>
  </div>
</template>

<script> //логика компонента , по деволту экспортируется объект
export default {
  data() {
      return {
        posts: [
          {id:1, title: 'Пост', body: 'Описание поста'},
          {id:2, title: 'Пост 2', body: 'Описание поста 2'},
          {id:3, title: 'Пост 3', body: 'Описание поста 3'},
        ]
      }
  },
  methods: {

  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
.input {
  width: 100%;
  border: 1px;
}
</style>
