import { useLoader } from '@react-three/fiber'
import { imgDirt } from '../public/dirt.jpg'
import { imgGlass } from '../public/glass.png'
import { imgGrass } from '../public/grass.jpg'
import { imgLog } from '../public/log.jpg'
import { imgWood } from '../public/wood.png'

import { TextureLoader } from 'three/src/loaders/TextureLoader'

const dirtTexture = useLoader(TextureLoader, imgDirt)
const glassTexture = useLoader(TextureLoader, imgGlass)
const grassTexture = useLoader(TextureLoader, imgGrass)
const logTexture = useLoader(TextureLoader, imgLog)
const woodTexture = useLoader(TextureLoader, imgWood)

export {
	dirtTexture,
	logTexture,
	grassTexture,
	glassTexture,
	woodTexture,
}