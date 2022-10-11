import { useFrame, useThree } from "@react-three/fiber"
import { useSphere } from "@react-three/cannon"
import { useEffect, useRef } from "react"
import { Vector3 } from "three"
import { Keyboard } from "../hooks/Keyboard"

const forceJump = 4
const speed = 4

export const Player = () => {
    const actions = Keyboard()
    const { camera } = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [0, 1, 0]
    }))

    const pos = useRef([0, 0, 0])
    const vel = useRef([0, 0, 0])

    useEffect(() => {
        api.position.subscribe((p) => pos.current = p)
        api.velocity.subscribe((v) => vel.current = v)
    }, [api.position, api.velocity])

    useFrame(() => {
        camera.position.copy(new Vector3([pos.current[0]], [pos.current[1]], [pos.current[2]]))

        const direction = new Vector3()

        const frontVector = new Vector3(
            0,
            0,
            (actions.Backward ? 1 : 0) - (actions.Forward ? 1 : 0)
        )
        const sideVector = new Vector3(
            (actions.Left ? 1 : 0) - (actions.Right ? 1 : 0),
            0,
            0
        )

        direction
            .subVectors(frontVector, sideVector)
            .normalize()
            .multiplyScalar(speed)
            .applyEuler(camera.rotation)

        api.velocity.set(direction.x, vel.current[1], direction.z)

        if (actions.jump && Math.abs(vel.current[1]) < 0.01) {
            api.velocity.set(vel.current[0], forceJump, vel.current[2])
        }
    })

    return (
        <mesh ref={ref}></mesh>
    )
}
