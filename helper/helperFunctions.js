'use strict';

 function _respond(res, next, status, data, http_code) {
  var response = {
    'status': status,
    'data' : data
  };
  res.setHeader('Content-type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin','*');
  /*
  Access-Control-Allow-Credentials,
  Access-Control-Expose-Headers,
  Access-Control-Max-Age,
  Access-Control-Allow-Methods,
  Access-Control-Allow-Headers
  */
  res.writeHead(http_code);
  res.end(JSON.stringify(response));
}

module.exports.success = function success(res, next, data){
  _respond(res, next, 'success', data, 200);
}

module.exports.failure = function failure(res, next, data, http_code){
  console.log('Error: ' + http_code + ' ' + data);
  _respond(res, next, 'failure', data, http_code);
}