import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const DebendraKumarSwain = () => {
    const member = {
        name: 'Debendra Kumar Swain',
        role: 'PhD Student',
        image: url('/images/team/debe.jpg'),
        bio: `Debendra is a PhD student specializing in computational structural biology and membrane protein modeling. His research focuses on understanding membrane protein structure and function.

Research interests:
• Membrane protein structure prediction
• Lipid-protein interactions
• Molecular dynamics of membrane systems
• Computational biophysics
• Drug-membrane interactions

His work aims to develop better models for membrane proteins, which are important drug targets.`,
        education: [
            'M.S. in Biophysics, TIFR Mumbai (2023)',
            'B.S. in Physics, Utkal University (2021)'
        ],
        experience: [
            'PhD Student, CSIR-IGIB, India (2023–present)',
            'Research Assistant, TIFR Mumbai (2021–2023)',
            'Summer Intern, National Centre for Biological Sciences (2022)'
        ],
        awards: ['TIFR Graduate Fellowship', 'DBT Junior Research Fellowship'],
        publications: 5,
        joined: '2023'
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#ffffff', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            <header className="py-12 px-8">
                <div className="max-w-4xl mx-auto">
                    <Link to="/team" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 text-sm">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Team
                    </Link>
                    <h1 className="text-4xl font-bold mb-2">
                        <span className="font-bold">{member.name.split(' ')[0]}</span> {member.name.split(' ').slice(1).join(' ')}
                    </h1>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-8 pb-16">
                <div className="clearfix">
                    <div className="profile float-right ml-8 mb-8">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-64 h-64 rounded-lg shadow-lg object-cover"
                            onError={(e) => {
                                e.target.src = url('/images/team/placeholder.jpg');
                            }}
                        />
                        <div className="more-info mt-4 text-sm text-gray-600">
                            <p>Computational Biology Lab</p>
                            <p>CSIR-Institute of Genomics and Integrative Biology</p>
                            <p>Sukhdev Vihar, Mathura Road</p>
                            <p>New Delhi - 110020, India</p>
                        </div>
                    </div>

                    <div className="clearfix text-gray-700 leading-relaxed mb-12">
                        {member.bio.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Education</h2>
                    <div className="education">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {member.education.map((edu, index) => (
                                <li key={index} className="text-base">{edu}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Experience</h2>
                    <div className="experience">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {member.experience.map((exp, index) => (
                                <li key={index} className="text-base">{exp}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="text-center">
                    <div className="contact-icons flex justify-center space-x-6 mb-6">
                        <a href="#" title="Email" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span>📧</span>
                        </a>
                        <a href="#" title="Scholar" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span>📚</span>
                        </a>
                    </div>
                </section>
            </div>

            <footer className="border-t border-gray-200 py-8 mt-16">
                <div className="text-center text-gray-500 text-sm">
                    © Copyright {new Date().getFullYear()} {member.name}. Powered by React with al-folio inspired theme.
                </div>
            </footer>
        </div>
    );
};

export default DebendraKumarSwain;
