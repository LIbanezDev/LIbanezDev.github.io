import accessEnv from '../utils/accessEnv';


export const GLOBAL_VARS = {
  APP_URL: accessEnv('URL', 'http://localhost:3000')
}