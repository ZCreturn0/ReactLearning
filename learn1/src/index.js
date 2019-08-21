import React from 'react';
import ReactDOM from 'react-dom';

/*************      first     *****************/
// const name = 'zcreturn0';
// const element = <h2>Hello {name}</h2>;
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );


/*************      定时器     *****************/
// Date.prototype.Format = function (fmt) {
//     var o = {
//         "M+": this.getMonth() + 1,  // 月份 
//         "d+": this.getDate(),       // 日
//         "h+": this.getHours(),      // 小时
//         "m+": this.getMinutes(),    // 分
//         "s+": this.getSeconds()     // 秒
//     };
//     if (/(y+)/.test(fmt))
//         fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
//     for (var k in o)
//         if (new RegExp("(" + k + ")").test(fmt))
//             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
//     return fmt;
// }

// function tick(){
//     const timer = <div>
//         <p>time:</p>
//         <p>{new Date().Format('yyyy-MM-dd hh:mm:ss')}</p>
//     </div>;
//     ReactDOM.render(timer, document.getElementById('root'));
// }
// setInterval(() => {
//     tick();
// }, 1000);

/*************      组件定义方式     *****************/
// 自定义组件首字母必须大写
// 用函数定义组件
// function Welcome(props){
//     return <h2>Welcome {props.name}</h2>
// }
// // 用 class 定义组件
// class Hello extends React.Component{
//     render(){
//         return <h2>Hello {this.props.name}</h2>;
//     }
// }

/*************      组件使用方式     *****************/
// 属性会传到组件的props对象上,首字母大写
// const welcomeElement = <Welcome name="return0"></Welcome>;
// ReactDOM.render(
//     welcomeElement,
//     document.getElementById('root')
// );
// const HelloElement = <Hello name="zc"></Hello>;
// ReactDOM.render(
//     HelloElement,
//     document.getElementById('root')
// );

/*************      组合组件     *****************/
function Welcome(props){
    return <h2>Welcome {props.name}</h2>;
}

function App(props){
    return <div>
        <Welcome name='aaaaa'></Welcome>
        <Welcome name='bbbbb'></Welcome>
        <Welcome name='ccccc'></Welcome>
    </div>
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);