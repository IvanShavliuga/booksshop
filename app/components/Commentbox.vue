<template>
  <article class="commbox">
    <h3 class="commbox__title">Product review</h3>
    <div class="commbox__comment" v-for="(c,k) in comments" :key="k">
      <div class="commbox__comment-block">
        <div class="commbox__comment-avatar">
          <img class="commbox__comment-image" :src="(c.img=='none')?'/img/user.png':'c.img'" :alt="c.name" :id="c.id" />
          <p class="commbox__comment-name">{{c.name}}</p>
        </div>
        <p class="commbox__comment-text">{{c.text}}</p>
      </div>
      <hr v-show="k<comments.length-1"/>
    </div>
    <h3 class="commbox__title">Write a comment</h3>
    <form class="commbox__form">
      <div class="commbox__form-box">
        <div class="commbox__form-info">
          <label class="commbox__form-label">Your name</label>
          <label class="commbox__form-label">Email</label>
          <label class="commbox__form-label">Message</label>
        </div>
        <div class="commbox__form-enters">
          <input class="commbox__form-input"/>
          <input class="commbox__form-input"/>
          <textarea class="commbox__form-area">
          </textarea>
        </div>
      </div>
      <div class="commbox__form-control">
        <button class="commbox__form-button">
          Submit
        </button>
      </div>
    </form>
  </article>
</template>
<script>
export default {
  data () {
    return {
      comments: [{
        id: 0,
        img: 'none',
        name: 'Name 1',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially'
      }, {
        id: 1,
        img: 'none',
        name: 'Name 2',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially'
      }]
    }
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';
.commbox {
  border: 1px solid @bordercolor;
  margin-top: 15px;
  @media (max-width: 1300px) {
    width: 57vw;
  }
  @media (max-width: @largetablet) {
    width: 64vw;
  }
  @media (max-width: 500px) {
    width: 92vw;
  }
  &__title {
    font-size: 20px;
    line-height: 26px;
    color: #7e7e7e;
    margin: 15px;
    font-weight: 300;
    margin-bottom: 10px;
    margin-top: 15px;
  }
  &__comment {
    padding: 15px;
    &-block {
      display: flex;
      margin-bottom: -15px;
    }
    &-avatar {
      padding: 0;
      padding-right: 15px;
    }
    &-image {
      margin-bottom: 0;
      width: 64px;
      height: 64px;
    }
    &-name {
      font-size: 14px;
      line-height: 26px;
      color: #a2a2a2;
      margin-top: 0;
      padding-left: 0;
    }
    &-text {
      margin-top: -5px;
      padding-top: 0;
      width: 570px;
      font-size: 13px;
      line-height: 21px;
      color: #7e7e7e;
    }
  }
  &__form {
    margin-top: 30px;
    &-box {
      display: flex;
    }
    &-label, &-input, &-area {
      display: block;
    }
    &-input, &-area {
      width: 570px;
      @media (max-width: @largetablet) {
        width: 40vw;
      }
      @media (max-width: 630px) {
        width: 37vw;
      }
      @media (max-width: 500px) {
        width: 50vw;
      }
    }
    &-info {
      width: 120px;
      margin: 0;
      margin-left: 15px;
      @media (max-width: @largetablet) {
        width: 160px;
      }
      @media (max-width: 730px) {
        width: 200px;
      }
      @media (max-width: 630px) {
        width: 240px;
      }
      @media (max-width: 280px) {
        margin-left: -5px;
      }
    }
    &-enters {
      width: 570px;
      margin: 0;
      margin-right: 15px;
    }
    &-label {
      font-size: @fontsmallsize;
      line-height: 26px;
      margin: 10px;
      height: 29px;
      margin-top: 11px;
      color: #a2a2a2;
      text-align: right;

      @media (max-width: 385px) {
        font-size: 12px;
      }
    }
    &-input {
      font-size: @fontsmallsize;
      line-height: 26px;
      height: 29px;
      margin: 10px;
      text-align: left;
      color: #a2a2a2;

      background-color: #ffffff;
      border: 1px solid #e2e2e2;
    }
    &-area {
      margin: 10px;
      height: 142px;
      font-size: @fontsmallsize;
      line-height: 26px;
      text-align: left;
      color: #a2a2a2;
      background-color: #ffffff;
      border: 1px solid #e2e2e2;
    }
    &-control {
      text-align: right;
      height: 100px;
      margin-top: 20px;
    }
    &-button {
      background-image: linear-gradient(0deg, #79b260 0%, #92d774 100%);
      border: none;
      padding: 10px 30px;
      display: block;
      margin: 15px;
      font-size: 24px;
      height: 50px;
      color: #ffffff;
      font-weight: bold;
      font-family: @pricefont;
      float: right;
      margin-right: 50px;
    }
  }
}
hr {
  margin: 10px 0;
}
</style>
