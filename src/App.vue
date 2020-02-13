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
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
#app {
  font-family: "Montserrat", sans-serif;
  letter-spacing: -0.2px;
  font-size: 16px;
  text-align: center;
  color: #09293c;
  color: #babecc;
  margin-top: 60px;
  border-radius: 50px;
  min-height: 100vh;
  background-color: #ebecf0;
  font-weight: 400;
}
body {
  background-color: #ebecf0;
  font-family: "Montserrat", sans-serif;
}
* {
  font-weight: 400;
}
</style>
