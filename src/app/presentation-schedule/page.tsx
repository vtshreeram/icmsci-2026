export default function PresentationSchedule() {
  const schedule = {
    day1: {
      date: "02 March 2026",
      title: "Day 01",
      events: [
        { time: "09:30 – 10:30 AM", activity: "Inauguration & Keynote Talk - 1" },
        { time: "10:30 – 01:00 PM", activity: "Session - 1" },
        { time: "01:00 – 02:00 PM", activity: "Lunch" },
        { time: "02:00 – 04:00 PM", activity: "Session - 2" },
        { time: "04:00 – 05:30 PM", activity: "Session - 3" },
      ],
    },
    day2: {
      date: "03 March 2026",
      title: "Day 02",
      events: [
        { time: "09:00 – 01:00 PM", activity: "Session - 4" },
        { time: "01:00 – 02:00 PM", activity: "Lunch" },
        { time: "02:00 – 04:00 PM", activity: "Session - 5" },
        { time: "04:00 – 05:30 PM", activity: "Session - 6" },
      ],
    },
    day3: {
      date: "04 March 2026",
      title: "Day 03",
      events: [
        { time: "09:00 – 01:00 PM", activity: "Session - 7" },
        { time: "01:00 – 02:00 PM", activity: "Lunch" },
        { time: "02:00 – 04:00 PM", activity: "Session - 8" },
        { time: "04:00 – 05:30 PM", activity: "Session - 9" },
      ],
    },
  };

  const papers = [
    { id: "ICMSCI-405", title: "Autonomous Underwater Vehicle for Real-Time Pipeline Defect Detection", authors: "J Jaiganesh, Renoye R, Mohamed N S", time: "10:30 AM - 10:50 AM", day: 1, session: 1 },
    { id: "ICMSCI-898", title: "Resilient Multi-Modal IoT Crowd Monitoring System with Self-Healing Sensor Architecture", authors: "S. Ramesh, B. Rohith, K. Chetananand, R. Manikandan", time: "10:50 AM - 11:10 AM", day: 1, session: 1 },
    { id: "ICMSCI-366", title: "Simulating Emergency Teamwork Behavior with Multi-Agent LLMs", authors: "Atsushi Shimoda, Rei Kobori, Keito Takahashi, Zhang Yatong", time: "11:10 AM - 11:30 AM", day: 1, session: 1 },
    { id: "ICMSCI-992", title: "Temporal Artifact Analysis for AI-Generated Video Detection", authors: "Vijayakumar S D, Karunakaran P, Balasubramaniam C", time: "11:30 AM - 11:50 AM", day: 1, session: 1 },
    { id: "ICMSCI-1089", title: "Automated NLP-Powered Reporting for Colon Cancer Diagnosis", authors: "T A Mohanaprakash, Lohit S, Rakshan M", time: "11:50 AM - 12:10 PM", day: 1, session: 1 },
    { id: "ICMSCI-998", title: "Plant Disease Prediction Using Ensemble Risk Scoring Engine", authors: "Pavithra P, Sukumar P", time: "12:10 PM - 12:30 PM", day: 1, session: 1 },
    { id: "ICMSCI-797", title: "The Smart Fall Detection and Emergency Alert System", authors: "Shankar R, Avishkar G, Mohamed Irfan S", time: "12:30 PM - 12:50 PM", day: 1, session: 1 },
    { id: "ICMSCI-787", title: "Latent Regime-Aware Market Prediction Using Stacked LSTM", authors: "Amudha L, Vishal V S, Manoj N", time: "02:00 PM - 02:20 PM", day: 1, session: 2 },
    { id: "ICMSCI-774", title: "Robust Real-Time Respiratory Rate Estimation using Wi-Fi CSI", authors: "S K Manikandan, M Nisha Angeline, V Suganya", time: "02:20 PM - 02:40 PM", day: 1, session: 2 },
    { id: "ICMSCI-1048", title: "Smart Battery Management System for Electric Vehicles", authors: "Ramraj B, Rajesh S, Indra kumar M", time: "02:40 PM - 03:00 PM", day: 1, session: 2 },
    { id: "ICMSCI-820", title: "PATHFINDER: Intelligent Footwear for the Blind", authors: "PREETHI S, CHITHRIDA M P, DHARANI M", time: "03:00 PM - 03:20 PM", day: 1, session: 2 },
    { id: "ICMSCI-709", title: "Shape Memory Alloy Spring-Actuator using Spread Spectrum PWM", authors: "K.Muralidharan, G. Muthukumaran", time: "03:20 PM - 03:40 PM", day: 1, session: 2 },
  ];

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Presentation Schedule</h1>
          <p className="text-slate-600 mt-2">ICMSCI 2026 | March 2-4, 2026</p>
        </div>

        <div className="card p-5 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-slate-600">Presentation Time:</span>
              <span className="text-slate-800 font-medium">20 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">Format:</span>
              <span className="text-slate-800 font-medium">PPT (PowerPoint)</span>
            </div>
          </div>
        </div>

        {/* Day 1 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="px-4 py-2 bg-blue-100 rounded-lg">
              <span className="text-blue-800 font-semibold">Day 01</span>
            </div>
            <span className="text-slate-600">02 March 2026</span>
          </div>
          <div className="space-y-2">
            {schedule.day1.events.map((event, idx) => (
              <div key={idx} className="card p-4 flex flex-col md:flex-row md:items-center gap-2">
                <div className="md:w-48 flex-shrink-0">
                  <span className="text-blue-800 font-medium">{event.time}</span>
                </div>
                <div className="flex-1">
                  <span className="text-slate-800 font-medium">{event.activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Day 2 */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="px-4 py-2 bg-amber-100 rounded-lg">
              <span className="text-amber-700 font-semibold">Day 02</span>
            </div>
            <span className="text-slate-600">03 March 2026</span>
          </div>
          <div className="space-y-2">
            {schedule.day2.events.map((event, idx) => (
              <div key={idx} className="card p-4 flex flex-col md:flex-row md:items-center gap-2">
                <div className="md:w-48 flex-shrink-0">
                  <span className="text-amber-700 font-medium">{event.time}</span>
                </div>
                <div className="flex-1">
                  <span className="text-slate-800 font-medium">{event.activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Day 3 */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="px-4 py-2 bg-blue-100 rounded-lg">
              <span className="text-blue-800 font-semibold">Day 03</span>
            </div>
            <span className="text-slate-600">04 March 2026</span>
          </div>
          <div className="space-y-2">
            {schedule.day3.events.map((event, idx) => (
              <div key={idx} className="card p-4 flex flex-col md:flex-row md:items-center gap-2">
                <div className="md:w-48 flex-shrink-0">
                  <span className="text-blue-800 font-medium">{event.time}</span>
                </div>
                <div className="flex-1">
                  <span className="text-slate-800 font-medium">{event.activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Paper Presentations */}
        <div className="card p-6">
          <h2 className="text-xl font-bold text-slate-800 mb-5">Paper Presentations</h2>
          <div className="space-y-3">
            {papers.map((paper, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
                  <div className="md:w-32 flex-shrink-0">
                    <span className="text-blue-800 font-bold text-sm">{paper.id}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-800 font-medium mb-1">{paper.title}</h4>
                    <p className="text-slate-500 text-sm mb-1">{paper.authors}</p>
                    <span className="text-amber-600 text-sm font-medium">
                      Day {paper.day} | Session {paper.session} | {paper.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-5 text-center">
            * Showing selected papers. Full schedule available in conference proceedings.
          </p>
        </div>
      </div>
    </div>
  );
}
