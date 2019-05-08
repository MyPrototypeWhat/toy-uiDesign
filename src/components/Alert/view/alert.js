import React,{Fragment} from 'react';
import './style.less';
export const Alert=(props)=>{
    const [flage,setFlage]=React.useState(true);
    const time =props.transTime||300;
    return(
        <Fragment>
            {
                flage
                ?(
                    <div className='Chaos-alert Chaos-alert-Container' style={{background:props.backgroundColor,color:props.color}}>
                        <div>
                            {
                                props.title?
                                (<div className='Chaos-alert-title'>
                                    {props.title}
                                    {
                                        props.closed?
                                        (<span className='Chaos-alert-close' onClick={()=>{
                                            if(props.closeTrans){
                                                document.querySelector('.Chaos-alert').className='Chaos-alert alert-exit';
                                                setTimeout(()=>{
                                                    setFlage(false);
                                                },time);
                                            }else{
                                                setFlage(false);
                                            }
                                        }}>
                                            {
                                                props.closeTxt
                                                ?props.closeTxt
                                                :(<svg viewBox="64 64 896 896" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                    <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                                                </svg>)
                                            }
                                        </span>)
                                        :null
                                    }
                                </div>)
                                :null
                            }
                            <span className='Chaos-alert-text'>{props.text}</span>
                            
                        </div>
                        
                    </div>
                )
                :null
            }
        </Fragment>
    );
};