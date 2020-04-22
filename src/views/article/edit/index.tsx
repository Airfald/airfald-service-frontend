import React from 'react'
import { Button } from 'antd'
import { Editor } from '@tinymce/tinymce-react';
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { EditorConfig } from '../constant'
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
         initialValue={EditorConfig.defaultInitialValue}
         init={EditorConfig}
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
