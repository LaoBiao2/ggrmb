<template>
  <div class="header" v-if="isShow">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '头部',
      isShow: true,
      duration: 1500
    }
  }
}
</script>
