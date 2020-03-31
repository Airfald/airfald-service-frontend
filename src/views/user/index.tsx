import React from 'react';
// import { common as cmallService } from 'api';
import './index.scss';
const jsQR = require("jsqr");

const UserList: React.FC<any> = props => {
  var img = new Image();
  img.src = 'http://oss-cn-hangzhou.aliyuncs.com/public-cli/free/d7776946862cac72486eb9254238cb741584436645.png';
  img.width = 500;
  img.height = 500;
  img.onload = function() {
    draw(this);
  };
  function draw(img) {
    var canvas: any = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, 300, 300);
    var imageData = ctx.getImageData(0, 0, 500, 500);
    console.log('imgaeData', imageData);
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    console.log(code);
}
  return (
    <div className='user'>
      user
      <canvas id="canvas" width="300" height="300"></canvas>
    </div>
  );
};

export default UserList;
