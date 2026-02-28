export default function Publication() {
  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Publication</h1>
          <p className="text-slate-600 mt-2">IEEE Xplore Indexed Proceedings</p>
        </div>

        <div className="card p-8 mb-6 bg-blue-50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-2xl">IEEE</span>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-800 mb-3">IEEE Xplore Digital Library</h2>
              <p className="text-slate-600 mb-4">
                All registered and presented papers will be submitted for inclusion into IEEE Xplore.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <div className="px-4 py-2 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-500 text-sm">ISBN: </span>
                  <span className="text-blue-800 font-semibold">979-8-3315-6898-6</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-white border border-slate-200">
                  <span className="text-slate-500 text-sm">DVD ISBN: </span>
                  <span className="text-blue-800 font-semibold">979-8-3315-6897-9</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6 mb-6">
          <h3 className="text-lg font-bold text-slate-800 mb-3">Author Ethics</h3>
          <p className="text-slate-600 mb-4">
            All authors must adhere to IEEE publication ethics guidelines. Please refer to the IEEE Author Center for detailed information.
          </p>
          <a 
            href="https://conferences.ieeeauthorcenter.ieee.org/author-ethics/ethical-requirements/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            IEEE Author Ethics Guidelines
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="card p-5 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-slate-800 font-semibold mb-1">Peer Reviewed</h4>
            <p className="text-slate-500 text-sm">All papers undergo rigorous double-blind peer review</p>
          </div>
          <div className="card p-5 text-center">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h4 className="text-slate-800 font-semibold mb-1">Indexed</h4>
            <p className="text-slate-500 text-sm">Indexed in IEEE Xplore and major databases</p>
          </div>
          <div className="card p-5 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
              </svg>
            </div>
            <h4 className="text-slate-800 font-semibold mb-1">Global Reach</h4>
            <p className="text-slate-500 text-sm">Worldwide visibility and citation opportunities</p>
          </div>
        </div>
      </div>
    </div>
  );
}
