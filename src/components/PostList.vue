<template>
<!--  //компонент Лист получает на вход массив и рисует items//-->
  <div class="post" v-for="post in posts">
    <div><strong>Название:</strong>{{post.title}}</div>
    <div><strong>Описание:</strong>{{post.body}}</div>

  </div>
</template>

<script>
export default {
  /*//передаются пропсы //*/
  props:{
    posts: {
      type: Array,
      required: true
    }
  }

}
</script>

<style scoped> /*//scoped что данные стили применяются толь ко внутри данного компонента//*/
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

</style>