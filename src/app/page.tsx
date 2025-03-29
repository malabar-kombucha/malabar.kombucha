import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.jpg"
            alt="Kombucha brewing process"
            fill
            className="object-cover brightness-50"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
              Handcrafted Kombucha
              <br />
              Made with Love
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              Discover our premium, organic kombucha crafted with traditional methods and the finest ingredients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products" className="btn-primary text-center">
                Explore Our Flavors
              </Link>
              <Link href="/about" className="btn-secondary text-white border-white hover:bg-white/10 text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Why Choose Malabar Kombucha?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Organic Ingredients</h3>
              <p className="text-gray-600">We use only the finest organic tea leaves and natural ingredients in our brewing process.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Traditional Methods</h3>
              <p className="text-gray-600">Our kombucha is brewed using time-honored fermentation techniques for the perfect balance of flavors.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Health Benefits</h3>
              <p className="text-gray-600">Packed with probiotics and antioxidants, our kombucha supports your overall well-being.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Signature Flavors</h2>
          <p className="section-subtitle">Discover our handcrafted kombucha flavors, each with its own unique character and health benefits.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Classic Ginger",
                description: "A perfect balance of sweet and spicy with fresh ginger root",
                image: "/flavor-1.jpg"
              },
              {
                name: "Blueberry Mint",
                description: "Refreshing blend of wild blueberries and fresh mint leaves",
                image: "/flavor-2.jpg"
              },
              {
                name: "Turmeric Tonic",
                description: "Anti-inflammatory blend with fresh turmeric and citrus",
                image: "/flavor-3.jpg"
              }
            ].map((flavor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={flavor.image}
                    alt={flavor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    quality={85}
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{flavor.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{flavor.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link href="/products" className="btn-primary">
              View All Flavors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
