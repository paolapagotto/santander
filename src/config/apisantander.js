var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-manager.universia.net/becas-programs/api/search?page=',
  headers: { 
    'authority': 'api-manager.universia.net', 
    'pragma': 'no-cache', 
    'cache-control': 'no-cache', 
    'accept-language': 'pt', 
    'accept': 'application/json, text/plain, */*', 
    'req_uuid': 'abb1fde0-6eef-11eb-b4c0-c3596dd3a14f', 
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36', 
    'origin': 'https://www.becas-santander.com', 
    'sec-fetch-site': 'cross-site', 
    'sec-fetch-mode': 'cors', 
    'sec-fetch-dest': 'empty', 
    'referer': 'https://www.becas-santander.com/'
  }
};

module.exports = {

  find: (page=1) => {
    return new Promise((resolve, reject) => {
      var url = 'https://api-manager.universia.net/becas-programs/api/search?page='
      config.url = url + page
      axios(config)
      .then(function (response) {
        return resolve(response.data);
      })
        .catch(function (error) {

          reject(error);
        });
  
    })

  
}};


