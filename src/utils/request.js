// request.js

const baseUrl = "https://192.168.0.183:5008";
import md5 from "md5";

// 与 Web 端一致的签名参数（若需变更，请统一修改）
const apiKey = "sbkjfgfguotaikejiEIJIfgfgf"; // 秘钥1
const apiSecret = "2022sbkjguotaikejibDfgJINGsbkj"; // 秘钥2

export default function request(options = { method: "GET", data : {}, contentType: "application/json" }) {
  const data = {
    ...(options.data || {})
  };

  // 生成签名
  const timestamp = Date.now().toString();
  let dataparameter = "";
  if (data && Object.keys(data).length > 0) {
    try {
      dataparameter = JSON.stringify(data);
    } catch (e) {
      dataparameter = "";
    }
  }
  const md5Signature = `${dataparameter}${apiKey}${apiSecret}${timestamp}`;
  const signature = md5(md5Signature.toUpperCase());
  const token = uni.getStorageSync("token");
  const headers = {
    "Content-Type": options.contentType || "application/json",
    token: token,
    locale: "zh_CN",
    Authorization: token ? `Bearer ${token}` : "",
    timestamp,
    signature
  };

  return new Promise((resolve, reject) => {
    uni.request({
      url: (options.baseUrl || baseUrl) + options.url,
      data,
      header: headers,
      method: options.method.toUpperCase(),
      success: (res) => {
        const { statusCode, data } = res;
        // 未登录或登录过期
        if (statusCode === 501) {
          uni.showToast({
            title: data || "登录已过期，请重新登录",
            icon: "none",
            duration: 3000
          });
          // 跳转登录页
          uni.reLaunch({
            url: "/pages/login/index"
          });
          return;
        }

        // 业务错误 / HTTP 错误
        if (statusCode !== 200) {
          setTimeout(() => {
            uni.showToast({
              title: data || "网络请求错误",
              icon: "none",
              duration: 3000
            });
          }, 200);
        }

        resolve(res);
      },
      fail: (e) => {
        uni.showToast({
          title: typeof e === "string" ? `网络错误 ${e}` : `网络错误 ${JSON.stringify(e)}`,
          icon: "none"
        });
        reject(e);
      }
    });
  });
}
