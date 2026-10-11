import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export const initScrollMotion = () => {
    const mm = gsap.matchMedia()

    mm.add("(min-width: 801px)", () => {
        /*
         * ABOUT
         * Text and profile move at different speeds.
         */
        gsap.to(".about__content", {
            yPercent: -8,
            ease: "none",

            scrollTrigger: {
                trigger: ".about",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        })

        gsap.to(".about__visual", {
            yPercent: 10,
            scale: 0.96,
            ease: "none",

            scrollTrigger: {
                trigger: ".about",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            },
        })

        /*
         * SKILLS
         * Cards enter progressively with depth.
         */
        gsap.fromTo(
            ".skill-card",
            {
                y: 45,
                rotateX: 7,
                scale: 0.96,
                transformPerspective: 800,
            },
            {
                y: 0,
                rotateX: 0,
                scale: 1,
                stagger: 0.05,
                ease: "power2.out",

                scrollTrigger: {
                    trigger: ".skills__grid",
                    start: "top 88%",
                    end: "top 55%",
                    scrub: 0.7,
                },
            }
        )

        /*
         * EXPERTISE
         * Left/right movement alternates by row.
         */
        gsap.utils
            .toArray<HTMLElement>(".level-item")
            .forEach((item, index) => {
                gsap.fromTo(
                    item,
                    {
                        x: index % 2 === 0 ? -28 : 28,
                        opacity: 0.5,
                    },
                    {
                        x: 0,
                        opacity: 1,
                        ease: "none",

                        scrollTrigger: {
                            trigger: item,
                            start: "top 92%",
                            end: "top 68%",
                            scrub: 0.6,
                        },
                    }
                )
            })

        /*
         * PROJECTS
         * Category lines and cards move with depth.
         */
        gsap.utils
            .toArray<HTMLElement>(".projects__group")
            .forEach((group) => {
                const category =
                    group.querySelector(".projects__category")

                const cards =
                    group.querySelectorAll(".project-card")

                if (category) {
                    gsap.fromTo(
                        category,
                        {
                            x: -40,
                            opacity: 0.4,
                        },
                        {
                            x: 0,
                            opacity: 1,
                            ease: "none",

                            scrollTrigger: {
                                trigger: group,
                                start: "top 88%",
                                end: "top 68%",
                                scrub: 0.6,
                            },
                        }
                    )
                }

                gsap.fromTo(
                    cards,
                    {
                        y: 45,
                        scale: 0.96,
                        rotateX: 4,
                        transformPerspective: 900,
                    },
                    {
                        y: 0,
                        scale: 1,
                        rotateX: 0,
                        stagger: 0.08,
                        ease: "none",

                        scrollTrigger: {
                            trigger: group,
                            start: "top 90%",
                            end: "top 55%",
                            scrub: 0.8,
                        },
                    }
                )
            })

        /*
         * EDUCATION
         * Timeline content shifts gently while scrolling.
         */
        gsap.utils
            .toArray<HTMLElement>(".education__item")
            .forEach((item) => {
                gsap.fromTo(
                    item,
                    {
                        x: 30,
                    },
                    {
                        x: 0,
                        ease: "none",

                        scrollTrigger: {
                            trigger: item,
                            start: "top 88%",
                            end: "top 65%",
                            scrub: 0.6,
                        },
                    }
                )
            })

        /*
         * EXPERIENCE
         */
        gsap.fromTo(
            ".experience__item",
            {
                y: 55,
                scale: 0.96,
                rotateX: 4,
                transformPerspective: 900,
            },
            {
                y: 0,
                scale: 1,
                rotateX: 0,
                ease: "none",

                scrollTrigger: {
                    trigger: ".experience__list",
                    start: "top 88%",
                    end: "top 60%",
                    scrub: 0.7,
                },
            }
        )

        /*
         * SERVICES
         * Rows slide in one by one.
         */
        gsap.utils
            .toArray<HTMLElement>(".service-item")
            .forEach((item, index) => {
                gsap.fromTo(
                    item,
                    {
                        x: index % 2 === 0 ? 35 : -35,
                    },
                    {
                        x: 0,
                        ease: "none",

                        scrollTrigger: {
                            trigger: item,
                            start: "top 90%",
                            end: "top 68%",
                            scrub: 0.5,
                        },
                    }
                )
            })

        /*
         * LEARNING
         * Cards rise with light perspective.
         */
        gsap.fromTo(
            ".learning-item",
            {
                y: 45,
                rotateY: 5,
                scale: 0.96,
                transformPerspective: 800,
            },
            {
                y: 0,
                rotateY: 0,
                scale: 1,
                stagger: 0.06,
                ease: "none",

                scrollTrigger: {
                    trigger: ".learning__grid",
                    start: "top 90%",
                    end: "top 58%",
                    scrub: 0.7,
                },
            }
        )

        /*
         * CONTACT
         * Two panels enter from opposite directions.
         */
        gsap.fromTo(
            ".contact__info",
            {
                x: -45,
            },
            {
                x: 0,
                ease: "none",

                scrollTrigger: {
                    trigger: ".contact__content",
                    start: "top 88%",
                    end: "top 62%",
                    scrub: 0.6,
                },
            }
        )

        gsap.fromTo(
            ".contact__form",
            {
                x: 45,
            },
            {
                x: 0,
                ease: "none",

                scrollTrigger: {
                    trigger: ".contact__content",
                    start: "top 88%",
                    end: "top 62%",
                    scrub: 0.6,
                },
            }
        )
    })

    /*
     * Reduced motion support
     */
    mm.add(
        "(prefers-reduced-motion: reduce)",
        () => {
            ScrollTrigger.getAll().forEach((trigger) => {
                trigger.disable()
            })
        }
    )

    requestAnimationFrame(() => {
        ScrollTrigger.refresh()
    })

    return () => {
        mm.revert()
    }
}