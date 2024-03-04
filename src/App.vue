<template> <!--секция для разметки-->
  <div class="app">
    <post-form @create="createPost"/> <!--подписываюсь на событие в ребенке при помощи @create,указываю функцию куда передаю данные-->
    <post-list :posts="posts"  @remove="removePost"/>  <!-- вешаю слушатель @remove и передаю туда функцию удаления поста-->
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
      ]
    }
  },
  methods: {
    createPost(post) { /*передаю в функцию пост из ребенка*/
      this.posts.push(post); /*добавляю пост в массив*/
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id) /*функция принимает пост проходится фильтром и возвращает массив элементов без поста */
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


</style>