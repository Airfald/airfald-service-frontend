import React from 'react'
import { Button, Form, Input } from 'antd'
import { Link, useHistory } from 'react-router-dom'
import { FormComponentProps } from 'antd/lib/form/Form'
import { Editor } from '@tinymce/tinymce-react'

import { connect } from 'react-redux';
import { EditorConfig } from '../constant'
import './index.scss';

interface IArticleEditProps extends FormComponentProps {
}

// https://www.tiny.cloud/docs/integrations/react/#tinymcereactintegrationquickstartguide
const ArticleEditCompotent: React.FC<IArticleEditProps> = props => {
  const history = useHistory();
  const {
    form: { getFieldDecorator, getFieldsValue }
  } = props

  const handleEditorChange = (content, editor) => {
    console.log('Content was updated:', content);
  }

  return (
    <div className='article-edit'>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 10 }}
        labelAlign="left">
        <Form.Item label="名称">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入名称' }],
          })(
            <Input placeholder="请输入名称" allowClear />
          )}
        </Form.Item>
        <Form.Item label="类型">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请输入类型' }],
          })(
            <Input placeholder="请输入类型" allowClear />
          )}
        </Form.Item>
        <Form.Item label="标签">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: '请选择标签' }],
          })(
            <Input placeholder="请输入名称" allowClear />
          )}
        </Form.Item>
        <Form.Item label="编辑文章">
          <Editor
            initialValue={EditorConfig.defaultInitialValue}
            init={EditorConfig}
            onEditorChange={handleEditorChange}
          />
        </Form.Item>
      </Form>
      <div className="article-edit__operation">
        <Button type="default">取消</Button>
        <Button type="primary" className="ml15">确定</Button>
      </div>
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
)(Form.create<IArticleEditProps>({ name: 'GrouponEditor' })(
  ArticleEditCompotent
))
