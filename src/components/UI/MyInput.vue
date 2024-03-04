<template>
  <input :value="modelValue" @input="upDateInput" class="input" type="text">
</template>

<script>
export default {
  name: 'my-input',
  props:{
    modelValue: [Number, String]    /* описываю возможные типы данных для modelValue*/
  },
  methods:{
    upDateInput(event) {              /* в методах описываю функцию, принимаю событие, в $emit передаю modelValue и target.value*/
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style  scoped>
.input {
  width: 100%;
  border: 2px solid teal;
  padding: 15px;
  margin-top: 15px;
}

</style>