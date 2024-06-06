/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ywaXqGHs9Qn
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-100 dark:bg-gray-800 px-4 md:px-6 py-4 border-b">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <LuggageIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">Travel Souvenirs</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="font-medium hover:text-primary" prefetch={false}>
              Local Crafts
            </Link>
            <Link href="#" className="font-medium hover:text-primary" prefetch={false}>
              Apparel
            </Link>
            <Link href="#" className="font-medium hover:text-primary" prefetch={false}>
              Accessories
            </Link>
            <Link href="#" className="font-medium hover:text-primary" prefetch={false}>
              About
            </Link>
            <Link href="#" className="font-medium hover:text-primary" prefetch={false}>
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Discover Unique Travel Souvenirs</h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Explore a curated collection of handcrafted souvenirs from around the world.
              </p>
              <div className="flex gap-4">
                <Button>Shop Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              alt="Travel Souvenirs"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
              <Link href="#" className="font-medium hover:text-primary" prefetch={false}>
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Handwoven Basket</h3>
                  <p className="text-gray-500 dark:text-gray-400">Authentic local craft from a small village.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">$24.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Leather Tote Bag</h3>
                  <p className="text-gray-500 dark:text-gray-400">Handcrafted from premium leather.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">$49.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Ceramic Mug</h3>
                  <p className="text-gray-500 dark:text-gray-400">Handpainted with local designs.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">$12.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Product Image"
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Woven Scarf</h3>
                  <p className="text-gray-500 dark:text-gray-400">Vibrant colors and soft texture.</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">$29.99</span>
                    <Button size="sm">Add to Cart</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-8 border-t">
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-2">
            <h3 className="font-bold">About</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Discover unique travel souvenirs from around the world. Our curated collection features handcrafted items
              from local artisans.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Categories</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary" prefetch={false}>
                  Local Crafts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary" prefetch={false}>
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary" prefetch={false}>
                  Accessories
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Information</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary" prefetch={false}>
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary" prefetch={false}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary" prefetch={false}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Contact</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Email: info@travelsouvenirs.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LuggageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
      <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <path d="M10 20h4" />
      <circle cx="16" cy="20" r="2" />
      <circle cx="8" cy="20" r="2" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}