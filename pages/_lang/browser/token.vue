<template>
  <div class="browser-token">
    <div class="tokenBox">
      <p style="font-size:16px;margin-bottom:12px;font-weight:bold;">令牌列表</p>
      <tokenList></tokenList>
      <div class="block" style="margin-top:15px;margin-bottom:30px;text-align:right;">
        <p class="demonstration" style="display:inline-block">共有1230条数据</p>
        <el-pagination layout="prev, pager, next" :total="100" style="display:inline-block">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import tokenList from '~/components/List.vue'
  export default {
    components: {

      tokenList
    }
  }
</script>
<style lang="scss" scoped>
  .browser-token {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    .tokenBox {
      width: 1200px;
      margin: 0 auto;
    }
  }
</style>