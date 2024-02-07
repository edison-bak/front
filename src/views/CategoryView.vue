<template>
  <section class="flex h-screen justify-center pt-24">
    <card-table
      :title="[currentPressName] + ' 순위'"
      target="구독자 수"
      :request-url="
        'http://localhost:5173/api/press_api/category/' +
        [currentPressName] +
        '/' +
        [factor] +
        '?sort=subscriber_count&number=1000'
      "
      data_name="subscriber_count"
      class="flex w-6/12"
    >
    </card-table>
  </section>
</template>
<script>
  import CardTable from "@/components/Cards/CardTable.vue";

  export default {
    name: "CategoryView",
    components: {
      CardTable,
    },
    props: {
      categoryName: "",
      factor: {
        type: String,
        default: "press",
      },
    },

    computed: {
      currentPressName() {
        if (this.$route.params.name === "방송-통신사") {
          return "방송/통신사";
        } else if (this.$route.params.name === "인터넷-IT지") {
          return "인터넷/IT지";
        }
        return this.$route.params.name;
      },
    },
  };
</script>
