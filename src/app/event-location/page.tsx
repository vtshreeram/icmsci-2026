export default function EventLocation() {
  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Event Location</h1>
          <p className="text-slate-600 mt-2">Find us at Surya Engineering College</p>
        </div>

        <div className="card p-8 mb-6 bg-blue-50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 bg-blue-800 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Surya Engineering College</h2>
              <p className="text-slate-600 mb-1">Erode, Tamil Nadu - 638107, India</p>
              <p className="text-slate-500 text-sm">
                Located on Perundurai Highway, Kathirampatti, Mettukadai
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <a 
            href="https://www.google.com/maps/search/Hotels/@11.3172788,77.5952633,12.19z"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-5 hover:border-blue-300 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-800 font-semibold">Nearby Hotels</h3>
                <p className="text-slate-500 text-sm">Find accommodation options</p>
              </div>
            </div>
          </a>

          <a 
            href="https://www.google.com/maps/search/attractions/@11.3332963,77.5950688,11.83z"
            target="_blank"
            rel="noopener noreferrer"
            className="card p-5 hover:border-blue-300 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-slate-800 font-semibold">Nearby Attractions</h3>
                <p className="text-slate-500 text-sm">Explore local attractions</p>
              </div>
            </div>
          </a>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-5">Getting There</h3>
          <div className="space-y-4 text-slate-600">
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <div>
                <span className="text-slate-800 font-medium">By Air:</span> Nearest airport is Coimbatore International Airport (CJB) - approximately 100 km
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <div>
                <span className="text-slate-800 font-medium">By Train:</span> Erode Junction (ED) is well connected to major cities
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              <div>
                <span className="text-slate-800 font-medium">By Road:</span> Located on NH 79 (Perundurai Highway), easily accessible by bus and car
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
