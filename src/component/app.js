import React, { Component } from 'react';
import RootRouters from '../router'
// 第二部导出仓库
import store from '../store'
import {Provider} from 'react-redux'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
           
               <RootRouters></RootRouters> 
            </Provider>
        );
    }
}

export default App;