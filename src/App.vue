<template> <!--секция для разметки-->
  <div class="app">
    <post-form/>
    <post-list :posts="posts"/>  <!--передается значение при помощи v-bind (короткая запись :)-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"; /*компоненты импортируются в секции script*/
import PostList from "@/components/PostList.vue";
export default {

  components: {  /*регистрация компонентов*/
    PostForm, PostList

  },
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


</style>