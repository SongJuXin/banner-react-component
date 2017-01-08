import React from 'react'
import {tween} from './tween'
export default class BannerContent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            left:0,
            n:0,
            doPlay:true
        }
        this.len=this.props.items.length
        this.delay=this.props.delay*1000||2000
        this.speed=this.props.speed*1000||1000
        this.dots=this.props.dots
        this.arrows=this.props.arrows
        this.auto=this.props.autoplay
        this.width=this.props.width
    }

    componentDidMount() {
        if(this.auto)this.autoPlay()
    }
    play(){
        this.setState({n:++this.state.n})
        if(this.state.n>=this.len){
            this.animate(1,{left:-this.width*this.state.n},{
                cb:()=> {
                    this.setState({n:0})
                }
            })
            this.refs.first.className='active'
            return
        }
        this.animate(1,{left:-this.width*this.state.n})
    }
    autoPlay(){
        this.timer=setInterval(()=>{this.play()},this.delay)
    }
    animate(ele,target,opt){
        let timer
        let time=0
        let duration=this.speed
        opt=opt||{}
        let change={}
        let begin={}
        let effect=tween.Elastic.easeOut
        let cb=opt.cb
        for(var attr in target){
            begin[attr]=this.state.left
            change[attr]=target[attr]-begin[attr]
        }
            timer = setInterval(
                () => {
                    time+=30
                    if(time >=duration){
                        clearInterval(timer)
                        cb&&cb()
                        this.setState({left:target.left})
                        return
                    }
                    for(var attr in change){
                        var curPos=effect(time,begin[attr],change[attr],duration)
                        this.setState({left:curPos})
                    }
                },
                30
            );
    }
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        //this.timer && clearInterval(this.timer);
    }
    dotEvent(i,e){
        this.setState({n:i})
        e.target.className='active'
        this.animate(1,{left:-this.width*(i)})
    }
    leftEvent(){
        this.setState({left:-this.width*this.state.n})
        this.setState({n:--this.state.n})
        if(this.state.n<0){
            console.log(1223)
            this.setState({n:this.len-1,left:-this.width*this.len})
            this.animate(1,{left:-this.width*(this.len-1)})
            return
        }
        this.animate(1,{left:-this.width*this.state.n})
    }
    rightEvent(){
        this.setState({left:-this.width*this.state.n})
        this.play()
    }
    render(){
        var Arrow=[],Dots=[]
        if(this.dots){
            for(var i=0;i<this.len;i++){
                Dots.push(
                    <li ref={i==0?"first":""}
                        key={i}
                        onClick={this.dotEvent.bind(this,i)}
                        className={i==this.state.n?'active':null}
                    />
                )
            }
        }
        if(this.arrows){
            Arrow.push(<a href="###" key={1} onClick={this.leftEvent.bind(this)}>←</a>)
            Arrow.push(<a href="###" key ={2} onClick={this.rightEvent.bind(this)}>→</a>)
        }

        return(
            <div className="bannerOuter" style={{width:this.width+'px',height:this.props.height+'px'}} onMouseEnter={()=>{clearInterval(this.timer)}} onMouseLeave={this.auto?this.autoPlay.bind(this):null}>
                <div className="bannerInner" style={{left:this.state.left+'px',width:(this.len+1)*this.width+'px'}}>
                    {
                        this.props.items.map((item,index)=>{
                            return <img style={{width:this.width+'px'}} key={index} src={item.src}/>
                        })
                    }
                    <img style={{width:this.width+'px'}} src={this.props.items[0].src} alt=""/>
                </div>
                <ul>{Dots}</ul>
                {Arrow}

            </div>
        )
    }
}