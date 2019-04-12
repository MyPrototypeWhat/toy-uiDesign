import React from 'react'
import './style.less';
export class ScrollBar extends React.Component{
    state={
        scrollWidth:0,
        scrollYHeight:0,
    }
    componentDidMount(){
        const scrollBar=document.querySelector('.Chaos-scrollBar-main');
        var scrollWidth=scrollBar.offsetWidth-scrollBar.clientWidth;
        console.log(scrollWidth);
        this.setState({
            scrollWidth
        });
        scrollBar.onscroll=(x)=>{
            // console.log(1);
            // console.log(scrollBar.scrollTop);
        }
        document.querySelector('.Chaos-scrollBar').onmouseover=()=>{
            console.log(123);
        }
        // console.log();
    }
    render(){
       return (
           <div className='Chaos-scrollBar' style={this.props.style} >
               <div className='Chaos-scrollBar-main'style={{marginRight:-this.state.scrollWidth,marginBottom:-this.state.scrollWidth}}>
                    {
                        this.props.scrollY
                        ?(
                            <div className='Chaos-scrollBar-Y' style={{width:this.state.scrollWidth,...this.props.scrollBarYStyle}}></div>
                        ):null
                    }
                    {
                        this.props.children
                    }
               </div>
                    {
                        this.props.scrollX
                        ?(
                            <div className='Chaos-scrollBar-X'></div>
                        ):null
                    }
           </div>
       )
   }
}