// 路由配置
import config from './config.json';
// 路由规则
import rules from './rules';

// 路由配置出口
export default Object.assign(config, {
    rules: rules
});