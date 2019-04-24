import React,{Fragment} from 'react';
import classnames from 'classnames';
import './style.scss';

export class Tree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            inputText: ''
        };
    }
    filterInput(filterText) {
        let inputNode = (
            <input className='input-filter' onChange={this.inputFilterText.bind(this)} placeholder='请输入关键字过滤' value={filterText}/>
        );
        return inputNode;
    }
    renderChecked(data) {
        let checkNode = (
            <span className={classnames(
                'rb-checkbox',
                {is_checked: data.isChecked}
                )} onClick = {this.clickChecked.bind(this, data)}>
                <span className='rb-checkbox_inner'></span>
                {/* <input aria-hidden='true' type='checkbox' onChange={this.clickChecked.bind(this, data)} value={data.label} checked={data.isChecked}/> */}
            </span>  
        );
        return checkNode;
    }
    renderCostumizeIcon(iconStr, isNeed) {
      
        if(isNeed) 
            return (<img src={iconStr}/>);
        else 
            return null;
    }
    createTree(data) {
        // let data = this.state.data;   //会出错
        console.log(data);
        let type = Object.prototype.toString.call(data);
        let treenode = '';
        let righticon = (node) => {
            return (
            <i onClick={this.clickNode.bind(this, node)} data-expand={node.expand} className={classnames('iconfont iconjiantou expandicon',
                    {'isCliked' : node.expand}
            )}></i>
        );};
        // jsx不允许if else判断
        if (type == '[object Object]') {
            console.log(data);
            treenode = (<span className='treenode tree-root-node'>{data.children ? righticon(data) : null}<span className='root-label'>{data.label}</span></span>);
        } else if(Array.isArray(data)){
            
            treenode = (
                            <ul>
                                {data.map((item, index) => { //map返回数组，forEach不返回
                                    return (
                                        <li className='treenode tree-root-nodes' key={"root" + index}>
                                            <div className='treenode treenode_conent'>
                                                {item.children ? righticon(item) : null} 
                                                {this.renderChecked(item)}
                                                {this.renderCostumizeIcon(item.icon, this.props.isNeedIcon)}
                                                <span className='root-label'>{item.label}</span></div> 
                                                {item.children && item.expand ? (<div  className='treenode_child group'>
                                                    {this.createTree(item.children)}
                                            </div>) : null} 
                                        </li>
                                    );
                                })}
                                
                            </ul>);
        }
        return treenode;
    }
    checkedAll(obj, bool) {
        let type = Object.prototype.toString.call(obj);
        if(type == '[object Object]') {
            obj.isChecked = bool;
            if(obj.hasOwnProperty('children') && obj.children.length > 0) {
                this.checkedAll(obj.children, bool);
            }
        } else {
            for(let key in obj)
                this.checkedAll(obj[key], bool);
        }
        return obj;
    }
    psobject(obj, node, types,  newvalue) {
        // 深度遍历对象，比对返回新值
        let type = Object.prototype.toString.call(obj);
        if(type == '[object Object]') {
            if(obj.id == node.id) {
                obj[types] = newvalue;
                if(types == 'isChecked') {
                    obj = this.checkedAll(obj, newvalue);
                }
                // obj.isChecked = node.isChecked
                // obj = node;
            }
            if(obj.hasOwnProperty('children') && obj.children.length > 0) {
                    this.psobject(obj.children, node, types,  newvalue);
            }
        } else {
            for(let key in obj) {
            
                if(obj[key].id == node.id) {
                    obj[key][types] = newvalue;
                    if(types == 'isChecked' && newvalue) {
                        this.psobject(obj[key], node, types,  true);
                    }
                    // obj[key].isChecked
                    // obj = node;
                }
                if(obj[key].hasOwnProperty('children') && obj[key].children.length > 0) {
                        this.psobject(obj[key], node, types,  newvalue);
                }
            }
        }
        
        return obj;
    }
    clickNode = (node) => {
        // click node 当前节点数据
        console.log(node);
        node.expand = !node.expand;
        
        let newdata = this.psobject(this.state.data, node, 'expand', node.expand);
        // this.setState({
        //     data:
        // })
        console.log(newdata);
        this.setState({
            data: newdata
        }); // 从而取消以下的dom操作代码


        // let el = e.target;
        // console.log(el.getAttribute('data-expand'));
        // let isExpand = el.getAttribute('data-expand');
        // if(isExpand == 'true') {

        //     el.setAttribute('data-expand', false);
           
        //     el.className = el.className.replace(new RegExp('isCliked'), '');
        //     el.parentNode.nextSibling.style.display = 'none';
        // } else {
        //     el.setAttribute('data-expand', true);
        //     el.className += ' isCliked';
        //     el.parentNode.nextSibling.style.display = 'block';
        // }
        // let el = e.target;
   
        // this.setState({
        //     isClickNode: el
        // }, () => {
        //    // el.className += ' isCliked'; //要留空格
        // }); 
    }
    clickChecked(node, e) {
        console.log(node, e);
        node.isChecked = !node.isChecked;
        let newdata = this.psobject(this.state.data, node, 'isChecked', node.isChecked);
        this.setState({
            data: newdata
        });
    }
    inputFilterText(val) {
        // 输入文字
        this.setState({
            inputText: val.value
        });
    }
    UNSAFE_componentWillMount() {
      
    }
    render() {
        
        
        let treenode = this.createTree(this.state.data);
        let inputnode = this.filterInput(this.state.inputText);
        console.log(this.state.data);
        return (
            <Fragment>
                <div className='input'>
                    {inputnode}
                </div>
                <div className='tree'>
                    {
                        treenode
                    }
                </div>
            </Fragment>
        );
        
    }
    

}