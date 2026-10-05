import React, { useRef } from 'react';
import useReveal from '../hooks/useReveal';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const themes = [
    {
        id: 'membrane-autophagy',
        number: '01',
        shortTitle: 'Membranes & Autophagy',
        title: 'What makes proteins work on mosaic membrane surfaces?',
        paragraphs: [
            'A fundamental principle in cell biology is the spatial coordination between different cells and within cells that is maintained by compartmentalizing cellular material into membranes. The protein organization within membrane is highly intricate and is tightly linked to location (cell-type specificity) and shape (protein conformational state) that govern a range of signaling activities. Membrane proteins comprise over 39% of human genome. Despite their essential role, they are relatively less studied.',
            'More importantly, a large number of the cytoplasmic proteins involved in cell signaling and membrane trafficking reversibly associate with variety of cellular membranes in response to specific stimuli. Membrane recruitment of many such proteins is dependent on chemical modifications, or distinct membrane motifs that impart distinct attributes to protein functionality. The challenge therefore, is to predict mechanism by which cells localize proteins to sites on membrane where they can perform optimally and, in turn, interact with particular substrates.',
            'Given the broad spectrum of proteins that interact with membranes, we are set out to understand protein-membrane dynamics in a model pathway - autophagy, a process to degrade cellular waste. In our earlier work, we had deciphered the molecular mechanism of LC3 membrane insertion, a key protein in autophagy. We are further geared up to understand how protein dynamics lead to formation of vesicles called autophagosomes.',
            'One of our additional research interests in this theme is to develop methods to aid integration of experimental data with computational representations of biological membranes. We are currently working on development of methods to analyse large-scale structural data of heterogeneous membrane models to infer their mechanistic parameters.',
        ],
        video: '/images/GIF/mosaicmembranesurfaces.mp4',
    },
    {
        id: 'structural-bioinformatics',
        number: '02',
        shortTitle: 'Structural Bioinformatics',
        title: 'Structural Bioinformatics',
        paragraphs: [
            'Structure of proteins is closely coupled with its function, as evidenced by many conformational changes observed in key cellular process. One of the major challenges in structural biology is to determine the structures and its dynamics of macromolecular complexes and to understand their function. A part of our efforts is to engage with experimental biologists to predict functional consequences of a protein with its bound ligands. We are working towards mapping mutations on known complexes associated with various diseases to understand dysfunctional protein character.',
        ],
        video: '/images/GIF/StructuralBioinformatics.mp4',
    },
    {
        id: 'structural-systems-biology',
        number: '03',
        shortTitle: 'Structural Systems Biology',
        title: 'Structural Systems Biology',
        paragraphs: [
            'Resolving the molecular details of how biomolecules commit to cellular processes is an essential task in life science research. By investigating the relationship between complex data outputs emerging from structural biology, genomics, interaction data sets, imaging techniques, we intend to understand the link between gene to function.',
            'The high-throughput sequencing data of whole genomes from clinical sources is emerging as a biggest paradigm in current century. We are currently working with several experimental groups to converge genomic and structural information onto biological pathways. Different measurements at different lengths and timescales may ultimately make it possible to understand the molecular mechanisms underlying various diseases.',
        ],
        video: '/images/GIF/StructuralSystemsBiology.mp4',
    },
];

const Research = () => {
    const rootRef = useRef(null);
    useReveal(rootRef);

    return (
        <div ref={rootRef} className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white">
                <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-400/30 blur-3xl"></div>
                <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-wide mb-6">
                        Computational Structural Biology Lab
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-5 tracking-tight">
                        Our Research
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-2xl">
                        highlights of labs work
                    </p>
                </div>
            </header>

            {/* Lab Goals */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="reveal bg-white rounded-2xl shadow-xl shadow-slate-200/70 border border-slate-100 p-7 sm:p-10">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="h-8 w-1.5 rounded-full bg-blue-600"></span>
                        <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                            Lab Goals
                        </h2>
                    </div>
                    <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
                        The goals of the Computational Structural Biology Lab are to use computational
                        methods to study interesting problems at the interface of biology, physics and
                        chemistry. More generally, the resulting hypothesis or methods are
                        experimentally testable in collaboration with biomedical researchers to gain
                        biological insights. The broader research themes are mentioned below:
                    </p>
                </div>
            </section>

            {/* Theme navigation */}
            <nav className="sticky top-16 z-30 py-5 mt-10 bg-slate-50/90 backdrop-blur border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-2 sm:gap-3">
                    {themes.map((theme) => (
                        <a
                            key={theme.id}
                            href={`#${theme.id}`}
                            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 hover:text-blue-700 hover:border-blue-300 hover:shadow-sm transition-all"
                        >
                            <span className="text-blue-600/70 font-semibold">{theme.number}</span>
                            {theme.shortTitle}
                        </a>
                    ))}
                </div>
            </nav>

            {/* Themes */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
                {themes.map((theme, index) => {
                    const reversed = index % 2 === 1;

                    return (
                        <article
                            key={theme.id}
                            id={theme.id}
                            className="reveal scroll-mt-40 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                        >
                            <div
                                className={`grid gap-8 lg:gap-12 p-6 sm:p-10 ${
                                    theme.video ? 'lg:grid-cols-2 lg:items-center' : ''
                                }`}
                            >
                                <div className={reversed && theme.video ? 'lg:order-2' : ''}>
                                    <div className="flex items-baseline gap-4 mb-4">
                                        <span className="text-5xl font-black text-blue-100 leading-none">
                                            {theme.number}
                                        </span>
                                        <span className="text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full px-3 py-1">
                                            Research Theme
                                        </span>
                                    </div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5 tracking-tight">
                                        {theme.title}
                                    </h2>
                                    <div className="space-y-4">
                                        {theme.paragraphs.map((paragraph, paragraphIndex) => (
                                            <p
                                                key={paragraphIndex}
                                                className="text-slate-600 leading-relaxed"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {theme.video && (
                                    <div className={reversed ? 'lg:order-1' : ''}>
                                        <video
                                            className="w-full aspect-video rounded-2xl border border-slate-200 shadow-lg bg-black"
                                            src={url(theme.video)}
                                            controls
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            preload="metadata"
                                        />
                                    </div>
                                )}
                            </div>
                        </article>
                    );
                })}
            </section>
        </div>
    );
};

export default Research;
