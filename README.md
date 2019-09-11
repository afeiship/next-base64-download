# next-base64-download
> Download base64 file from browser.

## installation
```bash
npm install -S afeiship/next-base64-download --registry=https://registry.npm.taobao.org
```

## usage
```html
<div class="container" id="ctr">
  <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAaCAYAAADSbo4CAAAAAXNSR0IArs4c6QAAAdVJREFUSA3tlz9IQlEUh31S0VRhUyAVBG3hFrQ4R05BEOHa2tTS2hZFTS0NrQpNzY0F0dASBBFBQ4QOkUNDZUSv78A7z/uuT5+GLx088HHPPff8+fGeXjSRwFzXTUMBSvBfJrNkZlo0OJ5zg5+SQBeswsyMCCngrHVBgDmyKK/FfB1L5mmcPnNzoFaSJ+IaA4cdx6ka+9hcxg7S/EsHJNXx1gcS1mHAind0S/8VGt4FmhIMMxGUB1tooLbdDf0W4BLqTD4jzeyWw+V2B9r59JiBk2aDbCFbJL+GFFwTW7QHRO2pScEBVMG0TzZ7ZiAgRBpzOALb8GYmev4Fa7YFAUPkbULFq9PlB6cI094sjbt1QnQIGeOwC+9+ds05w53XXHMlvgqPtVTfO8cL1PgnOA2FaHNyJuAQ7MdLyD2FLIyB3AtXYNs9gdDPmZkYKcQQNEXhMXybDZr4L5xtgNwXoWbWtixEO1E8CwWQ9x1mHwR3YFRrGq1mcdtCtClN5uAInkCGy92zD5OaE7WS61vgiud6d6KKO3kuKrRfR29ObfqXtS/Efmr9J9LTT6Ss6vg25dSPe7VmlXvmx7MIkf8VXf87keQyfUZIBorgvyb8uE1mycyMaPgFt6B66p+59h8AAAAASUVORK5CYII="
  />
</div>
```

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
