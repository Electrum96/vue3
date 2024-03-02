<template> <!--секция для разметки-->
  <div>
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
      ]
    }
  },
  methods: { /*поле для функций*/


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

</style>