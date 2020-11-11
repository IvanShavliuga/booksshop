<template>
  <aside class="aside">
    <h2 class="aside__header">Categories</h2>
    <div class="aside__collapse">
      <input id="aside__collapse-toggle" type="checkbox" />
      <label class="aside__collapse-btn" for="aside__collapse-toggle">
        <span></span>
      </label>
      <a class="aside__collapse-title">Categories</a>
      <nav class="aside__nav">
        <ul>
          <!--itemactive-->
          <li class="aside__nav-item"
            v-for="(c,k) in catlist" :key="k">
            <div class="aside__nav-hcat">
              <a class="aside__nav-link"
              :href="'/'+c"
              >
                {{c.name}}
              </a>
            </div>
          <ul class="aside__nav-list">
            <li class="aside__nav-cat"
              v-for="(c2,k2) in c.sublist"
              :key="k2"
            >
              <a class="aside__nav-link" :href="'/'+c2">
                {{c2}}
              </a>
            </li>
          </ul>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      catlist: [{
        name: "Fiction & Literature",
        sublist: [
          "Children",
          "Science",
          "Fantasy",
          "Mystery",
          "Romance",
          "Horror",
          "Poetry",
          "Literature",
          "Crime",
        ]
      }, {
        name: "Non - Fiction",
        sublist: [
          "Comic",
          "Cook",
          "Psychology",
          "Medical",
          "Art",
          "Photography",
          "Law",
          "History",
          "Business",
          "Computers",
        ]
      }, {
        name: "Other",
        sublist: [
          "Baby",
          "Sex",
          "Travel",
          "Science",
          "Sport`s",
        ]
      }]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/css/style.less';
.cat1  {
  font-weight: bold;
}
.aside {
  width: 20vw;
  margin: 0 15px;
  padding: 0;
  border: 1px solid @bordercolor;
  @media (max-width: 1060px) {
    position: relative;
    width: 1vw;
    border: none;
    margin: 0;
    margin-right: 30px;
    margin-top: 30px;
  }
  &__size {
    position: absolute;
    transform: rotateZ(90deg);
    left: -100px;
    top: 270px;
    font-size: 20px;
    color: #ff0;
    padding: 0 15px;
    background-color: #da45c6;
    width: 200px;
  }
  &__collapse {
    .burger();
    /*@media (max-width: 925px) {
      left: -25px;
    }
    @media (max-width: 910px) {
      left: -5px;
    }*/
    &-btn {
      @media (max-width:  670px) {
        left: 20px;
      }
      @media (max-width: 350px) {
        left: 0;
      }
    }
    &-btn > span::before {
      content: '';
      top: -4px;
      left: 10px;
      width: 15px;
      transform: rotate(25deg);
    }
    &-btn > span::after {
      content: '';
      top: 4px;
      left: 10px;
      width: 15px;
      transform: rotate(-25deg);
    }
    &-title {
      position: absolute;
      transform: rotateZ(90deg);
      left: -120px;
      top: 100px;
      font-size: 25px;
      line-height: 42px;
      text-transform: uppercase;
      color: #434343;
      @media (max-width: 925px) {
        left: -120px;
      }
      @media (max-width: 670px) {
        left: -110px;
      }
      @media (max-width: 350px) {
        left: -110px;
        top: 80px;
        font-size: 20px;
      }
    }
    &-burger {
      position: absolute;
      left: -5px;
      top: -40px;
    }
  }
  &__header {
    padding: 0 20px;
    margin-bottom: 0;
    font-size: 24px;
    line-height: 30px;
    color: #6b6969;
    font-weight: 300;

    @media (max-width: 1060px) {
      display: none;
    }
  }
  &__nav {
    margin-top: 0;
    @media (max-width: 1060px) {
      display: none;
    }
    &-list {
      padding: 0 20px;
      margin: 0;
    }
    &-cat {
      border-bottom: 1px solid @bordercolor;
      font-size: 15px;
      line-height: 27px;
      color: #555454;
      font-weight: normal;
      margin-left: -20px;
      .hover();
    }
    &-hcat {
      .hover();
    }
    &-item {
      padding: 5px 20px;
      font-size: 17px;
      line-height: 32px;
      color: #525252;
      font-weight: bold;
      &:first-child {
        text-transform: uppercase;
      }
    }
    &-link {
      font-size: 15px;
      line-height: 26px;
      color: #5b5b5b;
      margin: 0;
      padding: 0 5px;
      text-decoration: none;
    }
  }
}
#aside__collapse-toggle {
  opacity: 0;
}
#aside__collapse-toggle:checked ~ .aside__collapse-btn > span {
  transform: rotate(45deg);
}
#aside__collapse-toggle:checked ~ .aside__collapse-btn > span::before {
  top: 0;
  left: 0;
  width: 100%;
  transform: rotate(0);
}
#aside__collapse-toggle:checked ~ .aside__collapse-btn > span::after {
  top: 0;
  left: 0;
  width: 100%;
  transform: rotate(90deg);
}
#aside__collapse-toggle:checked ~ .aside__nav {
  position: sticky;
  overflow-y: scroll;
  z-index: 60;
  display: block;
  margin-top: 15px;
  width: 25vw;
  margin-left: -15px;
  box-shadow: 1px 1px 7px 7px rgba(10,10,10,0.5);
  /*width: 50%;
  left: 100px;
  top: 150px;*/
  background-color: white;
  .aside__nav-item {
    display: block;
  }
  .aside__nav-link {
    display: block;
  }
  @media (max-width:  915px) {
    margin-left: 12px;
  }
  @media (max-width:  915px) {
    width: 250px;
  }
  @media (max-width:  670px) {
    margin-left: 22px;
  }
  /*@media (min-width: 1061px) {
    position: static;
    display: flex;
    justify-content: center;
    margin: 0;
    height: 42px;
    margin-top: -15px;
    flex-direction: row;
    box-shadow: none;
  }
  .menu__list-item {
    @media (max-width: 1260px) {
      padding: 10px 5px;
    }
  }*/
}
#aside__collapse-toggle:checked ~ .aside__collapse-title {
  transform: rotateZ(0);
  top: 2px;
  left: -12px;
  z-index: 60;
  background-color: white;
}
</style>
