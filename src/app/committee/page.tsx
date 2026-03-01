import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organizing Committee | ICMSCI 2026",
  description: "Meet the organizing committee of ICMSCI 2026 — executive chairs, program chairs, and technical committee members.",
};

type NamedMember = { name: string; role: string };

const committees = {
  executiveChairs: [
    { name: "Thiru. Andavar A. Ramasamy", role: "Chairman, SAEC Trust, Erode, Tamil Nadu, India" },
    { name: "Thiru. Rtn. K. Kalaiselvan", role: "Secretary & Correspondent, Surya Engineering College, Erode, India" },
    { name: "Thiru. V.T. Kesavan", role: "Treasurer, Surya Engineering College, Erode, India" },
    { name: "Thiru. C. Elango", role: "Vice Chairman, Surya Engineering College, Erode, India" },
    { name: "Thiru. Sanjeev Kumar", role: "Joint Secretary, Surya Engineering College, Erode, India" },
  ] as NamedMember[],
  generalChair: [
    { name: "Dr. S. Manoharan", role: "Principal, Surya Engineering College, Erode, India" },
  ] as NamedMember[],
  programChairs: [
    { name: "Prof. Kalaiselvi L", role: "Associate Professor & HoD, Dept. of ECE, Surya Engineering College, Erode, India" },
    { name: "Dr. Mario G.C.A. Cimino", role: "University of Pisa, Italy" },
    { name: "Dr. Marcin Paprzycki", role: "Polish Academy of Sciences, Poland" },
  ] as NamedMember[],
  advisoryCommittee: [
    "Dr. Sumana M, IEEE-CIS Chair (Bangalore Section), MSRIT, Bangalore",
    "Prof. Carmelo Bastos-Filho, University of Pernambuco, Brazil",
    "Dr. Cristian Rodriguez Rivero, Universitat Politècnica de Catalunya, UK",
    "Prof. Dr.-Ing. habil. Siddhartha Bhattacharyya, VSB Technical University of Ostrava, Czech Republic",
    "Dr. Sivaram Rajeyyagari, Shaqra University, Ministry of Higher Education, Saudi Arabia",
    "Dr. P. Thangam, King Abdulaziz University, Jeddah, Saudi Arabia",
    "Dr. Pascal Lorenz, University of Haute Alsace, France",
    "Prof. Dr. Paul Rodrigues, King Khalid University, Saudi Arabia",
    "Dr. Ivan Izonin, Lviv Polytechnic National University, Ukraine",
    "Prof. Marcelo Sampaio de Alencar, President, Institute for Advanced Studies in Communications (Iecom), Brazil",
    "Dr. R. Dhaya, King Khalid University, KSA",
    "Dr. Sandeep Singh Sengar, Cardiff Metropolitan University, United Kingdom",
    "Dr. Vijender Busi Reddy, Chair, IEEE CIS Hyderabad Section, Scientist, ISRO",
  ],
  technicalCommitteeChairs: [
    "Dr. T. Muthumanickam, Chair, IEEE AES Madras Section, India",
    "Dr. D. Vinoth Kumar, VMU University, India",
    "Dr. R. Kanthavel, University of Bisha, Saudi Arabia",
    "Dr. V. Kamatchi Kannan, Professor / EEE, Knowledge Institute of Technology, Erode, India",
    "Prof. Vasile Daniel, Pavaloaia, Universitatea Alexandru Ioan Cuza, Romania",
    "Dr. Fouad Nafis Sidi, Mohamed Ben Abdellah University, Morocco",
    "Dr. Antonio Sarasa Cabezuelo, Universidad Complutense de Madrid, Spain",
    "Dr. Omar Hussain Alhazmi, Taibah University, Saudi Arabia",
    "Dr. Bhalaji N, SSN College of Engineering, India",
  ],
  technicalCommitteeMembers: [
    "Dr. Seda Yildirim, Tekirdag Namık Kemal University, Turkey",
    "Dr. P. S. Brahmanandam, Shri Vishnu Engineering College for Women, India",
    "Dr. Kumar R, Knowledge Institute of Technology, India",
    "Dr. B. Prabavathy, SSN College of Engineering, India",
    "Dr. Shanmugasundaram Hariharan, Vardhaman College of Engineering, India",
    "Dr. G. Indumathi, Mepco Schlenk Engineering College, India",
    "Dr. P. Sivakumar, Dr NGP Institute of Technology, India",
    "Dr. P. K. Dash, Sandip University, India",
    "Dr. Snehalkumar H. Mistry, Vidyabharti Trust College of Business, Computer Science & Research, India",
    "Dr. R. Anuradha, Sri Ramakrishna Engineering College, India",
    "Dr. T. Revathi, Mepco Schlenk Engineering College, India",
    "Dr. S. Sankaragomathi, Adhi College of Engineering and Technology, India",
    "Dr. M. Kalamani, Bannari Amman Institute of Technology, India",
    "Dr. Zubkov Artyom Dmitrievich, Siberian Transport University, Russia",
    "Dr. Visalaxi Sankar, Hindustan Institute of Technology and Science, India",
    "Dr. Sureshkumar Sadasivam, Sri Ramakrishna Engineering College, India",
    "Dr. Selvam Sivaraja Perumal, Amrita College of Engineering and Technology, India",
    "Dr. Arti Jain, Jaypee Institute of Information Technology, India",
    "Dr. Godfrey Winster S, SRM Institute of Science and Technology, India",
    "Dr. Aniket Shahade, Shri Sant Gajanan Maharaj College of Engineering, India",
    "Dr. Harshal Arolkar, Pokhara University, Nepal",
    "Dr. Priyanka Deshmukh, Shri Sant Gajanan Maharaj College of Engineering, India",
    "Dr. Balamurugan G, SRM Institute of Science and Technology, India",
    "Dr. Haris M. Khalid, Higher Colleges of Technology, UAE",
    "Dr. Kanakadurga, Stanley College of Engineering, India",
    "Dr. Kalarani S, St Joseph's Institute of Technology, India",
    "Dr. Imene Ouali, University of Sfax, Tunisia",
    "Dr. Kavita Moholkar, JSPM's Rajarshi Shahu College of Engineering, India",
    "Dr. Kakoli Banerjee, JSS Academy of Technical Education, India",
    "Dr. Dharani Devi, Rajalakshmi Engineering College, India",
    "Dr. Larbi Boubchir, University of Paris, France",
    "Dr. Mahadu Trimukhe, University of Mumbai, India",
    "Dr. Ajitha P, Sathyabama Institute of Science and Technology, India",
    "Dr. Abdelhakim Moutaouakil, Cadi Ayyad University, Morocco",
    "Dr. Tomonobu Senjyu, University of the Ryukyus, Japan",
    "Dr. Ramesh S, SRM Valliammai Engineering College, India",
    "Dr. Ashokkumar, Mohan Babu (MBU) University, India",
    "Dr. Satyajee Srivastava, COER University, India",
    "Dr. G. Muneeswari, VIT-AP University, India",
    "Dr. Biswaranjan Acharya, Marwadi University, India",
    "Dr. Susan William, M.A.M. College of Engineering and Technology, India",
    "Dr. Kavitha Ramar K, Ramakrishnan College of Technology, India",
    "Dr. S. Palanivelrajan, M. Kumarasamy College of Engineering, India",
    "Dr. M. Premkumar, Panimalar Engineering College, India",
    "Dr. Gagan Deep Singh, UPES University, India",
    "Dr. Sasikala S, Velammal College of Engineering and Technology, India",
    "Dr. Kumar R, SRM University, India",
    "Dr. Malathy N, Mepco Schlenk Engineering College, India",
    "Dr. Bibhuprasad Sahu, Vardhaman College of Engineering, India",
    "Dr. N G Praveena, R.M.K College of Engineering and Technology, India",
    "Dr. Raksha Pandey A, Central University, India",
    "Dr. Nithya B, New Horizon College of Engineering, India",
    "Dr. Rohit Tanwar, University of Petroleum & Energy Studies, India",
    "Dr. Swaminathan Narayanan, Aalim Muhammed Salegh College of Engineering, India",
    "Dr. Pallavi Khatri, ITM University, India",
    "Dr. Jabeen Begum, Velalar College of Engineering and Technology, India",
    "Dr. Kali Charan Rat, GIET University, India",
    "Dr. Uma Murugesan, Coimbatore Institute of Engineering & Technology, India",
    "Dr. John Paul, Karunya Institute of Technology and Sciences, India",
    "Dr. G. Shine Let, Karunya Institute of Technology and Sciences, India",
    "Dr. Irina Perfilieva, Innovations Division, University of Ostrava, Czech Republic",
    "Dr. Anil Kumar Yerrola, Indian Institute of Technology, Raipur, India",
    "Dr. Mamatha Balipa, NMAM Institute of Technology, Nitte, India",
    "Dr. Biljana Jovic, University of Belgrade, Serbia",
    "Dr. Miguel Garcia Torres, Universidad Pablo de Olavide, Spain",
    "Dr. Masood Ur Rehman, University of Glasgow, UK",
    "Dr. Ravi Verma, VIT Bhopal University, India",
    "Dr. George Lazaroi, Spiru Haret University, Romania",
    "Dr. Revathi SM, B.S. Abdur Rahman Crescent Institute of Science and Technology, India",
    "Dr. Balachandra Pattanaik, Wallaga University, Ethiopia",
    "Dr. Zameer Gulzar, S R University, India",
    "Dr. Pragyan Nand, IIMT, Bhubaneswar, India",
    "Dr. Juan Luis Cabanillas García, University of Salamanca, Spain",
    "Dr. Manikandan, SASTRA Deemed University, India",
    "Dr. Jignasha Shah K.J., Somaiya College of Engineering, India",
    "Dr. Padmashri D. Desai, KLE Technological University, India",
  ],
  localCommittee: [
    "Prof. G. Manickavasagam, Associate Professor & HOD / CSE, Surya Engineering College, Erode",
    "Dr. S. Saravanan, Professor / EEE, Surya Engineering College, Erode",
    "Prof. S. Amsaveni, Assistant Professor / EEE, Surya Engineering College, Erode",
    "Prof. V. Karthika, Assistant Professor / EEE, Surya Engineering College, Erode",
    "Prof. N. Sowmiya, Assistant Professor / ECE, Surya Engineering College, Erode",
    "Prof. T. Usha, Assistant Professor / ECE, Surya Engineering College, Erode",
    "Prof. M. Sowmiya, Assistant Professor / ECE, Surya Engineering College, Erode",
    "Prof. N. Seetha, Assistant Professor / CSE, Surya Engineering College, Erode",
    "Prof. C.S. Revathi, Assistant Professor / CSE, Surya Engineering College, Erode",
  ],
};

function NamedSection({ title, items }: { title: string; items: NamedMember[] }) {
  return (
    <div className="card overflow-hidden">
      <div className="px-7 py-4 border-b border-slate-100 bg-slate-50">
        <h3 className="h5 text-primary">{title}</h3>
      </div>
      <div className="p-7 space-y-4">
        {items.map((item, idx) => (
          <div key={idx}>
            <p className="font-semibold text-slate-800">{item.name}</p>
            <p className="small mt-0.5">{item.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card overflow-hidden">
      <div className="px-7 py-4 border-b border-slate-100 bg-slate-50">
        <h3 className="h5 text-primary">{title}</h3>
      </div>
      <div className="p-7">
        <ul className="grid md:grid-cols-2 gap-y-2 gap-x-8">
          {items.map((item, idx) => (
            <li key={idx} className="bullet-item">
              <span className="bullet-dot"></span>
              <span className="small" style={{ color: "#334155" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Committee() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <p className="section-label" style={{ color: "#93c5fd" }}>ICMSCI 2026</p>
            <h1 className="mb-4">Organizing Committee</h1>
            <p className="text-blue-100 body-lg">
              Distinguished academics and professionals guiding ICMSCI 2026.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-5">
            <NamedSection title="Executive Chairs" items={committees.executiveChairs} />
            <NamedSection title="General Chair" items={committees.generalChair} />
            <NamedSection title="Program Chairs" items={committees.programChairs} />
            <ListSection title="Advisory Committee Members" items={committees.advisoryCommittee} />
            <ListSection title="Technical Committee Chairs" items={committees.technicalCommitteeChairs} />
            <ListSection title="Technical Committee Members" items={committees.technicalCommitteeMembers} />
            <ListSection title="Local Committee" items={committees.localCommittee} />
          </div>
        </div>
      </section>
    </div>
  );
}
