<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #09293c;
  margin-top: 60px;
  border-radius: 50px;
  height: 100vh;
  background: #94a9b4;
}
body {
  background: #94a9b4;
}
</style>
