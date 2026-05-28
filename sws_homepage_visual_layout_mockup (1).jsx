export default function SWSHomepageMockup() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="relative h-[720px] overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 opacity-25 bg-[url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <div className="mb-8 rounded-full border border-white/20 bg-black/30 px-6 py-2 text-sm tracking-[0.3em] uppercase backdrop-blur-sm">
            Statewide Well Surveys LLC
          </div>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Professional Geophysical
            <br />
            Well Logging Services
          </h1>

          <p className="mt-6 text-xl text-gray-300 md:text-2xl">
            Serving California, Arizona & Nevada
            
            Travel to surrounding Western states available as project needs require.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-400">
            Reliable Data • Calibrated Equipment • Experienced Field Support
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-black shadow-2xl transition hover:scale-105">
              Request a Quote
            </button>

            <button className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition hover:bg-white/20">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              About SWS
            </div>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Trusted Well Logging Experience Built Over Decades
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-gray-600">
              Statewide Well Surveys LLC provides professional geophysical well logging services for water wells, monitoring wells, engineering firms, hydrogeologists, municipalities, and drilling contractors throughout the Western United States.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              With over 30 years of industry experience, SWS delivers dependable field operations, modern calibrated equipment, and professional reporting designed to support quality groundwater and engineering projects.
            </p>
          </div>

          <div className="rounded-[32px] bg-gray-100 p-8 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="text-4xl font-bold">30+</div>
                <div className="mt-2 text-gray-600">Years Experience</div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="text-4xl font-bold">3</div>
                <div className="mt-2 text-gray-600">States Covered</div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="text-4xl font-bold">24/7</div>
                <div className="mt-2 text-gray-600">Field Support</div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg">
                <div className="text-4xl font-bold">SDS</div>
                <div className="mt-2 text-gray-600">Warrior Platform</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
              Professional Services
            </div>

            <h2 className="text-4xl font-bold md:text-5xl">
              Comprehensive Well Logging Solutions
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-[28px] bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold">Open Hole Logging</h3>

              <ul className="mt-6 space-y-3 text-lg text-gray-600">
                <li>• Electric Log (Elog)</li>
                <li>• Gamma Ray</li>
                <li>• Guard / LL3</li>
                <li>• Caliper</li>
                <li>• Sonic</li>
                <li>• Deviation / Verticality</li>
              </ul>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold">Cased Hole Services</h3>

              <ul className="mt-6 space-y-3 text-lg text-gray-600">
                <li>• Spinner Surveys</li>
                <li>• Temperature Surveys</li>
                <li>• Fluid Resistivity</li>
                <li>• Video Logging</li>
                <li>• Cement Bond Log (CBL)</li>
              </ul>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold">Additional Services</h3>

              <ul className="mt-6 space-y-3 text-lg text-gray-600">
                <li>• Water Sampling</li>
                <li>• Biological / Scale Sampling</li>
                <li>• LAS Deliverables</li>
                <li>• Data Presentation</li>
                <li>• Professional Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Experience That Matters',
              text: 'Decades of field and operational well logging experience across multiple industries.',
            },
            {
              title: 'Reliable Equipment',
              text: 'Modern calibrated systems designed for dependable data acquisition and reporting.',
            },
            {
              title: 'Responsive Service',
              text: 'Efficient scheduling, clear communication, and professional field operations.',
            },
            {
              title: 'Regional Coverage',
              text: 'Serving California, Arizona, and Nevada with flexible mobilization. Additional regional travel available upon request, including Utah, Oregon, Washington, and New Mexico.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold leading-tight">{item.title}</h3>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPANDING CAPABILITIES */}
      <section className="bg-gray-100 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
            Future Expansion
          </div>

          <h2 className="text-4xl font-bold md:text-5xl">
            Expanding Capabilities
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-gray-600">
            Statewide Well Surveys LLC continues investing in advanced geophysical technologies to support evolving project requirements throughout the Western United States.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-[28px] bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold">Gyroscopic Deviation Surveys</h3>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold">Electromagnetic Thickness Measurement (EMT24)</h3>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold">Nuclear Magnetic Resonance (NMR)</h3>
            </div>

            <div className="rounded-[28px] bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-bold">Dual Induction Logging</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Request a Quote
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-gray-300">
            Contact Statewide Well Surveys LLC for professional geophysical well logging services throughout California, Arizona, and Nevada.
          </p>

          <div className="mt-12 flex flex-col items-center gap-4 text-2xl font-semibold">
            <div>(909) 801-0262</div>
            <div className="text-lg text-gray-300">
              statewidewellsurveys@gmail.com
            </div>
          </div>

          <button className="mt-12 rounded-2xl bg-white px-10 py-5 text-lg font-bold text-black shadow-2xl transition hover:scale-105">
            Contact SWS
          </button>
        </div>
      </section>
    </div>
  )
}
