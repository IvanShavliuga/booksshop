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
              <a class="userstatus__userpanel-link" href="#">Sign {{(user.auth)?'in':'out'}}</a></li>
            <li class="userstatus__userpanel-item">
              <a class="userstatus__userpanel-link" href="#">{{user.name}}</a></li>
            <li class="userstatus__userpanel-item">
              <a class="userstatus__userpanel-link" href="#">Order status
                <span class="userstatus__userpanel-counter">({{user.purchase.length}})
                </span>
              </a>
            </li>
            <li class="userstatus__userpanel-item">
              <a class="userstatus__userpanel-link" href="#">Help</a></li>
              <li class="userstatus__userpanel-item userstatus__userpanel-devlogo">
                <router-link to="/about" class="userstatus__userpanel-link" href="#">
                  <ib class="userstatus__collapse-icon"
                    icon-name="developer"
                    width="32"
                    height="20"
                    icon-color="#fff">
                    <devlogo/>
                  </ib>
                </router-link>
              </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ib from './icons/IconBase.vue'
import user from './icons/IconUser.vue'
import devlogo from './icons/iv2.vue'

export default {
  components: {
    ib,
    user,
    devlogo
  },
  data () {
    return {
      user: {}
    }
  },
  created () {
    this.user = this.$store.getters.user
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
    padding: 0;
    margin: 0;
    height: 40px;
    margin-top: 0;
  }
  &__userpanel {
    position: relative;
    display: flex;
    margin: 0 auto;
    padding: 0;
    margin-top: 0;
    //width: 90vw;
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
      display: block;
      margin: 0 10px;
      font-size: @fontsmallsize;
      color: #ffffff;
      font-weight: 300;
      padding-top: 5px;
      height: 35px;
      text-align: center;
    }
    &-counter {
      color: #eec476;
      font-size: @fontsmallsize;
      font-weight: bold;
      letter-spacing: 2px;
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
    margin-top: 40px;
    height: auto;
    box-shadow: 1px 1px 7px 7px rgba(10,10,10,0.5);
  }

}

</style>
