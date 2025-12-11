import request from '@/utils/request';
// 登录
export const login = (data) =>
  request({
    url: `/api/Users/Authenticate`,
    method: 'POST',
    data
  });
export const sendCode = (data) =>
  request({
    url: `/api/Users/sendCode`,
    method: 'POST',
    data
  });
// 注册
export const AppRegister = (data) =>
  request({
    url: `/api/Users/AppRegister`,
    method: 'POST',
    data
  });
export const AppRegisterForCode = (data) =>
  request({
    url: `/api/Users/AppRegisterForCode`,
    method: 'POST',
    data
  });
// 根据验证码修改密码
export const ChangePasswordForCode = (data) =>
  request({
    url: `/api/Users/ChangePasswordForCode`,
    method: 'POST',
    data
  });
// 根据验证码修改密码
export const GetDriverMsg = (data) =>
  request({
    url: `/api/Users/GetDriverMsg`,
    method: 'GET',
    data
  });