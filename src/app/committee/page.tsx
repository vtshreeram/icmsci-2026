export default function Committee() {
  const committees = {
    executiveChairs: [
      { name: "Thiru Andavar A Ramasamy", role: "Chairman SAEC Trust, Erode, TN, India" },
      { name: "Thiru. Rtn. K. Kalaiselvan", role: "Secretary and Correspondent, Surya Engineering College, Erode, TN, India" },
      { name: "Thiru. V.T. Kesavan", role: "Treasurer, Surya Engineering College, Erode, TN, India" },
      { name: "Thiru. C. Elango", role: "Vice Chairman, Surya Engineering College, Erode, TN, India" },
      { name: "Thiru. Sanjeev Kumar", role: "Joint Secretary, Surya Engineering College, Erode, TN, India" },
    ],
    generalChair: [
      { name: "Dr. S. Manoharan", role: "Principal, Surya Engineering College, Erode, India" },
    ],
    programChairs: [
      { name: "Prof. Kalaiselvi L", role: "Associate Professor and HoD, Department of ECE, Surya Engineering College, Erode, Tamilnadu, India" },
      { name: "Dr. Mario G.C.A. Cimino", role: "University of Pisa, Italy" },
      { name: "Dr. Marcin Paprzycki", role: "Polish Academy of Sciences, Poland" },
    ],
    advisoryCommittee: [
      "Dr Sumana M, IEEE-CIS Chair(Bangalore Section), MSRIT, Bangalore",
      "Prof. Carmelo Bastos-Filho, University of Pernambuco, Brazil",
      "Dr. Cristian Rodriguez Rivero, Universitat Politècnica de Catalunya, UK",
      "Prof. Dr.-Ing. habil. Siddhartha Bhattacharyya, VSB Technical university of Ostrava, Czech Republic",
      "Dr. Sivaram Rajeyyagari, Shaqra University, Ministry of Higher Education, Kingdom of Saudi Arabia",
      "Dr. P. Thangam, King Abdulaziz University, Jeddah, Kingdom of Saudi Arabia",
      "Dr. Pascal Lorenz, University of Haute Alsace, France",
      "Prof. Dr. Paul Rodrigues, King Khalid university, Saudi Arabia",
      "Dr. Ivan Izonin, Lviv Polytechnic National University, Ukraine",
      "Prof. Marcelo Sampaio de Alencar, President of the Institute for Advanced Studies in Communications (Iecom), Brazil",
      "Dr. R. Dhaya, King Khalid University, KSA",
      "Dr. Sandeep Singh Sengar, Cardiff Metropolitan University, United Kingdom",
      "Dr. Vijender Busi Reddy, Chair, IEEE CIS, Hyderabad section, Scientist, ISRO",
    ],
    technicalCommitteeChairs: [
      "Dr. T. Muthumanickam, Chair - IEEE AES Madras Section, India",
      "Dr. D. Vinoth Kumar, VMU University, India",
      "Dr. R. Kanthavel, University of Bisha, Saudi Arabia",
      "Dr. V. Kamatchi Kannan, Professor / EEE, Knowledge Institute of Technology, Erode, India",
      "Prof. Vasile Daniel, Pavaloaia Universitatea Alexandru Ioan Cuza, Romania",
      "Dr. Fouad Nafis Sidi, Mohamed Ben Abdellah University, Morocco",
      "Dr. Antonio Sarasa, Cabezuelo Universidad Complutense de Madrid, Spain",
      "Dr. Omar Hussain, Omar Alhazmi Taibah University, Saudi Arabia",
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
      "Dr. Snehalkumar H, Mistry Vidyabharti Trust College of Business, Computer Science & Research, India",
      "Dr. R. Anuradha, Sri Ramakrishna Engineering College, India",
      "Dr. T. Revathi, Mepco Schlenk Engineering College, India",
      "Dr. S Sankaragomathi, Adhi College Of Engineering and Technology, India",
      "Dr. M. Kalamani, Bannari Amman Institute of Technology, India",
      "Dr. Zubkov Artyom Dmitrievich, Siberian Transport University, Russia",
      "Dr. Visalaxi Sankar, Hindustan institute of technology and science, India",
      "Dr. Sureshkumar Sadasivam, Sri Ramakrishna Engineering College, India",
      "Dr. Selvam Sivaraja Perumal, Amrita College of Engineering and Technology, India",
      "Dr. Arti Jain Jaypee, Institute of Information Technology, India",
      "Dr. Godfrey Winster S, SRM Institute of Science and Technology, India",
      "Dr. Aniket Shahade, Shri Sant Gajanan Maharaj College of Engineering, India",
      "Dr. Harshal Arolkar, Pokhara University, Nepal",
      "Dr. Priyanka Deshmukh, Shri Sant Gajanan Maharaj College of Engineering, India",
      "Dr. Balamurugan G, SRM Institute of Science and Technology, India",
      "Dr. Haris M. Khalid, Higher Colleges of Technology, UAE",
      "Dr. Kanakadurga, Stanley College of Engineering, India",
      "Dr. Kalarani. S, St Joseph's Institute of Technology, India",
      "Dr. Imene Ouali, University of Sfax, Tunisia",
      "Dr. Kavita Moholkar, JSPM's Rajarshi Shahu College of Engineering, India",
      "Dr. Kakoli Banerjee, JSS Academy of Technical Education, India",
      "Dr. Dharani Devi, Rajalakshmi Engineering College, India",
      "Dr. Larbi Boubchir, University of Paris, France",
      "Dr. Mahadu Trimukhe, University of Mumbai, India",
      "Dr. Ajitha P, Sathyabama Institute of Science and Technology, India",
      "Dr. Abdelhakim Moutaouakil, Cadi Ayyad University, Morocco",
      "Dr. Tomonobu Senjyu, University of the Ryukyus, Japan",
      "Dr. Ramesh. S, SRM Valliammai Engineering College, India",
      "Dr. Ashokkumar Ashokkumar, Mohan Babu (MBU) University, India",
      "Dr. Satyajee Srivastava, COER University, India",
      "Dr. G. Muneeswari, VIT-AP University, India",
      "Dr. Biswaranjan Acharya, Marwadi University, India",
      "Dr. Susan William, M. A. M. College of Engineering and Technology, India",
      "Dr. Kavitha Ramar K., Ramakrishnan college of Technology, India",
      "Dr. S. Palanivelrajan, M. Kumarasamy College of Engineering, India",
      "Dr. M. Premkumar, Panimalar Engineering College, India",
      "Dr. Gagan Deep Singh, UPES University, India",
      "Dr. Sasikala S, Velammal College of Engineering and Technology, India",
      "Dr. Kumar R, SRM University, India",
      "Dr. Malathy N, Mepco Schlenk Engineering College, India",
      "Dr. Bibhuprasad Sahu, Vardhaman College of Engineering, India",
      "Dr. N G Praveena, R. M. K College of Engineering and Technology, India",
      "Dr. Raksha Pandey A, Central University, India",
      "Dr. Nithya B, New Horizon College of Engineering, India",
      "Dr. Rohit Tanwar, University of Petroleum & Energy Studies, India",
      "Dr. Swaminathan Narayanan, Aalim Muhammed Salegh College of Engineering, India",
      "Dr. Pallavi Khatr, ITM University, India",
      "Dr. Jabeen Begum, Velalar College of Engineering and Technology, India",
      "Dr. Kali Charan Rat, GIET University, India",
      "Dr. Uma Murugesan, Coimbatore Institute of Engineering & Technology, India",
      "Dr. John Paul, Karunya Institute of Technology and Sciences, India",
      "Dr. G Shine Let, Karunya Institute of Technology and Sciences, India",
      "Dr. Irina Perfilieva, Innovations division of the University of Ostrava, Czech Republic",
      "Dr. Anil Kumar Yerrola, Indian Institute of Technology, Raipur, India",
      "Dr. Mamatha Balipa, NMAM. I. T, Nitte, India",
      "Dr. Biljana Jovic, University of Belgrade, Serbia",
      "Dr. Miguel Garcia Torres, Universidad Pablo de Olavide, Spain",
      "Dr. Masood Ur Rehman, University of Glasgow, UK",
      "Dr. Ravi Verma, VIT Bhopal University, India",
      "Dr. George Lazaroi, Spiru Haret University, Romania",
      "Dr. Revathi SM, B. S. Abdur Rahman Crescent Institute of Science and Technology, India",
      "Dr. Balachandra Pattanaikm, Wallaga University, Ethiopia",
      "Dr. Zameer Gulzarm, S R University, India",
      "Dr. Pragyan Nandm, IIMT, Bhubaneswar, India",
      "Dr. Juan Luis Cabanillas, Garcíam University of Salamanca, Spain",
      "Dr. Manikandan, SASTRA Deemed University, India",
      "Dr. Jignasha Shah K. J., Somaiya College of Engineering, India",
      "Dr. Padmashri D Desai, KLE Technological University, India",
    ],
    localCommittee: [
      "Prof. G. Manickavasagam, Associate Professor & HOD / CSE, Surya Engineering College, Erode, India",
      "Dr. S. Saravanan, Professor / EEE, Surya Engineering College, Erode, India",
      "Prof. S. Amsaveni, Assistant Professor / EEE, Surya Engineering College, Erode, India",
      "Prof. V. Karthika, Assistant Professor / EEE, Surya Engineering College, Erode, India",
      "Prof. N. Sowmiya, Assistant Professor / ECE, Surya Engineering College, Erode, India",
      "Prof. T. Usha, Assistant Professor / ECE, Surya Engineering College, Erode, India",
      "Prof. M. Sowmiya, Assistant Professor / ECE, Surya Engineering College, Erode, India",
      "Prof. N. Seetha, Assistant Professor / CSE, Surya Engineering College, Erode, India",
      "Prof. C.S. Revathi, Assistant Professor / CSE, Surya Engineering College, Erode, India",
    ],
  };

  const Section = ({ title, items, isList = false }: { title: string; items: any[]; isList?: boolean }) => (
    <div className="card p-6 mb-6">
      <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">{title}</h3>
      {isList ? (
        <ul className="grid md:grid-cols-2 gap-2">
          {items.map((item, idx) => (
            <li key={idx} className="text-slate-600 text-sm">{item}</li>
          ))}
        </ul>
      ) : (
        <div className="space-y-3">
          {items.map((item, idx) => (
            <div key={idx} className="text-slate-600">
              <span className="font-semibold text-slate-800">{item.name}</span>
              <span className="text-slate-500"> — {item.role}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen py-12 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-slate-800">Organizing Committee</h1>
          <p className="text-slate-600 mt-2">ICMSCI 2026</p>
        </div>

        <Section title="Executive Chairs" items={committees.executiveChairs} />
        <Section title="General Chair" items={committees.generalChair} />
        <Section title="Program Chair" items={committees.programChairs} />
        <Section title="Advisory Committee Members" items={committees.advisoryCommittee} isList />
        <Section title="Technical Committee Chairs" items={committees.technicalCommitteeChairs} isList />
        <Section title="Technical Committee Members" items={committees.technicalCommitteeMembers} isList />
        <Section title="Local Committee" items={committees.localCommittee} isList />
      </div>
    </div>
  );
}
