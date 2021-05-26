---
id: helloworld
title: HelloWorld
---

本章介绍如何基于CfMap API 进行地图应用的开发，以一个简单的示例助您快速了解CfMap JS API的基本使用。

Hello，CfMap！

以下代码可以实现一个简单的地图展示Demo：[亲手试一试](http://cim1.sz.com.cn/)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基础地图</title>
    <link rel="stylesheet" href="//cim1.sz.com.cn/sdk/3.0.1/cfmap.min.css">
    <script src="//cim1.sz.com.cn/sdk/3.1.2/3.0.1/cfmap.min.js"></script>
    <style>
        html, body, #map {
            width: 100%;
            height: 100%;
        }
        html, body {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
    <div id="map"></div>
<script>
    CfMap.baseUrl = "http://cim1.sz.com.cn/";

    CfMap.access_token = "eyJpZCI6ImF0bGFzIn0.Hh49DI5GxMWUrQpVRRI5ICIB130JTOVf27plXWqlvrk";

    var map = new CfMap.Map({
        container: 'map',
        style: "cfmap://maps/x/night/",
        center: [120.46,30.92],
        zoom: 10,
        pitch: 0,
        maxZoom:17,
        minZoom:3
    });
</script>
</body>
</html>
```

### 分步说明

下面我们分步骤介绍如何快捷地开始地图开发：

1. 准备页面

我们建议使用最新的符合HTML5规范的文档声明：


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基础地图</title>
</head>
<body>
</body>
</html>
```

2. 加载API文件

API文件的加载方式：


```js
    <link rel="stylesheet" href="//cim1.sz.com.cn/sdk/3.0.1/cfmap.min.css">
    <script src="//cim1.sz.com.cn/sdk/3.1.2/3.0.1/cfmap.min.js"></script>
```

3. 创建地图容器

地图需要一个HTML元素作为容器，这样才能展现到页面上。这里我们创建了一个div元素：


```html
<div id="map"></div>
```

4. 指定地图容器大小

地图的展示必须要给地图容器指定大小，否则无法显示：


```js
html, body, #map {
    width: 100%;
    height: 100%;
}
html, body {
    margin: 0;
    padding: 0;
}
```

5. 全局参数设置

CfMap支持本地部署，所以在地图应用开发需要支持本地环境时，需要设置一下全局参数，否则CfMap相应的数据及服务将访问CfMap线上服务。

以下全局参数为CfMap默认线上数据和服务地址：


```js
CfMap.baseUrl = "http://cim1.sz.com.cn/";
```

6. 地图初始化

获取地图方案的accessToken，然后通过CfMap API初始化地图，地图初始 化时必须设置地图容器container、地图style、地图中心点center、当前地图级别zoom的参数值，否则地图无法显示：


```js

    CfMap.access_token = "eyJpZCI6ImF0bGFzIn0.Hh49DI5GxMWUrQpVRRI5ICIB130JTOVf27plXWqlvrk";/* 设置token */
    var map = new CfMap.Map({
        container: "map",
        style: "cfmap://maps/x/night/", /* 底图样式 */
        center: [116.46,39.92], /* 地图中心点 */
        zoom: 10,   /* 地图默认缩放等级 */
        pitch: 0,   /* 地图俯仰角度 */
        maxZoom:17, /* 地图最大缩放等级 */
        minZoom:3  /* 地图最小缩放等级 */
});
```

7. 地图配置与操作

一般情况下，我们会给地图按需设定中心点坐标、地图视角等属性，可以通过两种方式实现：

第一种方式，地图初始化时设置相应参数。


```js
var map = new CfMap.Map({
    container: "map",
    style: "cfmap://maps/x/night/", /*底图样式*/
    center: [116.46,39.92], /*地图中心点*/
    zoom: 10,   /*地图默认缩放等级*/
    pitch: 0,   /*地图俯仰角度*/
    maxZoom:17, /*地图最大缩放等级*/
    minZoom:3,  /*地图最小缩放等级*/
});
```

第二种方式，地图初始化之后通过相应的API改变参数。


```js
CfMap.setCenter([120.46,30.92]);
CfMap.setZoom(10);
```

同时还可以添加一些地图操作控件，比如放大、缩小、比例尺等操作按钮：


```js
map.addControl(new CfMap.Navigation(),"bottom-right");
map.addControl(new CfMap.Scale(),"top-right");
```
