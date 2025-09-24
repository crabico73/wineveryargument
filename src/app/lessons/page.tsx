import Link from "next/link";

export default function Lessons() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Win Every Argument
          </Link>
          <div className="space-x-6">
            <Link href="/lessons" className="text-yellow-400 transition-colors font-medium">
              Lessons
            </Link>
            <Link href="/premium" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-lg font-semibold hover:from-yellow-300 hover:to-orange-400 transition-colors">
              Go Premium
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Master <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Logical Argumentation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Build your critical thinking skills step by step. Start with our free lessons, then unlock advanced techniques with premium.
          </p>
        </div>
        
        {/* Free Lessons */}
        <section className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-500/20 px-6 py-2 rounded-full border border-green-500">
              <h2 className="text-2xl font-semibold text-green-400">🆓 Free Lessons</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-green-400/50 hover:border-green-400 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Lesson 1: Valid vs Sound Arguments</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <span className="bg-green-500 text-black px-3 py-1 rounded-full font-semibold">FREE</span>
                    <span>• 15 min read</span>
                  </div>
                </div>
                <div className="text-3xl">🎯</div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Learn the fundamental difference between validity and soundness - the cornerstone of logical reasoning. 
                Master these concepts to build unshakeable arguments.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-yellow-400">You'll learn:</h4>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• What makes an argument valid</li>
                  <li>• How soundness differs from validity</li>
                  <li>• Real-world examples and practice</li>
                </ul>
              </div>
              
              <Link href="/lessons/1" className="w-full bg-blue-600 hover:bg-blue-500 text-center py-3 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 inline-block">
                Start Lesson →
              </Link>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gray-600 opacity-75">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Lesson 2: Common Fallacies</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <span className="bg-green-500 text-black px-3 py-1 rounded-full font-semibold">FREE</span>
                    <span>• 20 min read</span>
                  </div>
                </div>
                <div className="text-3xl">🚫</div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Identify and counter the most common logical fallacies. Learn to spot weak arguments instantly.
              </p>
              
              <div className="bg-gray-700 text-center py-3 rounded-xl text-gray-400 font-semibold">
                Coming Soon
              </div>
            </div>
          </div>
        </section>

        {/* Premium Lessons Preview */}
        <section>
          <div className="flex items-center justify-center mb-8">
            <div className="bg-yellow-500/20 px-6 py-2 rounded-full border border-yellow-500">
              <h2 className="text-2xl font-semibold text-yellow-400">⭐ Premium Lessons</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Advanced Syllogisms", icon: "🧠", desc: "Master complex syllogistic reasoning" },
              { title: "Debate Strategies", icon: "⚔️", desc: "Winning tactics for formal debates" },
              { title: "Rhetorical Analysis", icon: "📝", desc: "Deconstruct persuasive speeches" },
              { title: "Logical Paradoxes", icon: "🌀", desc: "Navigate famous logical puzzles" },
              { title: "Argument Mapping", icon: "🗺️", desc: "Visualize complex arguments" },
              { title: "Critical Thinking", icon: "🔍", desc: "Advanced reasoning techniques" }
            ].map((lesson, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-yellow-400/30 opacity-75 group hover:opacity-90 transition-all">
                <div className="text-3xl mb-3">{lesson.icon}</div>
                <h3 className="font-bold mb-2 text-yellow-400">{lesson.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{lesson.desc}</p>
                <div className="text-xs text-gray-500 flex items-center">
                  🔒 Premium Required
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Unlock All Premium Lessons</h3>
              <p className="text-gray-300 mb-6">
                Get access to advanced techniques, interactive exercises, and exclusive content.
              </p>
              <Link href="/premium" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 inline-block">
                Go Premium Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 text-center border-t border-white/10">
        <p className="text-gray-400">
          © 2024 Win Every Argument. Master the art of persuasion.
        </p>
      </footer>
    </div>
  );
}