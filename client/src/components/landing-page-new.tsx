export function LandingPageNew() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top CTA Button */}
      <div className="fixed top-4 right-4 z-50">
        <a href="#pricing" className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold text-sm hover:bg-yellow-500 transition-colors">
          GET LIFETIME ACCESS
        </a>
      </div>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Use This Army of <span className="text-yellow-400">60 AI-Powered Helpers</span> for Your Business to Automate 90% of Your Tasks and Save $1,000s Monthly!
            </h1>

            {/* Hero Image */}
            <div className="my-16">
              <img
                src="/assets/hero-logo-main.png"
                alt="60 AI Helpers Army"
                className="w-full max-w-4xl mx-auto"
              />
            </div>

            <div className="text-xl md:text-2xl mb-8">
              <p className="mb-4">Imagine having <strong>an army of 60 bot assistants</strong>, ready to tackle any business task <strong>24/7</strong>!</p>
              <p>That's your <strong>AI revolutionary workforce</strong>.</p>
            </div>

            <a href="#pricing" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors inline-block">
              GET LIFETIME ACCESS
            </a>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">The Smartest AI Assistants You'll Ever Hire:</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-lg">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-400 text-2xl mr-3">✓</span>
                  <span><strong>60 fields of expertise</strong> – your own AI army</span>
                </div>
              </div>
              <div className="text-lg">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-400 text-2xl mr-3">✓</span>
                  <span><strong>Lifetime access</strong> – no fees, no subscriptions</span>
                </div>
              </div>
              <div className="text-lg">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-400 text-2xl mr-3">✓</span>
                  <span><strong>One-time payment</strong> – unlimited usage, forever</span>
                </div>
              </div>
              <div className="text-lg">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-yellow-400 text-2xl mr-3">✓</span>
                  <span><strong>Free‑tier friendly</strong> – works on basic free ChatGPT</span>
                </div>
              </div>
            </div>

            <a href="#pricing" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors inline-block">
              GET YOUR OFFER
            </a>
          </div>
        </section>

        {/* Gold Badge Section */}
        <section className="py-20 px-4 text-center">
          <img src="/assets/gold-badge-award.png" alt="Gold Award" className="mx-auto mb-8 max-w-xs" />
        </section>

        {/* Evolution Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
              <strong>From 24 to 60 AI Helpers:</strong> Now Smarter, Stronger, and Ready to Scale with You
            </h2>

            <div className="text-lg md:text-xl space-y-6 mb-12">
              <div className="flex items-start">
                <span className="text-yellow-400 text-2xl mr-4 mt-1">•</span>
                <span>When we first launched our 24 AI Bots just a few months ago, 700+ business owners jumped in and made them part of their daily workflow.</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 text-2xl mr-4 mt-1">•</span>
                <span><strong>Now, we've levelled up – introducing a powerful squad of 60 AI Helpers, ready to supercharge your business.</strong></span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 text-2xl mr-4 mt-1">•</span>
                <span>With this expanded AI team, you get the output of an entire company – even if you're building solo.</span>
              </div>
            </div>

            <div className="text-center">
              <a href="#pricing" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors inline-block">
                GET LIFETIME ACCESS
              </a>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Meet the Team Behind Your AI Powerhouse
            </h2>

            <p className="text-lg md:text-xl text-center mb-12">
              From <strong>content creators</strong> and <strong>marketing strategists</strong> to <strong>HR partners</strong>, <strong>sales closers</strong>, and <strong>finance pros</strong> – our <strong>AI bots</strong> are grouped into specialized teams, each built to handle a key area of your business:
            </p>

            <div className="text-center mb-8">
              <img src="/assets/team-specialists-frame.png" alt="Team Specialists" className="mx-auto max-w-full" />
            </div>

            <p className="text-center text-xl font-semibold mb-8">...and 36 more!</p>
          </div>
        </section>

        {/* Activate AI Superpowers Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Activate AI Superpowers in Your Business
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <img src="/assets/feature-tile-main.png" alt="Feature 1" className="mx-auto mb-4 max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/feature-tile-1.png" alt="Feature 2" className="mx-auto mb-4 max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/feature-tile-2.png" alt="Feature 3" className="mx-auto mb-4 max-w-full" />
              </div>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Your idea, their mission — executed in seconds!
              </h3>
              <p className="text-xl mb-8">
                <strong>Tireless, lightning-fast, and drama-free.</strong>
              </p>
              <p className="text-lg">
                With your <strong>60 AI Helpers</strong>, every corner of your business is covered — from fresh ideas to flawless execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <img src="/assets/pricing-frame.png" alt="Pricing Frame" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/feature-group-comparison.png" alt="Feature Comparison" className="mx-auto max-w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              For example...
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="text-center">
                <img src="/assets/review-testimonial-1.png" alt="Review 1" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/review-testimonial-2.png" alt="Review 2" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/review-testimonial-3.png" alt="Review 3" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/review-testimonial-4.png" alt="Review 4" className="mx-auto max-w-full" />
              </div>
            </div>

            <div className="text-center">
              <a href="#pricing" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors inline-block">
                GET LIFETIME ACCESS
              </a>
            </div>
          </div>
        </section>

        {/* Feature Icons Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <img src="/assets/icon-global-coverage.png" alt="Global Coverage" className="mx-auto mb-4 max-w-32" />
                <h3 className="text-xl font-bold mb-2">Global Coverage</h3>
                <p>Operates in 150+ languages fluently</p>
              </div>
              <div>
                <img src="/assets/icon-human-chat.png" alt="Human-like Chat" className="mx-auto mb-4 max-w-32" />
                <h3 className="text-xl font-bold mb-2">Human-like chat</h3>
                <p>Talk to your AI Helpers just like teammates</p>
              </div>
              <div>
                <img src="/assets/icon-expertly-trained.png" alt="Expertly Trained" className="mx-auto mb-4 max-w-32" />
                <h3 className="text-xl font-bold mb-2">Expertly trained</h3>
                <p>Built on insights from 10,000+ books, courses, and industry reports</p>
              </div>
            </div>
          </div>
        </section>

        {/* Perfect AI Specialist Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Perfect AI specialist for every job:
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <img src="/assets/feature-group-63.png" alt="Feature Group 63" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/feature-group-64.png" alt="Feature Group 64" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/feature-group-65.png" alt="Feature Group 65" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/feature-group-66.png" alt="Feature Group 66" className="mx-auto max-w-full" />
              </div>
            </div>

            <div className="text-center">
              <a href="#pricing" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors inline-block">
                GET LIFETIME ACCESS
              </a>
            </div>
          </div>
        </section>

        {/* Why AI Outperforms Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Our AI-powered Workers🤖 Outperform Humans🧑:
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <img src="/assets/feature-group-125.png" alt="Deeper Expertise" className="mx-auto mb-4 max-w-full" />
                <h3 className="text-xl font-bold mb-2">Deeper Expertise</h3>
                <p>🤖: Trained on 10 000+ resources</p>
                <p>🧑: Years of ramp‑up time</p>
              </div>
              <div className="text-center">
                <img src="/assets/feature-group-129.png" alt="Lightning Efficiency" className="mx-auto mb-4 max-w-full" />
                <h3 className="text-xl font-bold mb-2">Lightning Efficiency</h3>
                <p>🤖: Instant answers, zero downtime</p>
                <p>🧑: 8‑hour workday, coffee breaks</p>
              </div>
              <div className="text-center">
                <img src="/assets/feature-group-128.png" alt="Superior Accuracy" className="mx-auto mb-4 max-w-full" />
                <h3 className="text-xl font-bold mb-2">Superior Accuracy</h3>
                <p>🤖: Powered by Next-Gen AI</p>
                <p>🧑: Human inconsistency</p>
              </div>
              <div className="text-center">
                <img src="/assets/feature-group-126.png" alt="Lower Cost" className="mx-auto mb-4 max-w-full" />
                <h3 className="text-xl font-bold mb-2">Lower Cost</h3>
                <p>🤖: One‑time fee, lifetime access</p>
                <p>🧑: Monthly salary, overhead</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              What You Get That Others Don't:
            </h2>

            <div className="space-y-6 text-lg mb-12">
              <div className="flex items-start">
                <span className="text-yellow-400 text-2xl mr-4 mt-1">•</span>
                <span><strong>Lifetime Access.</strong> Buy once – your AI Helpers are yours forever.</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 text-2xl mr-4 mt-1">•</span>
                <span><strong>Zero Subscriptions.</strong> No monthly fees draining your budget.</span>
              </div>
              <div className="flex items-start">
                <span className="text-yellow-400 text-2xl mr-4 mt-1">•</span>
                <span><strong>Works with Free ChatGPT.</strong> No Plus plan or extras required.</span>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Our Commitment to You
            </h3>

            <p className="text-center text-lg mb-12">
              We stand by the quality and impact of our AI bots with:
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="/assets/chatgpt-demo-image-1.png" alt="Commitment 1" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/chatgpt-demo-image-2.png" alt="Commitment 2" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/chatgpt-demo-image-3.png" alt="Commitment 3" className="mx-auto max-w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              See What Over 10,000 Customers Are Saying About Our AI Solutions:
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <img src="/assets/benefit-group-193.png" alt="Testimonial 1" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/benefit-group-194.png" alt="Testimonial 2" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/benefit-group-195.png" alt="Testimonial 3" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/benefit-group-196.png" alt="Testimonial 4" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/benefit-group-198.png" alt="Testimonial 5" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/benefit-group-199.png" alt="Testimonial 6" className="mx-auto max-w-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Pick Your AI Helpers Bundle!
            </h2>

            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* 24 AI Bots Package */}
              <div className="bg-gray-900 p-8 rounded-lg text-center border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">24 AI Bots</h3>
                <div className="mb-4">
                  <span className="text-lg text-gray-400 line-through">$199</span>
                  <span className="text-red-400 font-bold ml-2">(-82%) Limited Offer</span>
                </div>
                <div className="text-4xl font-bold text-yellow-400 mb-6">$37</div>

                <div className="text-left space-y-2 mb-8">
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>24 ready-to-use Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>5 Marketing/SMM Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>3 Sales Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>2 Finance Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>3 Productivity Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>3 Engineering Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>2 Automation Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>1 Customer Support Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>1 Human Resources Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>1 Tech Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>1 Legal Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>1 Design Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>1 Lifestyle Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Budget Tracking Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Lead Generation Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Calorie Tracker Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Midjourney Prompt Bot</div>
                </div>

                <a href="#" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors inline-block">
                  Get This Bundle
                </a>
              </div>

              {/* 60 AI Bots Package */}
              <div className="bg-gray-900 p-8 rounded-lg text-center border-2 border-yellow-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Best Value
                </div>
                <h3 className="text-2xl font-bold mb-4">60 AI Bots</h3>
                <div className="mb-4">
                  <span className="text-lg text-gray-400 line-through">$449</span>
                  <span className="text-red-400 font-bold ml-2">(-87%)</span>
                </div>
                <div className="text-4xl font-bold text-yellow-400 mb-6">$57</div>

                <div className="text-left space-y-2 mb-8">
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>60 ready-to-use Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>10 Marketing/SMM Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>7 Sales Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>5 Finance Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>9 Productivity Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>5 Engineering Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>5 Automation Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>3 Customer Support Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>3 Human Resources</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>3 Tech Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>2 Legal Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>2 Design Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>6 Lifestyle Bots</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>PDF Processing Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>AI Prompt Engineering Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Pricing Strategy Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Brand Messaging Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Social Strategy Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Sales Stories Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Market Trend Insights Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Data Science Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Cybersecurity Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Fitness Coach Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Emotion Assistant Bot</div>
                  <div className="flex items-center"><span className="text-yellow-400 mr-2">✓</span>Personal Stylist Bot</div>
                </div>

                <a href="#" className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors inline-block">
                  Get This Bundle
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              FAQ (Frequently Asked Questions):
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Do I need coding skills?</h3>
                <p>No. Our user-friendly interface requires no technical background.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">What are AI Assistants?</h3>
                <p>AI Assistants are specialized GPT bots, expertly trained by AI professionals for specific business tasks. Easily delegate your tasks to these AI-powered specialists through an intuitive, user-friendly interface.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">How can AI Assistants boost my business?</h3>
                <p>AI Assistants streamline routine business operations, save valuable time, and provide expert insights around the clock. They're ideal for entrepreneurs, small businesses, and professionals aiming to scale operations efficiently.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Are AI Helpers easy to use?</h3>
                <p>Yes, absolutely. If you're familiar with ChatGPT, you'll effortlessly interact with our bots. Even if you're new to AI, chatting with AI Helpers feels as natural as talking to a person.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">How soon can I start using my bots/assistants?</h3>
                <p>Immediate access after purchase.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Can I use AI Helpers with a free ChatGPT account?</h3>
                <p>Yes! Our AI Assistants work perfectly with your free ChatGPT account. There's no need for a paid subscription.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Do I have to pay monthly fees?</h3>
                <p>No. There are no ongoing monthly costs. Just a one-time payment grants you lifetime access.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Is there a money-back guarantee?</h3>
                <p>Yes. We provide a 14-day money-back guarantee. If you're not fully satisfied, simply contact our friendly support team, and we'll promptly issue a refund.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Unlock Lifetime Access to Your Team of 60 AI Experts
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <img src="/assets/service-group-78.png" alt="Service 1" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/service-group-79.png" alt="Service 2" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/service-group-80.png" alt="Service 3" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/service-group-81.png" alt="Service 4" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/service-group-82.png" alt="Service 5" className="mx-auto max-w-full" />
              </div>
              <div className="text-center">
                <img src="/assets/service-group-83.png" alt="Service 6" className="mx-auto max-w-full" />
              </div>
            </div>

            <div className="text-center">
              <a href="#pricing" className="bg-yellow-400 text-black px-12 py-6 rounded-full font-bold text-xl hover:bg-yellow-500 transition-colors inline-block">
                GET LIFETIME ACCESS
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-4">© 2025 AI Compasss. All rights reserved.</p>

            <p className="text-sm text-gray-400 mb-4">
              *14-Day Money Back Guarantee Terms: If you try all these GPT bots in your ChatGPT account and follow our how-to-use guide, but you're still not happy these bots can save you time. Then you can contact us in the first 14 days for a full refund.
            </p>

            <p className="text-sm text-gray-400 mb-4">
              DISCLAIMER: Getting rich quickly doesn't exist. However, hard work, creating value and serving others does. As stated by law, we can not and do not make any guarantees about your own ability to get results or earn any money with our ideas, information, programs or strategies.
            </p>

            <div className="text-sm text-gray-400 space-x-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-white">Earnings & Product Disclaimer</a>
            </div>

            <p className="text-sm text-gray-400 mt-4">
              Do you have questions about AI Compasss. Please email hello@aicompasss.com.
            </p>

            <p className="text-xs text-gray-500 mt-4">
              IMPORTANT: This site is not a part of the Facebook website or Facebook Inc. Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}