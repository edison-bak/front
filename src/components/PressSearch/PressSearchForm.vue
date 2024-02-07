<template>
  <form
    class="flex h-12 w-full items-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="searchForPress"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pl-3">
        <text-input placeholder="언론사" v-model="press_name" />
      </div>
    </div>

    <action-button
      text="검색"
      type="secondary"
      class="rounded-r-3xl"
    ></action-button>
  </form>
</template>

<script>
  import ActionButton from "@/components/Shared/ActionButton.vue";
  import TextInput from "@/components/Shared/TextInput.vue";

  export default {
    name: "PressSearchForm",
    components: { ActionButton, TextInput },
    data() {
      return { press_name: "" };
    },
    methods: {
      searchForPress() {
        this.$router.push({
          name: "PressInfo",
          query: {
            name: this.press_name,
          },
        });
      },
    },
  };
</script>
