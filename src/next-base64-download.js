(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var DEFAULT_OPTIONS = { b64: null, filename: 'untitled.png' };

  nx.base64Download = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var anchorEl = document.createElement('a');
    var docBody = document.body;

    // create download link && download:
    anchorEl.href = options.b64;
    anchorEl.download = options.filename;
    docBody.appendChild(anchorEl);
    anchorEl.click();
    // destroy res:
    docBody.removeChild(anchorEl);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.base64Download;
  }
})();
