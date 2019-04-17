import React from 'react';
import "./style.less";
import classnames from 'classnames';
export class Drawer extends  React.Component{
    render(){
        const {visible,direction}=this.props;
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
                            this.props.visible
                            ?''
                            :(
                                direction==='bottom'||direction==='right'
                                ?'translateY(100%)'
                                :'translateY(-100%)'
                            )
                        }`,
                        // transform:`${
                        //     this.props.visible&&(direction==='left'||direction==='top')
                        //     ?''
                        //     :'translateY(-100%)'
                        // }`,
                        height:`${direction==='bottom'||direction==='top'?this.props.height+'px':''}`
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