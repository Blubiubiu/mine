<template>
  <div class="begin-wrapper">
    <div style="text-align: center;">
      <div>Every choice you make will change the world</div>
      <div>你的每个选择都将改变世界</div>

      <div class="enter animated" @click="$router.push('/one_part')">Click to start</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.begin-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  div {
    margin-bottom: 20px;
  }
}

</style>


