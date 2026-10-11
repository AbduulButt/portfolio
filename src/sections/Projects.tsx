import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { portfolioData } from "../data/portfolio"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const { projects } = portfolioData

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

            headerTimeline.from(".projects__header > *", {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            })

            const categoryTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".projects__content",
                    start: "top 82%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            })

            categoryTimeline.from(".projects__category", {
                x: -30,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: "power3.out",
            })

            const cardsTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".projects__content",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            })

            cardsTimeline.from(".project-card", {
                y: 40,
                opacity: 0,
                scale: 0.97,
                rotateX: 3,
                transformPerspective: 900,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const firstGroup = projects.slice(0, 2)
    const secondGroup = projects.slice(2)

    const renderProject = (
        project: (typeof projects)[number],
        index: number
    ) => {
        return (
            <article
                className="project-card tilt-card"
                key={project.id}
            >
                <div className="project-card__top">
                    <span className="project-card__number">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="project-card__type">
                        {project.type}
                    </span>
                </div>

                <div className="project-card__body">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>
                </div>

                <div className="project-card__tech">
                    {project.technologies.map((technology) => (
                        <span key={technology}>
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="project-card__actions">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="project-card__button"
                        >
                            <span>Live Demo</span>

                            <span>↗</span>
                        </a>
                    )}

                    {project.downloadUrl && (
                        <a
                            href={project.downloadUrl}
                            className="project-card__button"
                            download
                        >
                            <span>Download App</span>

                            <span>↓</span>
                        </a>
                    )}

                    {!project.liveUrl &&
                        !project.downloadUrl && (
                            <div className="project-card__status">
                                <span className="project-card__status-dot" />

                                Project Showcase
                            </div>
                        )}
                </div>

                <div className="project-card__glow" />
            </article>
        )
    }

    return (
        <section
            ref={sectionRef}
            className="projects"
            id="projects"
        >
            <div className="projects__header">
                <span className="section-label">
                    04 / SELECTED WORK
                </span>

                <h2 className="projects__title">
                    Featured Projects
                </h2>

                <p>
                    Practical applications across software,
                    mobile development and artificial intelligence.
                </p>
            </div>

            <div className="projects__content">
                <div className="projects__group">
                    <div className="projects__category">
                        <div className="projects__category-icon">
                            ◈
                        </div>

                        <div>
                            <h3>Software & AI</h3>

                            <p>
                                Applications focused on practical
                                workflows and intelligent experiences.
                            </p>
                        </div>

                        <span className="projects__category-line" />
                    </div>

                    <div className="projects__grid">
                        {firstGroup.map((project, index) =>
                            renderProject(project, index)
                        )}
                    </div>
                </div>

                <div className="projects__group">
                    <div className="projects__category">
                        <div className="projects__category-icon">
                            ◇
                        </div>

                        <div>
                            <h3>Mobile & Machine Learning</h3>

                            <p>
                                Exploring emergency technology,
                                mobile experiences and predictive AI.
                            </p>
                        </div>

                        <span className="projects__category-line" />
                    </div>

                    <div className="projects__grid">
                        {secondGroup.map((project, index) =>
                            renderProject(project, index + 2)
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects