import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const Deepanshi = () => {
    const member = {
        name: 'Dr. Deepanshi',
        role: 'Postdoc',
        image: url('/images/team/deepanshi.JPG'),
        bio: `Dr. Deepanshi is a postdoctoral researcher specializing in computational protein design and molecular modeling. Her work focuses on developing novel algorithms for protein structure prediction and understanding protein-ligand interactions.

Research interests:
• Protein structure prediction
• Molecular docking simulations
• Virtual screening
• Drug-target interactions
• Machine learning for protein design

She is passionate about applying computational methods to solve real-world biological problems.`,
        education: [
            'Ph.D. in Computational Chemistry, University of Cambridge',
            'M.S. in Chemistry, IIT Bombay',
            'B.S. in Chemistry, Delhi University'
        ],
        experience: [
            'Postdoctoral Researcher, CSIR-IGIB, India (2022–present)',
            'Ph.D. Researcher, University of Cambridge, UK (2018–2022)',
            'Research Intern, Schrödinger Inc. (2017)'
        ],
        awards: ['Cambridge Trust Scholarship', 'Best PhD Thesis Award (2022)'],
        publications: 15,
        joined: '2022'
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
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Education</a>
                    </h2>
                    <div className="education">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {member.education.map((edu, index) => (
                                <li key={index} className="text-base">{edu}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</a>
                    </h2>
                    <div className="experience">
                        <div className="space-y-6">
                            {member.experience.map((exp, index) => (
                                <div key={index} className="mb-4">
                                    <h4 className="font-semibold text-lg text-gray-900">{exp}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Selected Publications</a>
                    </h2>
                    <div className="Publications">
                        <p className="text-gray-600">Total Publications: {member.publications}</p>
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

            <footer className="fixed-bottom border-t border-gray-200 py-8 mt-16">
                <div className="container mt-0 text-center text-gray-500 text-sm">
                    © Copyright {new Date().getFullYear()} {member.name}. Powered by React with al-folio inspired theme.
                </div>
            </footer>
        </div>
    );
};

export default Deepanshi;
