<template> <!--секция для разметки-->
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="showDialog" style="margin: 15px 0">Создать пост</my-button>
    <!--запуск функции меняющей булевое значение в модели-->

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </my-dialog> <!--добавляю в модальное окно форму-->

    <!--    лист рисует если приходит в isPostLoading true-->
    <post-list :posts="posts" @remove="removePost" v-if="!isPostsLoading"/>
    <!--     если isPostsLoading = false показывает div-->
    <div v-else>Идёт загрузка...</div>
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
      isPostsLoading: false /*модель для отслеживания загрузки
      */
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
    async fetchPosts() { /* функция делает запрос на сервер и выводит 10 постов*/
      try {
        this.isPostsLoading = true;/* меняется булевое значение индикатора*/
        const responce = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10'); /*данные записываются в константу*/
        this.posts = responce.data; /*данные с сервера передаются в массив постов*/
      } catch (e) {
        alert('Ошибка') /*на случай ошибки*/
      } finally {
        this.isPostsLoading = false; /*после загрузки данных булевое значение для индикатора снова меняется*/
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