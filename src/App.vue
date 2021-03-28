<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <hr />

  <router-link to="/">Home</router-link> |
  <router-link :to="{ name: 'About' }">About</router-link> |
  <router-link to="/user/greg">Greg</router-link> |
  <router-link to="/user/bob">Bob</router-link>
  <router-view />

  <hr />

  <el-button type="primary">Primary</el-button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
