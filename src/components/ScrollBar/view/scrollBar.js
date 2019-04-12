import React from 'react'
import './style.less';
export class ScrollBar extends React.Component{
    state={
        scrollWidth:0,
        scrollYHeight:0,
        scrollXWidth:0,
        translateY:0,
        translateX:0
    }
    scrollYHeight=(scrollBar,container)=>{
        const containerHeight=container.clientHeight;
        const scrollBarHeight=scrollBar.children[0].clientHeight;
        var scrollYHeight=this.scrollOpt(scrollBarHeight,containerHeight);
        this.setState({
            scrollYHeight
        });
    }
    scrollXWidth(scrollBar,container){
        const containerWidth=container.clientWidth;
        const scrollBarWidth=scrollBar.children[0].clientWidth;
        var scrollXWidth=this.scrollOpt(scrollBarWidth,containerWidth);
        this.setState({
            scrollXWidth
        });
    }
    scrollOpt=(viewOpt,containerOpt)=>{
        var result=containerOpt*containerOpt/(viewOpt-containerOpt);
        return result
    }
    scrollWidth=(scrollBar)=>{
        var scrollWidth=scrollBar.offsetWidth-scrollBar.clientWidth;
        this.setState({
            scrollWidth,
        });
    }
    onScroll=(scrollBar,container)=>{
        scrollBar.onscroll=(x)=>{
            this.onScrollY(scrollBar,container);
            this.onScrollX(scrollBar,container);
        }
    }
    onScrollX=(scrollBar,container)=>{
        const containerWidth=container.clientWidth;
        const scrollBarWidth=scrollBar.children[0].clientWidth
        var scrollYWidth=containerWidth*containerWidth/(scrollBarWidth-containerWidth);
        let translateX=(containerWidth-scrollYWidth)/(scrollBarWidth-containerWidth)*scrollBar.scrollLeft;
        this.setState({
            translateX
        })
    }
    onScrollY=(scrollBar,container)=>{
        const containerHeight=container.clientHeight;
        const scrollBarHeight=scrollBar.children[0].clientHeight
        var scrollYHeight=containerHeight*containerHeight/(scrollBar.children[0].clientHeight-containerHeight);
        let translateY=(containerHeight-scrollYHeight)/(scrollBarHeight-containerHeight)*scrollBar.scrollTop;
        this.setState({
            translateY
        })
    }
    componentDidMount(){
        const container=document.querySelector('.Chaos-scrollBar');
        const scrollBar=document.querySelector('.Chaos-scrollBar-main');
        this.scrollWidth(scrollBar);
        this.scrollXWidth(scrollBar,container);
        this.scrollYHeight(scrollBar,container);
        this.onScroll(scrollBar,container);
        
        // containerHeight.onmouseover=()=>{
            
        // }
    }
    render(){
       return (
           <div className='Chaos-scrollBar' style={this.props.style} >
               <div className='Chaos-scrollBar-main'style={{marginRight:-this.state.scrollWidth,marginBottom:-this.state.scrollWidth}}>
                    {
                        this.props.children
                    }
               </div>
                    {
                        this.props.scrollY
                        ?(
                            <div className='Chaos-scrollBar-Y' 
                            style={{height:this.state.scrollYHeight+'px',width:'6px',transform:`translateY(${this.state.translateY}px)`}}></div>
                        ):null
                    }
                    {
                        this.props.scrollX
                        ?(
                            <div className='Chaos-scrollBar-X'
                            style={{height:'6px',width:this.state.scrollXWidth+'px',transform:`translateX(${this.state.translateX}px)`}}
                            ></div>
                        ):null
                    }
           </div>
       )
   }
}