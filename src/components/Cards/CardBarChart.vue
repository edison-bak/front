<template>
  <div
    class="relative mb-6 flex w-full min-w-0 flex-col break-words rounded bg-white shadow-lg"
  >
    <div class="mb-0 rounded-t bg-transparent px-4 py-3">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-1 flex-grow">
          <h6 class="mb-1 text-xs font-semibold uppercase text-blueGray-400">
            {{ pressName }}
          </h6>
          <h2 class="text-xl font-semibold text-blueGray-700">
            연령별 구독자 수
          </h2>
        </div>
      </div>
    </div>
    <div class="flex-auto p-4">
      <div class="h-350-px relative">
        <canvas id="bar-chart"></canvas>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Chart from "chart.js/auto";
  export default {
    name: "CardBarChart",
    props: ["pressName"],
    data() {
      return {
        ageData: [],
        chartData: {
          labels: ["10대", "20대", "30대", "40대", "50대", "60대 이상"],
          datasets: [
            {
              data: [],
            },
          ],
        },
      };
    },
    async mounted() {
      // Django 에 데이터 요청
      const requestUrl =
        "http://localhost:5173/api/press_api/press/" + this.pressName + "/age/";

      const response = await axios.get(requestUrl);
      const rawAgeData = response.data.slice(1);
      const ageLabel = ["10대", "20대", "30대", "40대", "50대", "60대"];
      let ageData = {};
      rawAgeData.forEach(function (obj) {
        ageData[obj.age_group] = obj.total_subscribers;
      });

      this.ageData = ageLabel.map(function (obj) {
        return ageData[obj];
      });
      this.chartData.datasets[0].data = this.ageData;

      const ctx = document.getElementById("bar-chart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: this.chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                color: "rgb(255, 99, 132)",
              },
            },
          },
        },
      });
    },
  };
</script>
