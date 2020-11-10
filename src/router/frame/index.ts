/*
 * @Author: ouhefu
 * @Date: 2020-04-09 11:27:19
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-19 22:06:24
 * @Description:
 */
import ArticleHome from '../../views/article/home'
import ArticleSearchList from '../../views/article/search-list'
import ArticleEdit from '../../views/article/edit'

export default [
  {
    id: 'ArticleHome',
    path: '/article/home',
    remotePath: '',
    component: ArticleHome
  },
  {
    id: 'ArticleSearchList',
    path: '/article/search-list',
    remotePath: '',
    component: ArticleSearchList
  },
  {
    id: 'ArticleEdit',
    path: '/article/edit',
    remotePath: '',
    component: ArticleEdit
  }
];
