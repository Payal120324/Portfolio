<template>
    <section id="about" class="py-20 bg-gradient-to-b from-dark to-dark/95">
        <div class="container mx-auto px-6">
            <h2 class="section-title">About Me</h2>

            <div class="grid md:grid-cols-2 gap-12 items-center">
                <!-- Profile Image / Graphic -->
                <div class="relative">
                    <div class="aspect-square max-w-md mx-auto relative">
                        <div
                            class="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl transform rotate-6">
                        </div>
                        <div class="absolute inset-0 bg-dark border-2 border-accent/30 rounded-2xl overflow-hidden flex flex-col items-center justify-center p-8 text-center">
                            <div class="w-28 h-28 rounded-full bg-gradient-to-tr from-primary via-secondary to-accent p-1 mb-4 shadow-lg shadow-primary/30">
                                <div class="w-full h-full rounded-full bg-dark flex items-center justify-center text-3xl font-heading font-bold text-accent">
                                    PS
                                </div>
                            </div>
                            <h3 class="text-2xl font-heading font-bold text-white mb-1">Payal Sharad Salve</h3>
                            <p class="text-xs sm:text-sm font-medium text-secondary mb-3">AI/ML &bull; Data Science &bull; Data Analyst &bull; UI/UX Designer</p>
                            <p class="text-xs text-light/70 max-w-xs mb-4">
                                Ramnarain Ruia Autonomous College<br/>
                                Bachelor of Computer Science (NEP) (2023 - 2027)
                            </p>
                            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/40 text-accent text-xs font-semibold">
                                <span class="w-2 h-2 rounded-full bg-accent"></span>
                                CGPA: 8.86 / 10
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Content -->
                <div>
                    <h3 class="text-3xl font-heading font-bold mb-6">
                        Passionate About <span class="text-accent">AI-Powered Systems & Data Analytics</span>
                    </h3>

                    <p class="text-light/80 mb-4 leading-relaxed">
                        Results-oriented Computer Science student with experience in AI/ML, Data Science, Data Analytics, and UI/UX Design. Proven ability to build scalable solutions, analyse large datasets, and deliver impactful projects.
                    </p>

                    <p class="text-light/80 mb-8 leading-relaxed">
                        Passionate about solving complex problems, building scalable user-focused AI systems, and conducting research in deep learning and neuromorphic NLP. Completed tenure as a Google Gemini Student Ambassador (March &ndash; September 2026) and pursuing a Bachelor of Computer Science at Ramnarain Ruia Autonomous College with an 8.86 CGPA.
                    </p>

                    <!-- Timeline -->
                    <div class="space-y-6">
                        <div class="timeline-item">
                            <div class="flex items-start gap-4">
                                <div
                                    class="w-12 h-12 bg-primary/20 border-2 border-primary rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-lg text-white">Education</h4>
                                    <p class="text-light/90 font-medium">Bachelor of Computer Science (NEP)</p>
                                    <p class="text-light/60 text-sm">Ramnarain Ruia Autonomous College (2023 - 2027) &bull; CGPA: 8.86</p>
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="flex items-start gap-4">
                                <div
                                    class="w-12 h-12 bg-secondary/20 border-2 border-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-lg text-white">Certifications</h4>
                                    <p class="text-light/80 text-sm">&bull; Artificial Intelligence Mastery &ndash; Udemy (May 2025)</p>
                                    <p class="text-light/80 text-sm">&bull; Data Science and Machine Learning with Python &ndash; Udemy (July 2024)</p>
                                </div>
                            </div>
                        </div>

                        <div class="timeline-item">
                            <div class="flex items-start gap-4">
                                <div
                                    class="w-12 h-12 bg-accent/20 border-2 border-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                        </path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-semibold text-lg text-white">Honors, Research & Leadership</h4>
                                    <p class="text-light/80 text-sm">&bull; First Author: Research on Spike Encoding & SNNs for Legal Text Classification</p>
                                    <p class="text-light/80 text-sm">&bull; HPAIR 2026 Delegate (Harvard Project Virtual Conference)</p>
                                    <p class="text-light/80 text-sm">&bull; Google Gemini Student Ambassador (Mar 2026 &ndash; Sep 2026 &bull; Completed)</p>
                                    <p class="text-light/60 text-sm">&bull; Project Co-Ordinator & Tech Head at NSS &bull; Event Head TechStorm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.section-title {
    @apply text-4xl md:text-5xl font-heading font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent;
}

.timeline-item {
    @apply relative;
}
</style>
