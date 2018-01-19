<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import store from './store'
export default {
  name: 'App',
  store: store
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
@import 'assets/css/main.css';
@import 'vue-form-generator/dist/vfg-core.css';
$fa-font-path: "~font-awesome/fonts";
@import '../node_modules/font-awesome/scss/font-awesome.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import 'bootstrap-vue/dist/bootstrap-vue.css';
</style>
