<template> <!--секция для разметки-->
  <div>
    <div >
      <button v-on:click="addLike">Like</button> <!--связывание функций с кнопками при помощи директивы v-on (слушатель события)-->
      <button v-on:click="addDislike">Dislike</button>

    </div>
    <div>
   Кол-во лайков: <strong>{{likes}}</strong>  <!--модель встраивается при помощи интерполяции-->
    Кол-во дизлайков: <strong>{{dislikes}}</strong>
    </div>
  </div>
</template>

<script> /*логика компонента по дефолту экспортируется объект*/
export default {
   data() {
     return {
       likes: 0,   /*описание модели*/
       dislikes: 5
     }
   },
  methods: { /*поле для функций*/
     addLike() {
       this.likes += 1;  /*получение доступа к модели внутри функции*/
     },
    addDislike() {
      this.dislikes += 1;

    }
  }

}
</script>

<style scoped>/* блок для стилей, директива scoped указывает, что стили будут применены внутри  данного компонента*/

</style>