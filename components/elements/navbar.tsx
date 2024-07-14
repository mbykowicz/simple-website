import Link from 'next/link'
import Container from '../container'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]
function Navbar() {
  return (
    <header className='h-20 flex items-center'>
      <nav className='mx-auto'>
        <ul className='flex gap-10'>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className='py-3 px-4 border-b-2 border-transparent font-medium uppercase text-xs tracking-wide text-gray-600 hover:text-gray-800 hover:border-gray-300 transition-colors'
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
