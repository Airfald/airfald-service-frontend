import React, { useState, useEffect } from 'react'
import { Button, Table } from 'antd'
import { connect } from 'react-redux';
import { commonType } from 'api/types'
import CSearchForm from 'components/common/c-search-form'
import CPagination from 'components/common/c-pagination'
import './index.scss';
import { Link, useHistory } from 'react-router-dom'

const SearchListCompotent: React.FC = props => {
  let history = useHistory();

  const [listParams, setListParams] = useState({
    pageNumber: 1,
    pageSize: 10
  })
  const [total, setTotal] = useState(100)
  const [searchFormData, setSearchFormData] = useState({})

  useEffect(() => {
    getListData()
  }, [listParams, searchFormData])

  const formData: Array<commonType.IFormData> = [
    {
      type: 'input',
      filedName: 'name',
      fieldDecoratorArgs: {
        initialValue: 'js'
      },
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

  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: '类型',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '发布时间',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <Button type="link">查看</Button>
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
    {
      key: '4',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  const getListData = () => {
    let data = Object.assign({}, listParams, searchFormData)
    // ... request
  }

  return (
    <div className='c-list search-list'>
      <CSearchForm
        formData={formData}
        onQuery={(data) => { setSearchFormData(data) }}
      ></CSearchForm>
      <Button type="primary" onClick={() => history.push('/article/edit')}>新建</Button>
      {/* table */}
      <Table
        pagination={false}
        columns={columns}
        dataSource={data}
        scroll={{ y: 100 }}
      ></Table>
      {/* pagniation */}
      <CPagination
        pageInfo={{...listParams, total}}
        onChange={(pageNumber, pageSize, type) => setListParams({ pageNumber, pageSize })}
      ></CPagination>
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
