const config = {
    PORT: 3000,
    KEY: 'PRUEBA TECNICA XPERTGROUP',
    AXIOS_TIMEOUT: 30000,
    catApi: {
        apiKey: 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP',
        baseUrl: 'https://api.thecatapi.com',
        v1: {
            breeds: '/v1/breeds',
            images: '/v1/images/search'
        }
    }
};

export default config;