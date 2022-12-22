import request from '@/utils/request'

// 初始化信息
export function getInfo() {
  return request({
    url: '/WMS/warehouse/getInfo',
    method: 'get',
  })
}

export function searchInfo(serialName,serialModel,serialSpec) {
    return request({
      url: `/WMS/warehouse/search/${serialName}/${serialModel}/${serialSpec}`,
      method: 'get',
    })
  }
