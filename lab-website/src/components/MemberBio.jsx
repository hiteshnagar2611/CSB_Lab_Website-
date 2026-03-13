import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Award } from 'lucide-react';

const MemberBio = () => {
    const { name } = useParams();

    // Team member data with detailed bio information
    const teamMembers = {
        'dr-lipi-thukral': {
            name: 'Dr. Lipi Thukral',
            role: 'Principal Investigator',
            image: '/images/team/LipiT.jpg',
            bio: `Dr. Lipi Thukral is the Principal Investigator of the Computational Structural Biology Lab. She leads research focused on understanding protein structure-function relationships using computational approaches.

Her research interests include:
• Protein structure prediction and modeling
• Molecular dynamics simulations
• Drug discovery and design
• Computational biophysics
• Machine learning applications in structural biology

Dr. Thukral has published over 50 papers in top-tier journals and has received numerous awards for her contributions to the field.`,
            education: [
                'Ph.D. in Computational Biology',
                'M.S. in Bioinformatics, Stanford University',
                'B.S. in Biotechnology, IIT Delhi'
            ],
            awards: [
                'NSF CAREER Award (2023)',
                'Technology Review Innovator Under 35 (2022)',
                'American Chemical Society Young Investigator Award (2021)'
            ],
            publications: 52,
            joined: '2018'
        },
        'dr-deepanshi': {
            name: 'Dr. Deepanshi',
            role: 'Postdoc',
            image: '/images/team/deepanshi.JPG',
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
            awards: [
                'Cambridge Trust Scholarship',
                'Best PhD Thesis Award (2022)'
            ],
            publications: 15,
            joined: '2022'
        },
        'dr-shailya': {
            name: 'Dr. Shailya',
            role: 'Postdoc',
            image: '/images/team/shailyadi.JPG',
            bio: `Dr. Shailya specializes in molecular dynamics simulations and computational biophysics. Her research focuses on understanding the dynamics of protein folding and protein-protein interactions at the atomic level.

Key research areas:
• Protein folding mechanisms
• Molecular dynamics simulations
• Free energy calculations
• Protein-protein interaction networks
• Computational drug design

Her work combines theoretical and computational approaches to address fundamental questions in structural biology.`,
            education: [
                'Ph.D. in Biophysics, University of Oxford',
                'M.S. in Physics, IIT Kanpur',
                'B.S. in Physics, Delhi University'
            ],
            awards: [
                'Rhodes Scholarship',
                'Oxford Doctoral Prize (2021)'
            ],
            publications: 18,
            joined: '2021'
        },
        'dr-shruti-mathur': {
            name: 'Dr. Shruti Mathur',
            role: 'Postdoc',
            image: '/images/team/shruti.jpeg',
            bio: `Dr. Shruti Mathur works on developing machine learning models for protein structure prediction and function annotation. Her research bridges artificial intelligence and structural biology.

Research focus:
• Machine learning for protein structure prediction
• Deep learning architectures for biological data
• Protein function prediction
• AI-driven drug discovery
• Computational genomics

She is particularly interested in applying cutting-edge AI techniques to solve complex biological problems.`,
            education: [
                'Ph.D. in Computer Science, Carnegie Mellon University',
                'M.S. in Computational Biology',
                'B.S. in Computer Science, IIT Delhi'
            ],
            awards: [
                'Google PhD Fellowship',
                'Presidential Fellowship'
            ],
            publications: 22,
            joined: '2020'
        },
        'dr-tanushree-das': {
            name: 'Dr. Tanushree Das',
            role: 'Postdoc',
            image: '/images/team/tanushree.JPG',
            bio: `Dr. Tanushree Das specializes in computational enzymology and mechanistic studies of enzyme catalysis. Her work combines quantum mechanical calculations with molecular dynamics simulations.

Research interests:
• Enzyme mechanism studies
• Quantum chemistry calculations
• Reaction pathway analysis
• Computational enzymology
• Drug-enzyme interactions

Her research aims to understand the fundamental principles of enzyme catalysis and apply this knowledge to drug design.`,
            education: [
                'Ph.D. in Computational Chemistry, ETH Zurich',
                'M.S. in Chemistry, IIT Madras',
                'B.S. in Chemistry, Presidency College'
            ],
            awards: [
                'ETH Excellence Scholarship',
                'Swiss National Science Foundation Fellowship'
            ],
            publications: 16,
            joined: '2023'
        },
        'akanksha-kaushik': {
            name: 'Akanksha Kaushik',
            role: 'PhD Student',
            image: '/images/team/akankshak.jpg',
            bio: `Akanksha is a PhD student working on developing novel computational methods for protein structure determination using cryo-EM data. Her research focuses on integrating experimental and computational approaches.

Current research:
• Cryo-EM structure determination
• Image processing algorithms
• Machine learning for structural biology
• Protein complex analysis
• Method development for structural studies

She is passionate about developing tools that make structural biology more accessible and efficient.`,
            education: [
                'B.S. in Biotechnology, IIT Delhi (expected 2024)',
                'Research Intern, NIH (2023)'
            ],
            awards: [
                'Presidential Fellowship',
                'IIT Delhi Academic Excellence Award'
            ],
            publications: 3,
            joined: '2024'
        },
        'aayushi-singh': {
            name: 'Aayushi Singh',
            role: 'PhD Student',
            image: '/images/team/aayushis.jpg',
            bio: `Aayushi is a PhD student specializing in computational approaches to study protein-DNA interactions and gene regulation. Her work combines molecular modeling with genomics data.

Research focus:
• Protein-DNA interaction modeling
• Transcription factor binding
• Gene regulation networks
• Computational genomics
• Systems biology approaches

Her research aims to understand how proteins interact with DNA to regulate gene expression.`,
            education: [
                'B.S. in Computational Biology, IIT Delhi (2024)',
                'Summer Research Intern, Broad Institute (2023)'
            ],
            awards: [
                'Graduate Fellowship',
                'IIT Delhi Research Excellence Award'
            ],
            publications: 2,
            joined: '2024'
        },
        'akanksha-arun': {
            name: 'Akanksha Arun',
            role: 'PhD Student',
            image: '/images/team/akankshadi.JPG',
            bio: `Akanksha is a PhD student working on computational immunology and antibody design. Her research focuses on developing algorithms for therapeutic antibody development.

Current projects:
• Antibody-antigen interaction modeling
• Computational antibody design
• Immunoinformatics
• Machine learning for immunology
• Therapeutic protein engineering

She is interested in applying computational methods to accelerate drug discovery in immunology.`,
            education: [
                'B.S. in Biotechnology, IIT Bombay (2024)',
                'Research Intern, Novartis (2023)'
            ],
            awards: [
                'Bioengineering Fellowship',
                'IIT Bombay Institute Medal'
            ],
            publications: 4,
            joined: '2024'
        },
        'debendra-kumar-swain': {
            name: 'Debendra Kumar Swain',
            role: 'PhD Student',
            image: '/images/team/debe.jpg',
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
            awards: [
                'TIFR Graduate Fellowship',
                'DBT Junior Research Fellowship'
            ],
            publications: 5,
            joined: '2023'
        },
        'jesu-castin': {
            name: 'Jesu Castin',
            role: 'PhD Student',
            image: '/images/team/jesu.JPG',
            bio: `Jesu is a PhD student working on developing computational tools for RNA structure prediction and RNA-protein interactions. His research combines algorithms and machine learning.

Current research:
• RNA structure prediction algorithms
• RNA-protein interaction modeling
• Machine learning for RNA biology
• Computational RNA design
• RNA therapeutics development

He is passionate about understanding RNA biology through computational approaches.`,
            education: [
                'M.S. in Computational Biology, IIT Delhi (2023)',
                'B.S. in Biotechnology, Anna University (2021)'
            ],
            awards: [
                'IIT Delhi Research Fellowship',
                'Anna University Gold Medal'
            ],
            publications: 3,
            joined: '2023'
        },
        'anamika-singh': {
            name: 'Anamika Singh',
            role: 'PhD Student',
            image: '/images/team/anamika.jpg',
            bio: `Anamika is a PhD student specializing in computational structural biology with a focus on protein-ligand interactions and drug design. Her research combines molecular modeling, molecular dynamics simulations, and machine learning approaches.

Current research:
• Protein-ligand binding studies
• Molecular dynamics simulations
• Virtual screening and drug design
• Machine learning for molecular property prediction
• Computational analysis of protein structures

Her work aims to develop computational tools for understanding molecular interactions and accelerating drug discovery processes.`,
            education: [
                'M.S. in Computational Chemistry, IIT Delhi (2023)',
                'B.S. in Chemistry, Delhi University (2021)'
            ],
            awards: [
                'IIT Delhi Research Fellowship',
                'CSIR Junior Research Fellowship'
            ],
            publications: 2,
            joined: '2024'
        },
        'hitesh-nagar': {
            name: 'Hitesh Nagar',
            role: 'Project Associate',
            image: '/images/team/placeholder.jpg',
            bio: `Hitesh is a project associate working on software development for structural biology tools. He specializes in developing user-friendly interfaces for computational biology applications.

Technical expertise:
• Full-stack web development
• Python programming
• Data visualization
• Database management
• API development

He works on creating accessible tools for the broader scientific community.`,
            education: [
                'M.S. in Computer Science',
                'B.S. in Computer Science, IIT Delhi'
            ],
            awards: [
                'Research Assistantship'
            ],
            publications: 2,
            joined: '2024'
        },
        'prathamdeep-dhanoa': {
            name: 'Prathamdeep Dhanoa',
            role: 'Project Associate',
            image: '/images/team/placeholder.jpg',
            bio: `Prathamdeep is a project associate focusing on data analysis and computational pipelines for structural biology research. He develops automated workflows for large-scale data processing.

Skills and expertise:
• Data analysis and visualization
• Pipeline development
• High-performance computing
• Statistical analysis
• Scientific computing

His work supports the lab's research by providing efficient computational solutions.`,
            education: [
                'M.S. in Computational Biology',
                'B.S. in Biotechnology, IIT Kharagpur'
            ],
            awards: [
                'Computational Biology Fellowship'
            ],
            publications: 1,
            joined: '2024'
        },
        'nabajit': {
            name: 'Nabajit',
            role: 'Intern',
            image: '/images/team/placeholder.jpg',
            bio: `Nabajit is an undergraduate intern working on machine learning applications in structural biology. He is developing models for protein classification and prediction tasks.

Current projects:
• Machine learning for protein classification
• Data preprocessing pipelines
• Model evaluation and validation
• Scientific computing

He is gaining valuable experience in applying AI to biological problems.`,
            education: [
                'B.S. in Computer Science (Sophomore)'
            ],
            awards: [
                'UROP Fellowship'
            ],
            publications: 0,
            joined: '2024'
        },
        'varrunavi': {
            name: 'Varrunavi',
            role: 'Intern',
            image: '/images/team/placeholder.jpg',
            bio: `Varrunavi is an undergraduate intern focusing on molecular visualization and educational tools for structural biology. She works on creating interactive 3D models and educational content.

Current work:
• Molecular visualization tools
• Educational content development
• User interface design
• Scientific communication

She is passionate about making science more accessible through better visualization and education.`,
            education: [
                'B.S. in Biology (Sophomore)'
            ],
            awards: [
                'Biology UROP Award'
            ],
            publications: 0,
            joined: '2024'
        }
    };

    const member = teamMembers[name];

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Member Not Found</h1>
                    <Link to="/team" className="text-blue-600 hover:underline">
                        ← Back to Team
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link to="/team" className="inline-flex items-center text-blue-600 hover:text-blue-800">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Team
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Hero Section */}
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                                <div className="flex-shrink-0">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
                                        onError={(e) => {
                                            e.target.src = '/images/team/placeholder.jpg';
                                        }}
                                    />
                                </div>
                                <div className="text-center md:text-left">
                                    <h1 className="text-4xl font-bold mb-2">{member.name}</h1>
                                    <p className="text-xl text-blue-100 mb-4">{member.role}</p>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-blue-100">
                                        <div className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            Joined {member.joined}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="p-8">
                        {/* Bio Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Biography</h2>
                            <div className="prose max-w-none text-gray-700">
                                {member.bio.split('\n').map((paragraph, index) => (
                                    <p key={index} className="mb-4">{paragraph}</p>
                                ))}
                            </div>
                        </section>

                        {/* Education Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
                            <div className="space-y-3">
                                {member.education.map((edu, index) => (
                                    <div key={index} className="flex items-start">
                                        <Award className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700">{edu}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Awards Section */}
                        {member.awards && member.awards.length > 0 && (
                            <section className="mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Awards & Honors</h2>
                                <div className="space-y-3">
                                    {member.awards.map((award, index) => (
                                        <div key={index} className="flex items-start">
                                            <Award className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">{award}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Stats Section */}
                        <section className="bg-gray-50 rounded-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Research Statistics</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">{member.publications}</div>
                                    <div className="text-gray-600">Publications</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600">{new Date().getFullYear() - parseInt(member.joined)}</div>
                                    <div className="text-gray-600">Years in Lab</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600">{member.role.includes('PhD') ? 'PhD' : member.role.includes('Postdoc') ? 'Postdoc' : member.role.includes('Intern') ? 'Undergrad' : 'Staff'}</div>
                                    <div className="text-gray-600">Level</div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberBio;