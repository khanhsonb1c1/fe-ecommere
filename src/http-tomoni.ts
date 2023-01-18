import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { useAuthStore } from "./stores/auth";

async function defaultHeaders() {
  const defaultHeaders = {
    "X-Firebase-IDToken": await useAuthStore().getIdToken(),
    "Accept-Language": import.meta.env.VITE_APP_LANGUAGE,
    Accept: "application/json",
    "X-Organization-Scope": import.meta.env.VITE_APP_ORGANIZATION,
  };
  return defaultHeaders;
  // return _.pickBy(defaultHeaders, _.identity)
}

const auth: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_AUTH_SERVICE_HOST,
});
auth.interceptors.request.use(async function (config: AxiosRequestConfig) {
  config.headers = await defaultHeaders();
  return config;
});

const accounting: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_ACCOUNTING_SERVICE_HOST,
});
accounting.interceptors.request.use(async function (
  config: AxiosRequestConfig
) {
  config.headers = await defaultHeaders();
  return config;
});

const order: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_ORDER_SERVICE_HOST,
});
order.interceptors.request.use(async function (config: AxiosRequestConfig) {
  config.headers = await defaultHeaders();
  return config;
});

const product: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_PRODUCT_SERVICE_HOST,
});
product.interceptors.request.use(async function (config: AxiosRequestConfig) {
  config.headers = await defaultHeaders();
  return config;
});

const helper: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_HELPER_SERVICE_HOST,
});
helper.interceptors.request.use(async function (config: AxiosRequestConfig) {
  config.headers = await defaultHeaders();
  return config;
});

const warehouse: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_WAREHOUSE_SERVICE_HOST,
});
warehouse.interceptors.request.use(async function (config: AxiosRequestConfig) {
  config.headers = await defaultHeaders();
  return config;
});

export { auth, accounting, order, product, helper, warehouse };