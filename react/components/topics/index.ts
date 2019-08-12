import { Topic } from '../../typings/custom'

import Cookie from './Cookies'
import TermsAndConditions from "./TermsAndConditions";

const topics: Topic[] = [
  {
    Component: Cookie,
    name: 'Cookie Policy',
    slug: 'cookie-policy',
  },
  {
    Component: TermsAndConditions,
    name: 'Terms and Conditions',
    slug: 'terms-and-conditions',
  }
]

export default topics
