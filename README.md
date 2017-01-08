# 基于React的轮播图组件
## 1.安装依赖
`npm install
`
## 2.webpack打包，运行npm run build 会将app下面的文件进行打包，在build下面会生产index.html，bundle.js文件和img文件夹
`npm run build`
## 3.配置.babelrc文件
`{
   "presets": ["es2015","stage-0","react"]
 }`
## 4.需要查看效果，只需打开app文件夹下面的index.html即可
## 5.要修改参数，打开app下面index.js
###相关参数

- items={IMAGE_DATA} //图片数据
- speed={1} //图片切换的速度(单位是秒)
- delay={2.2} //每隔多少秒切换一次
- pause={true} //鼠标移上去是否自动暂停
- autoplay={true}//是否自动播放
- dots={true} //是否显示导航小点
- arrows={true}//是否显示上一张和下一张箭头
- width={800}//轮播图的宽
- height={300}