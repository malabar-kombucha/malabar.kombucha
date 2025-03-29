#!/bin/bash

# Create public directory if it doesn't exist
mkdir -p public

# Download hero background (kombucha brewing)
curl -L "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1920&q=80" -o public/hero-bg.jpg

# Download about brewing image
curl -L "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1200&q=80" -o public/about-brewing.jpg

# Download team member photos
curl -L "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" -o public/team-1.jpg
curl -L "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80" -o public/team-2.jpg
curl -L "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=80" -o public/team-3.jpg

# Download flavor images
curl -L "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80" -o public/flavor-1.jpg
curl -L "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80" -o public/flavor-2.jpg
curl -L "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80" -o public/flavor-3.jpg
curl -L "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80" -o public/flavor-4.jpg
curl -L "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80" -o public/flavor-5.jpg
curl -L "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&q=80" -o public/flavor-6.jpg

echo "All images have been downloaded successfully!" 