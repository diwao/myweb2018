'use strict';
export default (path, param, cache) => {
  if (typeof cache === 'undefined') {
    cache = false;
  }
  return new Promise(function(resolve, reject) {
    $.ajax({
      url: path,
      cache: cache,
      param: param,
      type: 'GET',
      timeout: 60000,
      datatype: 'json'
    }).done(function(data, textStatus, jqXHR) {
      console.info(`GET Res SUCCESS StatusCode: ${jqXHR.status}`);
      resolve(data);
    }).fail(function(_jqXHR, _textStatus, _errorThrown) {
      console.error(
        `GET Res ERROR api: ${path}, XMLHttpRequest:${_jqXHR.status}, textStatus:${_textStatus}, errorThrown: ${_errorThrown}`
      );
      reject({
        path: path,
        jqXHR: _jqXHR,
        textStatus: _textStatus,
        errorThrown: _errorThrown
      });
    });
  });
};
