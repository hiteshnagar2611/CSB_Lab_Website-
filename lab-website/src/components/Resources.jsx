import React from 'react';
import { ExternalLink } from 'lucide-react';

const Resources = () => {
    const resources = [
        {
            title: 'Autophagy 3D Database',
            description:
                'Autophagy 3D Database is a comprehensive resource that provides structural information on autophagy-related proteins. It integrates data from various sources to offer insights into the 3D structures of proteins involved in autophagy, facilitating research in this critical cellular process.',
            link: 'http://bioinformatics.biol.uoa.gr/db=permemdb',
            label: 'Read More'
        },
        {
            title: 'GitHub Lab GitHub Repository',
            description:
                'Our lab’s GitHub repository hosts a collection of tools, scripts, and resources developed by our team. It includes software for membrane protein analysis, structural biology workflows, and other computational tools that support our research efforts.',
            link: 'http://www.compgen.org/tools/juchmme',
            label: 'Read More'
        },
        {
            title: 'Open source tools',
            description:
                'Our lab has developed several open-source tools for membrane protein analysis and structural biology research. These tools are freely available to the scientific community and can be accessed through our GitHub repository. They include software for data analysis, visualization, and modeling of membrane proteins.',
            link: 'https://doi.org/10.1016/j.pbiomolbio.2017.01.002',
            label: 'Read More'
        }
    ];

    return (
        <div className="min-h-screen bg-slate-100 pt-24">
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-14 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900">Resources</h1>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                            Discover key tools, databases, and software from the lab that support membrane protein analysis and structural biology research.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {resources.map((resource, idx) => (
                            <div
                                key={idx}
                                className="rounded-[32px] border border-slate-200 bg-white px-8 py-10 shadow-sm"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <a
                                        href={resource.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-2xl sm:text-3xl font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                                    >
                                        {resource.title}
                                    </a>
                                    <a
                                        href={resource.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition"
                                    >
                                        {resource.label}
                                        <ExternalLink className="ml-2 h-4 w-4" />
                                    </a>
                                </div>
                                <p className="mt-6 text-slate-600 leading-8">{resource.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;