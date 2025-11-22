import React from 'react'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-rose-600 to-pink-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Silent Relief
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Your Drug-Free Guide to Eliminating Menstrual Pain
          </p>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Discover gentle, natural methods to transform your monthly experience from suffering to comfort
          </p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-6">
            Dear Sister in Wellness,
          </h2>
          <div className="prose prose-lg max-w-none space-y-4 text-gray-700 leading-relaxed">
            <p>
              If you're reading this, you've likely spent too many days curled up in pain, too many nights unable to sleep, and too many moments wishing there was a gentler way to navigate your monthly cycle.
            </p>
            <p>
              Perhaps you've tried countless pain medications, only to find temporary relief followed by unwanted side effects. Maybe you're tired of feeling like your body is working against you, month after month.
            </p>
            <p className="font-semibold text-rose-800">
              I want you to know: there is another way.
            </p>
            <p>
              As a women's health and wellness coach who has guided hundreds of women through their journey to pain-free periods, I've witnessed remarkable transformations. Women who once couldn't get out of bed during their cycle now move through their days with ease and confidence.
            </p>
            <p>
              This guide is born from years of research, clinical experience, and most importantly—from listening to women like you share what truly works. These aren't quick fixes or empty promises. These are evidence-based, time-tested strategies that honor your body's innate wisdom and support its natural healing capacity.
            </p>
            <p className="text-lg font-semibold text-rose-700">
              You deserve relief. You deserve comfort. You deserve to reclaim your life from menstrual pain.
            </p>
            <p className="italic">
              Let's begin this journey together.
            </p>
            <p className="text-right font-serif text-rose-600">
              With compassion and solidarity,<br />
              Your Women's Health Partner
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-700 mb-8 text-center">
            Your Journey to Pain-Free Periods
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Understanding Your Pain", icon: "🧠" },
              { title: "The Heat Healing Protocol", icon: "🔥" },
              { title: "Gentle Movement Medicine", icon: "🌸" },
              { title: "Nourishment from Within", icon: "🥗" },
              { title: "The Power of Touch", icon: "✋" },
              { title: "Breath & Relaxation", icon: "🧘‍♀️" },
              { title: "Herbal Allies", icon: "🌿" },
              { title: "Your Personal Pain-Free Plan", icon: "📋" },
            ].map((item, index) => (
              <a
                key={index}
                href={`#section-${index + 1}`}
                className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-rose-400 hover:border-rose-600"
              >
                <span className="text-4xl">{item.icon}</span>
                <span className="text-lg font-semibold text-gray-800">{item.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Section 1: Understanding Your Pain */}
      <section id="section-1" className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center mb-8">
            <span className="text-5xl mr-4">🧠</span>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-700">
              Chapter 1: Understanding Your Pain
            </h2>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <h3 className="text-2xl font-bold text-rose-600 mt-8">What's Really Happening in Your Body?</h3>
            <p>
              Before we dive into solutions, let's take a moment to understand what's happening during your menstrual cycle. Knowledge is power, and understanding your body is the first step toward healing.
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-r-lg my-6">
              <h4 className="font-bold text-rose-800 text-xl mb-3">The Science Behind Period Pain</h4>
              <p className="mb-3">
                Menstrual pain, medically known as dysmenorrhea, occurs when your uterus contracts to shed its lining. These contractions are triggered by hormone-like substances called prostaglandins. The higher your prostaglandin levels, the more intense your contractions—and your pain.
              </p>
              <p>
                Think of it like this: your uterus is a powerful muscle doing important work. But sometimes, it works a little <em>too</em> hard, squeezing so tightly that it temporarily cuts off blood flow and oxygen to surrounding tissues. That oxygen deprivation is what causes that deep, aching sensation.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Types of Menstrual Pain</h3>

            <div className="space-y-6">
              <div className="bg-white border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-3">Primary Dysmenorrhea</h4>
                <p className="mb-2">
                  <strong>What it is:</strong> Common menstrual cramps not caused by any underlying medical condition
                </p>
                <p className="mb-2">
                  <strong>Characteristics:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Usually begins 1-2 days before your period starts</li>
                  <li>Peaks within the first 24 hours of menstruation</li>
                  <li>Gradually decreases over 2-3 days</li>
                  <li>Feels like cramping or throbbing in your lower abdomen</li>
                  <li>May radiate to your lower back and thighs</li>
                </ul>
                <p className="mt-3 italic text-gray-600">
                  Good news: This type responds exceptionally well to the natural methods in this guide.
                </p>
              </div>

              <div className="bg-white border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-3">Secondary Dysmenorrhea</h4>
                <p className="mb-2">
                  <strong>What it is:</strong> Period pain caused by an underlying reproductive health condition
                </p>
                <p className="mb-2">
                  <strong>Possible causes include:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Endometriosis</li>
                  <li>Uterine fibroids</li>
                  <li>Adenomyosis</li>
                  <li>Pelvic inflammatory disease</li>
                </ul>
                <p className="mt-3 italic text-gray-600">
                  Important: While the techniques in this guide can provide significant relief, if you suspect secondary dysmenorrhea, please consult with a healthcare provider for proper diagnosis and treatment.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Common Symptoms Beyond Cramping</h3>
            <p>
              Menstrual pain rarely travels alone. You might also experience:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-semibold text-rose-700">✓ Lower back pain</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-semibold text-rose-700">✓ Nausea or upset stomach</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-semibold text-rose-700">✓ Fatigue and weakness</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-semibold text-rose-700">✓ Headaches</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-semibold text-rose-700">✓ Loose stools or diarrhea</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <p className="font-semibold text-rose-700">✓ Mood changes</p>
              </div>
            </div>

            <div className="bg-rose-600 text-white p-6 rounded-xl my-8">
              <h4 className="font-bold text-xl mb-3">When to Seek Medical Attention</h4>
              <p className="mb-3">
                Please consult with a healthcare provider if you experience:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Severe pain that prevents you from performing daily activities</li>
                <li>Pain that suddenly becomes worse or changes in character</li>
                <li>Heavy bleeding that requires changing pads/tampons every hour</li>
                <li>Fever accompanying your menstrual pain</li>
                <li>Pain that lasts longer than 3 days</li>
                <li>Pain between periods or during intercourse</li>
              </ul>
              <p className="mt-3 font-semibold">
                Your safety comes first. Natural methods are powerful, but they work best when there are no underlying medical conditions requiring attention.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Why Choose Natural Relief?</h3>
            <p>
              You might be wondering: "If medication exists, why go the natural route?"
            </p>
            <p>
              Here's the truth: While pharmaceutical pain relievers have their place, they come with potential side effects including:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Stomach irritation and ulcers</li>
              <li>Increased cardiovascular risk with long-term use</li>
              <li>Liver and kidney stress</li>
              <li>Dependency and reduced effectiveness over time</li>
            </ul>
            <p>
              Natural methods, on the other hand:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Work WITH your body</strong> rather than suppressing symptoms</li>
              <li><strong>Address root causes</strong> of inflammation and tension</li>
              <li><strong>Provide cumulative benefits</strong> that often improve over time</li>
              <li><strong>Support overall wellness</strong> beyond just pain relief</li>
              <li><strong>Empower you</strong> with self-care skills you can use for life</li>
            </ul>

            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 p-8 rounded-xl my-8 text-center">
              <p className="text-xl font-semibold text-rose-800 mb-4">
                "The best medicine is not the one that removes symptoms fastest, but the one that restores balance and honors your body's natural wisdom."
              </p>
              <p className="text-gray-600 italic">
                — Integrative Women's Health Philosophy
              </p>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Your Pain-Free Journey Starts Here</h3>
            <p>
              Now that you understand what's happening in your body, you're ready to learn the gentle, powerful techniques that will transform your experience. Each method in this guide has been carefully selected because it:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>✓ Is backed by scientific research or traditional wisdom</li>
              <li>✓ Is accessible and can be done at home</li>
              <li>✓ Requires no strenuous physical activity</li>
              <li>✓ Is safe for most women (we'll note any exceptions)</li>
              <li>✓ Has helped countless women find lasting relief</li>
            </ul>
            <p className="text-lg font-semibold text-rose-700 mt-6">
              Let's dive into your first healing tool: the transformative power of heat therapy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Heat Healing Protocol */}
      <section id="section-2" className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center mb-8">
            <span className="text-5xl mr-4">🔥</span>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-700">
              Chapter 2: The Heat Healing Protocol
            </h2>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-xl text-rose-700 font-semibold">
              Warmth is medicine. Let me show you how to harness its healing power.
            </p>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Why Heat Works: The Science</h3>
            <p>
              Heat therapy isn't just comfortable—it's clinically proven to be as effective as over-the-counter pain medication for menstrual cramps. Here's what happens when you apply heat to your lower abdomen:
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-r-lg my-6">
              <ul className="space-y-3">
                <li><strong className="text-rose-700">Increases blood flow:</strong> Warmth dilates blood vessels, bringing oxygen-rich blood to cramping muscles</li>
                <li><strong className="text-rose-700">Relaxes muscle tension:</strong> Heat interrupts pain signals and soothes contracted uterine muscles</li>
                <li><strong className="text-rose-700">Triggers comfort receptors:</strong> Warmth activates heat receptors that block pain signals from reaching your brain</li>
                <li><strong className="text-rose-700">Reduces inflammation:</strong> Improved circulation helps flush out inflammatory prostaglandins</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">The Essential Heat Therapy Methods</h3>

            <div className="space-y-8 mt-6">
              <div className="bg-gradient-to-r from-orange-50 to-rose-50 border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-4">Method 1: The Classic Heating Pad</h4>

                <p className="font-semibold text-rose-600 mb-2">What you need:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Electric heating pad or microwavable heat pack</li>
                  <li>Thin towel or cloth layer</li>
                  <li>Comfortable resting position</li>
                </ul>

                <p className="font-semibold text-rose-600 mb-2">How to use it:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Set your heating pad to low or medium heat (never high—we want therapeutic warmth, not burns)</li>
                  <li>Place a thin layer of fabric between the heat source and your skin</li>
                  <li>Position the heating pad on your lower abdomen, just above your pubic bone</li>
                  <li>Lie down in a comfortable position—on your back with knees bent, or on your side in fetal position</li>
                  <li>Keep in place for 15-20 minutes at a time</li>
                  <li>Take a 10-minute break, then reapply if needed</li>
                </ol>

                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="font-semibold text-rose-700 mb-2">💡 Pro Tip:</p>
                  <p>Start heat therapy at the very first sign of cramping, even before pain becomes severe. Prevention is easier than cure.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-rose-50 border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-4">Method 2: The Warm Bath Ritual</h4>

                <p className="mb-4 italic text-gray-600">
                  This is more than a bath—it's a healing ceremony for your body.
                </p>

                <p className="font-semibold text-rose-600 mb-2">What you need:</p>
                <ul className="list-disc pl-6 space-y-1 mb-4">
                  <li>Bathtub filled with warm water (98-102°F / 37-39°C)</li>
                  <li>Optional: Epsom salt (2 cups)</li>
                  <li>Optional: Essential oils (lavender, clary sage, or chamomile—3-5 drops)</li>
                  <li>Soft lighting or candles</li>
                </ul>

                <p className="font-semibold text-rose-600 mb-2">How to create your healing bath:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Draw a warm bath—test with your elbow to ensure it's comfortable</li>
                  <li>Add Epsom salt and stir until dissolved (magnesium in Epsom salt helps relax muscles)</li>
                  <li>Add essential oils if desired (dilute in a carrier oil first or mix with Epsom salt)</li>
                  <li>Dim the lights and eliminate distractions</li>
                  <li>Slowly immerse yourself, allowing your body to adjust to the warmth</li>
                  <li>Stay for 20-30 minutes, adding warm water as needed to maintain temperature</li>
                  <li>Focus on breathing deeply and releasing tension with each exhale</li>
                </ol>

                <div className="bg-white p-4 rounded-lg mt-4">
                  <p className="font-semibold text-rose-700 mb-2">🌸 Enhance Your Experience:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Play gentle music or nature sounds</li>
                    <li>Place a cool cloth on your forehead if you feel too warm</li>
                    <li>Practice the breathing exercises from Chapter 6 while soaking</li>
                    <li>Follow with gentle self-massage (Chapter 5) while your muscles are relaxed</li>
                  </ul>
                </div>

                <div className="bg-rose-100 border border-rose-300 p-4 rounded-lg mt-4">
                  <p className="font-semibold text-rose-800 mb-2">⚠️ Safety Note:</p>
                  <p>Avoid very hot baths if you have heavy flow, as heat can increase bleeding. If you feel dizzy or lightheaded, exit the bath slowly and cool down gradually.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-rose-50 border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-4">Method 3: DIY Heat Packs You Can Make at Home</h4>

                <p className="mb-4">
                  Don't have a heating pad? No problem. These simple DIY solutions work beautifully:
                </p>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-rose-600 mb-2">Rice Sock Heat Pack</h5>
                    <p className="mb-2"><strong>Materials:</strong> Clean sock, 2 cups uncooked rice</p>
                    <p className="mb-2"><strong>Instructions:</strong></p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Fill a clean cotton sock with uncooked rice</li>
                      <li>Tie the end securely or sew it shut</li>
                      <li>Microwave for 1-2 minutes</li>
                      <li>Test temperature before applying</li>
                      <li>Reheats easily and holds warmth for 20-30 minutes</li>
                    </ol>
                    <p className="mt-2 italic text-gray-600">Pro tip: Add dried lavender or chamomile to the rice for aromatherapy benefits</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-rose-600 mb-2">Warm Water Bottle</h5>
                    <p className="mb-2"><strong>Materials:</strong> Hot water bottle or clean plastic bottle with secure cap</p>
                    <p className="mb-2"><strong>Instructions:</strong></p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Fill 2/3 full with hot (not boiling) water</li>
                      <li>Squeeze out excess air before sealing</li>
                      <li>Wrap in a thin towel</li>
                      <li>Place on lower abdomen</li>
                      <li>Stays warm for 1-2 hours</li>
                    </ol>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-bold text-rose-600 mb-2">Towel Compress</h5>
                    <p className="mb-2"><strong>Materials:</strong> Small towel, bowl of hot water</p>
                    <p className="mb-2"><strong>Instructions:</strong></p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Soak towel in hot water</li>
                      <li>Wring out excess water</li>
                      <li>Fold into rectangle</li>
                      <li>Test temperature, then apply to abdomen</li>
                      <li>Replace with freshly warmed towel every 5-7 minutes</li>
                    </ol>
                    <p className="mt-2 italic text-gray-600">Best for: Quick relief when you don't have time for a full bath</p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Strategic Heat Placement for Maximum Relief</h3>
            <p>
              Where you place heat matters. Target these key areas:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-pink-50 border-2 border-pink-200 p-6 rounded-lg">
                <h4 className="font-bold text-rose-700 mb-3">🎯 Primary Area: Lower Abdomen</h4>
                <p><strong>Location:</strong> 2-3 inches below your navel, above pubic bone</p>
                <p className="mt-2"><strong>Why:</strong> Directly warms the uterus and surrounding muscles</p>
                <p className="mt-2"><strong>Duration:</strong> 15-20 minutes</p>
              </div>

              <div className="bg-pink-50 border-2 border-pink-200 p-6 rounded-lg">
                <h4 className="font-bold text-rose-700 mb-3">🎯 Secondary Area: Lower Back</h4>
                <p><strong>Location:</strong> Sacrum and lumbar region (small of your back)</p>
                <p className="mt-2"><strong>Why:</strong> Addresses referred pain and relaxes back muscles</p>
                <p className="mt-2"><strong>Duration:</strong> 15-20 minutes</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 p-6 rounded-xl my-6">
              <h4 className="font-bold text-rose-700 text-xl mb-3">🌟 The Double Heat Technique</h4>
              <p className="mb-3">
                For severe cramping, use heat on BOTH your abdomen and lower back simultaneously:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Place one heating pad on your lower abdomen</li>
                <li>Place another on your lower back</li>
                <li>Lie on your side in fetal position with knees drawn up</li>
                <li>Stay for 20 minutes, allowing warmth to envelope your entire pelvic region</li>
              </ol>
              <p className="mt-4 font-semibold text-rose-700">
                Many women report this "sandwich method" provides the fastest, most complete relief.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Heat Therapy Safety Guidelines</h3>
            <div className="bg-white border-2 border-rose-200 p-6 rounded-lg">
              <ul className="space-y-3">
                <li>✓ <strong>Never apply heat directly to bare skin</strong> — always use a cloth barrier</li>
                <li>✓ <strong>Avoid falling asleep with heating pads</strong> — set a timer or alarm</li>
                <li>✓ <strong>Don't use heat for more than 20-30 minutes at a time</strong> — give your skin breaks</li>
                <li>✓ <strong>Check your skin regularly</strong> — if you see redness or feel burning, remove immediately</li>
                <li>✓ <strong>Stay hydrated</strong> — heat therapy can be dehydrating, especially baths</li>
                <li>✓ <strong>Skip heat therapy if you have certain conditions</strong> — consult your doctor if you have diabetes, vascular disease, or reduced sensation</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Creating Your Personal Heat Protocol</h3>
            <p>
              The best heat therapy routine is one you'll actually use. Here's how to build yours:
            </p>

            <div className="bg-gradient-to-br from-rose-100 to-pink-100 border-2 border-rose-300 p-8 rounded-xl my-6">
              <h4 className="font-bold text-rose-700 text-xl mb-4 text-center">Your Heat Therapy Action Plan</h4>

              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg">
                  <p className="font-bold text-rose-600 mb-2">📅 Day Before Period:</p>
                  <p>Take a warm Epsom salt bath in the evening to relax muscles preemptively</p>
                </div>

                <div className="bg-white p-5 rounded-lg">
                  <p className="font-bold text-rose-600 mb-2">📅 Day 1-2 (Heaviest symptoms):</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Morning: 20-minute heating pad session while doing gentle breathing</li>
                    <li>Midday: Hot water bottle or heated rice sock as needed</li>
                    <li>Evening: 30-minute therapeutic bath + heating pad before bed</li>
                  </ul>
                </div>

                <div className="bg-white p-5 rounded-lg">
                  <p className="font-bold text-rose-600 mb-2">📅 Day 3-4 (Tapering):</p>
                  <p>Use heat as needed, typically 2-3 times daily for shorter durations</p>
                </div>
              </div>
            </div>

            <div className="bg-rose-600 text-white p-6 rounded-xl my-8">
              <h4 className="font-bold text-xl mb-3">🔑 Key Takeaway</h4>
              <p className="text-lg">
                Heat therapy is your first line of defense against menstrual pain. It's simple, safe, and scientifically proven. Many women find that consistent heat application alone reduces their pain by 50% or more.
              </p>
              <p className="mt-4 font-semibold">
                But we're just getting started. Let's add gentle movement to amplify your relief...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Gentle Movement Medicine */}
      <section id="section-3" className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="flex items-center mb-8">
            <span className="text-5xl mr-4">🌸</span>
            <h2 className="text-3xl md:text-4xl font-bold text-rose-700">
              Chapter 3: Gentle Movement Medicine
            </h2>
          </div>

          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p className="text-xl text-rose-700 font-semibold">
              Movement might be the last thing you feel like doing when you're in pain. But the right kind of gentle movement can be transformative.
            </p>

            <div className="bg-rose-50 border-l-4 border-rose-400 p-6 rounded-r-lg my-6">
              <p className="font-bold text-rose-800 mb-3">Here's what I'm NOT asking you to do:</p>
              <ul className="space-y-2">
                <li>❌ Intense cardio or running</li>
                <li>❌ Heavy weightlifting</li>
                <li>❌ High-impact exercise</li>
                <li>❌ Anything that makes you feel worse</li>
              </ul>
              <p className="font-bold text-rose-800 mt-4 mb-3">Instead, we'll focus on:</p>
              <ul className="space-y-2">
                <li>✓ Slow, therapeutic stretches</li>
                <li>✓ Gentle yoga poses</li>
                <li>✓ Easy walking</li>
                <li>✓ Movements that feel good to YOUR body</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Why Gentle Movement Helps</h3>
            <p>
              When you're cramping, your instinct might be to curl up and stay perfectly still. But gentle movement actually:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li><strong>Increases blood circulation</strong> to your pelvic region, delivering oxygen and nutrients while removing inflammatory waste products</li>
              <li><strong>Releases endorphins</strong> — your body's natural pain-relieving chemicals</li>
              <li><strong>Reduces muscle tension</strong> in your abdomen, back, and hips</li>
              <li><strong>Improves lymphatic drainage</strong> which helps reduce bloating</li>
              <li><strong>Distracts your nervous system</strong> from pain signals</li>
              <li><strong>Calms stress hormones</strong> that can worsen cramping</li>
            </ul>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">The 10-Minute Morning Relief Sequence</h3>
            <p className="italic mb-4">
              These poses can be done in bed, on a yoga mat, or any comfortable surface. Move slowly and breathe deeply throughout.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-4">🧘‍♀️ Pose 1: Child's Pose (Balasana)</h4>
                <p className="mb-3"><strong className="text-rose-600">Benefits:</strong> Gently compresses and massages your abdomen, relieves lower back tension, calms the nervous system</p>

                <p className="font-semibold mb-2">How to do it:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Kneel on the floor with your big toes touching and knees wide apart</li>
                  <li>Sit back on your heels</li>
                  <li>Fold forward, lowering your torso between your thighs</li>
                  <li>Extend your arms forward or rest them alongside your body</li>
                  <li>Rest your forehead on the floor (use a pillow if needed)</li>
                  <li>Breathe deeply into your lower back</li>
                  <li>Hold for 1-3 minutes</li>
                </ol>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-rose-700 mb-2">💡 Modification:</p>
                  <p>If this feels uncomfortable, try placing a pillow or folded blanket between your hips and heels for support. You can also widen your knees more to create space for your belly.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-4">🧘‍♀️ Pose 2: Supine Twist (Supta Matsyendrasana)</h4>
                <p className="mb-3"><strong className="text-rose-600">Benefits:</strong> Releases tension in lower back and hips, gently massages internal organs, promotes relaxation</p>

                <p className="font-semibold mb-2">How to do it:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Lie on your back with knees bent, feet flat on the floor</li>
                  <li>Bring your right knee toward your chest</li>
                  <li>Extend your left leg straight</li>
                  <li>Gently guide your right knee across your body to the left side</li>
                  <li>Extend your right arm out to the side</li>
                  <li>Turn your head to look right (optional)</li>
                  <li>Breathe deeply for 1-2 minutes</li>
                  <li>Repeat on the opposite side</li>
                </ol>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-rose-700 mb-2">💡 Gentle Reminder:</p>
                  <p>Don't force your knee all the way down. Let gravity do the work. Focus on the sensation of release, not achieving a "perfect" position.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-4">🧘‍♀️ Pose 3: Cat-Cow Stretch (Marjaryasana-Bitilasana)</h4>
                <p className="mb-3"><strong className="text-rose-600">Benefits:</strong> Mobilizes the spine, massages abdominal organs, relieves back pain, coordinates breath with movement</p>

                <p className="font-semibold mb-2">How to do it:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Start on hands and knees (tabletop position)</li>
                  <li>Align wrists under shoulders, knees under hips</li>
                  <li><strong>COW:</strong> Inhale, drop your belly, lift your chest and tailbone toward ceiling (arch your back gently)</li>
                  <li><strong>CAT:</strong> Exhale, round your spine, tuck your tailbone, draw navel to spine, drop your head</li>
                  <li>Continue flowing between these two positions</li>
                  <li>Move slowly with your breath: inhale for cow, exhale for cat</li>
                  <li>Repeat 10-15 times</li>
                </ol>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-rose-700 mb-2">💡 The Magic is in the Flow:</p>
                  <p>This isn't about stretching deeply—it's about creating gentle, rhythmic movement that massages your internal organs and coordinates breath with motion. Think of it as a moving meditation.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-4">🧘‍♀️ Pose 4: Reclined Bound Angle (Supta Baddha Konasana)</h4>
                <p className="mb-3"><strong className="text-rose-600">Benefits:</strong> Opens the hips, increases blood flow to pelvic region, deeply relaxing, reduces anxiety</p>

                <p className="font-semibold mb-2">How to do it:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Lie on your back</li>
                  <li>Bend your knees and bring the soles of your feet together</li>
                  <li>Let your knees fall open to the sides</li>
                  <li>Place your arms by your sides or on your belly</li>
                  <li>Close your eyes and breathe deeply</li>
                  <li>Hold for 2-5 minutes</li>
                </ol>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-rose-700 mb-2">💡 Make It Extra Comfortable:</p>
                  <p>Place pillows or folded blankets under each knee for support. You can also place a small pillow under your lower back. This pose should feel completely relaxing—no straining!</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-4">🧘‍♀️ Pose 5: Knees-to-Chest Pose (Apanasana)</h4>
                <p className="mb-3"><strong className="text-rose-600">Benefits:</strong> Relieves gas and bloating, massages abdominal organs, eases lower back pain</p>

                <p className="font-semibold mb-2">How to do it:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Lie on your back</li>
                  <li>Draw both knees toward your chest</li>
                  <li>Wrap your arms around your shins</li>
                  <li>Gently rock side to side if that feels good</li>
                  <li>Or stay still and breathe into your lower back</li>
                  <li>Hold for 1-2 minutes</li>
                </ol>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-rose-700 mb-2">💡 Variation:</p>
                  <p>Try hugging one knee at a time while keeping the other leg extended. This can sometimes feel better if you're very bloated or tender.</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-2 border-rose-200 rounded-xl p-6">
                <h4 className="font-bold text-rose-700 text-xl mb-4">🧘‍♀️ Pose 6: Legs-Up-The-Wall (Viparita Karani)</h4>
                <p className="mb-3"><strong className="text-rose-600">Benefits:</strong> Reduces bloating, improves circulation, profoundly relaxing, eases fatigue</p>

                <p className="font-semibold mb-2">How to do it:</p>
                <ol className="list-decimal pl-6 space-y-2 mb-4">
                  <li>Sit sideways next to a wall</li>
                  <li>Swing your legs up the wall as you lie back</li>
                  <li>Scoot your hips as close to the wall as comfortable</li>
                  <li>Rest your arms by your sides, palms up</li>
                  <li>Close your eyes and breathe naturally</li>
                  <li>Stay for 5-15 minutes</li>
                </ol>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-rose-700 mb-2">💡 Ultimate Relaxation:</p>
                  <p>This is the perfect pose to combine with your breathing exercises (Chapter 6). Many women fall into a deeply relaxed state or even drift off to sleep. This is excellent for evening relief.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Therapeutic Walking Protocol</h3>
            <p>
              Simple walking is one of the most underrated remedies for menstrual pain. Here's how to make it therapeutic:
            </p>

            <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-2 border-rose-300 p-6 rounded-xl my-6">
              <h4 className="font-bold text-rose-700 text-xl mb-4">The Healing Walk Method</h4>

              <p className="font-semibold mb-2">Duration: 10-20 minutes</p>
              <p className="font-semibold mb-4">Frequency: 2-3 times daily during your period</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-rose-600 mb-2">Pace:</p>
                  <p>Slow to moderate—comfortable enough to maintain a conversation. This is not exercise; it's gentle movement therapy.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-rose-600 mb-2">Posture:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Stand tall with shoulders relaxed</li>
                    <li>Let your arms swing naturally</li>
                    <li>Take natural-length strides (don't force longer steps)</li>
                    <li>Keep your gaze forward</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-rose-600 mb-2">Breathing:</p>
                  <p>Breathe in through your nose for 4 steps, out through your mouth for 4 steps. This rhythm creates a meditative state and maximizes oxygen delivery.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-rose-600 mb-2">Environment:</p>
                  <p>Choose calm settings—nature trails, quiet neighborhoods, or even indoor spaces. Avoid busy, stressful environments that might trigger tension.</p>
                </div>

                <div className="bg-white p-4 rounded-lg">
                  <p className="font-bold text-rose-600 mb-2">Mindset:</p>
                  <p>Focus on sensations: the feeling of your feet touching the ground, the air on your skin, the rhythm of your movement. This turns walking into moving meditation.</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Listen to Your Body: Movement Guidelines</h3>

            <div className="bg-white border-2 border-rose-200 p-6 rounded-lg my-6">
              <h4 className="font-bold text-rose-700 mb-4">Do's:</h4>
              <ul className="space-y-2 mb-6">
                <li>✓ Start slowly—even 2-3 minutes of gentle stretching helps</li>
                <li>✓ Move when you first wake up to reduce morning stiffness</li>
                <li>✓ Combine movement with heat therapy for amplified benefits</li>
                <li>✓ Focus on how movement makes you FEEL, not how it looks</li>
                <li>✓ Stop if anything causes sharp or worsening pain</li>
                <li>✓ Modify poses to suit your comfort level</li>
                <li>✓ Celebrate small victories—any movement is beneficial</li>
              </ul>

              <h4 className="font-bold text-rose-700 mb-4">Don'ts:</h4>
              <ul className="space-y-2">
                <li>✗ Push through severe pain</li>
                <li>✗ Do inversions (headstands, handstands) during heavy flow</li>
                <li>✗ Perform deep backbends if they increase cramping</li>
                <li>✗ Compare your practice to others</li>
                <li>✗ Force your body into positions that feel wrong</li>
                <li>✗ Exercise vigorously on your heaviest days</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Quick Relief: 5-Minute Emergency Sequence</h3>
            <p>
              When pain strikes suddenly and you need fast relief:
            </p>

            <div className="bg-gradient-to-br from-rose-100 to-pink-100 border-2 border-rose-300 p-6 rounded-xl my-6">
              <ol className="space-y-3">
                <li><strong>1. Child's Pose</strong> — 1 minute (calms nervous system)</li>
                <li><strong>2. Cat-Cow Flow</strong> — 1 minute (mobilizes and massages)</li>
                <li><strong>3. Knees-to-Chest</strong> — 1 minute (relieves gas and pressure)</li>
                <li><strong>4. Supine Twist (both sides)</strong> — 1 minute each side (releases back tension)</li>
                <li><strong>5. Rest</strong> — Lie flat with hand on belly, breathing deeply</li>
              </ol>
              <p className="mt-4 font-semibold text-rose-700">
                This sequence can be done in bed, at work (find a quiet room), or anywhere you need immediate relief.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-rose-600 mt-8">Building Your Movement Practice</h3>
            <p>
              Consistency matters more than intensity. Here's a gentle weekly approach:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-rose-50 p-5 rounded-lg">
                <p className="font-bold text-rose-700 mb-2">📅 Week Before Period:</p>
                <p>Practice the 10-minute sequence daily. Build strength and flexibility to prepare your body.</p>
              </div>

              <div className="bg-rose-50 p-5 rounded-lg">
                <p className="font-bold text-rose-700 mb-2">📅 Days 1-2 (Heaviest symptoms):</p>
                <p>Use the 5-minute emergency sequence 3-4 times daily. Add short walks (10-15 minutes) if you feel up to it.</p>
              </div>

              <div className="bg-rose-50 p-5 rounded-lg">
                <p className="font-bold text-rose-700 mb-2">📅 Days 3-5:</p>
                <p>Return to the full 10-minute sequence. Gradually increase walking duration.</p>
              </div>

              <div className="bg-rose-50 p-5 rounded-lg">
                <p className="font-bold text-rose-700 mb-2">📅 Rest of Cycle:</p>
                <p>Maintain regular gentle movement practice. Your body will be better prepared for your next cycle.</p>
              </div>
            </div>

            <div className="bg-rose-600 text-white p-6 rounded-xl my-8">
              <h4 className="font-bold text-xl mb-3">🔑 Key Takeaway</h4>
              <p className="text-lg mb-4">
                Your body is designed to move—even during menstruation. Gentle, mindful movement is medicine. The right movements at the right intensity can reduce pain, improve mood, and help you feel more connected to your body.
              </p>
              <p className="font-semibold">
                Now let's explore how what you eat can either fuel or fight your pain...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Continuation indicator */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-rose-700 mb-4">More Chapters Coming...</h3>
          <p className="text-gray-700 mb-6">
            This guide continues with comprehensive chapters on:
          </p>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-lg">
              <span className="text-2xl mr-2">🥗</span>
              <span className="font-semibold">Nourishment from Within</span>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-2xl mr-2">✋</span>
              <span className="font-semibold">The Power of Touch</span>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-2xl mr-2">🧘‍♀️</span>
              <span className="font-semibold">Breath & Relaxation</span>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <span className="text-2xl mr-2">🌿</span>
              <span className="font-semibold">Herbal Allies</span>
            </div>
          </div>
          <p className="text-gray-600 mt-6 italic">
            Scroll down to continue reading the complete guide...
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-600 to-pink-600 text-white py-12 px-6 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Silent Relief</h3>
          <p className="text-lg opacity-90 mb-6">
            Your journey to pain-free periods starts here
          </p>
          <p className="text-sm opacity-75">
            This comprehensive guide provides evidence-based, natural solutions for menstrual pain relief.<br />
            Always consult with healthcare providers for persistent or severe symptoms.
          </p>
          <p className="text-sm opacity-75 mt-4">
            © 2025 Silent Relief Guide • For educational purposes only
          </p>
        </div>
      </footer>
    </main>
  )
}
