<template>
  <div class="hello">
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item type="light" href="#">Home</b-nav-item>
        <b-nav-item-dropdown text="Installed CLI Plugins" right>
          <b-dropdown-item href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank">babel</b-dropdown-item>
          <b-dropdown-item href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank">router</b-dropdown-item>
          <b-dropdown-item href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank">eslint</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Essential Links">
          <b-dropdown-item href="https://vuejs.org" target="_blank">Core Docs</b-dropdown-item>
          <b-dropdown-item href="https://forum.vuejs.org" target="_blank">Forum</b-dropdown-item>
          <b-dropdown-item href="https://chat.vuejs.org" target="_blank">Community Chat</b-dropdown-item>
          <b-dropdown-item href="https://twitter.com/vuejs" target="_blank">Twitter</b-dropdown-item>
          <b-dropdown-item href="https://news.vuejs.org" target="_blank">News</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Ecosystem">
          <b-dropdown-item href="https://router.vuejs.org" target="_blank">vue-router</b-dropdown-item>
          <b-dropdown-item href="https://vuex.vuejs.org" target="_blank">vuex</b-dropdown-item>
          <b-dropdown-item href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank">vue-devtools</b-dropdown-item>
          <b-dropdown-item href="https://vue-loader.vuejs.org" target="_blank">vue-loader</b-dropdown-item>
          <b-dropdown-item href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
