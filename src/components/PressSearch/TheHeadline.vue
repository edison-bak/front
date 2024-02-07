<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      언론영향력 <br />
      <span :class="actionClasses">{{ target }}</span> 로
      <br />
      말하다
    </h1>
    <h2 class="text-3xl font-light">대한민국 언론사 순위 파헤치기</h2>
  </section>
</template>

<script>
  import nextElementInList from "@/utils/nextElementInList";

  export default {
    name: "TheHeadline",
    data() {
      return {
        target: "구독자",
        interval: null,
      };
    },
    computed: {
      actionClasses() {
        return {
          [this.target]: true,
        };
      },
    },
    created() {
      this.changeTitle();
    },
    beforeUnmount() {
      clearInterval(this.interval);
    },
    methods: {
      changeTitle() {
        this.interval = setInterval(() => {
          const targets = [
            "숫자",
            "그래프",
            "구독자",
            "응원수",
            "성별",
            "나이별",
          ];
          this.target = nextElementInList(targets, this.target);
        }, 3000);
      },
    },
  };
</script>

<style scoped>
  .숫자 {
    color: #3382e9;
  }

  .그래프 {
    color: rgb(206, 41, 206);
  }
  .구독자 {
    color: #1a73e8;
  }

  .응원수 {
    color: #34a853;
  }

  .성별 {
    color: #f9ab00;
  }

  .나이별 {
    color: #d93025;
  }
</style>
