import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { portfolioData } from "../data/portfolio"

gsap.registerPlugin(ScrollTrigger)

const learningIcons: Record<string, string> = {
    WebGL: "https://cdn.simpleicons.org/webgl",
    "Three.js": "https://cdn.simpleicons.org/threedotjs/ffffff",
    "Advanced CSS": "https://cdn.simpleicons.org/css/663399",
    "AI Models": "https://cdn.simpleicons.org/openai/ffffff",
    "Machine Learning": "https://cdn.simpleicons.org/scikitlearn",
}

const Learning = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const { learning } = portfolioData

    useEffect(() => {
        const ctx = gsap.context(() => {
            const headerTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 78%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            })

            headerTimeline.from(".learning__header > *", {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            })

            const cardsTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".learning__grid",
                    start: "top 82%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            })

            cardsTimeline.from(".learning-item", {
                y: 35,
                opacity: 0,
                scale: 0.96,
                rotateY: 4,
                transformPerspective: 800,
                duration: 0.75,
                stagger: 0.08,
                ease: "power3.out",
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="learning"
            id="learning"
        >
            <div className="learning__header">
                <div>
                    <span className="section-label">
                        08 / CURRENTLY LEARNING
                    </span>

                    <h2 className="learning__title">
                        Goal&apos;s
                        <br />
                        <span>next.</span>
                    </h2>
                </div>

                <p>
                    Technologies and concepts I&apos;m currently
                    exploring to expand my development and
                    interactive web skills.
                </p>
            </div>

            <div className="learning__grid">
                {learning.map((item, index) => (
                    <article
                        className="learning-item tilt-card"
                        key={item}
                    >
                        <div className="learning-item__top">
                            <span>
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="learning-item__status">
                                LEARNING
                            </span>
                        </div>

                        <div className="learning-item__visual">
                            <div className="learning-item__icon-wrap">
                                <img
                                    src={learningIcons[item]}
                                    alt={`${item} icon`}
                                    className="learning-item__icon"
                                />
                            </div>

                            <span className="learning-item__ring" />
                        </div>

                        <div className="learning-item__bottom">
                            <h3>{item}</h3>

                            <span>↗</span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Learning