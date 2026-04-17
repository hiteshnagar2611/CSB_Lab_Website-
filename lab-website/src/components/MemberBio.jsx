import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';

const MemberBio = () => {
    const { name } = useParams();

    const url = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

    // Team member data with detailed bio information
    const teamMembers = {
        'dr-lipi-thukral': {
            name: 'Dr. Lipi Thukral',
            role: 'Principal Investigator',
            image: url('/images/team/LipiT.jpg'),
            bio: `Dr. Lipi Thukral obtained her Ph.D. from the University of Heidelberg, Germany (2007–2011), where she worked with Prof. Jeremy C. Smith on molecular dynamics simulations of protein folding. She then joined the group of Prof. Syma Khalid at the University of Southampton, UK, as a postdoctoral researcher. In 2013, she was awarded the prestigious DST-INSPIRE Faculty Fellowship and joined CSIR–Institute of Genomics and Integrative Biology (IGIB), India, as a computational biologist. She established her independent research group in 2016 and currently leads a computational structural biology group as a Senior Principal Scientist.
In 2019, Dr. Thukral received the CSIR Young Scientist Award in Biological Sciences in recognition of her contributions to the field of autophagy. She is also a recipient of the India Alliance Intermediate Fellowship supported by DBT and the Wellcome Trust. She is a member of several national expert committees in computational biology and serves on the editorial boards of eLife and the Biophysical Journal, in addition to reviewing for leading international journals.
Dr. Thukral’s research focuses on understanding how biomolecular interactions at the structural level, particularly how protein–membrane interactions in autophagy drive autophagosome formation. Her work integrates large-scale molecular simulations with experimental collaborations to interpret complex biological data and guide hypothesis-driven experiments. Her lab has published extensively in the areas of protein–lipid dynamics, autophagy, and structural genomics of infectious diseases. 

`,
            education: [
                'Ph.D. in Computational Biology',
                'M.S. in Bioinformatics, Stanford University',
                'B.S. in Biotechnology, IIT Delhi'
            ],
            experience: [
                'Senior Principal Scientist, CSIR-IGIB, India (2016–present)',
                'Postdoctoral Researcher, University of Southampton, UK (2011–2013)',
                'Ph.D. Researcher, University of Heidelberg, Germany (2007–2011)'
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
            image: url('/images/team/shailyadi.JPG'),
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
            experience: [
                'Postdoctoral Researcher, CSIR-IGIB, India (2021–present)',
                'Ph.D. Researcher, University of Oxford, UK (2017–2021)',
                'Research Associate, TIFR Mumbai (2016–2017)'
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
            image: url('/images/team/shruti.jpeg'),
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
            experience: [
                'Postdoctoral Researcher, CSIR-IGIB, India (2020–present)',
                'Ph.D. Researcher, Carnegie Mellon University, USA (2016–2020)',
                'Software Engineer, Google Research (2015–2016)'
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
            image: url('/images/team/tanushree.JPG'),
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
            experience: [
                'Postdoctoral Researcher, CSIR-IGIB, India (2023–present)',
                'Ph.D. Researcher, ETH Zurich, Switzerland (2019–2023)',
                'Research Scientist, Novartis Institutes for BioMedical Research (2018–2019)'
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
            image: url('/images/team/akankshak.jpg'),
            bio: `Akanksha is a PhD student working on developing novel computational methods for protein structure determination using cryo-EM data. Her research focuses on integrating experimental and computational approaches.

Current research:
• Cryo-EM structure determination
• Image processing algorithms
• Machine learning for structural biology
• Protein complex analysis
• Method development for structural studies

She is passionate about developing tools that make structural biology more accessible and efficient.`,
            Education: [
                'B.S. in Biotechnology, IIT Delhi (expected 2024)',
                'Research Intern, NIH (2023)'
            ],
            Experience: [
                'PhD Student, CSIR-IGIB, India (2024–present)',
                'Research Intern, National Institutes of Health, USA (2023)',
                'Undergraduate Researcher, IIT Delhi (2021–2023)'
            ],
            Awards: [
                'Presidential Fellowship',
                'IIT Delhi Academic Excellence Award'
            ],
            Publications: 3,
            Joined: '2024'
        },
        'aayushi-singh': {
            name: 'Aayushi Singh',
            role: 'PhD Student',
            image: url('/images/team/aayushis.jpg'),
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
            experience: [
                'PhD Student, CSIR-IGIB, India (2024–present)',
                'Summer Research Intern, Broad Institute, USA (2023)',
                'Undergraduate Researcher, IIT Delhi (2020–2024)'
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
            image: url('/images/team/akankshadi.JPG'),
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
            experience: [
                'PhD Student, CSIR-IGIB, India (2024–present)',
                'Research Intern, Novartis Institutes for BioMedical Research (2023)',
                'Undergraduate Researcher, IIT Bombay (2020–2024)'
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
            image: url('/images/team/jesu.JPG'),
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
            experience: [
                'PhD Student, CSIR-IGIB, India (2023–present)',
                'Research Assistant, IIT Delhi (2021–2023)',
                'Undergraduate Researcher, Anna University (2018–2021)'
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
            image: url('/images/team/anamika.jpg'),
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
            experience: [
                'PhD Student, CSIR-IGIB, India (2024–present)',
                'Research Assistant, IIT Delhi (2021–2023)',
                'Summer Intern, CSIR-CDRI (2022)'
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
            image: url('/images/team/hitesh.jpg'),
            bio: `Hitesh is a project associate working on software development for structural biology tools. He specializes in developing user-friendly interfaces for computational biology applications.

Technical expertise:
• Full-stack web development
• Python programming
• Data visualization
• Database management
• API development

He works on creating accessible tools for the broader scientific community.`,
            education: [
                'MBM University, Jodhpur, India (June 2025)'
            ],
            experience: [
                'Project Associate, CSIR-IGIB, India (Jan 2026–present)',
                'Software Developer, Tech Startup (2022–2024)',
                'Research Assistant, IIT Delhi (2021–2022)'
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
            image: url('/images/team/placeholder.jpg'),
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
            experience: [
                'Project Associate, CSIR-IGIB, India (2024–present)',
                'Data Analyst, Biotech Company (2022–2024)',
                'Research Intern, IIT Kharagpur (2021–2022)'
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
            image: url('/images/team/nabojit.png'),
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
            experience: [
                'Research Intern, CSIR-IGIB, India (2024–present)',
                'Undergraduate Researcher, University Project (2023–2024)'
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
            image: url('/images/team/varrunavi.jpg'),
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
            experience: [
                'Research Intern, CSIR-IGIB, India (2024–present)',
                'Undergraduate Researcher, Biology Department (2023–2024)'
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
        <div className="min-h-screen" style={{ backgroundColor: '#ffffff', color: '#333333', fontFamily: 'Roboto, sans-serif' }}>
            {/* Header */}
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

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-8 pb-16">
                <div className="clearfix">
                    {/* Profile Picture - Right Side */}
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

                    {/* Biography Text */}
                    <div className="clearfix text-gray-700 leading-relaxed mb-12">
                        {member.bio.split('\n').map((paragraph, index) => (
                            <p key={index} className="mb-4">{paragraph}</p>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
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

                {/* Experience Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Experience</a>
                    </h2>
                    <div className="experience">
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {member.experience.map((exp, index) => (
                                <li key={index} className="text-base">{exp}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Selected Publications Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Selected Publications</a>
                    </h2>
                    <div className="Publications">
                        <ol className="bibliography list-decimal list-inside space-y-6">
                            <li>
                                <div className="row">
                                    <div className="col col-sm-2 abbr">
                                        <abbr className="badge rounded w-100 bg-blue-100 text-blue-800 px-2 py-1 text-xs">
                                            Structural Biology
                                        </abbr>
                                    </div>
                                    <div id="PhysRev.47.777" className="col-sm-8">
                                        <div className="title font-semibold text-lg mb-1">Molecular Dynamics Study of Protein-Membrane Interactions in Autophagy</div>
                                        <div className="author text-gray-700 mb-1">
                                            <em>{member.name}</em>, et al.
                                        </div>
                                        <div className="periodical text-gray-600 text-sm mb-3">
                                            <em>Journal of Computational Biology</em>, May 2023
                                        </div>
                                        <div className="links flex flex-wrap gap-2 mb-3">
                                            <a className="abstract btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">Abs</a>
                                            <a href="#" className="btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">DOI</a>
                                            <a href="#" className="btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">HTML</a>
                                            <a href="#" className="btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">PDF</a>
                                            <a href="#" className="btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">Video</a>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="row">
                                    <div className="col col-sm-2 abbr">
                                        <abbr className="badge rounded w-100 bg-green-100 text-green-800 px-2 py-1 text-xs">
                                            Computational Chemistry
                                        </abbr>
                                    </div>
                                    <div id="comp-chem" className="col-sm-8">
                                        <div className="title font-semibold text-lg mb-1">Machine Learning Approaches for Protein Structure Prediction</div>
                                        <div className="author text-gray-700 mb-1">
                                            <em>{member.name}</em>, et al.
                                        </div>
                                        <div className="periodical text-gray-600 text-sm mb-3">
                                            <em>Nature Computational Science</em>, March 2022
                                        </div>
                                        <div className="links flex flex-wrap gap-2 mb-3">
                                            <a className="abstract btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">Abs</a>
                                            <a href="#" className="btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">DOI</a>
                                            <a href="#" className="btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">HTML</a>
                                            <a href="#" className="btn btn-sm z-depth-0 bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm" role="button">PDF</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Social/Contact Section */}
                <section className="text-center">
                    <div className="contact-icons flex justify-center space-x-6 mb-6">
                        <a href="#" title="Cv pdf" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span className="font-bold">CV</span>
                        </a>
                        <a href="mailto:contact@example.com" title="Email" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span>📧</span>
                        </a>
                        <a href="#" title="Inspirehep id" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span>in</span>
                        </a>
                        <a href="#" title="Rss icon" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span>🔗</span>
                        </a>
                        <a href="#" title="Scholar userid" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span>📚</span>
                        </a>
                        <a href="#" title="Custom Social" className="text-gray-600 hover:text-blue-600 transition-colors text-2xl">
                            <span>📷</span>
                        </a>
                    </div>
                    <div className="contact-note text-gray-500 text-sm">
                        You can even add a little note about which of these is the best way to reach you.
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="fixed-bottom border-t border-gray-200 py-8 mt-16">
                <div className="container mt-0 text-center text-gray-500 text-sm">
                    © Copyright {new Date().getFullYear()} {member.name}. Powered by React with al-folio inspired theme.
                </div>
            </footer>
        </div>
    );
};

export default MemberBio;