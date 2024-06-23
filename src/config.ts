const config: IConfig = {
    // for proxy to run properly,
    // base url needs to have route prefix /api
    // example http://localhost:port/api
    // see ./dotenv.example for reference
    baseUrl: import.meta.env.VITE_BASE_URL
}

export default config