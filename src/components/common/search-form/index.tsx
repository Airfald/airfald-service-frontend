import React from 'react'
import { Button, Input } from 'antd'
import './index.scss';

const SearchFormCompotent: React.FC<any> = props => {
  const { formData } = props

  const CustomInput = (props: any) => {
    const { args } = props
    return (
      <Input
        {
          ...args
        }
      ></Input>
    )
  }

  const compontentMap = {
    'input': CustomInput
  }

  return (
    <div className='search-form'>
      {
        formData.map((item, index) => {
          const CustomCompontent = compontentMap[item.type]

          return (
            <CustomCompontent
              args={item.args}
            ></CustomCompontent>
          )
        })
      }
    </div>
  );
};

export default SearchFormCompotent
