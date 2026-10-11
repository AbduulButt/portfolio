import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { portfolioData } from "../data/portfolio"

gsap.registerPlugin(ScrollTrigger)

const skillIcons: Record<string, string> = {
    "Next.js": "https://cdn.simpleicons.org/nextdotjs/ffffff",
    Flutter: "https://cdn.simpleicons.org/flutter",
    Supabase: "https://cdn.simpleicons.org/supabase",
    PostgreSQL: "https://cdn.simpleicons.org/postgresql",
    Dart: "https://cdn.simpleicons.org/dart",
    TypeScript: "https://cdn.simpleicons.org/typescript",
    React: "https://cdn.simpleicons.org/react",
    "AI Applications": "https://cdn.simpleicons.org/openai/ffffff",
    Python: "https://cdn.simpleicons.org/python",
    "Cloud Deployment": "https://cdn.simpleicons.org/cloudflare",
}

const Skills = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const { skills } = portfolioData

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

            headerTimeline.from(".skills__header > *", {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            })

            const cardsTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".skills__grid",
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            })

            cardsTimeline.fromTo(
                ".skill-card",
                {
                    y: 30,
                    opacity: 0,
                    scale: 0.96,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.65,
                    stagger: 0.055,
                    ease: "power3.out",
                    clearProps: "transform",
                }
            )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="skills"
            id="skills"
        >
            <div className="skills__header">
                <div>
                    <span className="section-label">
                        02 / TECHNOLOGIES
                    </span>

                    <h2 className="section-heading">
                        Tools behind
                        <br />
                        <span>the work.</span>
                    </h2>
                </div>

                <div className="skills__header-side">
                    <span className="skills__count">
                        {String(skills.length).padStart(2, "0")}
                    </span>

                    <p>
                        Technologies I use across web, mobile,
                        databases and AI applications.
                    </p>
                </div>
            </div>

            <div className="skills__grid">
                {skills.map((skill, index) => (
                    <article
                        className="skill-card"
                        key={skill.name}
                    >
                        <div className="skill-card__top">
                            <span className="skill-card__index">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="skill-card__category">
                                {skill.category}
                            </span>
                        </div>

                        <div className="skill-card__icon-wrap">
                            <img
                                src={skillIcons[skill.name]}
                                alt={`${skill.name} icon`}
                                className="skill-card__icon"
                            />
                        </div>

                        <div className="skill-card__bottom">
                            <h3>{skill.name}</h3>

                            <span className="skill-card__arrow">
                                ↗
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Skills