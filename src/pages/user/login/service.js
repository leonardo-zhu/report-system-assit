import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  return request('/api/user/login', {
    method: 'POST',
    requestType: 'form',
    data: params,
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
