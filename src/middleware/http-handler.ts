import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import config from '../config/config';

class CustomHttp {
  url: string;
  method: string;
  data: any;
  headers: any;
  onlyData: boolean;

  constructor(url: string, body: any, headers: any, onlyData = true) {
    this.url = url;
    this.data = body;
    this.headers = headers;
    this.onlyData = onlyData;
  }

  axiosClient = axios.create({
    timeout: config.AXIOS_TIMEOUT,
  });

  excecute = async (url: string, method: string, headers: any, body?: any, onlyData = true) => {
    const options: AxiosRequestConfig = {
      url,
      method,
      data: body, // Cambiado 'body' a 'data' para coincidir con AxiosRequestConfig
      headers,
    };

    const res = this.axiosClient
      .request(options)
      .then((response: AxiosResponse) => (onlyData ? response.data : response))
      .catch((error) => {
        console.log(error);
        throw error; 
      });
    return res;
  };

   get = async () => {
    const response = await this.excecute(this.url, 'GET', null, this.headers, this.onlyData);
    return response;
  };

  post = async (url: string, body: any, headers: any, onlyData = true) => {
    const response = await this.excecute(url, 'POST', body, headers, onlyData);
    return response;
  };

  patch = async (url: string, body: any, headers: any, onlyData = true) => {
    const response = await this.excecute(url, 'PATCH', body, headers, onlyData);
    return response;
  };
}

export default CustomHttp
