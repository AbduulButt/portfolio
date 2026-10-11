import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { portfolioData } from "../data/portfolio"

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
    const footerRef = useRef<HTMLElement | null>(null)

    const { personal } = portfolioData
    const currentYear = new Date().getFullYear()

    useEffect(() => {
        const ctx = gsap.context(() => {
            const footerTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 92%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                },
            })

            footerTimeline
                .from(".footer__line", {
                    scaleX: 0,
                    transformOrigin: "center",
                    duration: 0.7,
                    ease: "power3.out",
                })

                .from(
                    ".footer__inner > *",
                    {
                        y: 18,
                        opacity: 0,
                        duration: 0.65,
                        stagger: 0.08,
                        ease: "power3.out",
                    },
                    "-=0.35"
                )
        }, footerRef)

        return () => ctx.revert()
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <footer
            ref={footerRef}
            className="footer"
        >
            <div className="footer__line" />

            <div className="footer__inner">
                <div className="footer__brand">
                    <span className="footer__dot" />

                    <span>{personal.name}</span>
                </div>

                <p className="footer__copyright">
                    © {currentYear} {personal.name}. All rights reserved.
                </p>

                <button
                    className="footer__top"
                    type="button"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    <span>Back to top</span>

                    <span>↑</span>
                </button>
            </div>
        </footer>
    )
}

export default Footer