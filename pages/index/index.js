Page({
  data: {
    type: 0,
    seat: 0,
    start: true,
    password: '',
    disable: false
  },
  onFoucs() {
    this.setData({
      start: true
    })
  },
  setPassword(e) {
    const val = e.detail.value;
    this.setData({
      password: val
    })
  },
  setFalse() {
    this.setData({
      start: false
    })
  },
  submit() {
    my.alert({
      title: '输入密码',
      content: this.data.password
    });
  }
});
