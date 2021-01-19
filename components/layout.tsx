import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Icon from 'awesome-react-icons'
import { Navigation } from 'react-minimal-side-navigation'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import { NavSidebar } from './NavSidebar'

const name = 'Kaeru'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <>
      <NavSidebar />
      {children}
    </>
  )
}
