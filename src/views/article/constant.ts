// http://tinymce.ax-z.cn/general/basic-setup.php
// https://www.tiny.cloud/docs/integrations/react/#tinymcereactintegrationquickstartguide

export const EditorConfig = {
  // selector: '#myTextarea',
  // width: 600,
  height: 400,
  language:'zh_CN',
  plugins: [
    'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
    'table emoticons template paste toc help'
  ],
  toolbar: 'codeformat | undo redo | styleselect | bold italic' +
    'bullist numlist | link image' +
    'forecolor backcolor',
  menu: {
    favs: { title: '常用', items: 'codeformat toc' }
  },
  menubar: 'favs file edit view insert format tools table help',
  // http://tinymce.ax-z.cn/general/upload-images.php
  // 此参数用于指定一个接受上传文件的后端处理程序地址，例如：
  // images_upload_url: '/demo/upimg.php',
  // 如果返回的地址是相对路径，还有一个参数images_upload_base_path，可以给相对路径指定它所相对的基本路径。
  // images_upload_base_path: '/demo',
  defaultInitialValue: '请输入'
}
