<template>
  <div
    class="relative mb-1 flex min-w-0 flex-col break-words rounded shadow-lg"
    :class="[color === 'light' ? 'bg-white' : 'bg-emerald-900 text-white']"
  >
    <div class="mb-0 rounded-t border-0 px-4 py-3">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full max-w-full flex-1 flex-grow px-4">
          <h3
            class="text-lg font-semibold"
            :class="[color === 'light' ? 'text-blueGray-700' : 'text-white']"
          >
            {{ title }}
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <table class="w-full border-collapse items-center bg-transparent">
        <thead>
          <tr>
            <th
              class="whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              :class="[
                color === 'light'
                  ? 'border-blueGray-100 bg-blueGray-50 text-blueGray-500'
                  : 'border-emerald-700 bg-emerald-800 text-emerald-300',
              ]"
            >
              언론사
            </th>

            <th
              class="whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              :class="[
                color === 'light'
                  ? 'border-blueGray-100 bg-blueGray-50 text-blueGray-500'
                  : 'border-emerald-700 bg-emerald-800 text-emerald-300',
              ]"
            >
              {{ target }}
            </th>
            <th
              class="whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase"
              :class="[
                color === 'light'
                  ? 'border-blueGray-100 bg-blueGray-50 text-blueGray-500'
                  : 'border-emerald-700 bg-emerald-800 text-emerald-300',
              ]"
            ></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="rankRow in rankRows"
            :key="rankRow.press_name"
            :rankRow="rankRow"
          >
            <a :href="'/#/press/info/?name=' + rankRow.press_name">
              <th
                class="flex items-center whitespace-nowrap border-l-0 border-r-0 border-t-0 p-3 px-6 text-left align-middle text-xs"
              >
                <img
                  :src="get_img_link(rankRow.press_name)"
                  class="h-12 w-12 rounded-full border bg-white"
                  alt="..."
                />

                <span
                  class="ml-3 font-bold"
                  :class="[
                    color === 'light' ? 'text-blueGray-600' : 'text-white',
                  ]"
                >
                  {{ rankRow.press_name }}
                </span>
              </th>
            </a>
            <td
              class="width whitespace-nowrap border-l-0 border-r-0 border-t-0 px-1 text-right align-middle text-xs"
            >
              <div class="items-center">
                <span class="mr-2">{{
                  rankRow[data_name] ? rankRow[data_name].toLocaleString() : "0"
                }}</span>
                <div class="relative w-full">
                  <div
                    class="flex h-2 overflow-hidden rounded bg-red-200 text-xs"
                  >
                    <div
                      :style="
                        'width: ' +
                        (rankRow[data_name] * 100) / max_value +
                        '%; transition: width 1s'
                      "
                      class="flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none"
                    ></div>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import img_path from "@/utils/press_img_link.json";

  export default {
    components: {},
    props: {
      title: "",
      target: "",
      requestUrl: "",
      data_name: "",
      color: {
        default: "light",
        validator: function (value) {
          // The value must match one of these strings
          return ["light", "dark"].indexOf(value) !== -1;
        },
      },
    },
    data() {
      return {
        rankRows: [],
        img_links: img_path,
        max_value: 0,
      };
    },
    watch: {
      // watchedData 속성을 감시합니다.
      requestUrl(newValue, oldValue) {
        // watchedData가 변경될 때마다 실행될 로직
        this.fetchData();
      },
    },
    async mounted() {
      const response = await axios.get(this.requestUrl);
      this.rankRows = response.data["results"];

      const countValues = this.rankRows.map((item) => item[this.data_name]);
      this.max_value = Math.max(...countValues);
    },
    methods: {
      getValue(obj, key) {
        return key in obj ? obj[key] : null;
      },
      get_img_link(press_name) {
        const press_info = this.getValue(this.img_links, press_name);
        if (press_info !== null) {
          const link = this.img_links[press_name]["img_link"];
          return link;
        } else {
          return "";
        }
      },
      async fetchData() {
        const response = await axios.get(this.requestUrl);
        this.rankRows = response.data["results"];

        const countValues = this.rankRows.map((item) => item[this.data_name]);
        this.max_value = Math.max(...countValues);
      },
    },
  };
</script>
