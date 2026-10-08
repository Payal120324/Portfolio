<template>
    <section id="experience" class="py-20 bg-dark/95 border-t border-primary/20">
        <div class="container mx-auto px-6">
            <h2 class="section-title">Experience & Leadership</h2>

            <p class="text-center text-light/60 mb-16 max-w-2xl mx-auto">
                Practical experience in data science, generative AI advocacy, community engagement, and technical leadership
            </p>

            <!-- Experience Timeline -->
            <div class="max-w-4xl mx-auto space-y-8 mb-20">
                <div v-for="exp in experiences" :key="exp.role" class="exp-card">
                    <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <div>
                            <div class="flex items-center gap-3 flex-wrap">
                                <h3 class="text-xl font-heading font-bold text-white">{{ exp.role }}</h3>
                                <span class="exp-badge">{{ exp.type }}</span>
                            </div>
                            <p class="text-secondary font-medium">{{ exp.organization }}</p>
                        </div>
                        <div class="text-sm font-semibold text-accent px-3 py-1 rounded bg-accent/10 border border-accent/20 w-fit">
                            {{ exp.period }}
                        </div>
                    </div>

                    <ul class="space-y-2.5 text-light/80 text-sm list-none">
                        <li v-for="(point, idx) in exp.points" :key="idx" class="flex items-start gap-2.5">
                            <span class="text-accent text-base leading-tight mt-0.5">&#10148;</span>
                            <span>{{ point }}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Extra-Curricular & Honors Grid -->
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-10">
                    <span class="text-xs font-semibold uppercase tracking-wider text-accent px-3 py-1 rounded-full bg-accent/10 border border-accent/30 inline-block mb-3">
                        Honors & Activities
                    </span>
                    <h3 class="text-2xl md:text-3xl font-heading font-bold text-white">
                        Extra-Curricular, Honors & Leadership
                    </h3>
                </div>

                <div class="grid sm:grid-cols-2 gap-6">
                    <div v-for="item in extraCurricular" :key="item.title" class="activity-card flex flex-col justify-between">
                        <div>
                            <div class="flex items-start gap-4 mb-3">
                                <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-secondary/30 border border-accent/30 flex items-center justify-center flex-shrink-0 text-accent">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
                                    </svg>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <div class="flex items-center justify-between gap-2 flex-wrap mb-1">
                                        <h4 class="font-heading font-semibold text-white text-base">{{ item.title }}</h4>
                                        <span class="text-xs text-accent font-semibold px-2 py-0.5 rounded bg-accent/10 border border-accent/20">{{ item.period }}</span>
                                    </div>
                                    <p class="text-xs text-secondary font-medium">{{ item.subtitle }}</p>
                                </div>
                            </div>

                            <div v-if="item.highlight" class="mb-2.5">
                                <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 border border-accent/40 text-accent">
                                    ★ {{ item.highlight }}
                                </span>
                            </div>

                            <p v-if="item.description" class="text-xs text-light/80 leading-relaxed">
                                {{ item.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const experiences = [
    {
        role: 'Google Gemini Student Ambassador',
        organization: 'Ping Digital Broadcast Pvt. Ltd.',
        period: 'Mar 2026 – Sep 2026',
        type: 'Campus Ambassador (Completed)',
        points: [
            'Led Google Gemini AI awareness initiatives across campus, engaging 200+ students through interactive product demonstrations, outreach campaigns, and community-building activities.',
            'Created and published AI-focused content, including LinkedIn posts, reels, and campaign materials, contributing to increased visibility and adoption of Gemini among students.',
            'Organized workshops, interviews, and interactive sessions on Generative AI, helping students understand practical applications of AI-powered productivity and creativity tools.'
        ]
    },
    {
        role: 'Data Science Intern',
        organization: 'SORT Solution (Remote)',
        period: 'May 2025 – Jul 2025',
        type: 'Internship',
        points: [
            'Analyzed and processed 10,000+ records using Python, SQL, and statistical techniques to uncover actionable business insights.',
            'Performed data cleaning, preprocessing, and exploratory data analysis (EDA), reducing data inconsistencies by over 30% and improving dataset reliability.',
            'Automated reusable EDA and reporting workflows, reducing analysis time by approximately 25% and improving team productivity.'
        ]
    },
    {
        role: 'Marketing and Operation Team Member',
        organization: 'Ruia SORT Club',
        period: 'May 2025 – May 2025',
        type: 'Club Operations',
        points: [
            'Assisted in creating and executing marketing campaigns across social media platforms.',
            'Designed posters, social media creatives, and promotional materials using tools like Canva.',
            'Developed strategies to increase student engagement through targeted marketing and promotions.'
        ]
    }
]

const extraCurricular = [
    {
        title: 'HPAIR 2026 Delegate',
        subtitle: 'Harvard Project for Asian and International Relations',
        period: '2026',
        highlight: 'Selected Delegate',
        description: 'Selected as a delegate for the Harvard Project for Asian and International Relations (HPAIR) 2026 Virtual Conference, engaging with global youth leaders and industry pioneers.',
        icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
        title: 'Event Head – Mock Interview Event',
        subtitle: 'Departmental Fest of CS & IT Dept – TechStorm',
        period: 'TechStorm 2025',
        description: 'Led and organized the flagship Mock Interview event, preparing CS and IT students for competitive technical and HR interviews.',
        icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
        title: 'Volunteer – Hackathon Event',
        subtitle: 'Departmental Fest of CS & IT Dept – TechStorm',
        period: 'TechStorm 2024',
        description: 'Contributed to organizing the annual departmental hackathon, managing registrations, student teams, and technical coordination.',
        icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
    },
    {
        title: 'Project Co-Ordinator & Tech Head',
        subtitle: 'National Service Scheme (NSS)',
        period: '2024-25 & Camp 2023-24',
        description: 'Headed technical initiatives and coordinated community-driven social welfare projects and residential annual camps.',
        icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
    },
    {
        title: 'NCC Cadet & Camp Participant',
        subtitle: 'National Cadet Corps (NCC)',
        period: '2018-2020 & Camp 2019',
        description: 'Trained in leadership, discipline, team unity, and community service through regular drills and training camps.',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
    }
]
</script>

<style scoped>
.section-title {
    @apply text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent;
}

.exp-card {
    @apply bg-dark/60 border border-primary/20 rounded-2xl p-6 md:p-8 hover:border-accent/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10;
}

.exp-badge {
    @apply text-xs px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/40 text-accent font-medium;
}

.activity-card {
    @apply bg-dark/50 border border-secondary/20 rounded-xl p-5 hover:border-accent/40 transition-all duration-300 hover:scale-[1.02];
}
</style>
