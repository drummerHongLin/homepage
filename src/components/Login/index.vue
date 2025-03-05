// 用于验证登录后
<template>
    <div class="login-dialog">
      <el-dialog v-model="$baseStore.loginShow" title="用户登录" width="25%" draggable @close="close(form)">
        <div class="form-wrapper">
          <el-form  ref="form" :model="{userName:username,password:password}" >
            <el-form-item prop="username">
              <el-input
                  placeholder="请你输入用户名"
                  :prefix-icon="User"
                  v-model="username"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                  placeholder="请输入密码"
                  :prefix-icon="Lock"
                  v-model="password"
              >
              </el-input>
            </el-form-item>
          </el-form>
          <el-button
              style="width: 100%"
              type="primary"
              size="default"
              @click="login"
              :disabled="username.length==0||password.length==0"
          >用户登录</el-button
          >
        </div>
      </el-dialog>
    </div>
</template>

<script setup lang="ts">
import {useBaseStore} from '@/store/index.ts';
import {FormInstance} from "element-plus";
import { User, Lock } from "@element-plus/icons-vue";
import {ref} from "vue";
import {loginData} from "@/api/user/type.ts";
const $baseStore = useBaseStore();
let username = ref<string>("")
let password = ref<string>("")
let form = ref<FormInstance>();

// 关闭窗口清除填入信息
const close = (loginForm: FormInstance| undefined)=>{
  username.value =''
  password.value = ''
  loginForm.resetFields();
}
// 登陆操作
const login = ()=>{
  let data:loginData = {
    userName:username.value,
    password:password.value
  }
  $baseStore.login(data);
}

</script>

<style scoped>

</style>
