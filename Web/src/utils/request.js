import axios from 'axios';
    /* console.log(process.env.BASE_API); */
    const service = axios.create({
        baseURL: 'http://localhost:3000',
        timeouT: 5000,
        /* withCredentials: true, */
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
         }
    });
    service.interceptors.request.use(
        config => {
          /* let url = config.url;
              if(config.method === 'get'){
                let newData = '';
                  for (let k in config.params) {
                    newData += encodeURIComponent(k) + '=' + encodeURIComponent(config.params[k]) + '&'
                  }
                  config.url = url +'?'+ newData
            } */
            config.params = null;
            return config
        },
        error => {
          // Do something with request error
          console.log(error) // for debug
          Promise.reject(error)
        }
      )
export default service;
