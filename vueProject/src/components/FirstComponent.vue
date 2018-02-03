<template>
  <div id="first-component">
    <span v-html="html"></span>
    <el-container style="height: 800px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">
                <router-link to="/first">Go to first component!</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link to="/second">Go to second component!</router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: center; font-size: 12px;padding: 20px;">
          <el-form :inline="true" :model="formData" class="demo-form-inline">
            <el-form-item label="姓名">
              <el-input v-model="formData.name" placeholder="姓名"></el-input>
            </el-form-item>
            <el-form-item v-model="formData.zip" label="邮编">
              <el-input placeholder="邮编"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="showTableData">查询</el-button>
            </el-form-item>
          </el-form>
        </el-header>
        <el-main>
          <el-table :data="getTableData3" style="width: 60%" height="250">
            <el-table-column fixed prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
            <el-table-column prop="city" label="市区" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import fecha from 'fecha';

  export default {
    name: 'firstComponent',
    data() {
      return {
        html: '<h2>h2标签！</h2>',
        author: 'yangqianghui@hotmail.com',
        msg: 'now is ' + fecha.format(new Date(), 'YYYY-MM-dd HH:mm:ss.sss'),
        date: new Date(),
        flag: true,
        formData: {
          name: '',
          zip: ''
        },
        tableData3: [{
          date: fecha.format(new Date(), 'YYYY-MM-dd HH:mm:ss.sss'),
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods: {
      showTableData() {
        console.log(this.tableData3);
        this.tableData3.push({
          date: fecha.format(new Date(), 'YYYY-MM-dd HH:mm:ss.sss'),
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        });
      }
    },
    created() {
      let vm = this;
      setTimeout(function () {
        vm.tableData3.push({
          date: fecha.format(new Date(), 'YYYY-MM-dd HH:mm:ss.sss'),
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        });
      }, 10000)
    },
    computed: {
      getTableData3: function () {
        return this.tableData3;
      }
    }
  }
</script>
