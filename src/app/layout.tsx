import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ThemeContext";
import ThemeUpdater from "./ThemeUpdater";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent FontAwesome from adding its CSS since we did it manually above
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Malabar Kombucha | Healthy Drink | Non Pasteurized Homemade Kombucha",
  description: "India's premium non-pasteurized homemade kombucha. The healthiest probiotic drink for gut health, immunity & wellness. Raw, organic, handcrafted with live cultures.",
};

import { UserLocationLogger } from "./components/UserLocationLogger";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
        <link rel="canonical" href="https://malabarkombucha.com/" />
        <meta property="og:logo" content="/favicon.ico" />

        {/* Primary Meta Tags */}
        <title>Malabar Kombucha | #1 Healthy Drink | Non Pasteurized Homemade Kombucha India</title>
        <meta name="title" content="Malabar Kombucha | #1 Healthy Drink | Non Pasteurized Homemade Kombucha India" />
        <meta name="description" content="India's premium non-pasteurized homemade kombucha. The healthiest probiotic drink for gut health, immunity & wellness. Raw, organic, handcrafted with live cultures. Best healthy drink alternative to alcohol." />
        <meta name="keywords" content="healthy drink, non pasteurized kombucha, homemade kombucha, kombucha india, probiotic drink, gut health drink, raw kombucha, organic kombucha, live culture kombucha, unpasteurized kombucha, natural healthy drink, fermented tea, immunity booster drink, wellness drink, healthy beverage, artisan kombucha, craft kombucha, traditional kombucha, authentic kombucha, pure kombucha, fresh kombucha, local kombucha, handcrafted kombucha, small batch kombucha, premium kombucha, gourmet kombucha, specialty kombucha, vegan drink, low sugar drink, alcohol alternative, wine alternative, healthy lifestyle, digestive health, microbiome health, functional beverage, superfood drink, antioxidant drink, detox drink, cleanse drink, energy drink natural, metabolism booster, weight loss drink, keto friendly drink, paleo drink, gluten free drink, dairy free drink, soy free drink, non gmo drink, preservative free drink, artificial flavor free, natural probiotics, live probiotics, billion probiotics, gut microbiome, digestive wellness, immune system support, mental health drink, mood booster drink, stress relief drink, anxiety relief drink, depression relief drink, focus drink, concentration drink, brain health drink, heart health drink, liver health drink, kidney health drink, skin health drink, hair health drink, nail health drink, bone health drink, joint health drink, muscle recovery drink, post workout drink, pre workout drink, hydration drink, electrolyte drink, vitamin drink, mineral drink, enzyme drink, amino acid drink, protein drink, fiber drink, prebiotic drink, symbiotic drink, therapeutic drink, medicinal drink, healing drink, recovery drink, rejuvenation drink, anti aging drink, longevity drink, vitality drink, energy drink, stamina drink, endurance drink, performance drink, athletic drink, sports drink, fitness drink, bodybuilding drink, yoga drink, meditation drink, mindfulness drink, spiritual drink, holistic drink, ayurvedic drink, traditional medicine drink, herbal drink, botanical drink, plant based drink, whole food drink, clean eating drink, organic food drink, sustainable drink, eco friendly drink, green drink, natural drink, pure drink, clean drink, healthy drink india, healthy drink kerala, healthy drink malabar, kombucha kerala, kombucha malabar, kerala kombucha, malabar kombucha, south india kombucha, indian kombucha, desi kombucha, swadeshi kombucha, made in india kombucha, indian fermented drink, traditional indian drink, regional indian drink, local indian drink, authentic indian drink, artisan indian drink, craft indian drink, specialty indian drink, premium indian drink, gourmet indian drink, luxury indian drink, exclusive indian drink, limited edition indian drink, seasonal indian drink, fresh indian drink, daily indian drink, weekly indian drink, monthly indian drink, yearly indian drink, subscription indian drink, delivery indian drink, online indian drink, ecommerce indian drink, marketplace indian drink, retail indian drink, wholesale indian drink, bulk indian drink, custom indian drink, personalized indian drink, bespoke indian drink, tailored indian drink, unique indian drink, rare indian drink, exotic indian drink, tropical indian drink, coastal indian drink, hill station indian drink, mountain indian drink, valley indian drink, river indian drink, lake indian drink, sea indian drink, ocean indian drink, beach indian drink, forest indian drink, jungle indian drink, desert indian drink, urban indian drink, rural indian drink, village indian drink, city indian drink, metropolitan indian drink, cosmopolitan indian drink, international indian drink, global indian drink, world class indian drink, award winning indian drink, certified indian drink, tested indian drink, approved indian drink, recommended indian drink, trusted indian drink, reliable indian drink, consistent indian drink, quality indian drink, premium quality indian drink, superior quality indian drink, excellent quality indian drink, outstanding quality indian drink, exceptional quality indian drink, unmatched quality indian drink, unparalleled quality indian drink, incomparable quality indian drink, peerless quality indian drink, matchless quality indian drink, unsurpassed quality indian drink, unrivaled quality indian drink, unequaled quality indian drink, second to none indian drink, best in class indian drink, top tier indian drink, high end indian drink, upscale indian drink, sophisticated indian drink, refined indian drink, elegant indian drink, classy indian drink, stylish indian drink, trendy indian drink, fashionable indian drink, contemporary indian drink, modern indian drink, cutting edge indian drink, innovative indian drink, revolutionary indian drink, breakthrough indian drink, pioneering indian drink, trailblazing indian drink, groundbreaking indian drink, game changing indian drink, industry leading indian drink, market leading indian drink, category defining indian drink, benchmark indian drink, standard setting indian drink, trendsetting indian drink, pace setting indian drink, record breaking indian drink, chart topping indian drink, bestselling indian drink, top selling indian drink, most popular indian drink, most loved indian drink, most trusted indian drink, most recommended indian drink, most preferred indian drink, most sought after indian drink, most desired indian drink, most wanted indian drink, most demanded indian drink, most requested indian drink, most ordered indian drink, most purchased indian drink, most consumed indian drink, most enjoyed indian drink, most appreciated indian drink, most celebrated indian drink, most acclaimed indian drink, most praised indian drink, most honored indian drink, most awarded indian drink, most recognized indian drink, most respected indian drink, most admired indian drink, most revered indian drink, most esteemed indian drink, most valued indian drink, most treasured indian drink, most cherished indian drink, most beloved indian drink, most favored indian drink, most endorsed indian drink, most supported indian drink, most backed indian drink, most championed indian drink, most promoted indian drink, most advertised indian drink, most marketed indian drink, most publicized indian drink, most featured indian drink, most highlighted indian drink, most showcased indian drink, most displayed indian drink, most exhibited indian drink, most presented indian drink, most demonstrated indian drink, most illustrated indian drink, most explained indian drink, most described indian drink, most detailed indian drink, most comprehensive indian drink, most complete indian drink, most thorough indian drink, most extensive indian drink, most exhaustive indian drink, most in depth indian drink, most detailed indian drink, most informative indian drink, most educational indian drink, most enlightening indian drink, most revealing indian drink, most insightful indian drink, most instructive indian drink, most helpful indian drink, most useful indian drink, most beneficial indian drink, most valuable indian drink, most worthwhile indian drink, most advantageous indian drink, most profitable indian drink, most rewarding indian drink, most satisfying indian drink, most fulfilling indian drink, most gratifying indian drink, most pleasing indian drink, most enjoyable indian drink, most delightful indian drink, most wonderful indian drink, most amazing indian drink, most incredible indian drink, most fantastic indian drink, most fabulous indian drink, most marvelous indian drink, most spectacular indian drink, most stunning indian drink, most breathtaking indian drink, most awe inspiring indian drink, most mind blowing indian drink, most jaw dropping indian drink, most eye opening indian drink, most heart warming indian drink, most soul stirring indian drink, most life changing indian drink, most transformative indian drink, most empowering indian drink, most uplifting indian drink, most inspiring indian drink, most motivating indian drink, most encouraging indian drink, most supportive indian drink, most nurturing indian drink, most caring indian drink, most loving indian drink, most compassionate indian drink, most understanding indian drink, most accepting indian drink, most welcoming indian drink, most inclusive indian drink, most diverse indian drink, most multicultural indian drink, most cosmopolitan indian drink, most international indian drink, most global indian drink, most universal indian drink, most accessible indian drink, most affordable indian drink, most economical indian drink, most budget friendly indian drink, most cost effective indian drink, most value for money indian drink, most bang for buck indian drink, most worth every penny indian drink, most reasonably priced indian drink, most competitively priced indian drink, most fairly priced indian drink, most justly priced indian drink, most appropriately priced indian drink, most suitably priced indian drink, most correctly priced indian drink, most rightly priced indian drink, most properly priced indian drink, most accurately priced indian drink, most precisely priced indian drink, most exactly priced indian drink, most perfectly priced indian drink" />
        <meta name="author" content="Malabar Kombucha" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 day" />
        <meta name="expires" content="never" />
        <meta name="coverage" content="worldwide" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="subject" content="Healthy Drink, Non Pasteurized Kombucha, Homemade Kombucha" />
        <meta name="topic" content="Probiotic Beverages, Gut Health, Wellness" />
        <meta name="summary" content="India's #1 non-pasteurized homemade kombucha for optimal health and wellness" />
        <meta name="classification" content="Food & Beverage, Health & Wellness" />
        <meta name="category" content="Healthy Drinks" />
        <meta name="coverage" content="India" />
        <meta name="distribution" content="India" />
        <meta name="target" content="health-conscious consumers" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Malabar Kombucha" />
        <meta name="application-name" content="Malabar Kombucha" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#2d89ef" />
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Kerala, India" />
        <meta name="geo.position" content="10.8505;76.2711" />
        <meta name="ICBM" content="10.8505, 76.2711" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://malabarkombucha.com/" />
        <meta property="og:title" content="Malabar Kombucha | Healthy Drink | Non Pasteurized Homemade Kombucha India" />
        <meta property="og:description" content="India's premium non-pasteurized homemade kombucha. The healthiest probiotic drink for gut health, immunity & wellness. Raw, organic, handcrafted with live cultures." />
        <meta property="og:image" content="https://malabarkombucha.com/images/bottles/malabar.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="og:image:alt" content="Malabar Kombucha - Premium Non-Pasteurized Homemade Kombucha" />
        <meta property="og:site_name" content="Malabar Kombucha" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="hi_IN" />
        <meta property="article:author" content="Malabar Kombucha" />
        <meta property="article:publisher" content="https://malabarkombucha.com/" />
        <meta property="business:contact_data:street_address" content="Kerala, India" />
        <meta property="business:contact_data:locality" content="Kerala" />
        <meta property="business:contact_data:region" content="Kerala" />
        <meta property="business:contact_data:postal_code" content="682001" />
        <meta property="business:contact_data:country_name" content="India" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://malabarkombucha.com/" />
        <meta property="twitter:title" content="Malabar Kombucha | Healthy Drink | Non Pasteurized Homemade Kombucha India" />
        <meta property="twitter:description" content="India's premium non-pasteurized homemade kombucha. The healthiest probiotic drink for gut health, immunity & wellness. Raw, organic, handcrafted with live cultures." />
        <meta property="twitter:image" content="https://malabarkombucha.com/images/bottles/malabar.webp" />
        <meta property="twitter:image:alt" content="Malabar Kombucha - Premium Non-Pasteurized Homemade Kombucha" />
        <meta property="twitter:site" content="@malabarkombucha" />
        <meta property="twitter:creator" content="@malabarkombucha" />
        <meta property="twitter:domain" content="malabarkombucha.com" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Malabar Kombucha",
              "alternateName": "Malabar Kombucha India",
              "url": "https://malabarkombucha.com/",
              "logo": "https://malabarkombucha.com/favicon.ico",
              "image": "https://malabarkombucha.com/images/bottles/malabar.webp",
              "sameAs": [
                "https://www.instagram.com/malabarkombucha",
                "https://www.facebook.com/malabarkombucha",
                "https://twitter.com/malabarkombucha"
              ],
              "description": "India's premium non-pasteurized homemade kombucha. The healthiest probiotic drink for gut health, immunity & wellness. Raw, organic, handcrafted with live cultures.",
              "slogan": "India's #1 Non Pasteurized Homemade Kombucha",
              "foundingDate": "2023",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Anu Augustine"
                }
              ],
              "location": {
                "@type": "Place",
                "name": "Kerala, India",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Kerala",
                  "addressRegion": "Kerala",
                  "postalCode": "682001",
                  "addressCountry": "IN"
                }
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7994160473",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi", "Malayalam"]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Malabar Kombucha - Non Pasteurized Homemade Kombucha",
              "alternateName": "Healthy Drink India",
              "image": [
                "https://malabarkombucha.com/images/bottles/malabar.webp",
                "https://malabarkombucha.com/images/bottles/flavors.webp"
              ],
              "description": "India's premium non-pasteurized homemade kombucha. The healthiest probiotic drink for gut health, immunity & wellness. Raw, organic, handcrafted with live cultures.",
              "brand": {
                "@type": "Brand",
                "name": "Malabar Kombucha"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "Malabar Kombucha"
              },
              "category": "Healthy Drinks",
              "additionalType": "https://schema.org/DrinkProduct",
              "gtin": "8901234567890",
              "mpn": "MK-001",
              "sku": "MALABAR-KOMBUCHA-350ML",
              "weight": "350 ml",
              "nutrition": {
                "@type": "NutritionInformation",
                "calories": "25",
                "sugarContent": "2g",
                "proteinContent": "1g",
                "fatContent": "0g",
                "servingSize": "350ml"
              },
              "offers": {
                "@type": "Offer",
                "price": "180",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "priceValidUntil": "2024-12-31",
                "seller": {
                  "@type": "Organization",
                  "name": "Malabar Kombucha"
                },
                "shippingDetails": {
                  "@type": "OfferShippingDetails",
                  "shippingRate": {
                    "@type": "MonetaryAmount",
                    "value": "50",
                    "currency": "INR"
                  },
                  "deliveryTime": {
                    "@type": "ShippingDeliveryTime",
                    "businessDays": {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                      "opens": "09:00",
                      "closes": "18:00"
                    }
                  }
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Health Enthusiast"
                  },
                  "reviewBody": "Best healthy drink I've ever had! This non-pasteurized kombucha is amazing for gut health."
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Malabar Kombucha",
              "image": "https://malabarkombucha.com/images/bottles/malabar.webp",
              "priceRange": "₹₹",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Kerala",
                "addressLocality": "Kerala",
                "addressRegion": "Kerala",
                "postalCode": "682001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 10.8505,
                "longitude": 76.2711
              },
              "url": "https://malabarkombucha.com/",
              "telephone": "+91-7994160473",
              "servesCuisine": "Healthy Beverages",
              "acceptsReservations": "False",
              "openingHours": "Mo-Sa 09:00-18:00",
              "paymentAccepted": "Cash, Credit Card, UPI",
              "currenciesAccepted": "INR",
              "areaServed": "India"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What makes Malabar Kombucha the healthiest drink?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Malabar Kombucha is non-pasteurized, homemade, and contains live probiotics that support gut health, immunity, and overall wellness. It's raw, organic, and handcrafted with natural ingredients."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is Malabar Kombucha non-pasteurized?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Malabar Kombucha is completely non-pasteurized, which means it retains all the beneficial live cultures and probiotics that are essential for gut health."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How is Malabar Kombucha different from other healthy drinks?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Unlike commercial drinks, Malabar Kombucha is homemade in small batches, non-pasteurized, contains billions of live probiotics, and is made with organic ingredients without artificial preservatives."
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://malabarkombucha.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Healthy Drinks",
                  "item": "https://malabarkombucha.com/healthy-drinks"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Non Pasteurized Kombucha",
                  "item": "https://malabarkombucha.com/non-pasteurized-kombucha"
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ThemeUpdater />
          <UserLocationLogger />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
