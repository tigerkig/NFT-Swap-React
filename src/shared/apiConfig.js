const apiConfig = {
  authenticate: { url: '/api/authenticate', method: 'post' },
  register: { url: '/api/register', method: 'post' },
  changePassword: { url: '/api/change-password', method: 'post' },
  //gift
  send_gift: { url: '/api/gift/send', method: 'post' },
  get_gift: { url: '/api/gift/get', method: 'post' },
  del_gift: { url: '/api/gift/del', method: 'post' },
  //withdraw
  get_w: { url: '/api/admin/withdraw/get', method: 'post' },
  confirm_w: { url: '/api/admin/withdraw/confirm', method: 'post' },
  reject_w: { url: '/api/admin/withdraw/reject', method: 'post' },
};

export default apiConfig;
