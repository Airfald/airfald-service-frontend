import React, { useState } from 'react'
import { Input, Button } from 'antd';
import { toDataURL } from 'qrcode'
import { downloadWithUrl } from 'utils/file'

import './index.scss';
const jsQR = require("jsqr");

const { TextArea } = Input;

const ToolsQrcode: React.FC = props => {
  const [qrUrl, setQrUrl] = useState()
  const [codeInfo, setCodeInfo] = useState<string>()
  // 生成
  const [qrcodeValue, setQrcodeValue] = useState<string>()
  const [genUrl, setGenUrl] = useState<string>('')

  // toDataURL(canvasElement, text, [options], [cb(error, url)])
  // https://www.npmjs.com/package/qrcode#todataurltext-options-cberror-url
  const generaQr = () => {
    toDataURL(document.getElementById('genQrCanvas'), qrcodeValue, { width: 200 }, function (err, url) {
      console.log(url)
      !err && setGenUrl(url)
    })
  }

  // 进行解码
  // https://github.com/cozmo/jsQR
  // 'http://oss-cn-hangzhou.aliyuncs.com/public-cli/free/d7776946862cac72486eb9254238cb741584436645.png';
  const decodeQr = (src) => {
    let img = new Image();
    img.src = src;
    img.width = 500;
    img.height = 500;
    img.onload = function() {
      draw(this);
    }
    img.onerror = function(err) {
      console.log(setCodeInfo('加载失败'))
    }
  }

  const draw = (img) => {
    let canvas: any = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, 300, 300);
    let imageData = ctx.getImageData(0, 0, 300, 300);

    const info = jsQR(imageData.data, imageData.width, imageData.height);
    setCodeInfo(info.data)
  }

  /**
   * @description: 下载二维码
   * @param {type}
   * @return:
   */
  const downloadQrcode = () => {
    downloadWithUrl(genUrl ,'二维码')
  }

  return (
    <div className='tools-qrcode'>
      <div className="tools-qrcode__qrcode">
        <div>
          <TextArea
            style={{width: "300px"}}
            rows={4}
            placeholder=" 请输入文字内容"
            onChange={(e: any) => setQrcodeValue(e.target.value)}>
          </TextArea>
          <Button type="primary" onClick={() => generaQr()}>生产二维码</Button>
          {
            <div>
              <canvas
                id="genQrCanvas"
                style={{ width: '500px', height: '500px' }}
              />
              { genUrl && <img src={genUrl} alt=""/> }
              { genUrl && <Button type="primary" onClick={downloadQrcode}>下载</Button> }
              { genUrl && <a href={genUrl} download="二维码">下载</a> }
            </div>
          }
        </div>
      </div>

      <div className="tools-qrcode__decode">
        <div>
          <p>example: http://oss-cn-hangzhou.aliyuncs.com/public-cli/free/d449dfb192fc006d97ab086d60d4e1311586593711.png<br></br></p>
          输入二维码地址:
          <Input
            style={{width: "300px"}}
            size="large"
            placeholder="请输入带二维码的图片网址"
            onChange={(e: any) => setQrUrl(e.target.value)}>
          </Input>
          <Button type="primary" onClick={() => decodeQr(qrUrl)}>解码</Button>
          <div>解析结果: {codeInfo}</div>
        </div>
        <canvas id="canvas" width="300" height="300"></canvas>
      </div>
    </div>
  );
};

export default ToolsQrcode
