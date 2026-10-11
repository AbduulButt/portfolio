import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { portfolioData } from "../data/portfolio"

gsap.registerPlugin(ScrollTrigger)

const SkillLevels = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const { skills } = portfolioData

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header reveal
            gsap.from(".levels__header > *", {
                scrollTrigger: {
                    trigger: ".skill-levels",
                    start: "top 75%",
                    toggleActions: "play reverse play reverse",
                },

                y: 45,
                opacity: 0,

                duration: 0.8,
                stagger: 0.12,

                ease: "power3.out",
            })

            // Skill rows reveal
            gsap.from(".level-item", {
                scrollTrigger: {
                    trigger: ".levels__list",
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },

                y: 40,
                opacity: 0,

                duration: 0.7,
                stagger: 0.08,

                ease: "power3.out",
            })

            // Animate progress bars
            gsap.utils
                .toArray<HTMLElement>(".level-item__progress-fill")
                .forEach((bar) => {
                    const level = bar.dataset.level || "0"

                    gsap.fromTo(
                        bar,
                        {
                            width: "0%",
                        },
                        {
                            width: `${level}%`,

                            duration: 1.4,

                            ease: "power4.out",

                            scrollTrigger: {
                                trigger: bar,
                                start: "top 90%",
                                toggleActions: "play reverse play reverse",
                            },
                        }
                    )
                })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="skill-levels"
            id="expertise"
        >
            <div className="levels__header">
                <span className="section-label">
                    03 / EXPERTISE
                </span>

                <h2 className="section-heading">
                    Technical proficiency.
                </h2>

                <p className="section-description">
                    My current level across the technologies I use
                    while building web, mobile, database and
                    AI-powered applications.
                </p>
            </div>

            <div className="levels__list">
                {skills.map((skill, index) => (
                    <article
                        className="level-item"
                        key={skill.name}
                    >
                        <div className="level-item__number">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="level-item__main">
                            <div className="level-item__info">
                                <div>
                                    <span className="level-item__category">
                                        {skill.category}
                                    </span>

                                    <h3>{skill.name}</h3>
                                </div>

                                <strong>
                                    {skill.level}
                                    <span>%</span>
                                </strong>
                            </div>

                            <div className="level-item__progress">
                                <div
                                    className="level-item__progress-fill"
                                    data-level={skill.level}
                                />
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default SkillLevels