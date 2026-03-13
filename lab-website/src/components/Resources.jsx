import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Resources = () => {
    const resources = [
        {
            title: "Autophagy 3D Database",
            description: "Comprehensive database of autophagy protein structures",
            link: "https://doi.org/10.1093/database/baae088",
            type: "Database",
            icon: "📊"
        },
        {
            title: "Lab GitHub Repository",
            description: "Open-source tools and analysis scripts",
            link: "https://github.com",
            type: "GitHub",
            icon: <Github className="w-6 h-6" />
        },
        {
            title: "RAPSAP",
            description: "xyz",
            link: "https://doi.org/10.1080/15548627.2023.2238578",
            type: "Research",
            icon: "🧬"
        },
        {
            title: "Open source tools",
            description: "xyz",
            link: "https://doi.org/10.1016/j.bpj.2024.12.014",
            type: "Data",
            icon: "💾"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">Resources</h1>
                        <p className="text-gray-600 mb-8">
                            Access our databases, tools, and research materials
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {resources.map((resource, idx) => (
                            <a
                                key={idx}
                                href={resource.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-blue-100"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="text-3xl">{resource.icon}</div>
                                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">
                                        {resource.type}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                <div className="flex items-center text-blue-600 font-semibold">
                                    <span>Access Resource</span>
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Resources;