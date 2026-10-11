import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { portfolioData } from "../data/portfolio"

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const { experience } = portfolioData

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

            headerTimeline.from(".experience__header > *", {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            })

            const itemsTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".experience__list",
                    start: "top 82%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            })

            itemsTimeline.from(".experience__item", {
                y: 40,
                opacity: 0,
                scale: 0.97,
                rotateX: 3,
                transformPerspective: 900,
                duration: 0.85,
                stagger: 0.12,
                ease: "power3.out",
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="experience"
            id="experience"
        >
            <div className="experience__header">
                <span className="section-label">
                    06 / EXPERIENCE
                </span>

                <h2 className="experience__title">
                    Practical
                    <br />
                    <span>experience.</span>
                </h2>

                <p>
                    Experience gained through practical work,
                    collaboration and real-world development.
                </p>
            </div>

            <div className="experience__list">
                {experience.map((item, index) => (
                    <article
                        className="experience__item"
                        key={`${item.organization}-${index}`}
                    >
                        <div className="experience__top">
                            <span className="experience__number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="experience__date">
                                {item.start} — {item.end}
                            </span>
                        </div>

                        <div className="experience__main">
                            <div>
                                <span className="experience__label">
                                    ORGANIZATION
                                </span>

                                <h3>{item.organization}</h3>
                            </div>

                            <div>
                                <span className="experience__label">
                                    ROLE
                                </span>

                                <h4>{item.role}</h4>
                            </div>
                        </div>

                        {item.description && (
                            <p className="experience__description">
                                {item.description}
                            </p>
                        )}

                        <div className="experience__line">
                            <span />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Experience