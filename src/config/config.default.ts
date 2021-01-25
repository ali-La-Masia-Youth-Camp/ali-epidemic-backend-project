import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1611564957366_7818';

  // add your config here
  config.middleware = [];

  // enable cors
  config.cors = { 
    origin: 'http://localhost:8080', 
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    credentials: true
  }

  config.security = {
    csrf:{ 
      enable: false
    }
  }

  return config;
};
