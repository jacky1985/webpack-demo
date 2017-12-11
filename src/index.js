import { cube } from './math.js';

// 配置里添加DefinePlugin插件后，任何位于 /src 的本地代码如都可以关联到 process.env.NODE_ENV 环境变量,
if (process.env.NODE_ENV !== 'production') {
   console.log('开发环境!');
}

function component() {
	
	var element = document.createElement('pre');

	element.innerHTML = [
	  'Hello webpack!',
	  '5 cubed is equal to ' + cube(5)
	].join('\n\n');

	return element;
}

document.body.appendChild(component());
