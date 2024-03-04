<template> <!--секция для разметки-->
  <div class="app">
    <h1>Страница с постами</h1>
    <input type="text" v-model.number="modificatorValue">  <!--значение из value записывается сразу как number-->
    <my-button @click="showDialog" style="margin: 15px 0px">Создать пост</my-button> <!--запуск функции меняющей булевое значение в модели-->

    <my-dialog v-model:show="dialogVisible" >

      <post-form @create="createPost"/>

    </my-dialog> <!--добавляю в модальное окно форму-->

    <post-list :posts="posts"  @remove="removePost"/>  <!-- вешаю слушатель @remove и передаю туда функцию удаления поста-->
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"; /*компоненты импортируются в секции script*/
import PostList from "@/components/PostList.vue";
import MyDialog from "@/components/UI/MyDialog.vue";
import MyButton from "@/components/UI/MyButton.vue";
export default {

  components: {
    MyButton,
    MyDialog,
    PostForm, PostList

  },
  data() {
    return {
      posts: [
        {id: 1, title: 'Title', body: 'Описание поста'},
        {id: 2, title: 'Title 2', body: 'Описание поста 2'},
        {id: 3, title: 'Title 3', body: 'Описание поста 3'},
      ],
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