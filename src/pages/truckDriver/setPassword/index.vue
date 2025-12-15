<template>
  <view class="container">
    <uni-nav-bar
      color="#ffffff"
      backgroundColor="#1e60ff"
      fixed
      statusBar
      left-icon="left"
      title="设置密码"
      @clickLeft="goBack"
    />
    <view class="content">
      <view class="form-item">
        <text class="label">原密码</text>
        <input
          class="input"
          :password="!showOld"
          placeholder="请输入原密码"
          v-model.trim="form.oldPwd"
        />
      </view>
      <view class="divider" />
      <view class="form-item">
        <text class="label">新密码</text>
        <input
          class="input"
          :password="!showNew"
          placeholder="请输入新密码"
          v-model.trim="form.newPwd"
        />
      </view>
      <view class="divider" />
      <view class="form-item">
        <text class="label">确认新密码</text>
        <input
          class="input"
          :password="!showConfirm"
          placeholder="请再次输入新密码"
          v-model.trim="form.confirmPwd"
        />
      </view>

      <view class="notice">
        <text class="danger">注意：</text>
        <text class="tip">密码不能包含用户名、中文、空格，长度为</text>
        <text class="strong">8-16</text>
        <text class="tip">个字符，且需包含</text>
        <text class="strong">数字、大写字母、小写字母、特殊符号</text>
        <text class="tip">中至少</text>
        <text class="strong">两种</text>
        <text class="tip">。新密码不得与原密码一致。</text>
      </view>

      <view class="btn-wrap">
        <view class="base_btn" @click="onSubmit">确认</view>
      </view>
    </view>
  </view>
</template>

<script>
import { ChangePassword } from "@/api";
export default {
  data() {
    return {
      form: { oldPwd: "", newPwd: "", confirmPwd: "" },
      showOld: false,
      showNew: false,
      showConfirm: false,
      username: "", // 可在进入页时赋值
    };
  },
  onLoad(query) {
    const usreInfo =  uni.getStorageSync('userInfo');
    if(usreInfo){
      let _userinfo = JSON.parse(usreInfo);
      this.username = _userinfo.username;
    }
  },
  methods: {
    goBack() {
      uni.navigateBack();
    },
    hasTwoKinds(str) {
      const kinds = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^\w\s]/];
      let count = 0;
      kinds.forEach((r) => {
        if (r.test(str)) count++;
      });
      return count >= 2;
    },
    validate(pwd) {
      if (/\s/.test(pwd)) return "密码不能包含空格";
      if (/[\u4e00-\u9fa5]/.test(pwd)) return "密码不能包含中文";
      if (pwd.length < 8 || pwd.length > 16) return "密码长度需为8-16位";
      if (this.username && pwd.includes(this.username))
        return "密码不能包含用户名";
      if (!this.hasTwoKinds(pwd))
        return "需包含数字/大小写字母/特殊符号中至少两种";
      return "";
    },
     async onSubmit() {
      if (!this.form.oldPwd)
        return uni.showToast({ title: "请输入原密码", icon: "none" });
      const err = this.validate(this.form.newPwd);
      if (err) return uni.showToast({ title: err, icon: "none" });
      if (this.form.newPwd === this.form.oldPwd)
        return uni.showToast({ title: "新密码不能与原密码一致", icon: "none" });
      if (this.form.confirmPwd !== this.form.newPwd)
        return uni.showToast({ title: "两次输入的密码不一致", icon: "none" });
      // TODO: 调用后端接口
      const res = await ChangePassword({
        userName: this.username,
        oldPassword: this.form.oldPwd,
        newPassword: this.form.newPwd,
      })
      if(res.statusCode === 200){
        uni.showToast({ title: "设置成功", icon: "success" });
        setTimeout(() => this.goBack(), 800);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  background: #f5f5f5;
}
.content {
  padding: 16px;
}
.form-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
}
.label {
  width: 160rpx;
  color: #000;
  font-size: 14px;
}
.input {
  flex: 1;
  background: transparent;
  padding: 8px 0;
  font-size: 14px;
}
.divider {
  height: 1px;
  background: #eaeaea;
}
.notice {
  margin: 18px 0;
  color: rgba(0, 0, 0, 0.75);
  font-size: 12px;
  line-height: 20px;
}
.danger {
  color: #e53935;
  font-weight: bold;
  margin-right: 6px;
}
.strong {
  font-weight: bold;
}
.btn-wrap {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
</style>
