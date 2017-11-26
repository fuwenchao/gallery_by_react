require('normalize.css/normalize.css');
require('styles/App.css');
//获取图片相关数据
var imageDatas=require('../data/imageDatas.json')

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

//利用自执行函数，将图片名转换成URL
/*  imageDatas=(function genImageURL(imageDataArr){
  for(var i=0,j=imageDataArr.length;i<j;i++){
    var singleImageData=imageDataArr[i];
    singleImageData.imageURL=require('../images/'+singleImageData.filename);
    imageDataArr[i]=singleImageData;
  }
  return imageDataArr
})(imageDatas) 
 */
//imageDatas = genImageURL(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
		<span>Hello Fuwenchao</span>
      </div>
      
/* 	  <section className="stage">
      <section className="img_sec"></section>
      <nav className="controll_nav"></nav>
	  </section> */
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
