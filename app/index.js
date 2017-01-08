// index.js
import React from 'react';
import { render } from 'react-dom';
import Banner from './Banner';
import stylefrom from './index.css'
const IMAGE_DATA = [
    {
        src: require('./images/b1.jpg'),
        alt: 'banner1',
    },
    {
        src: require('./images/b2.jpg'),
        alt: 'banner2',
    },
    {
        src: require('./images/b3.jpg'),
        alt: 'banner3',
    },
    {
        src: require('./images/b4.jpg'),
        alt: 'banner4',
    },
];

render(
    <Banner
        items={IMAGE_DATA} //图片数据
        speed={1} //图片切换的速度(单位是秒)
        delay={2.2} //每隔多少秒切换一次
        pause={true} //鼠标移上去是否自动暂停
        autoplay={true}//是否自动播放
        dots={true} //是否显示导航小点
        arrows={true}//是否显示上一张和下一张箭头
        width={800}//轮播图的宽
        height={300}
    />,
    document.getElementById('app')
);