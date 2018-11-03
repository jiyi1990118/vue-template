
// API接口字典
import map from './map/index';

import main_dev from './main_development';
import main_pro from './main_production';

// service中接口配置
const apiConf = {
  map
};

const envConf = process.env.NODE_ENV === 'development' ? main_dev : main_pro;

// 把对应环境配置写入到apiConf中
Object.keys(envConf).forEach(function (key) {
  apiConf[key] = envConf[key];
});


export default apiConf;
