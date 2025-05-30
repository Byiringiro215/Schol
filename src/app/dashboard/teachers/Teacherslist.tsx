interface TeachersInfo {
    id: string;
    teacherProfile: string;
    name: string;
    subject: string;
    class: string;
    email: string;
    age: number;
    description: string;
    gender: "male" | "female";
  }
  
  export const teacherslist: TeachersInfo[] = [
    {
      id: "T001",
      teacherProfile: "https://randomuser.me/api/portraits/men/11.jpg",
      name: "James Miller",
      subject: "Mathematics",
      class: "S6 PCM",
      email: "james.miller@school.edu",
      gender: "male",
      age: 42,
      description: "James is a seasoned math teacher with a knack for simplifying complex concepts. He brings over 10 years of teaching experience. Known for his logical approach, he helps students master problem-solving. He regularly prepares students for national math contests. James also mentors young math enthusiasts after class.",
    },
    {
      id: "T002",
      teacherProfile: "https://randomuser.me/api/portraits/women/12.jpg",
      name: "Anna Roberts",
      subject: "Biology",
      class: "S5 PCB",
      email: "anna.roberts@school.edu",
      gender: "female",
      age: 35,
      description: "Anna inspires a love for life sciences through engaging lessons and hands-on experiments. With a background in research, she integrates lab skills into teaching. She encourages curiosity about the natural world. Her students often excel in science fairs. Anna also leads the school’s eco club.",
    },
    {
      id: "T003",
      teacherProfile: "https://randomuser.me/api/portraits/men/13.jpg",
      name: "David Lee",
      subject: "Physics",
      class: "S6 MCE",
      email: "david.lee@school.edu",
      gender: "male",
      age: 39,
      description: "David simplifies physics by linking theory to real-life phenomena. He encourages critical thinking through demonstrations. Students enjoy his use of animations and simulations. He’s also the physics club advisor. David has helped many students pursue careers in engineering and science.",
    },
    {
      id: "T004",
      teacherProfile: "https://randomuser.me/api/portraits/women/14.jpg",
      name: "Susan Clark",
      subject: "Chemistry",
      class: "S5 MCB",
      email: "susan.clark@school.edu",
      gender: "female",
      age: 40,
      description: "Susan's passion for chemistry shines through in every lesson. She focuses on interactive labs and safety-first techniques. Her students love her clear explanations and patience. She organizes science symposiums at school. Susan is also a mentor for chemistry Olympiad candidates.",
    },
    {
      id: "T005",
      teacherProfile: "https://randomuser.me/api/portraits/men/15.jpg",
      name: "Mark Johnson",
      subject: "Computer Science",
      class: "S6 MCE",
      email: "mark.johnson@school.edu",
      gender: "male",
      age: 34,
      description: "Mark blends his industry experience with innovative teaching. He introduces students to real-world programming challenges. His classes build full-stack web apps and games. Mark coaches the school robotics team. He inspires many to pursue careers in tech.",
    },
    {
      id: "T006",
      teacherProfile: "https://randomuser.me/api/portraits/women/16.jpg",
      name: "Laura Hill",
      subject: "English",
      class: "S5 MCE",
      email: "laura.hill@school.edu",
      gender: "female",
      age: 37,
      description: "Laura is passionate about helping students express themselves clearly. She integrates literature with modern writing tools. Students appreciate her interactive reading sessions. Laura organizes debates and writing competitions. Her guidance improves communication and creativity.",
    },
    {
      id: "T007",
      teacherProfile: "https://randomuser.me/api/portraits/men/17.jpg",
      name: "Robert White",
      subject: "Geography",
      class: "S6 MCB",
      email: "robert.white@school.edu",
      gender: "male",
      age: 45,
      description: "Robert makes geography practical and fun. He uses maps, GIS tools, and field trips to teach about the Earth. His students love the real-world relevance of his lessons. He leads environmental awareness campaigns. Robert also contributes to the school's sustainability efforts.",
    },
    {
      id: "T008",
      teacherProfile: "https://randomuser.me/api/portraits/women/18.jpg",
      name: "Emily King",
      subject: "History",
      class: "S5 PCM",
      email: "emily.king@school.edu",
      gender: "female",
      age: 32,
      description: "Emily brings history to life through storytelling and debates. She encourages students to think about historical impact. Her classes often include group presentations. Emily runs the school's heritage club. Her efforts help preserve cultural awareness among students.",
    },
    {
      id: "T009",
      teacherProfile: "https://randomuser.me/api/portraits/men/19.jpg",
      name: "Thomas Harris",
      subject: "Literature",
      class: "S6 PCB",
      email: "thomas.harris@school.edu",
      gender: "male",
      age: 41,
      description: "Thomas inspires appreciation for poetry and prose. He helps students analyze themes and improve writing. His classroom features book discussions and writing prompts. Thomas also leads the drama club. His students often publish in the school magazine.",
    },
    {
      id: "T010",
      teacherProfile: "https://randomuser.me/api/portraits/women/20.jpg",
      name: "Claire Scott",
      subject: "French",
      class: "S5 MCB",
      email: "claire.scott@school.edu",
      gender: "female",
      age: 33,
      description: "Claire immerses students in the French language and culture. She uses music, games, and films to make learning fun. Students practice conversational French daily. Claire hosts French language days and competitions. Her enthusiasm makes her classes memorable.",
    },
  ];
  