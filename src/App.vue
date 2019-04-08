<template>
  <div id="app">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/#/Input">Input</b-nav-item>
          <b-nav-item href="/#/Output">Output</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import { store } from './store/store'
export default {
  name: 'app',
  components: {
  }
}
</script>

<style>

</style>
