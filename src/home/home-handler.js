import globalState from '../globalState'
import { withGlobalState } from 'react-storefront/router'
import fetchCMSContent from './fetchCMSContent'

export default function homeHandler(params, request, response) {
  const html = fetchCMSContent()

  return withGlobalState(request, globalState, {
    title: 'React Storefront',
    cmsSlot: html
  })
}
