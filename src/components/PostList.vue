<template>
 <div>
   <h3>Список постов</h3>
   <post-item
       v-for="post in posts"
       :post="post"/>
 </div>

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
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}

</style>