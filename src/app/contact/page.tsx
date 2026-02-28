export default function Contact() {
  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Contact Us</h1>
          <p className="text-slate-600 mt-2">Get in touch with the organizing committee</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="card p-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800">General Information</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-blue-600 text-sm font-medium mb-1">Contact Person</p>
                <p className="text-slate-800 font-medium">Prof. L. Kalaiselvi</p>
              </div>
              <div>
                <p className="text-blue-600 text-sm font-medium mb-1">Designation</p>
                <p className="text-slate-600">Associate Professor and Head, Department of ECE, Surya Engineering College, Erode, India</p>
              </div>
              <div>
                <p className="text-blue-600 text-sm font-medium mb-1">Email</p>
                <a href="mailto:icmsciconference@gmail.com" className="text-slate-600 hover:text-blue-600">
                  icmsciconference@gmail.com
                </a>
              </div>
              <div>
                <p className="text-blue-600 text-sm font-medium mb-1">Phone</p>
                <p className="text-slate-600">+91-9789653809</p>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800">Registration Information</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-amber-600 text-sm font-medium mb-1">Contact Person</p>
                <p className="text-slate-800 font-medium">Prof. M. Sowmiya</p>
              </div>
              <div>
                <p className="text-amber-600 text-sm font-medium mb-1">Designation</p>
                <p className="text-slate-600">Assistant Professor, Department of ECE, Surya Engineering College, Erode, India</p>
              </div>
              <div>
                <p className="text-amber-600 text-sm font-medium mb-1">Email</p>
                <a href="mailto:icmsciconference@gmail.com" className="text-slate-600 hover:text-amber-600">
                  icmsciconference@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-5">Send us a Message</h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-slate-600 text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-slate-600 text-sm font-medium mb-2">Subject</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Message subject"
              />
            </div>
            <div>
              <label className="block text-slate-600 text-sm font-medium mb-2">Message</label>
              <textarea 
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-900 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
