# next-base64-download
> Download base64 file from browser.

## installation
```bash
npm install -S afeiship/next-base64-download --registry=https://registry.npm.taobao.org
```

## usage
```js
const ctr = document.getElementById('ctr');
const img = document.querySelector('img');

ctr.onclick = function(params) {
  nx.base64Download({
    b64: img.src,
    filename: 'your-name.png'
  });
};
```
