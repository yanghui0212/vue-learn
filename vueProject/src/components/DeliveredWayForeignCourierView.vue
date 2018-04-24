<template>
  <div class="box">
    <div class="left">
      <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
        <el-button>{{obj.deliveredWay}}</el-button>
      </el-tooltip>
    </div>

    <div class="right">
      <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
        <el-button>{{obj.foreignCourier}}</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
  export default {
    name: "deliveredWayForeignCourierView",
    data() {
      return {
        obj: {
          deliveredWay: '',
          foreignCourier: ''
        }
      }
    },
    created() {
      console.log(this.$route.params);
      let deliveredWay = this.$route.params.deliveredWay;
      let foreignCourier = this.$route.params.foreignCourier;
      this.obj.deliveredWay = deliveredWay;
      this.obj.foreignCourier = foreignCourier;
    },
  }
</script>

<style>
  .box {
    width: 400px;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .item {
    margin: 4px;
  }

</style>
