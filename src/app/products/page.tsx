import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  const products = [
    {
      name: "Classic Ginger",
      description: "A perfect balance of sweet and spicy with fresh ginger root",
      image: "/flavor-1.jpg",
      price: "$4.99",
      benefits: ["Digestive support", "Anti-inflammatory", "Natural energy boost"]
    },
    {
      name: "Blueberry Mint",
      description: "Refreshing blend of wild blueberries and fresh mint leaves",
      image: "/flavor-2.jpg",
      price: "$4.99",
      benefits: ["Antioxidant-rich", "Mental clarity", "Cooling refreshment"]
    },
    {
      name: "Turmeric Tonic",
      description: "Anti-inflammatory blend with fresh turmeric and citrus",
      image: "/flavor-3.jpg",
      price: "$4.99",
      benefits: ["Anti-inflammatory", "Immune support", "Digestive health"]
    },
    {
      name: "Lavender Lemon",
      description: "Calming blend of organic lavender and fresh lemon",
      image: "/flavor-4.jpg",
      price: "$4.99",
      benefits: ["Stress relief", "Sleep support", "Mental wellness"]
    },
    {
      name: "Mango Habanero",
      description: "Tropical sweetness meets spicy kick",
      image: "/flavor-5.jpg",
      price: "$4.99",
      benefits: ["Metabolism boost", "Immune support", "Energy enhancement"]
    },
    {
      name: "Rose Hibiscus",
      description: "Floral notes with a hint of tartness",
      image: "/flavor-6.jpg",
      price: "$4.99",
      benefits: ["Heart health", "Skin wellness", "Digestive balance"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="section-title text-center">Our Products</h1>
          <p className="section-subtitle">
            Discover our handcrafted kombucha flavors, each with unique benefits and character
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={85}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Benefits:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {product.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-700">{product.price}</span>
                    <button className="btn-primary">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Why Choose Our Kombucha?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Organic Ingredients</h3>
              <p className="text-gray-600">All our ingredients are certified organic and carefully selected for quality.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Proper Fermentation</h3>
              <p className="text-gray-600">Each batch is fermented for the perfect amount of time to ensure optimal taste and benefits.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Packaging</h3>
              <p className="text-gray-600">Our bottles are made from recycled glass and our labels are eco-friendly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 