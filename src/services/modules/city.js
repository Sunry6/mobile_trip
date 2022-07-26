import SRYRequest from '../request'

export function getCityAllData() {
  return SRYRequest.get({
    url: '/city/all',
  })
}
