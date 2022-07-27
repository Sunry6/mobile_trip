import SRYRequest from '../request'

export function getHomeHotSuggests() {
  return SRYRequest.get({
    url: '/home/hotSuggests',
  })
}
