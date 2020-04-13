/*
 * @Author: ouhefu
 * @Date: 2020-04-13 10:12:28
 * @LastEditors: ouhefu
 * @LastEditTime: 2020-04-13 10:43:01
 * @Description:
 */
export function downloadFile(fileData: Blob, fileName: string = '') {
  if (!fileData) return
  const url = URL.createObjectURL(fileData)
  downloadWithUrl(url, fileName)
}

/**
 * @description: 通过url进行下载, 只有download属性a标签才可以下载并且可以设置名称。
 * @param {type}
 * @return:
 */
export function downloadWithUrl(url: string, fileName: string = '') {
  if (!url) {
    return
  }

  const fragment = document.createDocumentFragment()
  const link = document.createElement('a')
  link.href = url
  link.download = fileName
  link.style.display = 'none'
  fragment.appendChild(link)
  link.click()
  URL.revokeObjectURL(link.href)
  fragment.removeChild(link)
}
