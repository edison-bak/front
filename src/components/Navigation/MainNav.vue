<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center text-xl"
          >{{ projectName }}</router-link
        >
        <nav class="ml-24 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="ml-9 h-full first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="flex h-full items-center py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <action-button text="2023.11.13 일 기준" type="secondary" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import ActionButton from "@/components/Shared/ActionButton.vue";

  export default {
    name: "MainNav",
    components: { ActionButton: ActionButton },
    data() {
      return {
        projectName: "PressLeaderBoard",
        menuItems: [
          { text: "종합지", url: "/category/종합지" },
          { text: "방송/통신사", url: "/category/방송-통신사" },
          { text: "경제지", url: "/category/경제지" },
          { text: "인터넷/IT지", url: "/category/인터넷-IT지" },
          { text: "매거진", url: "/category/매거진" },
          { text: "전문지", url: "/category/전문지" },
          { text: "지역지", url: "/category/지역지" },
        ],
        isLoggedIn: false,
      };
    },
    computed: {
      headerHeightClass() {
        return {
          "h-16": !this.isLoggedIn,
          "h-32": this.isLoggedIn,
        };
      },
    },
  };
</script>
