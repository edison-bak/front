<template>
  <div class="flex w-full items-center justify-center px-20 py-20">
    <card-bar-chart :press-name="currentPressName" />
  </div>
</template>

<script>
  import CardBarChart from "@/components/Cards/CardBarChart.vue";
  export default {
    name: "PressView",
    components: {
      CardBarChart,
    },
    data() {
      return {
        pressName: "a",
        ageData: [],
      };
    },

    computed: {
      currentPressName() {
        return this.$route.query.name;
      },
    },
    async mounted() {
      this.pressName = this.$route.query.name;
    },
    methods: {
      makePressUrl() {
        this.pressName = this.$route.query.name;

        return this.pressName;
      },
    },
  };
</script>
