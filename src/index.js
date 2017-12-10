import _ from 'lodash';
import printMe from './print.js';
// import './style.css';
// import Icon from './icon.png';
// import Data from './data.xml';


function component() {
	
	var element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	// element.classList.add('hello');
	// var myImg = new Image();
	// myImg.src = Icon; 
	// element.appendChild(myImg);
	// console.log(Data);

	var btn = document.createElement('button');
	btn.innerHTML='click me';
	btn.onclick= printMe;
	element.appendChild(btn)

	return element;
}

document.body.appendChild(component());