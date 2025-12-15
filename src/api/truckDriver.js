import request from '@/utils/request';
const baseUrl = "https://whnyjl.ceic.com/PC";

// 抢单列表
export const GetOrderGrabbingList = (data) =>
  request({
    url: `/api/DispatchPlan/GetOrderGrabbingList`,
    baseUrl,
    method: 'GET',
    data
  });
// POST 驾驶证识别
export const ImportDrivingLicense = (data) =>
  request({
    url: `/api/Users/ImportDrivingLicense`,
    baseUrl,
    method: 'POST',
    data
  });

// 行驶证识别
export const ImportVehicleLicense = (data) =>
  request({
    url: `/api/Users/ImportVehicleLicense`,
    baseUrl,
    method: 'POST',
    data
  });
// 身份证识别
export const ImportIdentityCard = (data) =>
  request({
    url: `/api/Users/ImportIdentityCard`,
    baseUrl,
    method: 'POST',
    data
  });
