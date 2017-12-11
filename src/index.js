// import { cube } from './math.js';
// import _ from 'lodash';

console.log('环境变量：',process.env.NODE_ENV)


function getComponent() {

	 return import(/* webpackChunkName: "lodash" */ 'lodash').then( _ => {

	   var element = document.createElement('div');
	   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	   return element;
	
	 }).catch(error => 'An error occurred while loading the component');

}

// 如果你已经通过类似 babel 的预处理器(pre-processor)启用 async 函数，可如下代替上个函数
// async function getComponent() {

// 	   var element = document.createElement('div');
// 	   const _ = await import( webpackChunkName: "lodash"  'lodash');
	
// 	   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
// 	   return element;
// }









getComponent().then(component => {
  document.body.appendChild(component);
})


