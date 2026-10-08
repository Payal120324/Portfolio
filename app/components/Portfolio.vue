<template>
    <section id="portfolio" class="py-20 bg-gradient-to-b from-dark/95 to-dark">
        <div class="container mx-auto px-6">
            <h2 class="section-title">Featured Projects & Research</h2>

            <p class="text-center text-light/60 mb-12 max-w-2xl mx-auto">
                First-author research in neuromorphic NLP, alongside production-ready AI systems, knowledge graphs, and full-stack applications
            </p>

            <!-- Filter Tabs -->
            <div class="flex flex-wrap justify-center gap-3 mb-12">
                <button v-for="category in categories" :key="category" @click="selectedCategory = category"
                    :class="selectedCategory === category ? 'filter-btn-active' : 'filter-btn'">
                    {{ category }}
                </button>
            </div>

            <!-- Projects Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div v-for="project in filteredProjects" :key="project.id" class="project-card flex flex-col justify-between">
                    <div>
                        <!-- Project Header / Visual Header -->
                        <div class="project-thumbnail relative bg-gradient-to-br from-primary/20 via-dark/80 to-secondary/20 p-6 flex flex-col justify-between border-b border-primary/20">
                            <div class="flex justify-between items-center mb-4">
                                <span class="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 border border-accent/30 text-accent">
                                    {{ project.badge }}
                                </span>
                                <span class="text-xs text-light/60">{{ project.date }}</span>
                            </div>

                            <div class="my-4 flex items-center justify-center">
                                <div class="w-16 h-16 rounded-2xl bg-dark/60 border border-primary/30 flex items-center justify-center text-secondary">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" :d="project.icon" />
                                    </svg>
                                </div>
                            </div>

                            <div class="project-overlay">
                                <button @click="openModal(project)" class="view-btn">
                                    View Details
                                </button>
                            </div>
                        </div>

                        <!-- Project Info -->
                        <div class="p-6">
                            <h3 class="text-xl font-heading font-bold mb-2 text-white hover:text-accent transition-colors">
                                {{ project.title }}
                            </h3>
                            <p class="text-xs font-medium text-secondary mb-3">{{ project.subtitle }}</p>
                            <p class="text-light/75 text-sm mb-4 leading-relaxed line-clamp-3">
                                {{ project.description }}
                            </p>

                            <!-- Tags -->
                            <div class="flex flex-wrap gap-1.5 mb-4">
                                <span v-for="tag in project.tags" :key="tag" class="project-tag">
                                    {{ tag }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Card Footer / Actions -->
                    <div class="px-6 pb-6 pt-3 border-t border-primary/20 flex items-center justify-between">
                        <span class="text-xs font-medium text-accent">{{ project.metric }}</span>
                        <button @click="openModal(project)" class="text-xs font-semibold text-light/70 hover:text-accent transition-colors flex items-center gap-1">
                            {{ project.isPaper ? 'Read Paper' : 'Case Study' }}
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Project Modal -->
            <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
                <div class="modal-content" @click.stop>
                    <button @click="closeModal" class="modal-close" aria-label="Close modal">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>

                    <div class="mb-4">
                        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-accent/10 border border-accent/30 text-accent mr-2">
                            {{ selectedProject.category }}
                        </span>
                        <span class="text-xs text-light/60">{{ selectedProject.date }}</span>
                    </div>

                    <h2 class="text-2xl md:text-3xl font-heading font-bold mb-2 text-white">{{ selectedProject.title }}</h2>
                    <p class="text-secondary font-medium mb-4">{{ selectedProject.subtitle }}</p>

                    <div class="flex flex-wrap gap-2 mb-6">
                        <span v-for="tag in selectedProject.tags" :key="tag" class="project-tag">
                            {{ tag }}
                        </span>
                    </div>

                    <div class="space-y-6">
                        <div>
                            <h3 class="text-lg font-semibold text-accent mb-2">
                                {{ selectedProject.isPaper ? 'Research Abstract & Scope' : 'Project Overview' }}
                            </h3>
                            <p class="text-light/80 text-sm leading-relaxed">{{ selectedProject.overview }}</p>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-accent mb-2">
                                {{ selectedProject.isPaper ? 'Key Research Findings & Contributions' : 'Key Highlights & Architecture' }}
                            </h3>
                            <ul class="list-none space-y-2 text-light/80 text-sm">
                                <li v-for="(point, idx) in selectedProject.keyPoints" :key="idx" class="flex items-start gap-2.5">
                                    <span class="text-accent">&#10003;</span>
                                    <span>{{ point }}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-dark/70 border border-primary/30 rounded-xl p-4">
                            <div class="text-xs font-semibold text-light/60 uppercase tracking-wider mb-1">
                                {{ selectedProject.isPaper ? 'Key Performance / Energy Benchmark' : 'Key Impact / Metric' }}
                            </div>
                            <div class="text-xl font-bold text-accent">{{ selectedProject.metric }}</div>
                        </div>

                        <div class="flex flex-wrap gap-4 pt-2">
                            <a :href="selectedProject.github" target="_blank" rel="noopener noreferrer" class="btn-primary flex items-center gap-2">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                                {{ selectedProject.isPaper ? 'View Code / Framework' : 'View on GitHub' }}
                            </a>
                            <a href="#contact" @click="closeModal" class="btn-secondary">
                                Discuss {{ selectedProject.isPaper ? 'Research' : 'Project' }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['All', 'Research & AI', 'AI & NLP', '3D & Vision', 'Full-Stack', 'Data Analytics']
const selectedCategory = ref('All')
const selectedProject = ref(null)

const projects = [
    {
        id: 1,
        title: 'Spike Encoding in Legal NLP',
        subtitle: 'A Semantic- and Energy-Aware Study Under Domain Shift',
        badge: 'Research Paper • First Author',
        isPaper: true,
        description: 'First-author empirical research evaluating 5 spike encoding schemes converting LegalBERT embeddings to spike trains for Leaky Integrate-and-Fire (LIF) SNNs, fixing 4 critical defects and proving domain-shift dynamics.',
        tags: ['Spiking Neural Networks (SNNs)', 'LegalBERT', 'Neuromorphic NLP', 'Domain Shift', 'First Author', 'CaseHOLD & ECtHR'],
        category: 'Research & AI',
        metric: 'Up to 187,000x Theoretical Energy Ratio',
        date: '2026',
        github: 'https://github.com/Payal120324',
        icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
        overview: 'Authored by Payal Sharad Salve (First Author, Department of Computer Science & IT, Ramnarain Ruia Autonomous College). This paper conducts a multi-axis empirical evaluation of five spike encoding strategies (Poisson rate, latency, temporal, population, and adaptive binary-threshold) on CaseHOLD and ECtHR legal classification benchmarks using the open-source Spike-Legal-NLP framework.',
        keyPoints: [
            'Evaluated five spike encoding schemes converting continuous LegalBERT embeddings into discrete spike trains for Leaky Integrate-and-Fire (LIF) SNN classifiers.',
            'Diagnosed and resolved four critical framework defects: classification-readout collapse, outlier dimension normalization defect (fixing rogue dimensions 205 & 308 squashing 766 informative dimensions), population encoder OOM failure, and label-space mismatch under domain shift.',
            'Measured theoretical energy efficiency ratios ranging from 696x (population) to over 187,000x (sparse latency and temporal coding with 98.7% sparsity) over dense transformer baselines.',
            'Demonstrated that cosine similarity under per-sample normalization was misleading, appearing near-perfect for encodings that had representational collapse.',
            'Established label-free representation-level domain shift (centroid cosine similarity 0.787, MMD 0.141) between U.S. CaseHOLD and European ECtHR legal corpora.'
        ]
    },
    {
        id: 2,
        title: 'ResearchMate',
        subtitle: 'AI Research Assistant Platform',
        badge: 'NLP & LLMs',
        isPaper: false,
        description: 'AI-powered research assistant that summarizes research papers, enables document-based Q&A, and streamlines literature review using NLP and large language models.',
        tags: ['NLP', 'Large Language Models', 'Semantic Search', 'Full-Stack', 'Document Q&A'],
        category: 'AI & NLP',
        metric: 'Intelligent Document Discovery',
        date: '2025',
        github: 'https://github.com/Payal120324',
        icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        overview: 'ResearchMate is designed to solve academic literature overload by combining conversational AI with intelligent document parsing and semantic search, allowing researchers to explore papers collaboratively.',
        keyPoints: [
            'Developed an AI-powered research assistant that summarizes research papers, enables document-based Q&A, and streamlines literature review using NLP and large language models.',
            'Integrated intelligent document processing, semantic search, and conversational AI to extract key insights and improve knowledge discovery.',
            'Built a responsive full-stack web application with secure file uploads, real-time AI interactions, and an intuitive user interface for academic research.'
        ]
    },
    {
        id: 3,
        title: 'Ideascape',
        subtitle: 'AI-Powered Thought Mapping Platform',
        badge: '3D & Knowledge Graphs',
        isPaper: false,
        description: 'Engineered an AI-driven platform that transforms journals, notes, and thought streams into interactive knowledge graphs for visual exploration with webcam gesture controls.',
        tags: ['AI', 'Knowledge Graphs', '3D Visualization', 'NLP', 'Gesture Controls', 'Computer Vision'],
        category: '3D & Vision',
        metric: 'Dynamic 3D Graphs + Gesture UI',
        date: '2025',
        github: 'https://github.com/Payal120324',
        icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
        overview: 'Ideascape transforms unstructured thoughts and journal entries into visual nodes and clusters. Demonstrated the seamless integration of NLP, graph analytics, and human-computer interaction.',
        keyPoints: [
            'Engineered an AI-driven platform that transforms journals, notes, and thought streams into interactive knowledge graphs for visual exploration.',
            'Designed dynamic 3D graph visualizations to represent relationships between concepts, ideas, and personal insights.',
            'Implemented webcam-based gesture controls to enable hands-free navigation and interaction within immersive thought maps.',
            'Combined NLP, knowledge graph generation, and visualization to create an intuitive tool for reflection, creativity, and knowledge discovery.'
        ]
    },
    {
        id: 4,
        title: 'Finora',
        subtitle: 'AI-Powered Personal Finance Management System',
        badge: 'Full-Stack FinTech',
        isPaper: false,
        description: 'Cross-platform personal finance application for tracking income, expenses, budgets, savings goals, and bill reminders with real-time cloud synchronization.',
        tags: ['Firebase', 'Cloud Firestore', 'Financial Dashboards', 'PDF/Excel Reports', 'Real-Time Sync'],
        category: 'Full-Stack',
        metric: 'Real-Time Sync & Analytics',
        date: '2025',
        github: 'https://github.com/Payal120324',
        icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
        overview: 'Finora helps individuals manage their financial health through automated budgeting, interactive analytics, and bill reminders, backed by cloud synchronization.',
        keyPoints: [
            'Developed a cross-platform personal finance application for tracking income, expenses, budgets, savings goals, and bill reminders with real-time cloud synchronization.',
            'Implemented interactive financial dashboards, spending analytics, and PDF/Excel report generation to provide actionable insights into personal finances.',
            'Designed a scalable Firebase-backed architecture with secure authentication, Cloud Firestore integration, and a responsive mobile user experience.'
        ]
    },
    {
        id: 5,
        title: 'EDA & Reporting Automation',
        subtitle: 'Enterprise Data Science Pipeline | SORT Solution',
        badge: 'Data Science & Analytics',
        isPaper: false,
        description: 'Data processing and automated reporting system handling 10,000+ records using Python, SQL, and statistical techniques, cutting analysis time by 25%.',
        tags: ['Python', 'SQL', 'Data Cleaning', 'EDA Automation', 'Statistical Analysis'],
        category: 'Data Analytics',
        metric: '30% Less Inconsistencies & -25% Time',
        date: '2025',
        github: 'https://github.com/Payal120324',
        icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
        overview: 'Developed automated exploratory data analysis and reporting pipelines during Data Science Internship at SORT Solution.',
        keyPoints: [
            'Analyzed and processed 10,000+ records using Python, SQL, and statistical techniques to uncover actionable business insights.',
            'Performed data cleaning, preprocessing, and exploratory data analysis (EDA), reducing data inconsistencies by over 30% and improving dataset reliability.',
            'Automated reusable EDA and reporting workflows, reducing analysis time by approximately 25% and improving team productivity.'
        ]
    }
]

const filteredProjects = computed(() => {
    if (selectedCategory.value === 'All') {
        return projects
    }
    if (selectedCategory.value === 'Research & AI') {
        return projects.filter(p => p.category === 'Research & AI' || p.isPaper)
    }
    return projects.filter(p => p.category === selectedCategory.value)
})

const openModal = (project) => {
    selectedProject.value = project
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    selectedProject.value = null
    document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.section-title {
    @apply text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent;
}

.filter-btn {
    @apply px-5 py-2 rounded-full border border-primary/30 text-light/70 hover:border-accent hover:text-accent transition-all duration-300 text-sm;
}

.filter-btn-active {
    @apply px-5 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-md shadow-primary/20;
}

.project-card {
    @apply bg-dark/60 border border-primary/20 rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:scale-[1.02];
}

.project-thumbnail {
    @apply min-h-[160px];
}

.project-overlay {
    @apply absolute inset-0 bg-dark/85 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300;
}

.view-btn {
    @apply px-5 py-2.5 bg-accent text-dark font-semibold text-sm rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105;
}

.project-tag {
    @apply px-2.5 py-0.5 text-xs bg-primary/20 border border-primary/40 rounded-full text-secondary;
}

.modal-overlay {
    @apply fixed inset-0 bg-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto;
}

.modal-content {
    @apply bg-dark border-2 border-accent/30 rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl;
}

.modal-close {
    @apply absolute top-4 right-4 text-light/60 hover:text-accent transition-colors;
}

.btn-primary {
    @apply px-6 py-3 bg-primary hover:bg-primary/80 text-white font-semibold text-sm rounded-lg transition-all duration-300;
}

.btn-secondary {
    @apply px-6 py-3 bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-dark font-semibold text-sm rounded-lg transition-all duration-300;
}
</style>
