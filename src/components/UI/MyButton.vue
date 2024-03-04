<template>
  <button class="btn">
    <slot></slot>  <!--текст кнопки попадает в слот-->
  </button>
</template>

<script>
export default {
  name: 'my-button' /*задаю св-во name для кнопки*/

}
</script>

<style scoped>
.btn {

  border: 2px solid teal;
  padding: 15px;
  background: none;
}
</style>