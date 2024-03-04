<template>
 <div v-if="posts.length > 0">
   <h3>Список постов</h3>
   <!--указываю id для работы цикла-->
   <post-item
       v-for="post in posts"
       :post="post"
       :key="post.id"
       @remove="$emit('remove', post)"/> <!--принимаю remove  и пост внутри него, эмичу событие-->
 </div>
  <h2 v-else style="color: red">Список пуст</h2>

</template>

<script>
import PostItem from "@/components/PostItem.vue";

export default {
  components: {PostItem},
  props: {     /*  передаются пропсы, массив, по которому будет идти v-for*/
    posts: {
      type: Array,  /*указывается тип пропса*/
      required: true /*обязательность пропса*/

    }
  }

}
</script>

<style scoped>


</style>