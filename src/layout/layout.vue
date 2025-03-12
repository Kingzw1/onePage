<script setup lang="ts">
import { ref, reactive } from "vue";
</script>

<template>
  <div class="common-layout">
    <el-container class="layoutn">
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main><router-view></router-view></el-main>
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
  }
}
</style>
