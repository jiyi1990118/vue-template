// 商品图片处理
export default {
  name: 'normalizeImg',
  fn: function (src) {
    if (src) {
      // 主要作兼容性路径处理避免 后面这种多重host 错误路径 "http://images.lovego.com/http://img30.360buyimg.com/popWaterMark/jfs/t17533/289/892668385/252704/4efea209/5aacb81fNc8bc9d40.jpg"
      src = src.replace(/^(\w+:)?\/\/images.lovego.com\//, '');
      if (src.match(/^(\w+:)?\/\/(\w[\w.]*(:\d+)?)/)) {
        return src.replace(/^(\w+:)?\/\//, location.protocol + '//');
      }
      return '//images.lovego.com/' + String(src).replace(/(https:|http:)?\/\/images\.lovego\.com\//, '')
    } else {
      return '//images.lovego.com/'
    }
  }
}
