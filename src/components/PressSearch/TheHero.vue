<template>
  <main>
    <section class="pb-15 flex flex-col pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <the-headline />

          <div class="grid grid-cols-2">
            <div class="col-span-1 col-start-1">
              <press-search-form />
            </div>
          </div>
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img :src="logo3" class="object-contain" />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
  import TheHeadline from "@/components/PressSearch/TheHeadline.vue";
  import PressSearchForm from "@/components/PressSearch/PressSearchForm.vue";

  import logo3 from "@/assets/img/logo3.png";

  export default {
    name: "TheHero",
    components: {
      TheHeadline,
      PressSearchForm,
    },
    data() {
      return {
        logo3,
      };
    },
  };
</script>
