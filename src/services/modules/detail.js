import SRYRequest from '../request/'

export function getDetailInfos(houseId) {
  return SRYRequest.get({
    url: '/detail/infos',
    params: {
      houseId,
    },
  })
}
