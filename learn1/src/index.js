import React from 'react';
import ReactDOM from 'react-dom';

const name = 'zcreturn0';
const element = <h2>Hello {name}</h2>;
ReactDOM.render(
    element,
    document.getElementById('root')
);

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

// 用函数定义组件
function welcome(props){
    return <h2>Welcome {props.name}</h2>
}
// 用 class 定义组件
class Hello extends React.Component{
    render(){
        return <h2>Hello {this.props.name}</h2>;
    }
}