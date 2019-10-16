<template>
  <div class="upload">
    上传
    <button @click="upload">上传</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { insertComicList } from "@/api/pc/comic";

export default Vue.extend({
  name: "upload",
  data() {
    return {};
  },
  methods: {
    upload() {
      const _TIME = new Date().getTime();
      insertComicList({
        token:
          "2ab0ffacdc10ae4b69550b50c9bca1dba689625a:qMsJErPleUvh6yYHSUezw-tt6-8=:eyJkZWFkbGluZSI6MTU3MTIxNjI0MSwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNzAxNjAyIiwiYWlkIjoiMTYzODIxNyIsImZyb20iOiJmaWxlIn0=",
          deadline: _TIME,
          aid: _TIME
      });
    }
  }
});
</script>