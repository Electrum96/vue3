<template>
  <div class="app">
    <post-form/>
    <post-list :posts="posts"/>  <!--/ : сокращенная запись директивы v-bind передает пропсы в компонет-->
  </div>
</template>
<script> /*логика компонента */
import PostForm from "@/components/PostForm.vue"; /*импорты компонентов*/
import PostList from "@/components/PostList.vue";
export default { /* по дефолту экспортируется объект*/
  components: {
    PostList, PostForm ///регистрация импортированных объектов
  },
  data() { /*массив постов*/
      return {
        posts: [
          {id:1, title: 'Пост', body: 'Описание поста'},
          {id:2, title: 'Пост 2', body: 'Описание поста 2'},
          {id:3, title: 'Пост 3', body: 'Описание поста 3'},
        ],
        title: '',
        body: ''
      }
  },
  methods: { /*в методы пишутся функции*/
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
          this.posts.push(newPost);
          this.title = '';
          this.body = '';

    },

  }
}
</script>

<style>
* {  /*обнуление стилей*/
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding:  20px;
}



</style>
