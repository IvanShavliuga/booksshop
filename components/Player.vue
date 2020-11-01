<template>
<audio controls class="audio"
  @playing="play">
  <source :src="filelink" type="audio/mpeg">
  Тег audio не поддерживается вашим браузером.
  <a href="../assets/audio/music.mp3">Скачайте музыку</a>.
</audio>
</template>
<script>
export default {
  props: {
    filelink: {
      type: String,
      required: true
    }
  },
  methods: {
    play() {
      this.$emit('play')
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';

.audio {
  display: block;
  width: 500px;
  height: 25px;
  padding: 5px 15px;
  margin: 2px auto;
  background-color: #dfdfdf;
  .focus();
}
</style>
