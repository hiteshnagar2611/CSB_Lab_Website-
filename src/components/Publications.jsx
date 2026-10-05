import React, { useState, useMemo } from 'react';
import { ExternalLink, Search, ChevronDown, ChevronUp, BookOpen, Filter } from 'lucide-react';
import { publications, allYears } from '../data/publicationsData';

const assetUrl = (filePath) => `${import.meta.env.BASE_URL}${filePath.replace(/^\//, '')}`;

const Publications = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedYear, setSelectedYear] = useState(null);
    const [expandedId, setExpandedId] = useState(null);
    const [showFilters, setShowFilters] = useState(true);

    const filteredPubs = useMemo(() => {
        return publications.filter((pub) => {
            const matchesSearch =
                searchQuery === '' ||
                pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pub.journalAbbrev.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesYear = selectedYear === null || pub.year === selectedYear;

            return matchesSearch && matchesYear;
        });
    }, [searchQuery, selectedYear]);

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedYear(null);
    };

    const toggleExpand = (id) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    const formatAuthors = (authors, maxDisplay = 3) => {
        const authorList = authors.split(', ').map((a) => a.trim());
        if (authorList.length <= maxDisplay) {
            return authors;
        }
        const displayed = authorList.slice(0, maxDisplay).join(', ');
        const remaining = authorList.length - maxDisplay;
        return `${displayed} ... (+${remaining} authors)`;
    };

    const hasActiveFilters = searchQuery || selectedYear;

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-24">
            <section className="pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-10 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
                            Publications
                        </h1>
                    </div>

                    {/* Search and Filter Toggle */}
                    <div className="mb-6 max-w-4xl mx-auto">
                        <div className="flex items-center gap-4">
                            <div className="relative flex-1">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search by title, author, or journal..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition"
                                />
                            </div>
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition shadow-sm ${
                                    showFilters
                                        ? 'bg-blue-50 border-blue-200 text-blue-700'
                                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                <Filter className="h-5 w-5" />
                                <span className="hidden sm:inline">Filters</span>
                            </button>
                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 transition shadow-sm text-sm"
                                >
                                    Clear All
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Filters Panel */}
                    {showFilters && (
                        <div className="mb-8 max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                            {/* Year Chips */}
                            <div>
                                <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wider">
                                    Filter by Year
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => setSelectedYear(null)}
                                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                                            selectedYear === null
                                                ? 'bg-blue-600 text-white shadow-sm'
                                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                    >
                                        All Years
                                    </button>
                                    {allYears.map((year) => (
                                        <button
                                            key={year}
                                            onClick={() => setSelectedYear(selectedYear === year ? null : year)}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition ${
                                                selectedYear === year
                                                    ? 'bg-blue-600 text-white shadow-sm'
                                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                            }`}
                                        >
                                            {year}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Results Count */}
                    <div className="mb-6 max-w-4xl mx-auto">
                        <p className="text-sm text-slate-500">
                            Showing{' '}
                            <span className="font-semibold text-slate-900">{filteredPubs.length}</span>{' '}
                            {filteredPubs.length === 1 ? 'publication' : 'publications'}
                            {hasActiveFilters && ' (filtered)'}
                        </p>
                    </div>

                    {/* Publications List */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        {filteredPubs.length === 0 ? (
                            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
                                <BookOpen className="mx-auto h-12 w-12 text-slate-300 mb-4" />
                                <p className="text-lg text-slate-600">No publications match your filters</p>
                                <button
                                    onClick={clearFilters}
                                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            filteredPubs.map((pub) => (
                                <div
                                    key={pub.id}
                                    className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
                                >
                                    {/* Main Content - Always Visible */}
                                    <div
                                        className="p-5 sm:p-6 cursor-pointer"
                                        onClick={() => toggleExpand(pub.id)}
                                    >
                                        <div className="flex items-start justify-between gap-4">
                                            {pub.image && (
                                                <img
                                                    src={assetUrl(pub.image)}
                                                    alt=""
                                                    loading="lazy"
                                                    className="w-24 sm:w-32 lg:w-40 h-20 sm:h-24 lg:h-28 flex-shrink-0 object-contain bg-slate-50 border border-slate-200 rounded-xl p-1"
                                                />
                                            )}
                                            <div className="flex-1 min-w-0">
                                                {/* Year Badge */}
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-900 text-white">
                                                        {pub.year}
                                                    </span>
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug mb-2">
                                                    {pub.title}
                                                </h3>

                                                {/* Authors (truncated) */}
                                                <p className="text-sm text-slate-500 mb-2">
                                                    {formatAuthors(pub.authors, 4)}
                                                </p>

                                                {/* Journal */}
                                                <p className="text-sm text-slate-600">
                                                    <span className="font-medium">{pub.journalAbbrev}</span>
                                                    {pub.volume && `, ${pub.volume}`}
                                                    {pub.issue && `(${pub.issue})`}
                                                    {pub.pages && `: ${pub.pages}`}
                                                    {pub.month && ` (${pub.month})`}
                                                </p>
                                            </div>

                                            {/* Expand/DOI */}
                                            <div className="flex flex-col items-end gap-2 flex-shrink-0">
                                                <button className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition">
                                                    {expandedId === pub.id ? (
                                                        <ChevronUp className="h-5 w-5" />
                                                    ) : (
                                                        <ChevronDown className="h-5 w-5" />
                                                    )}
                                                </button>
                                                {pub.doi && (
                                                    <a
                                                        href={`https://doi.org/${pub.doi}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-medium text-slate-700 hover:bg-slate-100 transition"
                                                    >
                                                        DOI
                                                        <ExternalLink className="h-3 w-3" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Expanded Content */}
                                    {expandedId === pub.id && (
                                        <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t border-slate-100">
                                            <div className="pt-4 space-y-3">
                                                {pub.doi && (
                                                    <a
                                                        href={`https://doi.org/${pub.doi}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                                                    >
                                                        Read Paper
                                                        <ExternalLink className="h-4 w-4" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Publications;
