/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1616739640195_2944';

  // add your middleware config here
  config.middleware = [];

  // config/config.${env}.js
config.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: '43.128.12.129',
    // 端口号
    port: '3306',
    // 用户名
    user: 'egg-sql',
    // 密码
    password: 'FRzahT3jneAfcPpH',
    // 数据库名
    database: 'egg-sql',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
