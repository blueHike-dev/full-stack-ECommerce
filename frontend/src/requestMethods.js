import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzYyNWFiMWEzZjdiMzc2NTQwMzMyMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5ODE3MjAzMSwiZXhwIjoxNjk4NDMxMjMxfQ.aHzo3t4-k6kBK-BkLlGAu4dW6a20bEyPk3T7Nu3oDDg";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
