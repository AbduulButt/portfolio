import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { portfolioData } from "../data/portfolio"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const [submitted, setSubmitted] = useState(false)

    const { personal } = portfolioData

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

            headerTimeline.from(".contact__header > *", {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            })

            const panelsTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".contact__content",
                    start: "top 82%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            })

            panelsTimeline
                .from(".contact__info", {
                    x: -35,
                    opacity: 0,
                    duration: 0.85,
                    ease: "power3.out",
                })
                .from(
                    ".contact__form",
                    {
                        x: 35,
                        opacity: 0,
                        duration: 0.85,
                        ease: "power3.out",
                    },
                    "-=0.65"
                )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const handleSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault()

        setSubmitted(true)
    }

    return (
        <section
            ref={sectionRef}
            className="contact"
            id="contact"
        >
            <div className="contact__header">
                <span className="section-label">
                    09 / CONTACT
                </span>

                <h2 className="contact__title">
                    Let&apos;s build
                    <br />
                    <span>something useful.</span>
                </h2>

                <p>
                    Have a project, collaboration or development
                    opportunity in mind? Feel free to get in touch.
                </p>
            </div>

            <div className="contact__content">
                <div className="contact__panel contact__info">
                    <span className="contact__panel-label">
                        DIRECT CONTACT
                    </span>

                    <h3>Start a conversation.</h3>

                    <p>
                        The easiest way to reach me is through email.
                        I&apos;m open to discussing software, web,
                        mobile and AI-related opportunities.
                    </p>

                    <a
                        href={`mailto:${personal.email}`}
                        className="contact__email"
                    >
                        <span>{personal.email}</span>
                        <span>↗</span>
                    </a>
                </div>

                <form
                    className="contact__panel contact__form"
                    onSubmit={handleSubmit}
                >
                    <div className="contact__field">
                        <label htmlFor="name">NAME</label>

                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div className="contact__field">
                        <label htmlFor="email">EMAIL</label>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div className="contact__field">
                        <label htmlFor="message">MESSAGE</label>

                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            placeholder="Tell me about your idea..."
                            required
                        />
                    </div>

                    <button
                        className="contact__submit"
                        type="submit"
                    >
                        <span>
                            {submitted
                                ? "Message Ready"
                                : "Send Message"}
                        </span>

                        <span>
                            {submitted ? "✓" : "↗"}
                        </span>
                    </button>

                    {submitted && (
                        <p className="contact__notice">
                            The visual form is working. We&apos;ll connect
                            real email delivery during the functionality
                            phase.
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contact