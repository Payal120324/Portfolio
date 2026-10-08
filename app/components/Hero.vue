<template>
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <!-- Animated Background -->
        <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/20 via-dark to-secondary/20"></div>
            <canvas ref="canvas" class="absolute inset-0 w-full h-full"></canvas>
        </div>

        <!-- Content -->
        <div class="container mx-auto px-6 z-10 text-center">
            <div class="max-w-4xl mx-auto">
                <div class="flex flex-wrap justify-center items-center gap-3 mb-6">
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-accent text-xs sm:text-sm font-medium">
                        <span class="w-2 h-2 rounded-full bg-accent"></span>
                        Google Gemini Student Ambassador (Completed Sep 2026)
                    </div>
                    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/15 border border-secondary/30 text-secondary text-xs sm:text-sm font-medium">
                        <span class="text-accent">★</span>
                        HPAIR 2026 Delegate
                    </div>
                </div>

                <h1 class="text-4xl sm:text-6xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                    Hi, I'm <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Payal Sharad Salve</span>
                </h1>

                <p class="text-xl md:text-2xl text-light/90 font-medium mb-4">
                    AI/ML &bull; Data Science &bull; Data Analyst &bull; UI/UX Designer
                </p>

                <p class="text-base md:text-lg text-light/70 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Results-oriented CS student with experience in AI/ML, Data Science, Data Analytics, and UI/UX Design. Passionate about solving complex problems and building scalable, user-focused AI-powered systems.
                </p>

                <!-- Social and CTA Buttons -->
                <div class="flex flex-wrap gap-4 justify-center items-center mb-12">
                    <a href="#portfolio" class="btn-primary">
                        View Projects
                    </a>
                    <a href="#contact" class="btn-secondary">
                        Get In Touch
                    </a>
                    <a href="mailto:payalsalve2112@gmail.com" class="p-3.5 rounded-lg border border-primary/40 bg-dark/60 text-light/80 hover:text-accent hover:border-accent transition-all duration-300" title="Email Payal">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                    </a>
                    <a href="http://www.linkedin.com/in/payal-salve-09139b28b" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-lg border border-primary/40 bg-dark/60 text-light/80 hover:text-accent hover:border-accent transition-all duration-300" title="LinkedIn">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/Payal120324" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-lg border border-primary/40 bg-dark/60 text-light/80 hover:text-accent hover:border-accent transition-all duration-300" title="GitHub">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    <a href="https://medium.com/@payalhons1203" target="_blank" rel="noopener noreferrer" class="p-3.5 rounded-lg border border-primary/40 bg-dark/60 text-light/80 hover:text-accent hover:border-accent transition-all duration-300" title="Medium">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                        </svg>
                    </a>
                </div>

                <!-- Stats from CV -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 max-w-3xl mx-auto">
                    <div class="stat-card">
                        <div class="text-3xl font-bold text-accent">8.86</div>
                        <div class="text-xs sm:text-sm text-light/60">B.Sc. CS CGPA</div>
                    </div>
                    <div class="stat-card">
                        <div class="text-3xl font-bold text-secondary">200+</div>
                        <div class="text-xs sm:text-sm text-light/60">Students Mentored</div>
                    </div>
                    <div class="stat-card">
                        <div class="text-3xl font-bold text-primary">10K+</div>
                        <div class="text-xs sm:text-sm text-light/60">Records Analyzed</div>
                    </div>
                    <div class="stat-card">
                        <div class="text-3xl font-bold text-accent">2+</div>
                        <div class="text-xs sm:text-sm text-light/60">Certifications</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll Indicator -->
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3">
                </path>
            </svg>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)

onMounted(() => {
    if (!canvas.value) return

    const ctx = canvas.value.getContext('2d')
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight

    const particles = []
    const particleCount = 80

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.value.width
            this.y = Math.random() * canvas.value.height
            this.vx = (Math.random() - 0.5) * 0.5
            this.vy = (Math.random() - 0.5) * 0.5
            this.radius = Math.random() * 2 + 1
        }

        update() {
            this.x += this.vx
            this.y += this.vy

            if (this.x < 0 || this.x > canvas.value.width) this.vx *= -1
            if (this.y < 0 || this.y > canvas.value.height) this.vy *= -1
        }

        draw() {
            ctx.beginPath()
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(42, 46, 236, 0.5)'
            ctx.fill()
        }
    }

    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

        particles.forEach(particle => {
            particle.update()
            particle.draw()
        })

        // Draw connections
        particles.forEach((p1, i) => {
            particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x
                const dy = p1.y - p2.y
                const distance = Math.sqrt(dx * dx + dy * dy)

                if (distance < 150) {
                    ctx.beginPath()
                    ctx.strokeStyle = `rgba(0, 169, 206, ${1 - distance / 150})`
                    ctx.lineWidth = 0.5
                    ctx.moveTo(p1.x, p1.y)
                    ctx.lineTo(p2.x, p2.y)
                    ctx.stroke()
                }
            })
        })

        requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener('resize', () => {
        canvas.value.width = window.innerWidth
        canvas.value.height = window.innerHeight
    })
})
</script>

<style scoped>
.btn-primary {
    @apply px-8 py-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:scale-105;
}

.btn-secondary {
    @apply px-8 py-4 bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-dark font-semibold rounded-lg transition-all duration-300;
}

.stat-card {
    @apply text-center;
}
</style>
