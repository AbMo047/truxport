// Regenerates WebP versions of source images and the per-page Open Graph
// share images. Run with: node scripts/optimize-images.mjs
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url)) + '/..'
const assetsDir = path.join(root, 'src/assets/images')
const publicImagesDir = path.join(root, 'public/images')

const sourceImages = [
  'home-hero-highway.jpg',
  'services-hero.jpg',
  'trucks-hero.jpg',
  'about-warehouse.jpg',
  'team-jan.jpg',
  'team-maria.jpg',
  'team-piet.jpg'
]

const ogImages = [
  { source: 'home-hero-highway.jpg', out: 'og-home.jpg' },
  { source: 'services-hero.jpg', out: 'og-diensten.jpg' },
  { source: 'trucks-hero.jpg', out: 'og-vrachtwagens.jpg' },
  { source: 'about-warehouse.jpg', out: 'og-over-ons.jpg' }
]

async function run() {
  for (const file of sourceImages) {
    const input = path.join(assetsDir, file)
    const output = path.join(assetsDir, file.replace(/\.jpg$/, '.webp'))
    await sharp(input).webp({ quality: 78 }).toFile(output)
    console.log(`webp: ${file} -> ${path.basename(output)}`)
  }

  await mkdir(publicImagesDir, { recursive: true })
  for (const { source, out } of ogImages) {
    const input = path.join(assetsDir, source)
    const output = path.join(publicImagesDir, out)
    await sharp(input)
      .resize(1200, 630, { fit: 'cover' })
      .jpeg({ quality: 82 })
      .toFile(output)
    console.log(`og image: ${source} -> images/${out}`)
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
