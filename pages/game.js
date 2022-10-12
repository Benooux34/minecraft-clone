import { Physics } from '@react-three/cannon'
import { Html, Sky, useProgress } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Cubes } from '../components/Cubes'
import { Ground } from '../components/Ground'
import { Player } from '../components/Player'
import { POV } from '../components/POV'
import { ImExit } from "react-icons/im";
import Link from 'next/link'

function Loader() {
    const { progress } = useProgress()
    return <Html center>{progress} % loaded</Html>
}

function game() {
  return (
    <div className="h-screen overflow-hidden">
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

        <div className="absolute bottom-0 left-[50%] -translate-x-2/4">
            <img src="toolbar.png" alt="" />
        </div>

        {/* Menu Button */}
        <Link href="/">
            <div className='absolute top-5 left-5 cursor-pointer'>
                <ImExit fontSize={30} color='white' />
            </div>
        </Link>
    </div>
  )
}

export default game