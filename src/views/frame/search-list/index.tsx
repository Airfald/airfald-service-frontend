import React from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux';
import './index.scss';

const SearchListCompotent: React.FC = props => {
  return (
    <div className='search-list'>
      search-List
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
