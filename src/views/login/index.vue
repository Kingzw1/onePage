<script setup lang="ts">
import { ref, reactive } from "vue";
import { loginApi } from "@/api/login/index";
const formInfo = ref<any>({
  mobile_number: "",
  password: "",
});
const submitLogin = async () => {
  try {
    const res = await loginApi(formInfo.value);
    // console.log("6666666666", res);
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="container">
    <div class="form-container">
      <el-form ref="form" :model="formInfo">
        <el-form-item label="账号">
          <el-input
            v-model="formInfo.mobile_number"
            placeholder="请输入账号"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            v-model="formInfo.password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="submitLogin">登录</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    background-color: rgb(223, 238, 255);
    width: 600px;
    height: 400px;
  }
}
</style>
