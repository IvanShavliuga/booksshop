<template>
<div class="playlist" v-if="files.length">
  <div class="playlist__player">
    <Player :filelink="fullurl(id)"
      @play="playevent"/>
  </div>
  <div :class="['playlist__item', (k==id)?'itemactive':'']"
    v-for="(f,k) in [0,1,2,3,4,5,6,7]"
    :key="k">
    <div class="playlist__number">
      #{{f+1}}
    </div>
    <div class="playlist__name">
      {{files[f]}}
    </div>
  </div>
</div>
</template>
<script>
import Player from '@/components/Player.vue'
import Axios from 'axios'
export default {
  data () {
    return {
      files: [],
      id: 0,
      status: 'none',
      baseurl: 'https://ivanshavliuga.github.io/simples/audio/booksshop/telepat/'
    }
  },
  methods: {
    fullurl(id) {
      return this.baseurl+this.files[id]
    },
    playevent() {
      this.status="play"
    }
  },
  components: {
    Player
  },
  created () {
    Axios.get('https://ivanshavliuga.github.io/simples/audio/booksshop/telepat/files-array.json')
      .then(response => {
        for(let i=0; i<response.data.length; i++)
          this.files.push(response.data[i].name)})
    console.log(this.files)
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';
.playlist {
  width: 550px;
  padding: 15px 0;
  margin: 15px 30px;
  background-color: #dfdfdf;
  box-shadow: 1px 1px 3px 5px #aaa;
  &__item {
    position: relative;
    padding-left: 15px;
  }
  &__number, &__name {
    display: inline;
    font-size: 20px;
    font-weight: normal;
    line-height: 36px;
    margin: 0 10px;
  }
  &__player {
    border-bottom: 7px double #999;
    padding-bottom: 10px;
    margin-bottom: 15px;
  }
}
</style>
