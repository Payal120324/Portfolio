<template>
    <section id="contact" class="py-20 bg-gradient-to-b from-dark to-dark/95">
        <div class="container mx-auto px-6">
            <h2 class="section-title">Get In Touch</h2>

            <p class="text-center text-light/60 mb-12 max-w-2xl mx-auto">
                Open to full-time opportunities, internships, freelance projects, and collaborations in AI/ML, Data Science, Data Analysis, and UI/UX Design.
            </p>

            <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                <!-- Contact Form -->
                <div class="order-2 md:order-1 bg-dark/60 border border-primary/20 rounded-2xl p-6 md:p-8">
                    <h3 class="text-xl font-heading font-semibold text-white mb-6">Send a Message</h3>
                    <form @submit.prevent="handleSubmit" class="space-y-5">
                        <div>
                            <label for="name" class="block text-sm font-medium mb-2 text-light/90">Name</label>
                            <input type="text" id="name" v-model="formData.name" required class="input-field"
                                placeholder="Your name" />
                        </div>

                        <div>
                            <label for="email" class="block text-sm font-medium mb-2 text-light/90">Email</label>
                            <input type="email" id="email" v-model="formData.email" required class="input-field"
                                placeholder="your.email@example.com" />
                        </div>

                        <div>
                            <label for="subject" class="block text-sm font-medium mb-2 text-light/90">Subject</label>
                            <input type="text" id="subject" v-model="formData.subject" required class="input-field"
                                placeholder="Internship, project inquiry, discussion..." />
                        </div>

                        <div>
                            <label for="message" class="block text-sm font-medium mb-2 text-light/90">Message</label>
                            <textarea id="message" v-model="formData.message" required rows="4"
                                class="input-field resize-none"
                                placeholder="Hello Payal, I would love to connect regarding..."></textarea>
                        </div>

                        <button type="submit" class="btn-submit w-full">
                            <span class="flex items-center justify-center gap-2">
                                Send Message
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                        </button>
                    </form>

                    <!-- Success Message -->
                    <div v-if="showSuccess" class="mt-4 p-4 bg-accent/20 border border-accent rounded-lg text-accent text-sm">
                        Thank you! Your message has been recorded. You can also reach me directly at payalsalve2112@gmail.com.
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="order-1 md:order-2 space-y-6">
                    <div>
                        <h3 class="text-2xl font-heading font-semibold text-white mb-3">Let's Connect</h3>
                        <p class="text-light/70 text-sm leading-relaxed mb-6">
                            Whether you have an interesting AI project, an opportunity at your organization, or just want to chat about generative AI and machine learning, my inbox is always open!
                        </p>
                    </div>

                    <!-- Direct Contact Links -->
                    <div class="space-y-3.5">
                        <a href="mailto:payalsalve2112@gmail.com" class="contact-link">
                            <div class="contact-icon bg-primary/20 border-primary">
                                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                    </path>
                                </svg>
                            </div>
                            <div class="overflow-hidden">
                                <div class="font-semibold text-sm text-white">Email</div>
                                <div class="text-xs text-light/70 truncate">payalsalve2112@gmail.com</div>
                            </div>
                        </a>

                        <a href="tel:+918983301402" class="contact-link">
                            <div class="contact-icon bg-secondary/20 border-secondary">
                                <svg class="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                    </path>
                                </svg>
                            </div>
                            <div>
                                <div class="font-semibold text-sm text-white">Phone</div>
                                <div class="text-xs text-light/70">+91 8983301402</div>
                            </div>
                        </a>

                        <a href="http://www.linkedin.com/in/payal-salve-09139b28b" target="_blank" rel="noopener noreferrer" class="contact-link">
                            <div class="contact-icon bg-primary/20 border-primary">
                                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </div>
                            <div>
                                <div class="font-semibold text-sm text-white">LinkedIn</div>
                                <div class="text-xs text-light/70">linkedin.com/in/payal-salve-09139b28b</div>
                            </div>
                        </a>

                        <a href="https://github.com/Payal120324" target="_blank" rel="noopener noreferrer" class="contact-link">
                            <div class="contact-icon bg-accent/20 border-accent">
                                <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                            <div>
                                <div class="font-semibold text-sm text-white">GitHub</div>
                                <div class="text-xs text-light/70">github.com/Payal120324</div>
                            </div>
                        </a>

                        <a href="https://medium.com/@payalhons1203" target="_blank" rel="noopener noreferrer" class="contact-link">
                            <div class="contact-icon bg-secondary/20 border-secondary">
                                <svg class="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                </svg>
                            </div>
                            <div>
                                <div class="font-semibold text-sm text-white">Medium</div>
                                <div class="text-xs text-light/70">medium.com/@payalhons1203</div>
                            </div>
                        </a>
                    </div>

                    <!-- Status Badge -->
                    <div class="p-5 bg-gradient-to-br from-primary/20 to-secondary/20 border border-accent/30 rounded-xl">
                        <div class="flex items-center gap-2.5 mb-2">
                            <div class="w-2.5 h-2.5 bg-accent rounded-full animate-pulse"></div>
                            <span class="font-semibold text-accent text-sm">Available for Opportunities</span>
                        </div>
                        <p class="text-xs text-light/75 leading-relaxed">
                            Open to internships, full-time roles, research projects, and collaborations across AI/ML, Data Science, Data Analysis, and UI/UX Design.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const showSuccess = ref(false)

const handleSubmit = () => {
    console.log('Form submitted:', formData)
    showSuccess.value = true

    Object.keys(formData).forEach(key => formData[key] = '')

    setTimeout(() => {
        showSuccess.value = false
    }, 5000)
}
</script>

<style scoped>
.section-title {
    @apply text-4xl md:text-5xl font-heading font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent;
}

.input-field {
    @apply w-full px-4 py-2.5 bg-dark/80 border border-primary/30 rounded-lg text-light text-sm placeholder-light/40 focus:outline-none focus:border-accent transition-colors;
}

.btn-submit {
    @apply px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-semibold text-sm rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/30 hover:scale-[1.02];
}

.contact-link {
    @apply flex items-center gap-3.5 p-3.5 bg-dark/50 border border-primary/20 rounded-xl hover:border-accent/40 transition-all duration-300 hover:scale-[1.02];
}

.contact-icon {
    @apply w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0;
}
</style>
