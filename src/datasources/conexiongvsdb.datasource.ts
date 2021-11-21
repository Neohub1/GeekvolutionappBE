import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conexiongvsdb',
  connector: 'mongodb',
  url: 'mongodb+srv://lesprogrammeurs:Geekvs2021@clustergeekvolutionshop.hr1wp.mongodb.net/GeekvolutionShopDb?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConexiongvsdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'conexiongvsdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conexiongvsdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
