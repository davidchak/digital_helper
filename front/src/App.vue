<template>
  <div id="app" class="container-fluid">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="less">
#app {
  font-family: Exo2, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-size: 12px;
  font-family: "Exo2";
  font-weight: 400;
  letter-spacing: 0.8px;
}

html, body{
  margin: 0;
  padding: 0;
  width: 640px;
  height: 480px;
  overflow: hidden;
  background-color: rgb(248, 249, 250);
  font-family: "exo2";
  font-weight: 400;
}

.page {
  .page__header{
    font-size: 14px;
    letter-spacing: 0.8px;
  }

  .page__content{

  }

  .link{
    color: white;
    cursor: pointer;
    &:hover{
      list-style: none;
    }
  }

  .page__icon{
    width: 24px;
    height: 24px;
  }
}
</style>
