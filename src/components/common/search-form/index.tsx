/*
 * @Author: ouhefu
 * @Date: 2020-03-20 15:38:57
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-08 18:35:22
 * @Description: 封装统一搜索表单，使用数据驱动的方式进行
 */

import React, { forwardRef } from 'react'
import { Button, Input, Form, Select, Cascader, DatePicker } from 'antd'
import { FormComponentProps } from 'antd/lib/form/Form'
import { commonType } from 'api/types'
import './index.scss';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

interface ISearchFormProps extends FormComponentProps {
  formData: Array<commonType.IFormData>,
  onQuery: (searchFormData: object) => void
}

const SearchFormCompotent: React.FC<ISearchFormProps> = props => {
  const { onQuery } = props
  const formData = props.formData || []
  const { getFieldDecorator, getFieldValue, resetFields } = props.form

  // React 传递 ref 给 forwardRef 内函数 (props, ref) => ...，作为其第二个参数。
  // https://www.lizenghai.com/archives/45474.html
  const CustomInput = forwardRef((props: any, ref) => {
    const { filedName, fieldDecoratorArgs } = props
    const { compontentArgs } = props.compontentConfig
    const filedNameT: string = filedName

    return (
        <Input
          ref={ref}
          {
            ...compontentArgs
          }
        ></Input>
    )
  });

  const CustomSelect = forwardRef((props: any, ref) => {
    const { compontentArgs, options, keyField, valueField, labelField, width } = props.compontentConfig

    return (
        <Select
          ref={ref}
          {
            ...compontentArgs
          }
          style={{ width: width || '200px' }}
        >
          {
            (options || []).map(optionItem => (
              <Select.Option key={optionItem[keyField || 'id']} value={optionItem[valueField || 'value']}>
                {optionItem[labelField || 'label']}
              </Select.Option>
            ))
          }
        </Select>
    )
  });

  const CustomCascader = forwardRef((props: any, ref) => {
    const { compontentArgs } = props.compontentConfig

    return (
      <Form.Item>
        <Cascader
          ref={ref}
          {
            ...compontentArgs
          }
        />
      </Form.Item>
    )
  });

  const compontentMap = {
    'input': CustomInput,
    'select': CustomSelect,
    'cascader': CustomCascader,
  }

  // const CustomCompontent = compontentMap[item.type]

  {/* // <div key={index}>
  //   <CustomCompontent
  //     key={index}
  //     compontentConfig={item.compontentConfig}
  //     fieldDecoratorArgs={item.fieldDecoratorArgs}
  //     filedName={item.filedName}
  //   ></CustomCompontent>
  // </div> */}

  // =================================================================================================================
  // =================================================================================================================

  const handleOnQuery = () => {
    let searchformData: object = {}
    formData.forEach(formItem => {
      const value = getFieldValue(formItem.filedName)
      if (value) {
        searchformData[formItem.filedName] = value
      }
    })

    onQuery(searchformData)
  }

  return (
    <div className='search-form'>
       <Form layout="inline">
        {
          formData.map((item, index) => {
            return (
              <div key={index} className="form-item-wrapper">
                {
                  (item.type === 'input') &&
                  (<Form.Item>
                    {getFieldDecorator(item.filedName, item.fieldDecoratorArgs)(
                      <Input
                        {
                          ...item.compontentConfig.compontentArgs
                        }
                      ></Input>
                    )}
                  </Form.Item>)
                }

                {
                  (item.type === 'cascader') &&
                  (<Form.Item>
                    {getFieldDecorator(item.filedName, item.fieldDecoratorArgs)(
                      <Cascader
                        {
                          ...item.compontentConfig.compontentArgs
                        }
                      />
                    )}
                  </Form.Item>)
                }

                {
                  (item.type === 'RangePicker') &&
                  (<Form.Item>
                    {getFieldDecorator(item.filedName, item.fieldDecoratorArgs)(
                      <RangePicker
                        {
                          ...item.compontentConfig.compontentArgs
                        }
                      />
                    )}
                  </Form.Item>)
                }

                {
                  (item.type === 'DatePicker') &&
                  (<Form.Item>
                    {getFieldDecorator(item.filedName, item.fieldDecoratorArgs)(
                      <DatePicker
                        {
                          ...item.compontentConfig.compontentArgs
                        }
                      />
                    )}
                  </Form.Item>)
                }

                {(item.type === 'select') && (<Form.Item>
                  {getFieldDecorator(item.filedName, item.fieldDecoratorArgs)(
                    <Select
                      {
                        ...item.compontentConfig.compontentArgs
                      }
                      style={{ width: item.compontentConfig.width || '200px' }}
                    >
                      {
                        (item.compontentConfig.options || []).map(optionItem => (
                          <Select.Option key={optionItem[item.compontentConfig.keyField || 'id']} value={optionItem[item.compontentConfig.valueField || 'value']}>
                            {optionItem[item.compontentConfig.labelField || 'label']}
                          </Select.Option>
                        ))
                      }
                    </Select>
                  )}
                </Form.Item>)}
            </div>
            )
          })
        }
          <Form.Item>
            <Button
              type="primary"
              onClick={() => handleOnQuery()}
            >
              查询
            </Button>
            <Button onClick={() => resetFields()}>重置</Button>
          </Form.Item>
        </Form>
    </div>
  );
};

export default Form.create<ISearchFormProps>({ name: 'SearchFormCompotent' })(SearchFormCompotent);
