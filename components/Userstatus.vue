<template>
  <div class="userstatus__topline">
    <div class="userstatus__wrapper">
      <div class="userstatus__userpanel">
        <ul class="userstatus__userpanel-list">
          <li class="userstatus__userpanel-item">
            <a class="userstatus__userpanel-link" href="#">Sign in</a></li>
          <li class="userstatus__userpanel-item">
            <a class="userstatus__userpanel-link" href="#">My account</a></li>
          <li class="userstatus__userpanel-item">
            <a class="userstatus__userpanel-link" href="#">Order status</a></li>
          <li class="userstatus__userpanel-item">
            <a class="userstatus__userpanel-link" href="#">Help</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
@import '../assets/css/style.less';
.userstatus {
  &__wrapper {
    .wrapper();
  }
  &__topline {
    background-color: rgb(65,65,65);
    width: 100%;
    height: 30px;
  }
  &__userpanel {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
    &-list {
      display: inline;
      margin: 0;
    }
    &-item {
      display: inline;
      margin: 0 10px;
      font-size: 16px;
      line-height: 26px;
      color: #ffffff;
      font-weight: 300;
      font-family: @bodyfont;
      text-align: center;
    }
    &-link {
      color: #ffffff;
      text-decoration: none;
    }
  }
}
</style>
