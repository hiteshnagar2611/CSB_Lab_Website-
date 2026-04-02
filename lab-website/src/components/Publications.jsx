import React from 'react';

const Publications = () => {
    const publications = [
        {
            number: 1,
            citation: (
                <>
                    Cheng MTK, Altaf M, Castin J, Reuschl AK, Sievers BL, Kamelian K, Mesner D, Morse RB, Abdullahi A, Meng B, Csiba K, Cambridge NIHR Bioresource, Kemp SA, Martin DP, Jolly C, Ruis C, Thukral L*, Gupta RK*. <span className="font-semibold">Signatures of omicron-like adaptation in early SARS-CoV-2 variants and chronic infection.</span> Cell Rep. 2025 Aug 26;44(8):116135.
                </>
            ),
            doi: "10.1016/j.celrep.2025.116135"
        },
        {
            number: 2,
            citation: (
                <>
                    Rathore S, Gahlot D, Castin J, Pandey A, Arvindekar S, Viswanath S, Thukral L*. <span className="font-semibold">Multiscale simulations reveal architecture of NOTCH protein and ligand specific features.</span> Biophys J. 2025 Jan 21;124(2):393-407.
                </>
            ),
            doi: "10.1016/j.bpj.2024.12.014"
        },
        {
            number: 3,
            citation: (
                <>
                    Das D, Sharma M, Gahlot D, Nia SS, Gain C, Mecklenburg M, Zhou ZH, Bourdenx M, Thukral L, Martinez-Lopez N, Singh R. <span className="font-semibold">VPS4A is the selective receptor for lipophagy in mice and humans.</span> Mol Cell. 2024 Nov 21;84(22):4436-4453.e8.
                </>
            ),
            doi: "10.1016/j.molcel.2024.10.022"
        },
        {
            number: 4,
            citation: (
                <>
                    Neha, Castin J, Fatihi S, Gahlot D, Arun A, Thukral L*.<span className="font-semibold"> Autophagy 3D: a comprehensive autophagy structure database. Database (Oxford).</span> 2024;2024:baae088.
                </>
            ),
            doi: "10.1093/database/baae088"
        },
        {
            number: 5,
            citation: (
                <>
                    Montero-Vergara J, Plachetta K, Kinch L, Bernhardt S, Kashyap K, Levine B, Thukral L, Vetter M, Thomssen C, Wiemann S, Peña-Llopis S, Jendrossek V, Vega-Rubin-de-Celis S. <span className="font-semibold">GRB2 is a BECN1 interacting protein that regulates autophagy. Cell Death Dis. 2024 Jan.</span> 5;15(1):14.
                </>
            ),
            doi: "10.1038/s41419-023-06387-7"
        },
        {
            number: 6,
            citation: (
                <>
                    Menon D, Bhapkar A, Manchandia B, Charak G, Rathore S, Jha RM, Nahak A, Mondal M, Omrane M, Bhaskar AK, Thukral L, Thiam AR, Gandotra S.<span className="font-semibold"> ARL8B mediates lipid droplet contact and delivery to lysosomes for lipid remobilization.</span> Cell Rep. 2023 Sep 30;42(10):113203.
                </>
            ),
            doi: "10.1016/j.celrep.2023.113203"
        },
        {
            number: 7,
            citation: (
                <>
                    Malhotra N, Khatri S, Kumar A, Arun A, Daripa P, Fatihi S, Venkadesan S, Jain N, Thukral L*. <span className="font-semibold">AI-based Alphafold2 significantly expands the structural space of the autophagy pathway.</span> Autophagy. 2023 Jul 30:1-20.
                </>
            ),
            doi: "10.1080/15548627.2023.2238578"
        },
        {
            number: 8,
            citation: (
                <>
                    Zhang W, Nishimura T, Gahlot D, Saito C, David C, Jefferies HBJ, Schreiber A, Thukral L, Tooze SA.<span className="font-semibold"> Autophagosome membrane expansion is mediated by the N-terminal and cis-membrane association of human ATG8s.</span> eLife. 2023;12:e89185.
                </>
            ),
            doi: "10.7554/eLife.89185"
        },
        {
            number: 9,
            citation: (
                <>
                    Tooze SA, Zhang W, Lazzeri G, Gahlot D, Thukral L, Covino R, Nishimura T. <span className="font-semibold">Membrane association of ATG8 conjugation machinery emerges as a key regulatory feature for autophagosome biogenesis.</span> FEBS Lett. 2023;
                </>
            ),
            doi: "10.1002/1873-3468.14676"
        },
        {
            number: 10,
            citation: (
                <>
                    Subissi L, Gottberg AV, Thukral L, et al.<span className="font-semibold"> An early warning system for emerging SARS-CoV-2 variants.</span> Nat Med. 2022;28(6):1110-1115.
                </>
            ),
            doi: "10.1038/s41591-022-01762-w"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications</h1>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <ol reversed className="list-decimal list-inside space-y-6 text-gray-800">
                            <p className="text-sm text-gray-600 mb-4">&nbsp;&nbsp;&nbsp;&nbsp; @corresponding author</p>
                            {publications.map((pub) => (
                                <li key={pub.number} className="mb-4">
                                    {pub.citation}
                                    <br />
                                    DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{pub.doi}</a>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Publications;