<template>
  <div>
    <the-hero class="pl-10" />
    <div class="text-l relative pl-10 font-extralight"></div>
    <main-ranking class="pl-10 pr-10" style="position: relative; z-index: 1" />
  </div>
</template>

<script>
  import TheHero from "@/components/PressSearch/TheHero.vue";
  import MainRanking from "@/components/Ranking/MainRanking.vue";
  export default {
    name: "HomeView",
    components: { TheHero, MainRanking: MainRanking },
  };
</script>
