import SRYRequest from '../request'

export function getHomeHotSuggests() {
  return SRYRequest.get({
    url: '/home/hotSuggests',
  })
}

export function getHomeCategories() {
  return SRYRequest.get({
    url: '/home/categories',
  })
}

export function getHomeHouseList(currentPage) {
  return SRYRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage,
    },
  })
}
