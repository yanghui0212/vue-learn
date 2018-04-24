<template>
  <div>
    <el-row :gutter="20" style="margin-bottom: 10px;">
      <el-col :span="4">
        <div class="data_list today_head"><span class="data_num head">当日数据：</span></div>
      </el-col>
      <el-col :span="4">
        <div class="data_list"><span class="data_num">{{wayCount}}</span> 新增用户</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {wayList} from "../dataApi";

  export default {
    name: "home",
    data() {
      return {
        wayCount: 0
      }
    },
    mounted() {
      this.initData();
    },
    methods: {
      initData() {
        let res = wayList;
        console.log(res);
      }
    }
  }
</script>

<style scoped>

</style>
