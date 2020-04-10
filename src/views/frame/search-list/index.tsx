import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux';
import SearchFormCompotent from 'components/common/search-form'
import './index.scss';
import { commonType } from 'api/types'

const SearchListCompotent: React.FC = props => {
  const formData: Array<commonType.IFormData> = [
    {
      type: 'input',
      filedName: 'name',
      compontentConfig: {
        compontentArgs: {
          placeholder: '文章名称'
        }
      }
    },
    {
      type: 'select',
      filedName: 'type',
      compontentConfig: {
        compontentArgs: {
          placeholder: '类型',
          mode: 'multiple'
        },
        options: [
          {
            id: 1,
            label: '前端',
            value: 1
          },
          {
            id: 2,
            label: '后端',
            value: 2
          },
          {
            id: 3,
            label: '开发语言',
            value: 3
          },
          {
            id: 4,
            label: '框架',
            value: 4
          }
        ]
      }
    },
    {
      type: 'select',
      filedName: 'time',
      compontentConfig: {
        compontentArgs: {
          placeholder: '预计阅读时间',
        },
        options: [
          {
            id: 1,
            label: '三分钟内',
            value: 1
          },
          {
            id: 2,
            label: '五分钟内',
            value: 2
          },
          {
            id: 3,
            label: '大于五分钟',
            value: 3
          }
        ]
      }
    },
    {
      type: 'cascader',
      filedName: 'region',
      compontentConfig: {
        compontentArgs: {
          placeholder: '发布地区',
          options: [
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [
                {
                  value: 'hangzhou',
                  label: 'Hangzhou',
                  children: [
                    {
                      value: 'xihu',
                      label: 'West Lake',
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    {
      type: 'RangePicker',
      filedName: 'range',
      compontentConfig: {
        compontentArgs: {
          // placeholder: ''
        }
      }
    },
    {
      type: 'DatePicker',
      filedName: 'date',
      compontentConfig: {
        compontentArgs: {
          placeholder: '请选择'
        }
      }
    },
  ]

  return (
    <div className='search-list'>
      <SearchFormCompotent
        formData={formData}
        onQuery={(data) => {
          console.log('data ', data)
        }}
      ></SearchFormCompotent>
      {/* table */}
      {/* pagniation */}
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
)(SearchListCompotent)
