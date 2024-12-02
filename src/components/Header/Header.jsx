

import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, User, ShoppingBasket } from 'lucide-react'
import { Button } from "@/components/ui/button"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 md:py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold mr-4">Paradise Logo</span>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute top-16 left-0 right-0 bg-black md:static md:block`}>
            <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li><Link href="/competitions" className="hover:text-gray-300">Competitions</Link></li>
              <li><Link href="/previous-winners" className="hover:text-gray-300">Previous Winners</Link></li>
              <li><Link href="/draw-results" className="hover:text-gray-300">Draw Results</Link></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="flex items-center hover:text-gray-300">
              <span className="bg-white text-black rounded-full p-1 mr-2">
                <User className="h-4 w-4" />
              </span>
              <span className="hidden md:inline">Login</span>
            </Link>
            <Link href="/basket" className="flex items-center hover:text-gray-300">
              <span className="bg-white text-black rounded-full p-1 mr-2">
                <ShoppingBasket className="h-4 w-4" />
              </span>
              <span className="hidden md:inline">Basket</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

