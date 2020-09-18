<template>
  <aside class="aside">
    <nav class="aside__nav">
      <ul>
        <li class="aside__nav-item">All</li>
        <li class="aside__nav-item">Fiction & Literature</li>
        <ul>
          <li class="aside__nav-item">Children</li>
          <li class="aside__nav-item">Science</li>
          <li class="aside__nav-item">Fantasy</li>
          <li class="aside__nav-item">Mystery</li>
          <li class="aside__nav-item">Romance</li>
          <li class="aside__nav-item">Horror</li>
          <li class="aside__nav-item">Poetry</li>
          <li class="aside__nav-item">Literature</li>
          <li class="aside__nav-item">Crime</li>
        </ul>
        <li class="aside__nav-item">Non - Fiction</li>
        <ul>
          <li class="aside__nav-item">Comic</li>
          <li class="aside__nav-item">Cook</li>
          <li class="aside__nav-item">Psychology</li>
          <li class="aside__nav-item">Medical</li>
          <li class="aside__nav-item">Art</li>
          <li class="aside__nav-item">Photography</li>
          <li class="aside__nav-item">Law</li>
          <li class="aside__nav-item">History</li>
          <li class="aside__nav-item">Business</li>
          <li class="aside__nav-item">Computers</li>
        </ul>
        <li class="aside__nav-item">Other</li>
        <ul>
          <li class="aside__nav-item">Baby</li>
          <li class="aside__nav-item">Sex</li>
          <li class="aside__nav-item">Travel</li>
          <li class="aside__nav-item">Science</li>
          <li class="aside__nav-item">Sport`s</li>
        </ul>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Hello'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../assets/css/style.less';
.cat1  {
  font-weight: bold;
}
.aside {
  &__nav {
    &-item {
      border-bottom:1px solid #dddddd;
      padding-top:5px;
      padding-bottom: 5px;
      padding-left: 10px;
      .hover();
    }
  }
}
</style>
