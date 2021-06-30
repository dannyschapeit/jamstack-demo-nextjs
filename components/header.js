import Link from 'next/link'
import { COMPANY_NAME } from '../lib/constants'

export default function Header() {
  return (
    <h2 className="">
      <Link href="/">
        <a className="hover:underline">{COMPANY_NAME} Blog</a>
      </Link>
      .
    </h2>
  )
}