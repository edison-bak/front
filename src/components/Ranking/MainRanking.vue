<template>
  <section class="flex h-1/3 space-x-5 pb-10 pt-10">
    <card-table
      title="구독자 상위 Top5"
      target="구독자 수"
      request-url="http://localhost:5173/api/press_api/press?sort=subscriber_count&number=5"
      data_name="subscriber_count"
      class="flex-grow px-4"
    />
    <card-table
      title="응원수 상위 Top5"
      target="응원수"
      request-url="http://localhost:5173/api/press_api/press?sort=cheer_count&number=5"
      data_name="cheer_count"
      class="flex-grow px-4"
    />
    <card-table
      title="남자 구독 Top5"
      target="구독자 수"
      request-url="http://localhost:5173/api/press_api/press?sort=male_subscriber&number=5"
      data_name="male_subscriber"
      class="flex-grow px-4"
    />
    <card-table
      title="여자 구독 Top5"
      target="구독자 수"
      request-url="http://localhost:5173/api/press_api/press?sort=female_subscriber&number=5"
      data_name="female_subscriber"
      class="flex-grow px-4"
    />
  </section>
  <section class="flex h-1/3 space-x-5 pb-10 pt-10">
    <card-table
      title="10대 상위 Top5"
      target="구독자 수"
      request-url="http://localhost:5173/api/press_api/press?sort=teen_subscriber&number=5"
      data_name="teen_subscriber"
      class="flex-grow px-4"
    />
    <card-table
      title="20대 상위 Top5"
      target="구독자 수"
      request-url="http://localhost:5173/api/press_api/press?sort=twenty_subscriber&number=5"
      data_name="twenty_subscriber"
      class="flex-grow px-4"
    />
    <card-table
      title="30대 상위 Top5"
      target="구독자 수"
      request-url="http://localhost:5173/api/press_api/press?sort=thirty_subscriber&number=5"
      data_name="thirty_subscriber"
      class="flex-grow px-4"
    />
  </section>
  <section class="flex h-1/3 space-x-5 pb-10 pt-10">
    <card-table
      title="40대 상위 Top5"
      target="구독자 수"
      request-url="http://localhost:5173/api/press_api/press?sort=forty_subscriber&number=5"
      data_name="forty_subscriber"
      class="flex-grow px-4"
    />
    <card-table
      title="50대 상위 Top5"
      target="구독자 수"
      request-url="http://localhost:5173/api/press_api/press?sort=fifty_subscriber&number=5"
      data_name="fifty_subscriber"
      class="flex-grow px-4"
    />
    <card-table
      title="60대 이상 상위 Top5"
      target="구독자 수"
      request-url="http://localhost:5173/api/press_api/press?sort=sixty_subscriber&number=5"
      data_name="sixty_subscriber"
      class="flex-grow px-4"
    />
  </section>
</template>
<script>
  import CardTable from "@/components/Cards/CardTable.vue";

  export default {
    name: "MainRanking",
    components: {
      CardTable,
    },
    data() {
      return {
        press_rank_by_subscriber: [],
      };
    },
  };
</script>
