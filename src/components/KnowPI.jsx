import React from 'react';
import { Mail, Linkedin, Twitter, GraduationCap, Award, Microscope } from 'lucide-react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const career = [
    {
        period: '2016 – Present',
        role: 'Senior Principal Scientist',
        place: 'CSIR-Institute of Genomics and Integrative Biology (IGIB), New Delhi',
        detail: 'Leads the Thukral Lab, an independent computational structural biology research group.',
    },
    {
        period: '2013 – 2016',
        role: 'DST-INSPIRE Faculty Fellow',
        place: 'CSIR-IGIB, New Delhi',
        detail: 'Joined IGIB as a computational biologist after being awarded the DST-INSPIRE Faculty Fellowship.',
    },
    {
        period: '2011 – 2013',
        role: 'Postdoctoral Researcher (Prof. Syma Khalid)',
        place: 'University of Southampton, UK',
        detail: 'Studied protein–membrane interactions and membrane organisation.',
    },
    {
        period: '2007 – 2011',
        role: 'Ph.D. (Prof. Jeremy C. Smith)',
        place: 'University of Heidelberg, Germany',
        detail: 'Molecular dynamics simulations of protein folding.',
    },
];

const honors = [
    'CSIR Young Scientist Award in Biological Sciences (2019) for contributions to autophagy research',
    'India Alliance Intermediate Fellowship, supported by DBT and the Wellcome Trust',
    'Editorial Board Member, eLife and the Biophysical Journal',
    'Member of national expert committees in computational biology',
    'Reviewer for leading international journals',
];

const interests = [
    'Protein–lipid interactions and autophagosome formation',
    'Molecular mechanisms of autophagy and membrane biology',
    'Large-scale molecular simulations of biomolecular systems',
    'Structural genomics of disease-related proteins',
    'Integrating simulations, AI and experimental data',
];

const KnowPI = () => {
    return (
        <div className="min-h-screen bg-slate-100 pt-24">
            {/* Header */}
            <section className="pb-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Know the PI</h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                        Dr. Lipi Thukral — Principal Investigator, Thukral Lab
                    </p>
                </div>
            </section>

            {/* Profile */}
            <section className="pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-[32px] border border-slate-200 shadow-sm overflow-hidden">
                        <div className="grid lg:grid-cols-3 gap-8 p-6 sm:p-10">
                            {/* Photo + contact */}
                            <div className="lg:col-span-1">
                                <img
                                    src={url('/images/team/LipiT.jpg')}
                                    alt="Dr. Lipi Thukral"
                                    className="w-full max-w-xs mx-auto lg:mx-0 aspect-square object-cover rounded-3xl border border-slate-200"
                                    onError={(e) => {
                                        e.target.src = url('/images/team/placeholder.jpg');
                                    }}
                                />
                                <div className="mt-6 text-center lg:text-left">
                                    <h2 className="text-2xl font-bold text-slate-900">Dr. Lipi Thukral</h2>
                                    <p className="text-sm text-blue-700 font-medium mt-1">
                                        Senior Principal Scientist
                                    </p>
                                    <p className="text-sm text-slate-500">
                                        CSIR-Institute of Genomics and Integrative Biology
                                    </p>
                                    <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                                        Lab 202, CSIR-IGIB, Mathura Road Campus
                                        <br />
                                        New Delhi 110025, India
                                    </p>
                                    <div className="flex justify-center lg:justify-start gap-3 mt-5">
                                        <a
                                            href="mailto:lipi.igib@csir.res.in"
                                            title="Email"
                                            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="https://x.com/Sci_Lipi"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="Twitter / X"
                                            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/lipi-thukral-ph-d-61833229"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title="LinkedIn"
                                            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                    <a
                                        href="https://www.igib.res.in/?q=LipiThukral"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block mt-5 text-sm text-blue-600 hover:text-blue-800 underline"
                                    >
                                        CSIR-IGIB profile
                                    </a>
                                </div>
                            </div>

                            {/* Bio + details */}
                            <div className="lg:col-span-2">
                                <h3 className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-4">
                                    Biography
                                </h3>
                                <div className="space-y-4 text-slate-700 leading-relaxed">
                                    <p>
                                        Dr. Lipi Thukral obtained her Ph.D. from the University of Heidelberg,
                                        Germany (2007–2011), where she worked with Prof. Jeremy C. Smith on
                                        molecular dynamics simulations of protein folding. She then joined the
                                        group of Prof. Syma Khalid at the University of Southampton, UK, as a
                                        postdoctoral researcher. In 2013, she was awarded the prestigious
                                        DST-INSPIRE Faculty Fellowship and joined CSIR–Institute of Genomics and
                                        Integrative Biology (IGIB), India, as a computational biologist. She
                                        established her independent research group in 2016 and currently leads a
                                        computational structural biology group as a Senior Principal Scientist.
                                    </p>
                                    <p>
                                        In 2019, Dr. Thukral received the CSIR Young Scientist Award in
                                        Biological Sciences in recognition of her contributions to the field of
                                        autophagy. She is also a recipient of the India Alliance Intermediate
                                        Fellowship supported by DBT and the Wellcome Trust. She is a member of
                                        several national expert committees in computational biology and serves on
                                        the editorial boards of eLife and the Biophysical Journal, in addition to
                                        reviewing for leading international journals.
                                    </p>
                                    <p>
                                        Dr. Thukral&apos;s research focuses on understanding biomolecular
                                        interactions at the structural level, particularly how protein–membrane
                                        interactions in autophagy drive autophagosome formation. Her work
                                        integrates large-scale molecular simulations with experimental
                                        collaborations to interpret complex biological data and guide
                                        hypothesis-driven experiments. Her lab has published extensively in the
                                        areas of protein–lipid dynamics, autophagy, and structural genomics of
                                        infectious diseases.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                                    {/* Career */}
                                    <div className="rounded-2xl border border-slate-200 p-5">
                                        <div className="flex items-center gap-2 mb-4">
                                            <GraduationCap className="w-5 h-5 text-blue-600" />
                                            <h3 className="font-semibold text-slate-900">Education & Career</h3>
                                        </div>
                                        <div className="space-y-4">
                                            {career.map((item) => (
                                                <div key={item.period}>
                                                    <p className="text-xs font-semibold text-blue-700">{item.period}</p>
                                                    <p className="text-sm font-medium text-slate-900">{item.role}</p>
                                                    <p className="text-xs text-slate-500">{item.place}</p>
                                                    <p className="text-xs text-slate-600 mt-1">{item.detail}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Honors + interests */}
                                    <div className="space-y-6">
                                        <div className="rounded-2xl border border-slate-200 p-5">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Award className="w-5 h-5 text-blue-600" />
                                                <h3 className="font-semibold text-slate-900">Awards & Roles</h3>
                                            </div>
                                            <ul className="space-y-2">
                                                {honors.map((item) => (
                                                    <li key={item} className="text-sm text-slate-600 flex gap-2">
                                                        <span className="text-blue-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="rounded-2xl border border-slate-200 p-5">
                                            <div className="flex items-center gap-2 mb-4">
                                                <Microscope className="w-5 h-5 text-blue-600" />
                                                <h3 className="font-semibold text-slate-900">Research Interests</h3>
                                            </div>
                                            <ul className="space-y-2">
                                                {interests.map((item) => (
                                                    <li key={item} className="text-sm text-slate-600 flex gap-2">
                                                        <span className="text-blue-600 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KnowPI;
