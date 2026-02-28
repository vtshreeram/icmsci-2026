export default function Speakers() {
  const speakers = [
    {
      name: "Dr. D. Vinod Kumar",
      title: "Chair-IEEE AES Chapter Madras Section",
      affiliation: "Vinayaka Mission's Kirupanada Variyar Engineering College, Vinayaka Mission's Research Foundation (Deemed to be University), Salem",
    },
    {
      name: "Dr. Minwoo Jake Lee",
      title: "",
      affiliation: "University of North Carolina at Charlotte, Charlotte",
    },
    {
      name: "Dr. Jennie Si",
      title: "",
      affiliation: "Arizona State University, United States",
    },
    {
      name: "Prof. Dr. Fernando Buarque",
      title: "IEEE Computational Intelligence in Latin America Task Force",
      affiliation: "University of Pernambuco, Brazil",
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Keynote Speakers</h1>
          <p className="text-slate-600 mt-2">Distinguished experts sharing insights at ICMSCI 2026</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {speakers.map((speaker, idx) => (
            <div key={idx} className="card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xl">{speaker.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">{speaker.name}</h3>
                  {speaker.title && (
                    <p className="text-blue-600 text-sm font-medium mb-1">{speaker.title}</p>
                  )}
                  <p className="text-slate-500 text-sm">{speaker.affiliation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-3">Call for Speakers</h3>
          <p className="text-slate-600">
            We are continuously inviting distinguished experts to serve as keynote speakers. 
            If you are interested in presenting at ICMSCI 2026, please contact the organizing committee.
          </p>
        </div>
      </div>
    </div>
  );
}
