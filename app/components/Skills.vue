<template>
    <section id="skills" class="py-20 bg-dark/90">
        <div class="container mx-auto px-6">
            <h2 class="section-title">Technical Skills</h2>

            <p class="text-center text-light/60 mb-16 max-w-2xl mx-auto">
                A solid foundation across programming languages, AI/ML libraries, database querying, data analytics, and full-stack development
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Programming Languages -->
                <div class="skill-category">
                    <div class="skill-icon bg-primary/20 border-primary">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                        </svg>
                    </div>
                    <h3 class="skill-category-title">Programming Languages</h3>
                    <ul class="skill-list">
                        <li v-for="skill in programmingLanguages" :key="skill.name" class="skill-item">
                            <div class="flex justify-between mb-1">
                                <span>{{ skill.name }}</span>
                                <span class="text-accent">{{ skill.level }}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" :style="{ width: skill.level + '%' }"></div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Data Science & AI -->
                <div class="skill-category">
                    <div class="skill-icon bg-secondary/20 border-secondary">
                        <svg class="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="skill-category-title">Data Science & AI</h3>
                    <ul class="skill-list">
                        <li v-for="skill in aiDataScience" :key="skill.name" class="skill-item">
                            <div class="flex justify-between mb-1">
                                <span>{{ skill.name }}</span>
                                <span class="text-accent">{{ skill.level }}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" :style="{ width: skill.level + '%' }"></div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- DB & Analysis -->
                <div class="skill-category">
                    <div class="skill-icon bg-accent/20 border-accent">
                        <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="skill-category-title">DB & Analysis</h3>
                    <ul class="skill-list">
                        <li v-for="skill in dbAnalysis" :key="skill.name" class="skill-item">
                            <div class="flex justify-between mb-1">
                                <span>{{ skill.name }}</span>
                                <span class="text-accent">{{ skill.level }}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" :style="{ width: skill.level + '%' }"></div>
                            </div>
                        </li>
                    </ul>
                </div>

                <!-- Web Development & Tools -->
                <div class="skill-category">
                    <div class="skill-icon bg-primary/20 border-primary">
                        <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="skill-category-title">Web & Cloud Tools</h3>
                    <ul class="skill-list">
                        <li v-for="skill in webAndTools" :key="skill.name" class="skill-item">
                            <div class="flex justify-between mb-1">
                                <span>{{ skill.name }}</span>
                                <span class="text-accent">{{ skill.level }}%</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-bar-fill" :style="{ width: skill.level + '%' }"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Python Libraries & AI Stack -->
            <div class="mt-16 bg-dark/60 border border-primary/20 rounded-2xl p-8 max-w-5xl mx-auto">
                <h3 class="text-xl font-heading font-semibold text-center mb-6 text-white">
                    Python AI/ML Ecosystem & Libraries
                </h3>
                <div class="flex flex-wrap justify-center gap-3">
                    <span v-for="lib in pythonLibs" :key="lib" class="px-4 py-2 rounded-lg bg-primary/20 border border-primary/40 text-light text-sm hover:border-accent hover:text-accent transition-colors">
                        {{ lib }}
                    </span>
                </div>
            </div>

            <!-- Core Competencies Grid -->
            <div class="mt-12">
                <h3 class="text-2xl font-heading font-semibold text-center mb-8">Core Competencies</h3>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div v-for="skill in coreSkills" :key="skill" class="competency-card">
                        <div
                            class="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-3 mx-auto">
                            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                        <p class="text-sm text-center font-medium">{{ skill }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const programmingLanguages = [
    { name: 'Python', level: 92 },
    { name: 'Java', level: 82 },
    { name: 'R', level: 78 },
    { name: 'JavaScript', level: 85 }
]

const aiDataScience = [
    { name: 'Machine Learning', level: 90 },
    { name: 'Deep Learning', level: 85 },
    { name: 'NLP & Transformers', level: 88 },
    { name: 'PyTorch & Torch', level: 82 }
]

const dbAnalysis = [
    { name: 'SQL & MySQL', level: 90 },
    { name: 'Power BI', level: 86 },
    { name: 'Statistics & EDA', level: 92 },
    { name: 'Excel & Tableau', level: 84 }
]

const webAndTools = [
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'JavaScript / Vue', level: 84 },
    { name: 'Firebase / Firestore', level: 82 },
    { name: 'Git & GitHub', level: 88 }
]

const pythonLibs = [
    'PyTorch (torch)',
    'Transformers (Hugging Face)',
    'Scikit-learn',
    'spaCy',
    'NLTK',
    'OpenCV',
    'Pandas & NumPy',
    'Matplotlib & Seaborn'
]

const coreSkills = [
    'Natural Language Processing',
    'Large Language Models (LLMs)',
    'Exploratory Data Analysis (EDA)',
    'Generative AI (Gemini)',
    'Knowledge Graph Generation',
    '3D Visualizations',
    'Computer Vision (OpenCV)',
    'Semantic Search & RAG',
    'Data Cleaning & Preprocessing',
    'Firebase Cloud Architecture'
]
</script>

<style scoped>
.section-title {
    @apply text-4xl md:text-5xl font-heading font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent;
}

.skill-category {
    @apply bg-dark/50 border border-primary/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10;
}

.skill-icon {
    @apply w-16 h-16 rounded-lg border-2 flex items-center justify-center mb-4;
}

.skill-category-title {
    @apply text-xl font-heading font-semibold mb-6;
}

.skill-list {
    @apply space-y-4;
}

.skill-item {
    @apply text-sm;
}

.skill-bar {
    @apply w-full h-2 bg-dark/50 rounded-full overflow-hidden border border-primary/20;
}

.skill-bar-fill {
    @apply h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-1000 ease-out;
}

.competency-card {
    @apply bg-dark/50 border border-secondary/20 rounded-lg p-4 hover:border-accent/40 transition-all duration-300 hover:scale-105;
}
</style>
