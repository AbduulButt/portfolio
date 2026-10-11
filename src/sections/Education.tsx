import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { portfolioData } from "../data/portfolio"

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const { education } = portfolioData

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

            headerTimeline.from(".education__header > *", {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            })

            gsap.fromTo(
                ".education__timeline-line",
                {
                    scaleY: 0,
                },
                {
                    scaleY: 1,
                    duration: 1.4,
                    ease: "power3.out",

                    scrollTrigger: {
                        trigger: ".education__timeline",
                        start: "top 80%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            )

            const itemsTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".education__timeline",
                    start: "top 78%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            })

            itemsTimeline.from(".education__item", {
                x: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.18,
                ease: "power3.out",
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="education"
            id="education"
        >
            <div className="education__header">
                <span className="section-label">
                    05 / EDUCATION
                </span>

                <h2 className="education__title">
                    Academic
                    <br />
                    <span>journey.</span>
                </h2>

                <p>
                    My academic background in software engineering
                    and pre-engineering.
                </p>
            </div>

            <div className="education__timeline">
                <div className="education__timeline-line" />

                {education.map((item, index) => (
                    <article
                        className="education__item"
                        key={`${item.institution}-${item.degree}`}
                    >
                        <div className="education__marker">
                            <span />
                        </div>

                        <div className="education__number">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="education__content">
                            <div className="education__meta">
                                <span>
                                    {item.start} — {item.end}
                                </span>

                                <span
                                    className={`education__status ${item.status === "In Progress"
                                            ? "education__status--active"
                                            : ""
                                        }`}
                                >
                                    {item.status}
                                </span>
                            </div>

                            <h3>{item.degree}</h3>

                            <p>{item.institution}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Education