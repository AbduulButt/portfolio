import { useEffect, useState } from "react"

import { portfolioData } from "../data/portfolio"

const navItems = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Experience", id: "experience" },
    { label: "Services", id: "services" },
    { label: "Learning", id: "learning" },
    { label: "Contact", id: "contact" },
]

const Navbar = () => {
    const { personal } = portfolioData

    const [activeSection, setActiveSection] =
        useState("about")

    const [scrolled, setScrolled] =
        useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40)
        }

        handleScroll()

        window.addEventListener(
            "scroll",
            handleScroll,
            {
                passive: true,
            }
        )

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            )
        }
    }, [])

    useEffect(() => {
        const sections = navItems
            .map((item) =>
                document.getElementById(item.id)
            )
            .filter(
                (
                    section
                ): section is HTMLElement =>
                    section !== null
            )

        const observer =
            new IntersectionObserver(
                (entries) => {
                    const visibleEntries = entries
                        .filter(
                            (entry) =>
                                entry.isIntersecting
                        )
                        .sort(
                            (a, b) =>
                                b.intersectionRatio -
                                a.intersectionRatio
                        )

                    if (visibleEntries.length > 0) {
                        setActiveSection(
                            visibleEntries[0].target.id
                        )
                    }
                },
                {
                    rootMargin:
                        "-25% 0px -55% 0px",

                    threshold: [
                        0,
                        0.15,
                        0.3,
                        0.5,
                        0.7,
                    ],
                }
            )

        sections.forEach((section) => {
            observer.observe(section)
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    const scrollToSection = (
        id: string
    ) => {
        const section =
            document.getElementById(id)

        if (!section) return

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        })
    }

    return (
        <header
            className={`navbar ${scrolled
                ? "navbar--scrolled"
                : ""
                }`}
        >
            <button
                type="button"
                className="navbar__brand"
                onClick={() =>
                    scrollToSection("about")
                }
            >
                <span className="navbar__logo">
                    AB
                </span>

                <span className="navbar__name">
                    {personal.name}
                </span>
            </button>

            <nav className="navbar__links">
                {navItems.map((item) => (
                    <button
                        type="button"
                        key={item.id}
                        className={
                            activeSection === item.id
                                ? "navbar__link navbar__link--active"
                                : "navbar__link"
                        }
                        onClick={() =>
                            scrollToSection(item.id)
                        }
                    >
                        {item.label}

                        <span className="navbar__link-dot" />
                    </button>
                ))}
            </nav>

            <button
                type="button"
                className="navbar__cta"
                onClick={() =>
                    scrollToSection("contact")
                }
            >
                Let&apos;s Talk

                <span>↗</span>
            </button>
        </header>
    )
}

export default Navbar