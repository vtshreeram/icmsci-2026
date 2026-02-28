export default function Registration() {
  const fees = [
    {
      category: "Indian Student Members",
      ieeeCis: "₹ 9,600",
      ieee: "₹ 10,100",
      nonIeee: "₹ 10,600",
    },
    {
      category: "Indian Faculty/Research Scholars",
      ieeeCis: "₹ 9,750",
      ieee: "₹ 10,250",
      nonIeee: "₹ 10,750",
    },
    {
      category: "Indian Listeners",
      ieeeCis: "₹ 6,500",
      ieee: "₹ 7,000",
      nonIeee: "₹ 7,500",
    },
    {
      category: "Foreign Authors",
      ieeeCis: "$130",
      ieee: "$150",
      nonIeee: "$170",
    },
    {
      category: "Foreign Listeners",
      ieeeCis: "$110",
      ieee: "$130",
      nonIeee: "$140",
    },
  ];

  const inclusions = [
    "Individual certificates for all the Authors",
    "Bag",
    "DVD Conference Proceedings",
    "Conference Agenda",
    "ID Card and Lanyard",
    "Conference Pen and Scribbling Pad",
    "Conference Presentation and Networking Opportunity",
    "Refreshments Breaks (Morning/Evening)",
    "Lunch",
    "Publication of 1 accepted paper in the proceedings",
  ];

  const guidelines = [
    "Registered members should provide intimation about their payments immediately.",
    "The corresponding authors of accepted papers are required to fill, complete, sign and send the Publishing Agreement Copyright form.",
    "After completion of the registration fee process, participants are required to send the scan copy of the registration fee receipt.",
    "Any modification in the paper will not be accepted after submitting the final documents.",
    "1 paper presentation and publication will be allowed per registration.",
    "Authors of accepted papers can contact the coordinator in case of registration beyond deadlines.",
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Conference Registration</h1>
          <p className="text-slate-600 mt-2">Register for ICMSCI 2026</p>
        </div>

        <div className="card p-6 mb-6 overflow-x-auto">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Registration Fee</h3>
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left p-4 bg-blue-800 text-white rounded-tl-lg">Category</th>
                <th className="text-center p-4 bg-blue-800 text-white">IEEE CIS Members</th>
                <th className="text-center p-4 bg-blue-800 text-white">IEEE Members</th>
                <th className="text-center p-4 bg-blue-800 text-white rounded-tr-lg">Non-IEEE Members</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee, idx) => (
                <tr key={idx} className="border-b border-slate-200">
                  <td className="p-4 text-slate-700">{fee.category}</td>
                  <td className="p-4 text-center text-blue-800 font-semibold">{fee.ieeeCis}</td>
                  <td className="p-4 text-center text-slate-600">{fee.ieee}</td>
                  <td className="p-4 text-center text-slate-600">{fee.nonIeee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="card p-6 mb-6 bg-blue-50">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Registration Includes</h3>
          <div className="grid md:grid-cols-2 gap-2">
            {inclusions.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-600">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 mb-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Registration Guidelines</h3>
          <ul className="space-y-3">
            {guidelines.map((guideline, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-600">
                <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-600 text-xs font-bold">{idx + 1}</span>
                </span>
                {guideline}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6 border-l-4 border-l-red-500">
          <h3 className="text-lg font-bold text-red-600 mb-2">Cancellation & Refund Policy</h3>
          <p className="text-slate-600">
            After registration, no refunds or cancellations are permitted.
          </p>
        </div>
      </div>
    </div>
  );
}
