<template>
  <div>
    <span>
      物料名称: <el-input v-model="serialName" placeholder="请输入内容"></el-input>
    </span>
    型号: <el-input v-model="serialModel" placeholder="请输入内容"></el-input> 
    规格:<el-input v-model="serialSpec" placeholder="请输入内容"></el-input>
    <el-button type="primary" @click="search">搜索</el-button>
    <el-button type="info" @click="reset">重置</el-button>

      <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="编号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="warehouse"
      label="仓库"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serialId"
      label="物料编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serialName"
      label="物料名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serialModel"
      label="物料型号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="serialSpec"
      label="物料规格"
      width="120">
    </el-table-column>
     <el-table-column
      prop="serialUnit"
      label="物料单位"
      width="120">
    </el-table-column>
     <el-table-column
      prop="serialPrice"
      label="物料单价"
      width="120">
    </el-table-column>
     <el-table-column
      prop="inventoryAll"
      label="总库存"
      width="120">
    </el-table-column>
     <el-table-column
      prop="inventoryMax"
      label="库存上限"
      width="120">
    </el-table-column>
     <el-table-column
      prop="inventoryMin"
      label="库存下限"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { getInfo,searchInfo } from "@/api/monitor/warehouse";
export default {
  data() {
    return {
        serialName:'',  // 物料名称
        serialModel:'',  //物料型号
        serialSpec:'' ,//物料规格
        tableData:[]
    };
  },
  methods:{
      reset(){
          this.serialName = ""
          this.serialModel = ""
          this.serialSpec = ""
      },
      search(){
        searchInfo(this.serialName,this.serialModel,this.serialSpec).then((response)=>{
            console.log("接口请求正常")
        })
      }
  },
  created(){
      getInfo().then((response) =>{
         this.tableData = response
      })
  }
};
</script>

<style></style>
