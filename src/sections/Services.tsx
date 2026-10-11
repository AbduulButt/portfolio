import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { portfolioData } from "../data/portfolio"

gsap.registerPlugin(ScrollTrigger)

const Services = () => {
    const sectionRef = useRef<HTMLElement | null>(null)
    const { services } = portfolioData

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

            headerTimeline.from(".services__header > *", {
                y: 35,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
            })

            const itemsTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".services__list",
                    start: "top 82%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                },
            })

            itemsTimeline.from(".service-item", {
                x: 30,
                opacity: 0,
                duration: 0.75,
                stagger: 0.1,
                ease: "power3.out",
            })
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="services"
            id="services"
        >
            <div className="services__header">
                <span className="section-label">
                    07 / SERVICES
                </span>

                <h2 className="services__title">
                    What I can
                    <br />
                    <span>build.</span>
                </h2>

                <p>
                    Development services focused on practical,
                    responsive and modern digital products.
                </p>
            </div>

            <div className="services__list">
                {services.map((service, index) => (
                    <article
                        className="service-item"
                        key={service.title}
                    >
                        <div className="service-item__number">
                            {String(index + 1).padStart(2, "0")}
                        </div>

                        <div className="service-item__content">
                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </div>

                        <div className="service-item__arrow">
                            ↗
                        </div>

                        <div className="service-item__line" />
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Services