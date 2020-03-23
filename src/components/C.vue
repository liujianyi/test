<template>
    <div>
        <el-row class="tac" style="height: 100%;">
            <el-col :span="4"style="min-height: 100%;background-color: #324057;">
              <el-menu default-active="1" router  background-color="#545c64"  text-color="#fff" active-text-color="#ffd04b">
               
                	<el-menu-item index="C"><i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-document"></i>数据管理</template>
                        <el-menu-item index="A">我是A</el-menu-item>
                        <el-menu-item index="D">我是D</el-menu-item>
                  
                   </el-submenu>
              </el-menu>
            </el-col>
            <el-col :span="20">
                <router-view></router-view>
            </el-col>
          </el-row>
     
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      goTO(path){
          this.$router.push(path)
      }
    }
    }
</script>