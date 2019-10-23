import React from 'react';
import Loadable from 'react-loadable';
import './index.less'

const loadingComponent =()=>{
    return (
        <div>
            loading
        </div>
    )
}

export default Loadable({
    //需要被夹在的组件
    loader:()=>import('./index.js'),
    //在加载的过程中显示的过程组件
    loading:loadingComponent
})