import React, { useEffect, useState } from 'react';
import { ChevronRight, Calendar, Microscope, Brain, Atom, Pill } from 'lucide-react';
import { Link } from 'react-router-dom';
import { newsItems } from '../data/newsData';

const Home = () => {
    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

    const researchAreas = [
        {
            icon: Microscope,
            title: 'Autophagy & Membrane Biology',
            description: 'Molecular mechanisms of autophagy pathways and protein–membrane interactions',
            link: '/research',
            image: '/images/research/Autophagy-MembraneBiology.jpg',
        },
        {
            icon: Brain,
            title: 'AI-Driven Protein Structure',
            description: 'Leveraging AlphaFold2 to expand structural coverage of disease-related proteins',
            link: '/research',
            image: '/images/research/AI-PoweredAutophagy.jpg',
        },
        {
            icon: Atom,
            title: 'Molecular Dynamics',
            description: 'μs-timescale simulations of protein dynamics and ligand binding',
            link: '/research',
            image: '/images/research/MolecularDynamicsSimulations.jpg',
        },
        {
            icon: Pill,
            title: 'Drug Discovery',
            description: 'Computational approaches for identifying drug targets and protein-ligand interactions',
            link: '/research',
            image: '/images/research/ComputationalDrugDiscovery.jpg',
        },
    ];

    const stats = [
        { value: '40+', label: 'Publications' },
        { value: '15+', label: 'Lab Members' },
        { value: '10+', label: 'Years Active' },
    ];

    const [slide, setSlide] = useState(0);
    const [paused, setPaused] = useState(false);
    const [perView, setPerView] = useState(3);

    useEffect(() => {
        const updatePerView = () => setPerView(window.innerWidth >= 768 ? 3 : 1);
        updatePerView();
        window.addEventListener('resize', updatePerView);
        return () => window.removeEventListener('resize', updatePerView);
    }, []);

    const maxSlide = Math.max(0, newsItems.length - perView);
    const currentSlide = Math.min(slide, maxSlide);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (paused || maxSlide === 0 || reduceMotion) return undefined;

        const timer = setInterval(() => {
            setSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
        }, 2000);
        return () => clearInterval(timer);
    }, [paused, maxSlide]);

    return (
        <div className="min-h-screen">
            {/* Section 1: Hero */}
            <section className="relative h-screen flex items-center justify-center">
                <img
                    src={url('/images/GIF/phagophore_movie_trimmed.gif')}
                    alt="Autophagy animation"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <p className="text-sm sm:text-base font-medium tracking-widest uppercase text-blue-300 mb-4">
                        CSIR-Institute of Genomics and Integrative Biology
                    </p>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Computational Structural Biology Lab
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto">
                        Understanding protein lipid interaction in Health and disease using Simulation, AI and Experimental Biology
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/research"
                            className="px-8 py-3.5 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center"
                        >
                            Explore Our Research <ChevronRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link
                            to="/publications"
                            className="px-8 py-3.5 border-2 border-white/40 text-white rounded-full font-semibold hover:bg-white/10 transition-all flex items-center justify-center"
                        >
                            View Publications
                        </Link>
                    </div>
                </div>
            </section>

            {/* Section 2: Stats Bar */}
            <section className="py-10 bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-4xl font-bold text-blue-600 mb-1">{stat.value}</p>
                                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: About Lab */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">About Our Lab</h2>
                        <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
                            The Computational Structural Biology Lab (CSBL) was established in 2016 at CSIR-Institute of Genomics and Integrative Biology, New Delhi, India.
                            We explore the vast diversity of biomolecular interactions and their association with human diseases through cutting-edge computational approaches.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-5">
                        {researchAreas.map((area) => (
                            <div key={area.title} className="w-72">
                                <Link
                                    to={area.link}
                                    className="group block h-full bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 text-center"
                                >
                                    <div className="w-full h-36 rounded-xl bg-blue-50 overflow-hidden flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                                        {area.image ? (
                                            <img
                                                src={url(area.image)}
                                                alt={area.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                        ) : (
                                            <area.icon className="h-7 w-7 text-blue-600" />
                                        )}
                                    </div>
                                    <h3 className="font-semibold text-slate-900 mb-2 text-base">{area.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{area.description}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Latest News */}
            <section className="py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <div>
                            <h2 className="text-4xl font-bold text-slate-900 mb-2">Latest News</h2>
                            <p className="text-lg text-slate-600">Recent activities and achievements from the lab</p>
                        </div>
                        <Link
                            to="/news"
                            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition text-sm"
                        >
                            View All <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div
                        className="-mx-3 overflow-hidden"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                    >
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(-${(100 / perView) * currentSlide}%)` }}
                        >
                            {newsItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-1/3 flex-shrink-0 px-3 flex"
                                >
                                    <div className="w-full bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                                        {item.image && (
                                            <div className="h-48 overflow-hidden">
                                                <img
                                                    src={url(item.image)}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                        )}
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                                <Calendar className="w-3.5 h-3.5" />
                                                <span>{item.date}</span>
                                            </div>
                                            <h3 className="font-semibold text-slate-900 mb-2 line-clamp-2">{item.title}</h3>
                                            <p className="text-sm text-slate-600 line-clamp-3 mb-4">{item.content}</p>
                                            {item.link && (
                                                <a
                                                    href={item.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                                                >
                                                    Read More <ChevronRight className="w-4 h-4 ml-1" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {maxSlide > 0 && (
                        <div className="flex justify-center gap-2 mt-8">
                            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        currentSlide === index
                                            ? 'w-6 bg-blue-600'
                                            : 'w-2 bg-slate-300 hover:bg-slate-400'
                                    }`}
                                />
                            ))}
                        </div>
                    )}

                    <div className="mt-8 text-center sm:hidden">
                        <Link
                            to="/news"
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-medium hover:bg-slate-100 transition text-sm"
                        >
                            View All News <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
