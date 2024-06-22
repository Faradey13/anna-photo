import {gsap} from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import {useLayoutEffect, useRef} from "react";
import cls from './main.module.scss'
import classNames from "classnames";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const MainPage = () => {

    const headerRef = useRef(null);

    const leftRefs = useRef([]);
    leftRefs.current = [];

    const rightRefs = useRef([]);
    rightRefs.current = [];


    const addToRefs = (refArray: any) => (el: any) => {
        if (el && !refArray.current.includes(el)) {
            refArray.current.push(el);
        }
    };


    useLayoutEffect(() => {
        ScrollSmoother.create({
            smooth: 1.5,
            effects: true
        })
        const headElement = headerRef.current;
        const tween = gsap.fromTo(
            headElement,
            {opacity: 1},
            {
                opacity: 0,
                scrollTrigger: {
                    trigger: headElement,
                    start: 'center',
                    end: 'bottom',
                    scrub: true
                }
            })
        return () => {
            tween.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    useLayoutEffect(() => {
        leftRefs.current.forEach((element) => {
            gsap.fromTo(
                element,
                {x: -100, opacity: 0},
                {
                    x: 0, opacity: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom',
                        end: 'top center',
                        scrub: true,
                    },
                }
            );
        });

        rightRefs.current.forEach((element) => {
            gsap.fromTo(
                element,
                {x: 100, opacity: 0},
                {
                    x: 0, opacity: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top bottom',
                        end: 'top center',
                        scrub: true,
                    },
                }
            );

        });
        return () => {

            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);


    return (
        <div className={cls.wrapper}>

            <header ref={headerRef} className={cls.header}>
                <img data-speed={0.6} className={cls.annaImage} src="/src/assets/images/main.png"
                     alt="anna_gipp_photo"/>
                <div className={cls.container}>
                    <div data-speed={.7} className={cls.headerName}>
                        <h1 className={cls.name}>anna gipp</h1>
                        <h5 className={cls.discr}>photographer</h5>
                    </div>
                </div>
            </header>

            <section className={cls.portfolio}>
                <div className={cls.container}>
                    <section className={cls.gallery}>
                        <div className={cls.galleryLeft}>
                            <div ref={addToRefs(leftRefs)} data-speed={.9}
                                 className={classNames(cls.galleryImage, cls.gallery__item, cls.galleryImage_model)}>
                                <img
                                    src="/src/assets/images/model.jpg"
                                    alt={'model_photo'}
                                    className={cls.image}

                                />
                            </div>
                            <div ref={addToRefs(leftRefs)} data-speed={.9}
                                 className={classNames(cls.galleryText, cls.gallery__item, cls.galleryText_family)}>
                                <h2 className={cls.galleryText_h}>Семейная съемка</h2>
                                <p className={cls.galleryText_p}>Создам теплые и искренние снимки вашей семьи, которые
                                    сохранят радостные моменты
                                    на долгие годы</p>
                            </div>
                            <div ref={addToRefs(leftRefs)} data-speed={1.1}
                                 className={classNames(cls.galleryImage, cls.gallery__item, cls.galleryImage_child)}>
                                <img
                                    src="/src/assets/images/child2.jpg"
                                    alt={'child_photo'}
                                    className={cls.image}

                                />
                            </div>
                            <div ref={addToRefs(leftRefs)} data-speed={1.1}
                                 className={classNames(cls.galleryText, cls.gallery__item, cls.galleryText_thema)}>
                                <h2 className={cls.galleryText_h}>Тематическая съемка</h2>
                                <p className={cls.galleryText_p}>Креативные и уникальные съемки в необычных образах и
                                    локациях, воплощающие самые
                                    смелые идеи и мечты.</p>
                            </div>
                            <div ref={addToRefs(leftRefs)} data-speed={.9}
                                 className={classNames(cls.galleryImage, cls.gallery__item, cls.galleryImage_love)}>
                                <img
                                    src="/src/assets/images/love.jpg"
                                    alt={'love_photo'}
                                    className={cls.image}

                                />
                            </div>
                            <div ref={addToRefs(leftRefs)} data-speed={.9}
                                 className={classNames(cls.galleryText, cls.gallery__item, cls.galleryText_person)}>
                                <h2 className={cls.galleryText_h}>Индивидуальная съемка</h2>
                                <p className={cls.galleryText_p}>Персональные и выразительные снимки, отражающие вашу
                                    уникальность и
                                    индивидуальность в стильной и креативной форме</p>
                            </div>
                            <div ref={addToRefs(leftRefs)} data-speed={1.1}
                                 className={classNames(cls.galleryImage, cls.gallery__item, cls.galleryImage_nu)}>
                                <img
                                    src="/src/assets/images/nu.jpg"
                                    alt={'nu_photo'}
                                    className={cls.image}

                                />
                            </div>
                            <div ref={addToRefs(leftRefs)} data-speed={1.1}
                                 className={classNames(cls.galleryText, cls.gallery__item, cls.galleryText_content)}>
                                <h2 className={cls.galleryText_h}>Контент съемка</h2>
                                <p className={cls.galleryText_p}>Профессиональные фото для вашего блога или бизнеса,
                                    которые подчеркивают ваш
                                    стиль и
                                    привлекают внимание.</p>
                            </div>
                            <div ref={addToRefs(leftRefs)} data-speed={.9}
                                 className={classNames(cls.galleryImage, cls.gallery__item, cls.galleryImage_thing)}>
                                <img
                                    src="/src/assets/images/thing2.jpg"
                                    alt={'thing_photo'}
                                    className={cls.image}

                                />
                            </div>
                        </div>
                        <div className={cls.galleryRight}>
                            <div ref={addToRefs(rightRefs)} data-speed={1.1}
                                 className={classNames(cls.galleryText, cls.gallery__item, cls.galleryText_model)}>
                                <h2 className={cls.galleryText_h}>Модельная съемка</h2>
                                <p className={cls.galleryText_p}>Изысканные и профессиональные портреты для вашего
                                    портфолио или личного бренда,
                                    отражающие стиль и индивидуальность</p>
                            </div>
                            <div ref={addToRefs(rightRefs)} data-speed={1.1}
                                 className={classNames(cls.galleryImage, cls.gallery__item, cls.galleryImage_family)}>
                                <img
                                    src="/src/assets/images/family.jpg"
                                    alt={'family_photo'}
                                    className={cls.image}

                                />
                            </div>
                            <div ref={addToRefs(rightRefs)} data-speed={.9}
                                 className={classNames(cls.galleryText, cls.gallery__item, cls.galleryText_child)}>
                                <h2 className={cls.galleryText_h}>Детская съемка </h2>
                                <p className={cls.galleryText_p}>Запечатлеем уникальные моменты детства, полные радости,
                                    игры и настоящих эмоций
                                    вашего ребенка</p>
                            </div>
                            <div ref={addToRefs(rightRefs)} data-speed={.9}
                                 className={classNames(cls.galleryImage, cls.gallery__item, cls.galleryImage_thema)}>
                                <img
                                    src="/src/assets/images/thematic.jpg"
                                    alt={'thematic_photo'}
                                    className={cls.image}

                                />
                            </div>
                            <div ref={addToRefs(rightRefs)} data-speed={1.1}
                                 className={classNames(cls.galleryText, cls.gallery__item, cls.galleryText_love)}>
                                <h2 className={cls.galleryText_h}>Съемка Love story </h2>
                                <p className={cls.galleryText_p}>Романтичные и чувственные фотографии вашей любви,
                                    запечатлевающие волшебные
                                    моменты вместе с любимым человеком</p>

                            </div>
                            <div ref={addToRefs(rightRefs)} data-speed={1.1}
                                 className={classNames(cls.galleryImage, cls.gallery__item, cls.galleryImage_person)}>
                                <img
                                    src="/src/assets/images/person.JPG"
                                    alt={'person_photo'}
                                    className={cls.image}
                                />
                            </div>
                            <div ref={addToRefs(rightRefs)} data-speed={.9}
                                 className={classNames(cls.galleryText, cls.gallery__item, cls.galleryText_nu)}>
                                <h2 className={cls.galleryText_h}>Съемка Арт-ню</h2>
                                <p className={cls.galleryText_p}>Изысканные и эстетичные фотографии, подчеркивающие
                                    красоту и утонченность вашего
                                    тела в художественном формате.</p>
                            </div>
                            <div ref={addToRefs(rightRefs)} data-speed={.9}
                                 className={classNames(cls.galleryImage, cls.gallery__item, cls.galleryImage_content)}>
                                <img
                                    src="/src/assets/images/content.jpg"
                                    alt={'content_photo'}
                                    className={cls.image}

                                />
                            </div>
                            <div ref={addToRefs(rightRefs)} data-speed={1.1}
                                 className={classNames(cls.galleryText, cls.gallery__item, cls.galleryText_thing)}>
                                <h2 className={cls.galleryText_h}>Предметная съемка</h2>
                                <p className={cls.galleryText_p}>Эффектные снимки товаров и украшений, выделяющие их
                                    красоту и детали, идеальные
                                    для маркетинга и продаж</p>
                            </div>

                        </div>
                    </section>
                </div>

            </section>


        </div>


    );
};

export default MainPage;