<template>
  <div class="upload">
    上传
    <button @click="upload">上传</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { qiniuToken } from "@/api/pc/comic";

export default Vue.extend({
  name: "upload",
  data() {
    return {};
  },
  methods: {
    upload() {
      const _TIME = new Date().getTime();
      qiniuToken((res: any) => {
          console.log(res)
      });
    }
  }
});
</script>