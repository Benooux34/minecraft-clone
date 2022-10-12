import { useCallback, useEffect, useState } from "react"

function actionByKey(key) {
	const keyActionMap = {
		KeyW: 'Forward',
		KeyS: 'Backward',
		KeyA: 'Left',
		KeyD: 'Right',
		Space: 'jump',
		ShiftLeft: 'Sprint',
		Digit1: 'dirt',
		Digit2: 'grass',
		Digit3: 'glass',
		Digit4: 'wood',
		Digit5: 'log',
	}
	return keyActionMap[key]
}

export const Keyboard = () => {
    const [movements, setMovements] = useState({
        Forward: false,
        Backward: false,
        Left: false,
        Right: false,
        Jump: false,
		Sprint: false,
        Texture1: false,
        Texture2: false,
        Texture3: false,
        Texture4: false,
        Texture5: false,
    })

	const handleKeyDown = useCallback((e) => {
		const action = actionByKey(e.code)
		if (action) {
			setMovements((prev) => {
				return ({
					...prev,
					[action]: true
				})
			})
		}
	}, [])

	const handleKeyUp = useCallback((e) => {
		const action = actionByKey(e.code)
		if (action) {
			setMovements((prev) => {
				return ({
					...prev,
					[action]: false
				})
			})
		}
	}, [])

	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown)
		document.addEventListener('keyup', handleKeyUp)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [handleKeyDown, handleKeyUp])

    return movements

}