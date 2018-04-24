<template>
  <div id="first-component">
    <!--<router-view></router-view>-->
    <el-container style="height: 800px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu style="min-height: 100%;" theme="dark" router>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <el-menu-item index="first">页面1</el-menu-item>
              <el-menu-item index="second">页面2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
        <el-col :span="20" style="height: 100%;overflow: auto;">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-col>
      </el-aside>
      <el-container>
        <el-header style="text-align: center; font-size: 12px;padding: 20px;">
          <el-form :inline="true" :model="formData" class="demo-form-inline">
            <el-form-item label="发货方式">
              <el-input v-model="formData.deliveryWay" placeholder="发货方式"></el-input>
            </el-form-item>
            <el-form-item label="渠道代码">
              <el-input v-model="formData.foreignCourier" placeholder="渠道代码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="queryDeliveredWayForeignCourier">查询</el-button>
            </el-form-item>
          </el-form>
        </el-header>
        <el-main>
          <el-table :data="deliveredWayForeignCourier.data" style="width: 80%;height: 60%" border>
            <el-table-column fixed="left" type="index" label="序号" tabindex="">
            </el-table-column>
            <el-table-column fixed prop="deliveryWay" label="发货方式">
            </el-table-column>
            <el-table-column fixed prop="foreignCourier" label="渠道代码">
            </el-table-column>
            <el-table-column fixed label="操作">
              <template slot-scope="scope">
                <el-button @click="removeData(scope.$index,deliveredWayForeignCourier.data)" type="text" size="small">
                  删除
                </el-button>
                <el-button type="text" size="small">
                  <el-button @click="viewShow(scope.$index,deliveredWayForeignCourier.data)" type="text" size="small">
                    查看
                  </el-button>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[2, 4, 6, 8]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="totalLength">
          </el-pagination>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'firstComponent',
    data() {
      return {
        dataUrl: 'http://qa.uexpress.tuochetong.com/ws-uexpress/u_express/delivered_way_foreign_courier',
        formData: {
          deliveryWay: '',
          foreignCourier: ''
        },
        totalLength: 0,
        pageSize: 2,
        pageNumber1: 1,
        deliveredWayForeignCourier: {
          data: []
        }
      }
    },
    methods: {
      queryDeliveredWayForeignCourier() {
        this.showData();
      },
      removeData(index, arr) {
        console.log(index);
        console.log(arr);
        arr.splice(index, 1);

      },
      viewShow(index, arr) {
        this.$router.push({
          name: 'view-component',
          params: {deliveredWay: arr[index].deliveryWay, foreignCourier: arr[index].foreignCourier}
        })
      }
      ,
      showData() {
        let vm = this;
        axios.get(vm.dataUrl).then(function (res) {
          vm.deliveredWayForeignCourier = res.data;
          var list = res.data.data.filter(function (ele, index, array) {
            let flag = true;
            if (vm.formData.deliveryWay) {
              if (ele.deliveryWay.indexOf(vm.formData.deliveryWay) > -1) {
                flag = true;
              } else {
                flag = false;
              }
            }
            if (vm.formData.foreignCourier) {
              if (ele.foreignCourier.indexOf(vm.formData.foreignCourier) > -1) {
                flag = true;
              } else {
                flag = false;
              }
            }
            return flag;
          });
          vm.totalLength = list.length;
          vm.deliveredWayForeignCourier.data = list;
        });
      },
      handleSizeChange(val) {
        this.pageSize = val;
      },
      handleCurrentChange(val) {
        console.log(val)

      }
    },
    created() {
      this.showData();
    },
    computed: {}
  }
</script>
