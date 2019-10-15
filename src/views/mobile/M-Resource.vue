<template>
  <div class="m-resource">
    <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
    </van-row>
    <van-button type="default" @click="test">默认按钮</van-button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { list } from "@/api/mobile/m-resource";

export default Vue.extend({
  name: "m-resource",
  data() {
    return {};
  },
  methods: {
    test() {
      list({ id: 1 });
    }
  }
});
</script>