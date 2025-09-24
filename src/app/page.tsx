import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation Header */}
      <header className="container mx-auto px-6 py-6">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Win Every Argument
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/lessons" className="hover:text-yellow-400 transition-colors font-medium">
              Free Lessons
            </Link>
            <Link href="/premium" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all transform hover:scale-105">
              Go Premium
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Master the Art of{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent block">
              Logical Argumentation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Stop losing debates. Learn to construct bulletproof arguments, identify logical fallacies, 
            and debate like a philosophy professor. Transform your critical thinking forever.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/lessons" className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Start Learning Free →
            </Link>
            <Link href="/premium" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25">
              Unlock All Lessons
            </Link>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Master</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Build unshakeable logical foundations that make you unstoppable in any debate
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Logical Foundations</h3>
            <p className="text-gray-300 leading-relaxed">
              Master validity, soundness, and argument structure. Build arguments that cannot be refuted.
            </p>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="text-xl font-bold mb-4 text-red-400">Fallacy Detection</h3>
            <p className="text-gray-300 leading-relaxed">
              Spot logical fallacies instantly. Counter bad arguments with surgical precision.
            </p>
          </div>
          
          <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="text-4xl mb-4">💪</div>
            <h3 className="text-xl font-bold mb-4 text-green-400">Practice Exercises</h3>
            <p className="text-gray-300 leading-relaxed">
              Interactive exercises and real-world scenarios to sharpen your skills.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Thousands of Critical Thinkers</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">10,000+</div>
            <div className="text-gray-400">Students Enrolled</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">4.9★</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
            <div className="text-gray-400">Completion Rate</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-12 border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Win Every Argument?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start with our free lessons, then upgrade to unlock advanced techniques and premium content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/lessons" className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
              Start Free Now
            </Link>
            <Link href="/premium" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105">
              Go Premium
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center border-t border-white/10">
        <p className="text-gray-400">
          © 2024 Win Every Argument. Master the art of persuasion.
        </p>
      </footer>
    </div>
  );
}