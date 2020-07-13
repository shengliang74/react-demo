# react-demo
react实验项目

# html
<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover" />

viewport-fit=cover
在iphonex上使内容充满整个屏幕

width=device-width
这句话就是把默认的980px的布局视口变成了和浏览器一样宽，比如375px。
visual viewport：可以在通过window.innerWidth获取，表示浏览器窗口可以显示出多少个CSS像素，所以是以px为单位的。
layout viewport：布局视口，顾名思义，就是html的宽度，移动端有自己的默认布局视口宽度，是980px，之所以这样设计的目的是为了让PC端的网页可以在手机上显示出来而不变形，这个布局视口宽度是可以自己设定的。可以通过document.documentElement.clientWidth来获取。
width=device-width：这里的width是布局视口的宽度，device-width是设备以常规CSS像素为单位时可以显示的宽度，是一个出厂后就固定的值，比如iPhone7就是375px。
原文链接：https://blog.csdn.net/RUCwang/java/article/details/79050397
scale：我们知道CSS像素是一个抽象的单位，一个CSS像素等于几个设备像素和设备的DPR有关，当然，CSS像素是可以缩小放大的，scale就是对本页面的CSS像素进行缩放。比如，在iPhone7上，设备像素比是2，那么一个CSS像素就代表着2个设备像素，而添加initial-scale=0.5后，一个CSS像素就等于一个设备像素了
intial-scale:页面首次被显示是可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放
maximum-scale=1.0, minimum-scale=1.0;可视区域的缩放级别，
maximum-scale用户可将页面放大的程序，1.0将禁止用户放大到实际尺寸之上。
user-scalable:是否可对页面进行缩放，no 禁止缩放

兼容模式方案:
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
X-UA-Compatible是IE8的一个专有<meta>属性，它告诉IE8采用何种IE版本去渲染网页，在html的<head>标签中使用
使用以下代码强制 IE 使用 Chrome Frame 渲染
<meta http-equiv="X-UA-Compatible" content="chrome=1">
使用下面这段代码使用的是Edge 。模式Edge 模式告诉 IE 以最高级模式渲染文档，也就是任何 IE 版本都以当前版本所支持的最高级标准模式渲染，避免版本升级造成的影响。简单的说，就是什么版本 IE 就用什么版本的标准模式渲染。
<meta http-equiv="X-UA-Compatible" content="ie=edge">


<meta name="format-detection" content="telephone=no,email=no" />
telephone=no禁止把数字转化为拨号链接！
telephone=yes开启把数字转化为拨号链接,要开启转化功能，这个meta就不用写了,在默认是情况下就是开启！
告诉设备不识别邮箱，点击之后不自动发送
email=no禁止作为邮箱地址！
email=yes开启把文字默认为邮箱地址，默认开启！
adress=no禁止跳转至地图！
adress=yes开启点击地址直接跳转至地图的功能,默认开启！

<meta name="apple-mobile-web-app-capable" content="yes"/>
这meta的作用就是删除默认的苹果工具栏和菜单栏。content有两个值”yes”和”no”,当我们需要显示工具栏和菜单栏时，这个行meta就不用加了，默认就是显示。

<meta name="apple-mobile-web-app-status-bar-style" content="default" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
控制状态栏显示样式 black:黑色  black-translucent:灰色

<link href="http://image.test.com/web/favicon.ico" rel="shortcut icon" />
<link href="http://image.test.com/web/favicon.ico" rel="Bookmark" />
用favicon在浏览器给网站进行身份标识

<link rel="apple-touch-icon" href="th.png" />
<link rel="apple-touch-icon-precomposed" href="th.png" />
添加该属性，在iPhone,iPad,iTouch的safari浏览器上可以使用添加到主屏按钮将网站添加到主屏幕上，方便用户以后访问。
使用apple-touch-icon属性为“增加高光光亮的图标”
使用apple-touch-icon-precomposed属性为“设计原图图标”

# css
url-loader
url-loader可以使小图片转为base64,多个图片标签引用同一图片不会显著增加脚本大小.

#resolve解析
resolve: {
        extensions: ['.js','.jsx'],
        alias: {
            "$pages": path.join(__dirname, 'src/pages'),
            "$component": path.join(__dirname, 'src/component'),
            "$router": path.join(__dirname, 'src/router'),
            "$style": path.join(__dirname, 'src/style')
        }
    },
extensions: 配置扩展使得import Home from '$pages/Home/index.jsx';可为import Home from '$pages/Home';
alias: 配置别名

