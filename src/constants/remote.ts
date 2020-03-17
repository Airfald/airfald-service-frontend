// auth
export const AUTH_REDIRECT_KEY = process.env
  .REACT_APP_OAUTH2_REDIRECT_KEY as string;
export const AUTH_FROM_KEY = process.env.REACT_APP_OAUTH2_FROM_KEY as string;
export const AUTH_NEXT_KEY = process.env.REACT_APP_OAUTH2_NEXT_KEY as string;
export const AUTH_CODE_KEY = process.env.REACT_APP_OAUTH2_CODE_KEY as string;
export const AUTH_PATH = process.env.REACT_APP_OAUTH2_PATH as string;
export const AUTH_URI = process.env.REACT_APP_OAUTH2_URI as string;
export const LOGOUT_URI = process.env.REACT_APP_OAUTH2_LOGOUT_URI as string;

// tags
export const ALL_FOLLOWER_TAG_ID = -1111; // 全部粉丝标签的 id

// server
export const ROOT_URI = process.env.REACT_APP_ROOT_URI as string;
export const BASE_NAME = process.env.REACT_APP_BASE_NAME as string;

// request
export const RES_UNAUTHORIZED_CODE = 4010000;
export const RES_SUCCESS_DEFAULT_CODE = 200;
export const RES_FAILED_DEFAULT_CODE = 4000000;
export const RES_SUCCESS_DEFAULT_MSG = 'success';
export const RES_FAILED_DEFAULT_MSG = 'uncaught exception';
export const REQ_AUTH_NAME = 'Authorization';

// oss
export const REACT_APP_OSS_BASE_UPLOAD_DIR = process.env
  .REACT_APP_OSS_BASE_UPLOAD_DIR as string;
export const REACT_APP_OSS_UPLOAD_DOMAIN = process.env
  .REACT_APP_OSS_UPLOAD_DOMAIN as string;
export const CMALL_APP_OSS_UPLOAD_DOMAIN = process.env
  .CMALL_APP_OSS_UPLOAD_DOMAIN as string;
