import React, { useRef } from 'react';
import useReveal from '../hooks/useReveal';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const themes = [
    {
        id: 'autophagosome-formation',
        number: '01',
        shortTitle: 'Autophagosome Formation',
        title: 'Autophagosome formation and its dysregulation in diseases',
        paragraphs: [
            'Autophagy keeps cells healthy by degrading damaged organelles and protein aggregates inside a double-membrane vesicle called the autophagosome. The pathway opens with a cup-shaped membrane known as the phagophore, which expands and closes around its cargo. Attaching ATG8 proteins (LC3 and GABARAP) to the membrane is the central reaction of this process: we deciphered the molecular mechanism by which lipid-anchored LC3 is recruited to and inserted into membranes (Biophysical Journal, 2015), and showed how LC3 and GABARAP subfamily members achieve functional specificity through distinct structural modulations (Autophagy, 2020).',
            'Our recent work explains how this machinery is organized on the membrane. The N-terminus and cis-membrane association of human ATG8 proteins drive autophagosome membrane expansion (eLife, 2023), and the ATG8 conjugation machinery itself associates with membranes as a key regulatory feature of autophagosome biogenesis (FEBS Letters, 2024). Combining super-resolution microscopy with simulations, we showed that LC3 forms functional nanoclusters on autophagosomes (EMBO Reports, 2026) and that a programmable, lipid-triggered allosteric site tunes LC3 binding to its LIR-motif receptors (Nature Communications, 2026).',
            'When this pathway falters, cargo clearance fails and disease follows. We showed that CDK5-mediated phosphorylation of cytosolic phospholipase A2 regulates its activity and drives neuroinflammation in Parkinson\u2019s disease (eNeuro, 2022), and identified GRB2 as a BECN1-interacting protein that regulates autophagy (Cell Death & Disease, 2024). Because reliable measurement underpins the field, our lab also co-authored the community-standard Guidelines for the use and interpretation of assays for monitoring autophagy, 4th edition (Autophagy, 2021).',
        ],
        video: '/images/GIF/phagophore_movie_1080p_trimmed.mov',
    },
    {
        id: 'structural-genomics-cancer',
        number: '02',
        shortTitle: 'Structural Genomics in Cancer',
        title: 'Structural genomics in cancer',
        paragraphs: [
            'Protein structure underlies function, and mutations that distort structure drive disease \u2014 cancer included. Only a fraction of the human proteome has experimentally determined structures, so we use AI and simulation to close that gap. Our AI-based AlphaFold2 pipeline significantly expanded the structural space of the autophagy pathway (Autophagy, 2023), and we consolidated those models into Autophagy3D, a comprehensive structural database for the community (Database, 2024).',
            'We resolve the architecture and dynamics of disease-relevant signaling machines. Multiscale simulations revealed the architecture of the NOTCH receptor and the structural features that govern ligand specificity (Biophysical Journal, 2025) \u2014 NOTCH is a canonical oncogenic driver whose dysregulation is implicated in T-cell acute lymphoblastic leukemia and breast cancer. We map disease-associated mutations onto known complexes to understand how they yield dysfunctional proteins, and we engage directly with experimental biologists to predict the functional consequences of a protein with its bound ligands.',
            'Clinical genomics now produces variants faster than structures can follow. We converge high-throughput sequencing with structural and interaction data to bridge genotype and function, so that variants of unknown significance can be interpreted mechanistically rather than merely cataloged. Sequence, structure and dynamics together form the structural-genomics view through which we aim to make cancer-relevant proteins druggable and their mutations explainable.',
        ],
        video: '/images/GIF/StructuralBioinformatics.mp4',
    },
    {
        id: 'protein-lipid-interactions',
        number: '03',
        shortTitle: 'Protein\u2013lipid Interactions',
        title: 'Protein\u2013lipid interactions',
        paragraphs: [
            'Around 40% of the human proteome associates with membranes, yet lipid\u2013protein recognition remains difficult to observe experimentally. We study how proteins sense, bind and remodel lipid bilayers. Our early work defined the molecular mechanism by which lipid-anchored LC3 is recruited to and inserted into membranes (Biophysical Journal, 2015), and we have reviewed the principles that govern lipidated proteins at protein\u2013membrane interfaces (Progress in Biophysics and Molecular Biology, 2017; Clinical Lipidology, 2013).',
            'Lipid binding frequently restructures the protein itself. We showed that specific cholesterol binding drives drastic structural alterations in apolipoprotein (Journal of Physical Chemistry Letters, 2018), and that a conserved amphipathic-helix degron regulates the cholesterol-mediated turnover of human squalene monooxygenase, a rate-limiting enzyme in cholesterol synthesis (Journal of Biological Chemistry, 2017; FASEB Journal, 2020). We also probe the physical forces inside multi-component physiological membranes directly (Physical Chemistry Chemical Physics, 2018).',
            'These principles extend to membrane-active molecules with translational value. We showed that distinct intramolecular hydrogen bonding dictates the antimicrobial action of membrane-targeting amphiphiles (Journal of Physical Chemistry Letters, 2019), and designed cholic acid-derived amphiphiles that combat Gram-positive bacteria-mediated infections by disintegrating lipid clusters (Journal of Medicinal Chemistry, 2019; ACS Biomaterials Science & Engineering, 2019). Most recently, we discovered that a programmable lipid-triggered allosteric site modulates LC3 LIR-receptor binding activity (Nature Communications, 2026) \u2014 a direct example of lipids acting as allosteric switches.',
        ],
        video: '/images/research/protein-lipid-interaction.m4v',
    },
    {
        id: 'vesicular-assemblies',
        number: '04',
        shortTitle: 'Vesicular Assemblies',
        title: 'Vesicular assemblies: phagophore, LNP',
        paragraphs: [
            'Membranes do more than surround cells \u2014 they bud, fuse and self-assemble into the vesicles that carry cargo. In autophagy, the phagophore is the assembling membrane that grows into a mature autophagosome. We showed that autophagosome membrane expansion is mediated by the N-terminus and cis-membrane association of human ATG8s (eLife, 2023), and that the ATG8 conjugation machinery associates with membranes to license biogenesis (FEBS Letters, 2024) \u2014 two steps that define how a flat sheet becomes a closed vesicle.',
            'Assembling vesicles must also be delivered, remodeled and resolved. We showed that ARL8B mediates lipid-droplet contact and their delivery to lysosomes for lipid remobilization (Cell Reports, 2023), and that VPS4A acts as the selective receptor for lipophagy in mice and humans (Molecular Cell, 2024). We further found that classical autophagy proteins LC3B and ATG4B facilitate melanosome movement along cytoskeletal tracks (Autophagy, 2017), a reminder that vesicle assembly and transport are tightly coupled.',
            'The same physics that builds a phagophore also governs synthetic assemblies such as lipid nanoparticles (LNPs), the delivery vehicles behind mRNA therapeutics. Our lab applies the same multiscale toolkit \u2014 atomistic and coarse-grained membrane models integrated with experiment \u2014 to model vesicle budding and to engineer LNP assembly and cargo delivery, so therapeutic particles can be designed with the same mechanistic understanding we bring to natural vesicles.',
        ],
        video: '/images/GIF/mosaicmembranesurfaces.mp4',
    },
];

const Research = () => {
    const rootRef = useRef(null);
    useReveal(rootRef);

    const handleThemeClick = (event, id) => {
        event.preventDefault();
        const target = document.getElementById(id);
        if (!target) return;

        const navbar = document.querySelector('nav.fixed');
        const stickyBar = event.currentTarget.closest('nav');
        const offset =
            (navbar?.offsetHeight || 0) + (stickyBar?.offsetHeight || 0) + 12;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <div ref={rootRef} className="min-h-screen bg-slate-50 pt-24">
            {/* Theme navigation */}
            <nav className="sticky top-16 z-30 py-5 bg-slate-50/90 backdrop-blur border-b border-slate-200/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-2 sm:gap-3">
                    {themes.map((theme) => (
                        <a
                            key={theme.id}
                            href={`#${theme.id}`}
                            onClick={(event) => handleThemeClick(event, theme.id)}
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
