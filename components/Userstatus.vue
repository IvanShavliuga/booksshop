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
    height: 40px;
    padding: 0;
    margin: 0;
    margin-top: 0;
    @media (max-width: 500px) {
      width: 96vw;
    }
    &-btn {
      @media (max-width: 500px) {
        .posabsolute(5px, 5px);
      }
      @media (min-width: 501px) {
        display: none;
      }
    }
  }
  &__topline {
    background-color: rgb(65,65,65);
    width: 100%;
    padding: 0;
    margin: 0;
    height: 40px;
    margin-top: 0;
  }
  &__userpanel {
    position: relative;
    display: flex;
    margin: 0;
    padding: 0;
    margin-top: 0;
    height: 40px;
    justify-content: flex-end;
    &-list {
      display: flex;
      margin: 0;
      padding: 0;
      margin-top: 0;
      justify-content: flex-end;
      height: 40px;
      @media (max-width: 500px) {
        display: none;
      }
    }
    &-item {
      display: inline;
      margin: 0 10px;
      font-size: 16px;
      color: #ffffff;
      font-weight: 300;
      height: 40px;
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
  display: inline;
  @media (min-width: 501px) {
    display: none;
  }
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
    height: auto;
    box-shadow: 1px 1px 7px 7px rgba(10,10,10,0.5);
  }

}

</style>
