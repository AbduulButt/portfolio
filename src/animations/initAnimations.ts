import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const initAnimations = () => {
    const cleanupFunctions: (() => void)[] = []

    /*
     * Very subtle global section fade.
     * We keep references only to the animations
     * created by THIS file.
     */
    const sections = gsap.utils.toArray<HTMLElement>(
        "main > section"
    )

    sections.forEach((section) => {
        const animation = gsap.fromTo(
            section,
            {
                opacity: 0.96,
            },
            {
                opacity: 1,
                ease: "none",

                scrollTrigger: {
                    trigger: section,
                    start: "top 95%",
                    end: "top 75%",
                    scrub: 0.4,
                },
            }
        )

        cleanupFunctions.push(() => {
            animation.scrollTrigger?.kill()
            animation.kill()
        })
    })

    /*
     * Page scroll progress
     */
    const updateScrollProgress = () => {
        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight

        const progress =
            maxScroll > 0
                ? window.scrollY / maxScroll
                : 0

        document.documentElement.style.setProperty(
            "--scroll-progress",
            progress.toString()
        )
    }

    updateScrollProgress()

    window.addEventListener(
        "scroll",
        updateScrollProgress,
        {
            passive: true,
        }
    )

    cleanupFunctions.push(() => {
        window.removeEventListener(
            "scroll",
            updateScrollProgress
        )
    })

    /*
     * Mouse position
     */
    const updatePointer = (
        event: PointerEvent
    ) => {
        const x =
            event.clientX / window.innerWidth

        const y =
            event.clientY / window.innerHeight

        document.documentElement.style.setProperty(
            "--mouse-x",
            x.toString()
        )

        document.documentElement.style.setProperty(
            "--mouse-y",
            y.toString()
        )
    }

    window.addEventListener(
        "pointermove",
        updatePointer,
        {
            passive: true,
        }
    )

    cleanupFunctions.push(() => {
        window.removeEventListener(
            "pointermove",
            updatePointer
        )
    })

    requestAnimationFrame(() => {
        ScrollTrigger.refresh()
    })

    return () => {
        cleanupFunctions.forEach((cleanup) => {
            cleanup()
        })
    }
}