<template>
  <div class="post" v-for="post in posts">
    <div><strong>Название:</strong>{{ post.title }}</div>
    <div><strong>Описание:</strong>{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {     /*  передаются пропсы, массив, по которому будет идти v-for*/
    posts: {
      type: Array,  /*указывается тип пропса*/
      required: true /*обязательность пропса*/

    }
  }

}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

</style>