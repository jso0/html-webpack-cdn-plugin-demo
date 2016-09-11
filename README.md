# html-webpack-cdn-plugin-demo
use `cdn-loader` and `html-webpack-cdn-plugin`

1. run `npm i webpack -g`
2. run `webpack`
3. get `index.html` and `index.js` files

``` html

<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/4.2.0/normalize.min.css" rel="stylesheet"></head>
  <body>
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
  <script type="text/javascript" src="index.js"></script></body>
</html>

```
