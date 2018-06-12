## 目录结构说明 

> 本站的静态文件需要放置在服务器环境下浏览,而不是用浏览器直接打开file::/形式访问 
```sh
liang/   
├── login.html 登录页面  
├── index.html 首页  
├── static  静态资源文件夹  
│       ├── bootstrap/ 引用的UI框架，基于流行的bootstrap  
│       │        ├── css/ bootstrap框架所用到的css  
│       │        ├── fonts/ bootstrap框架自带的图标字体  
│       │        ├── js/ bootstrap框架自带的js 
│       │        └── less/ bootstrap框架源码less文件，方便自定制  
│       ├── fontawesome/ 引用的扩展第三方开源字体图标  
│       │        ├── css/ fontawesome自带的css 
│       │        └── webfonts/ fontawesome自带的图标字体    
│       ├── images/ 站点所用到的图片资源  
│       ├── js/ 全局js文件  
│       └── less/ 本站自定义的样式（基于less语法书写）   
└── templates //模板页文件夹  
        ├── xxx.html 站内左侧菜单点击链接的html模板，采用ajax方法load进div.main#mainContent内容区域  
        ├── ....html  
        └── ....  
```
## 项目截图预览

### 登录页
<img src="https://github.com/vvchuanqi/liang/blob/master/%E7%99%BB%E5%BD%95.png"/> 

### 首页
<img src="https://github.com/vvchuanqi/liang/blob/master/%E9%A6%96%E9%A1%B5.png"/> 

### 工程管理页
<img src="https://github.com/vvchuanqi/liang/blob/master/%E5%B7%A5%E7%A8%8B%E7%AE%A1%E7%90%86.png"/> 

### 地图页
<img src="https://github.com/vvchuanqi/liang/blob/master/%E5%9C%B0%E5%9B%BE.png"/>

## 更多详情请访问：
### [首页](https://vvchuanqi.github.io/liang/)
### [登录页面](https://vvchuanqi.github.io/liang/login.html)
  
  
