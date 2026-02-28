export default function CallForPaper() {
  const tracks = {
    track1: {
      title: "Track 1 - Artificial Intelligence",
      topics: [
        "Cognitive Systems",
        "Neural Networks",
        "Intelligent User Interfaces",
        "Multi-Modal Learning",
        "Creative or Generative AI",
        "Automated Quantum Machine Learning",
        "Intelligent Language Modelling",
        "Augmented Analytics",
        "Artificial Intelligence Operations (AIOps)",
        "AI for IoT and Digital Twins",
      ],
    },
    track2: {
      title: "Track 2 - Agent-based Systems",
      topics: [
        "Multi-Robot Systems and Virtual Agents",
        "Human Agent Interaction, User Interfaces",
        "Mobile Agents",
        "Swarm and Collective Intelligence",
        "Emotional Intelligence",
        "Agent-Oriented Software Engineering Practices",
        "Autonomous Agents",
        "Big Data Modelling and Multi-Sensor Systems",
        "Multi-Agent System Development Frameworks",
        "Agent Engineering and Applications",
      ],
    },
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Call for Papers</h1>
          <p className="text-slate-600 mt-2">ICMSCI 2026 invites articles in two broad categories</p>
        </div>

        <div className="card p-6 mb-8">
          <p className="text-slate-600 leading-relaxed">
            ICMSCI 2026 invites articles in two broad categories and the topic areas is expanded below 
            but the sub-topics list is not limited to the given technology/application. Prospective articles 
            may address one or more of the listed sub-topics without any limitation. Articles related to 
            sub-topics are also acceptable, provided they fit in one of the following main categories:
          </p>
        </div>

        <div className="space-y-6">
          {/* Track 1 */}
          <div className="card p-6 border-t-4 border-t-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-800 font-bold">01</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800">{tracks.track1.title}</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {tracks.track1.topics.map((topic, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          {/* Track 2 */}
          <div className="card p-6 border-t-4 border-t-amber-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                <span className="text-amber-600 font-bold">02</span>
              </div>
              <h2 className="text-xl font-bold text-slate-800">{tracks.track2.title}</h2>
            </div>
            <ul className="grid md:grid-cols-2 gap-3">
              {tracks.track2.topics.map((topic, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-600">
                  <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 card p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Submission Guidelines</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              Papers must be original and not simultaneously submitted to another journal or conference
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              Maximum 6-8 pages including figures, tables, and references
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              Follow IEEE conference paper format
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 mt-1">•</span>
              All papers will undergo double-blind peer review
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
