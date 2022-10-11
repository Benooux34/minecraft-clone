import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import { Suspense } from 'react'
import { Html, useProgress } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from '../components/Ground'
import { Player } from '../components/Player'
import { POV } from '../components/POV'
import { Cubes } from '../components/Cubes'

function Loader() {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

export default function Home() {
  return (
    <div className='h-screen overflow-hidden'>
      <Head>
        <title>Minecraft</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon.webp" />
      </Head>

      <Canvas>
        <Suspense fallback={<Loader />}>
          <Sky sunPosition={[100, 100, 20]} />
          <ambientLight intensity={0.5} />
          <POV />
          <Physics>
            <Ground />
            <Player />
            <Cubes />
          </Physics>
        </Suspense>
      </Canvas>

      <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 text-white text-4xl">
        +
      </div>

    </div>
  )
}
