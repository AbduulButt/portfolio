import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { portfolioData } from "../data/portfolio"
import profileImage from "../assets/profile.png"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const sectionRef = useRef<HTMLElement | null>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            /*
             * ENTRANCE ANIMATION
             * Replays whenever About enters/leaves the viewport.
             */
            const introTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    end: "bottom 25%",
                    toggleActions: "play reverse play reverse",
                },
            })

            introTimeline
                .from(".about__badge", {
                    y: 20,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power3.out",
                })

                .from(
                    ".about__title-line",
                    {
                        y: 80,
                        opacity: 0,
                        duration: 1,
                        stagger: 0.12,
                        ease: "power4.out",
                    },
                    "-=0.45"
                )
                .from(
                    ".about__role",
                    {
                        y: 20,
                        opacity: 0,
                        duration: 0.65,
                        ease: "power3.out",
                    },
                    "-=0.55"
                )

                .from(
                    ".about__description",
                    {
                        y: 30,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.55"
                )

                .from(
                    ".about__actions",
                    {
                        y: 25,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    "-=0.55"
                )

                .from(
                    ".about__profile-card",
                    {
                        scale: 0.88,
                        opacity: 0,
                        rotateY: 8,
                        duration: 1.2,
                        ease: "power4.out",
                        transformPerspective: 1200,
                    },
                    0.2
                )

            /*
             * SCROLL PARALLAX
             * This continuously follows the user's scroll.
             */
            gsap.to(".about__content", {
                y: -35,
                ease: "none",

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.8,
                },
            })

            gsap.to(".about__visual", {
                y: 45,
                scale: 0.97,
                ease: "none",

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 0.8,
                },
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const { personal } = portfolioData

    return (
        <section
            ref={sectionRef}
            className="about"
            id="about"
        >
            <div className="about__content">
                <div className="about__badge">
                    <span className="about__badge-dot" />

                    {personal.title}
                </div>

                <div className="about__title">
                    <div className="about__title-mask">
                        <h1 className="about__title-line">
                            Abdullah
                        </h1>
                    </div>

                    <div className="about__title-mask">
                        <h1 className="about__title-line about__title-line--accent">
                            Butt
                        </h1>
                    </div>
                </div>

                <div className="about__role">
                    Software Engineer
                    <span> & Developer</span>
                </div>

                <p className="about__description">
                    {personal.description}
                </p>

                <div className="about__actions">
                    <a
                        href="#projects"
                        className="button button--primary"
                    >
                        View Projects
                        <span>↗</span>
                    </a>

                    <a
                        href="#contact"
                        className="button button--secondary"
                    >
                        Contact Me
                    </a>
                </div>
            </div>

            <div className="about__visual">
                <div className="about__profile-card">
                    <div className="about__profile-frame">
                        <img
                            src={profileImage}
                            alt={personal.name}
                            className="about__profile-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About