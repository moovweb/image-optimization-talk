import globalState from '../globalState'
import { withGlobalState } from 'react-storefront/router'
import fetchCMSContent from './fetchCMSContent'
import parse from 'react-storefront-extensions/html/parse'

export default async function homeHandler(params, request, response) {
  const html = parse(fetchCMSContent())
  const images = html.$('img')

  await images.optimizeImages({
    width: 500,
    format: 'webp',
    preventLayoutInstability: true
  })

  images.slice(2).lazyLoadImages()

  return withGlobalState(request, globalState, {
    title: 'React Storefront',
    cmsSlot: $.html(html)
  })
}
