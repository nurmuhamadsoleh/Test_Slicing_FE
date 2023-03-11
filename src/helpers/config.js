export const tokenHeader = () => {
  return {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    Authorization: `Basic ${import.meta.env.VITE_AUTH_API}`,
    SERVER_KEY: import.meta.env.VITE_SERVER_KEY,
    DATA_DS: import.meta.env.VITE_DATA_DS,
  };
};
export const url = {
  api: import.meta.env.VITE_URL_API,
};
