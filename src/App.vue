<template>
  <div id="app">
    <navbar></navbar>
    <main class="py-4">
      <router-view></router-view>
    </main>
  </div>
</template>
<style>
@import "https://unpkg.com/primitive-ui/dist/css/main.css";
@import "./assets/app.css";
</style>
<script>
import navbar from "./components/Navbar";

export default {
  components: {
    navbar
  }
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
