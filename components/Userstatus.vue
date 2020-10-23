<template>
  <div class="userstatus__topline">
    <div class="userstatus__wrapper">
      <div class="userstatus__userpanel">
        <div class="userstatus__collapse">
          <input id="userstatus__collapse-toggle" type="checkbox" />
          <label class="userstatus__collapse-btn" for="userstatus__collapse-toggle">
            <ib class="userstatus__collapse-icon"
              icon-name="user"
              width="18"
              height="18"
              icon-color="#fff">
              <user/>
            </ib>
          </label>
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
  </div>
</template>
<script>
import ib from './icons/IconBase.vue'
import user from './icons/IconUser.vue'

export default {
  components: {
    ib,
    user
  }
}
</script>
<style scoped lang="less">
@import '../assets/css/style.less';
.userstatus {
  &__wrapper {
    .wrapper();
  }
  &__collapse {
    position: relative;
    width: 96vw;
    &-btn {
      @media (max-width: 500px) {
        position: absolute;
        left: 5px;
        top: 5px;
      }
      @media (min-width: 501px) {
        display: none;
      }
    }
  }
  &__topline {
    background-color: rgb(65,65,65);
    width: auto;
    height: 30px;
  }
  &__userpanel {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: flex-end;
    &-list {
      @media (max-width: 500px) {
        display: none;
      }
      @media (min-width: 501px) {
        display: inline;
        margin: 0;
      }
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
#userstatus__collapse-toggle {
  opacity: 0;
}
#userstatus__collapse-toggle:checked ~ .userstatus__userpanel-list {
  @media (max-width: 500px) {
    position: absolute;
    left: 0;
    top: -10px;
    width: 160px;
    background-color: #343434;
    z-index: 60;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    box-shadow: 1px 1px 7px 7px rgba(10,10,10,0.5);
  }
}

</style>
