import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux';
import SearchFormCompotent from 'components/common/search-form'
import './index.scss';

const SearchListCompotent: React.FC = props => {
  const formData = [
    {
      type: 'input'
    },
    {
      type: 'input'
    }
  ]

  return (
    <div className='search-list'>
      search-List
      <SearchFormCompotent
        formData={formData}
      ></SearchFormCompotent>
      {/* search-form */}
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
