/** Auto-synced paths from public/category/template */
export const TEMPLATE_IMAGES = [
  "/category/template/aerial-photography-architectural-landscape-china-s-haian-city.jpg",
  "/category/template/aerial-photography-suzhou-jinji-lake-business-district.jpg",
  "/category/template/aerial-shot-city-buildings-toa-payoh-singapore-blue-sky.jpg",
  "/category/template/aerial-view-modern-buildings-city.jpg",
  "/category/template/amazing-view-cityscape-with-cloudy.jpg",
  "/category/template/angry-cow-park-downtown-goiania-goias-brazil-tourism-landmark.jpg",
  "/category/template/asian-cityscape.jpg",
  "/category/template/atlanta-georgia-usa-piedmont-park.jpg",
  "/category/template/attraction-landmark-financial-tower-downtown.jpg",
  "/category/template/bangkok-city-night-buildings-skyline-skyscrapers-city-night-landscape%20(1).jpg",
  "/category/template/bangkok-city-night-buildings-skyline-skyscrapers-city-night-landscape.jpg",
  "/category/template/bangkok-thailand-november-09-2014-bangkok-panoramic-view-from-baiyoke-tower-thailand.jpg",
  "/category/template/beautiful-bildings-with-lights-hong-kong.jpg",
  "/category/template/big-buildings.jpg",
  "/category/template/city-night-view.jpg",
  "/category/template/city-park-building-background.jpg",
  "/category/template/cityscape%20(1).jpg",
  "/category/template/cityscape.jpg",
  "/category/template/contemporary-apartment-buildings-stand-tall-against-majestic-backdrop-tian-shan-mountains-almaty-kazakhstan.jpg",
  "/category/template/curitiba-skyline-curitiba-parana-brazil-famous-place-city.jpg",
  "/category/template/day-city-view.jpg",
  "/category/template/dubai-united-arab-emirates-fabruary-04-greens-community-fabruary-04-2018-dubai.jpg",
  "/category/template/evening-view-placa-del-ajuntament-valencia.jpg",
  "/category/template/exterior-design-high-tower-building-is-modern-architectural-masterpiece.jpg",
  "/category/template/famous-shiodome-area-evening-time-minato-tokyo-japan.jpg",
  "/category/template/fukuoka-panorama-cityscape-from-fukuoka-tower-japan.jpg",
  "/category/template/group-tall-buildings-with-trees.jpg",
  "/category/template/illuminated-street-amidst-buildings-against-sky-night.jpg",
  "/category/template/miami-beach-florida-united-states-america.jpg",
  "/category/template/miami-beach-sunset-aerial-view-downtown-miami-skyline-dusk-south-beach-neon-lights-night-tropical-miami-waterfront-panorama-ocean-drive-art-deco-buildings-aerial-view-miami-coastline.jpg",
  "/category/template/minsk-streets-from-bird-s-eye-view.jpg",
  "/category/template/model-building-with-model-building-background.jpg",
  "/category/template/modern-architecture.jpg",
  "/category/template/modern-buildings.jpg",
  "/category/template/night-city-skyline.jpg",
  "/category/template/park-lujiazui-financial-centre-shanghai-china.jpg",
  "/category/template/peaceful-residential-area-modern-city.jpg",
  "/category/template/residential-highrise-buildings-amid-green-landscaped-gardens-modern-urban-housing-development.jpg",
  "/category/template/ribeirao-preto-sao-paulo-brazil-april-23-2022-night-images-city-ribeirao-preto-avenida-joao-fiusa-photos-closer-avenue-long-exposure%20(1).jpg",
  "/category/template/ribeirao-preto-sao-paulo-brazil-april-23-2022-night-images-city-ribeirao-preto-avenida-joao-fiusa-photos-closer-avenue-long-exposure.jpg",
  "/category/template/road-city-park-is-surrounded-by-green-trees.jpg",
  "/category/template/scyscraper-city-evening-sunset-view-concept.jpg",
  "/category/template/shanghai-night-with-urban-skyscrapers-lights.jpg",
  "/category/template/shanghai-urban-architecture.jpg",
  "/category/template/tall-apartment-buildings-with-modern-design.jpg",
  "/category/template/tall-brown-skyscrapers-green-palms-before-them.jpg",
  "/category/template/traffic-crossing-high-ways.jpg",
  "/category/template/tropical-location-canary-island-cactus-palm-minimal-travel-vibes.jpg",
  "/category/template/view-city-with-buildings-trees.jpg",
  "/category/template/view-mediterranean-waterfront-tel-aviv-israel.jpg"
] as const;

export function templateImage(index = 0): string {
  return TEMPLATE_IMAGES[((index % TEMPLATE_IMAGES.length) + TEMPLATE_IMAGES.length) % TEMPLATE_IMAGES.length];
}

export function templateImages(start: number, count: number): string[] {
  return Array.from({ length: count }, (_, i) => templateImage(start + i));
}
