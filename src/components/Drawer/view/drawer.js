import React from 'react';
import "./style.less";
import classnames from 'classnames';
export class Drawer extends  React.Component{
    /*eslint-disable*/
    direc=()=>{
        const {direction}=this.props;
        // dir+='';
        let obj={
            left:'translateX(-100%)',
            top:'translateY(-100%)',
            bottom:'translateY(100%)',
            right:'translateX(100%)'
        };
        // console.log(obj[direction]);
        return obj[direction];
    }
    render(){
        const {visible,direction}=this.props;
        // const trans=this.direc(direction);
        // console.log(trans);
        return (
                <div className={classnames(
                    'Chaos-drawer',
                    {'Chaos-drawer-open':visible},
                    `Chaos-drawer-${direction}`
                    )}
                    onClick={()=>{!this.props.mask&&this.props.onClose();}}
                    style={{zIndex:this.props.zIndex}}
                    >
               {
                   this.props.mask
                   ?( <div className='Chaos-drawer-mask'
                        onClick={()=>{
                            if(this.props.maskClosable===undefined){
                                this.props.onClose();
                            }else if(this.props.maskClosable){
                                this.props.onClose();
                            }
                            }}
                        style={this.props.maskStyle}
                    >
                    </div>)
                    :null
               }
                <div 
                    className='Chaos-drawer-wrapper' 
                    style={{
                        transform:`${
                           visible
                            ?''
                            :(
                                this.direc()
                            )
                        }`,
                        height:`${direction==='bottom'||direction==='top'?this.props.height+'px':''}`,
                        width:`${direction==='left'||direction==='right'?this.props.width+'px':''}`
                    }}
                    onClick={(e)=>{e.stopPropagation();}}
                >
                    <div className="Chaos-drawer-wrap-container">
                        {
                            this.props.title
                            ?(<div className='Chaos-drawer-wrap-title'>
                                <span>{this.props.title}</span>
                            </div>)
                            :null
                        }
                        {
                            <div className='Chaos-drawer-wrap-body'>
                                {
                                    this.props.children
                                }
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}