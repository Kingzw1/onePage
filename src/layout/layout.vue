<script setup lang="ts">
import { ref, reactive } from "vue";
</script>

<template>
  <div class="common-layout">
    <el-container class="layoutn">
      <el-header class="header">Header</el-header>
      <el-container class="container">
        <el-aside class="aside" width="200px">Aside</el-aside>
        <el-container>
          <el-main class="main"><router-view></router-view></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.common-layout {
  .layoutn {
    width: 100%;
    height: 100%;
    .header {
      background-color: aquamarine;
    }
    .container {
      .aside {
        background-color: antiquewhite;
      }
    }
    .main {
      background-color: beige;
    }
  }
}
</style>
