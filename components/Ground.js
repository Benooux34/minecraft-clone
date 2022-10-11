import { usePlane } from "@react-three/cannon"
import { useLoader } from "@react-three/fiber"
import { NearestFilter, RepeatWrapping } from "three"
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0]
    }))

    const groundTexture = useLoader(TextureLoader, 'grass.jpg')
    groundTexture.magFilter = NearestFilter
    groundTexture.wrapS = RepeatWrapping
    groundTexture.wrapT = RepeatWrapping
    groundTexture.repeat.set(100, 100)

    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshStandardMaterial attach='material' map={groundTexture} />
        </mesh>
    )
}