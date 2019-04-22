import React from 'react'
import './style.scss'

export class Tree extends React.Component {
    render() {
        const {data} = this.props
        let treenode = ''
        let righticon = (
            <img src='/static/images/icon-right.png'/>
        )
        // jsx不允许if else判断
        if (typeof data == 'object') {
            treenode = (<span className='tree-root-node'>{righticon}<span className='root-label'>{data.label}</span></span>)
        } else if(typeof data == 'array'){
            treenode = (
                            <ul>
                                {data.forEach((item, index) => {
                                    return (
                                        <li className='tree-root-nodes' key={"root" + index}>
                                            {righticon} <span className='root-label'>{item.label}</span>
                                        </li>
                                    )
                                })}
                                
                            </ul>)
        }
        return (
            <Fragment>
                <div className='tree'>
                    {
                        treenode
                    }
                </div>
            </Fragment>
        )
        
    }
    

}