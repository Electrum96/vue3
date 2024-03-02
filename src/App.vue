<template> <!--секция для разметки-->
  <div>
   Кол-во лайков: <strong>{{likes}}</strong>  <!--модель встраивается при помощи интерполяции-->
    Кол-во лайков: <strong>{{dislikes}}</strong>
  </div>
</template>

<script> /*логика компонента по дефолту экспортируется объект*/
export default {
   data() {
     return {
       likes: 0,   /*описание модели*/
       dislikes: 5
     }
   }

}
</script>

<style scoped>/* блок для стилей, директива scoped указывает, что стили будут применены внутри  данного компонента*/

</style>