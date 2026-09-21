export const COOKIE_NAME = "app_session_id";
/** HttpOnly cookie for team staff panel access (server-validated only). */
export const STAFF_COOKIE_NAME = "vn_staff_session";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;
/** Staff session lifetime: 7 days */
export const STAFF_SESSION_MS = 1000 * 60 * 60 * 24 * 7;
export const AXIOS_TIMEOUT_MS = 30_000;
export const UNAUTHED_ERR_MSG = "Please login (10001)";
export const NOT_ADMIN_ERR_MSG = "You do not have required permission (10002)";
export const STAFF_UNAUTH_ERR_MSG = "Staff authentication required (10003)";
