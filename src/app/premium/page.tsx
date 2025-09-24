import Link from "next/link";

export default function Premium() {
  const clientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Win Every Argument
          </Link>
          <div className="space-x-6">
            <Link href="/lessons" className="hover:text-yellow-400 transition-colors font-medium">
              Lessons
            </Link>
            <Link href="/premium" className="text-yellow-400 transition-colors font-medium">
              Premium
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Go <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Premium</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Unlock advanced lessons, interactive exercises, and master-level argumentation techniques
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-12 border border-yellow-400/50 shadow-2xl">
            <div className="text-center mb-8">
              <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block font-bold mb-4">
                PREMIUM ACCESS
              </div>
              <h2 className="text-3xl font-bold mb-4">Master Every Argument</h2>
              <div className="text-5xl font-bold text-yellow-400 mb-2">$29</div>
              <div className="text-gray-400">one-time payment</div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="text-green-400 mr-3">✓</div>
                <span>All current and future lessons</span>
              </div>
              <div className="flex items-center">
                <div className="text-green-400 mr-3">✓</div>
                <span>Interactive practice exercises</span>
              </div>
              <div className="flex items-center">
                <div className="text-green-400 mr-3">✓</div>
                <span>Advanced debate strategies</span>
              </div>
              <div className="flex items-center">
                <div className="text-green-400 mr-3">✓</div>
                <span>Lifetime access</span>
              </div>
              <div className="flex items-center">
                <div className="text-green-400 mr-3">✓</div>
                <span>Mobile-friendly learning</span>
              </div>
            </div>

            {/* PayPal Integration Status */}
            <div className="bg-white/5 rounded-lg p-6 mb-8 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold mb-2">Payment Integration</h3>
                  <p className="text-sm text-gray-400">
                    PayPal Client ID: {clientId ? (
                      <span className="text-green-400 font-semibold">✓ Connected</span>
                    ) : (
                      <span className="text-red-400 font-semibold">✗ Not configured</span>
                    )}
                  </p>
                </div>
                <div className="text-2xl">
                  {clientId ? "💳" : "⚠️"}
                </div>
              </div>
            </div>

            {clientId ? (
              <div className="text-center">
                <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                  Pay with PayPal
                </button>
                <p className="text-xs text-gray-400 mt-2">
                  Secure payment powered by PayPal
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="bg-gray-600 py-4 rounded-full font-bold text-lg text-gray-400">
                  Payment Setup In Progress
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  PayPal integration coming soon
                </p>
              </div>
            )}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-yellow-400">Is this a subscription?</h3>
              <p className="text-gray-300 text-sm">
                No! Pay once, access forever. No recurring charges.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-yellow-400">What if I'm not satisfied?</h3>
              <p className="text-gray-300 text-sm">
                30-day money-back guarantee. No questions asked.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-yellow-400">How many lessons are included?</h3>
              <p className="text-gray-300 text-sm">
                Currently 20+ lessons, with new content added regularly.
              </p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-6">
              <h3 className="font-bold mb-3 text-yellow-400">Can I access on mobile?</h3>
              <p className="text-gray-300 text-sm">
                Yes! Fully optimized for phones, tablets, and desktop.
              </p>
            </div>
          </div>
        </div>

        {/* Back to Free Lessons */}
        <div className="text-center mt-16">
          <Link href="/lessons" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Free Lessons
          </Link>
        </div>
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