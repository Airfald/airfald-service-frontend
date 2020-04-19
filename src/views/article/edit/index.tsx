import React from 'react'
import { Button } from 'antd'
import { Editor } from '@tinymce/tinymce-react';
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import './index.scss';

// https://www.tiny.cloud/docs/integrations/react/#tinymcereactintegrationquickstartguide
const ArticleEditCompotent: React.FC = props => {
  let history = useHistory();

  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

  return (
    <div className='article-edit'>
      <Editor
         initialValue="<p>This is the initial content of the editor</p>"
         init={{
           height: 500,
           menubar: false,
           plugins: [
            'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
            'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
            'table emoticons template paste help'
           ],
           toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
         }}
         onEditorChange={handleEditorChange}
       />
    </div>
  );
};

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleEditCompotent)
