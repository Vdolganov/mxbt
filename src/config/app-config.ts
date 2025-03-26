import { getStringEnv } from './utils';

export const appConfig = { cocktails: { get: getStringEnv(process.env.VUE_APP_GET_COCKTAILS) } };
