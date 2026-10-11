export const initTilt = () => {
    const tiltElements = document.querySelectorAll<HTMLElement>(
        ".tilt-card"
    )

    const cleanupFunctions: (() => void)[] = []

    tiltElements.forEach((element) => {
        const handleMove = (event: PointerEvent) => {
            const rect = element.getBoundingClientRect()

            const x = event.clientX - rect.left
            const y = event.clientY - rect.top

            const centerX = rect.width / 2
            const centerY = rect.height / 2

            const rotateY =
                ((x - centerX) / centerX) * 4

            const rotateX =
                ((y - centerY) / centerY) * -4

            element.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-3px)
      `
        }

        const handleLeave = () => {
            element.style.transform = `
        perspective(900px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0px)
      `
        }

        element.addEventListener(
            "pointermove",
            handleMove
        )

        element.addEventListener(
            "pointerleave",
            handleLeave
        )

        cleanupFunctions.push(() => {
            element.removeEventListener(
                "pointermove",
                handleMove
            )

            element.removeEventListener(
                "pointerleave",
                handleLeave
            )
        })
    })

    return () => {
        cleanupFunctions.forEach((cleanup) => {
            cleanup()
        })
    }
}