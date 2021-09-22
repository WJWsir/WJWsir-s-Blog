# 滚动条定位到某一列表项

## 一、问题说明

&emsp;&emsp;如何编写代码使得在页面加载完毕时滚动条滚动指定的像素距离？

## 二、示例

### 2.1 需求说明

&emsp;&emsp;打开页面后，第五个黄色矩形框自动位于展示列表项内容的区域界面最上方

### 2.2 源代码

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>滚动条定位某一列表项</title>

    <script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
  </head>
  <style>
    /* html,
    body {
      width: 100%;
      height: 100%;
      去除html元素外的垂直以及水平滚动条
      overflow: hidden;
    } */
    html,
    body {
      /* 去除html元素外的垂直以及水平滚动条 */
      width: 99%;
      height: 99%;
    }

    div#container {
      position: relative;
      width: 100%;
      height: 100%;
    }
    div#header {
      background-color: brown;
      position: absolute;
      top: 0px;
      height: 80px;
      width: 100%;
    }
    div#content {
      background-color: yellowgreen;
      top: 80px;
      position: absolute;
      height: calc(100% - 80px);
      width: 100%;
      overflow-y: scroll;
    }
    li {
      background-color: yellow;
      width: 300px;
      height: 300px;
      margin-bottom: 10px;
      margin-top: 10px;
    }
  </style>

  <body>
    <div id="container">
      <div id="header">header</div>
      <div id="content">
        <ul id="commentlist">
          <li id="1"></li>
          <li></li>
          <li></li>
          <li>4</li>
          <li id="5">5</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <script>
      $(document).ready(function() {

        tosomewhere("#5", "#1"); // 滚动条滚动到 <li id="5">5</li> 元素
      
      });

      function tosomewhere(jquery_ele, jquery_topele) {
        /* -------↓ 关键代码 ↓--------*/
        $("html, body, #content").animate(
          {
            //设置滚动条滚动的像素距离
            scrollTop:
              // 计算两个html元素像素距离 = jquery_ele元素与页面顶部像素距离 - jquery_topele元素与页面顶部像素距离
              $(jquery_ele).offset().top - $(jquery_topele).offset().top,
          },
          1000 //单位 ms, 设置滚动指定像素距离的时间间隔为 1s
        );
        /* -------↑ 关键代码 ↑--------*/
      }
    </script>
  </body>
</html>
```

### 2.3 参考资料