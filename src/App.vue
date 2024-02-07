<template>
  <main-nav style="position: relative; z-index: 2" />
  <router-view />
</template>

<script>
  import MainNav from "@/components/Navigation/MainNav.vue";
  export default {
    name: "App",
    components: { MainNav },
  };
</script>
