import React, { Component } from 'react';
import {postData , obj_to_query , fetchData} from '../util/index';


class Home extends Component {

    constructor(props){
        super(props);
        this.state={

        }
    }
    componentWillMount(){
        this.handleConfig()
    }
    componentWillReceiveProps(){

    }
    componentWillUnmount(){

    }

    handleConfig = () => {
        // var url = 'http://localhost/Ding/public/index/index/index';
        const url = '//devding.sport147.cn/';
        return fetchData(obj_to_query(url,{
            m : 'Home' ,
            c : 'Index' ,
            a : 'sign'
        })).then((a) => {
            console.log(a)
        })
    };

    render() {

        return (
              <div>
                 haksdhfjksadhjfkhsdjakdfhkj

              </div>
         );
    }
}

export default Home;