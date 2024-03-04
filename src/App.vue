<template> <!--секция для разметки-->
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="showDialog" style="margin: 15px 0px">Создать пост</my-button>
    <!--запуск функции меняющей булевое значение в модели-->

    <my-dialog v-model:show="dialogVisible">

      <post-form @create="createPost"/>

    </my-dialog> <!--добавляю в модальное окно форму-->

    <post-list :posts="posts" @remove="removePost"/>
    <!-- вешаю слушатель @remove и передаю туда функцию удаления поста-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"; /*компоненты импортируются в секции script*/
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
import axios from "axios";

export default {

  components: {
    MyButton,
    MyDialog,
    PostForm, PostList

  },
  data() {
    return {
      posts: [],
      dialogVisible: false, /*входная модель в зависимости от которой модальное окно лио видно или скрыто*/
      modificatorValue: ''
    }

  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false; /*скрытие модального окна после добавления поста*/
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id) /*функция принимает пост проходится фильтром и возвращает массив элементов без поста */
    },
    showDialog() {
      this.dialogVisible = true; /*изменение булевого значения для модели*/
    },
    async fetchPosts() {
      try {
        setTimeout(async () => {
          const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
          this.posts = responce.data;
        }, 1000)


      } catch (e) {
        alert('Ошибка')
      }
    }

  },
  mounted() {
    this.fetchPosts();
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