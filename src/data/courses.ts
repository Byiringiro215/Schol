interface CourseDataProps {
  id: string;
  image: string; 
  title: string;
  instructor: string;
  classLevel: string;
  duration: string;
  weeklyHours: string;
  status: 'enrolled' | 'pending' | 'not enrolled';
  progress?: number; 
}

export const courses:CourseDataProps[] = [
 {
    id: 'course-101',
    image: '/python.jpeg',
    title: 'Introduction to Python Programming',
    instructor: 'Mr. Alex Nshimiyimana',
    classLevel: 'Senior 3',
    duration: '3 Months',
    weeklyHours: '4 hrs/week',
    status: 'enrolled',
    progress: 75
  },
  {
    id: 'course-102',
    image: '/web.jpeg',
    title: 'Web Development Basics',
    instructor: 'Ms. Aline Uwase',
    classLevel: 'Senior 2',
    duration: '4 Months',
    weeklyHours: '5 hrs/week',
    status: 'pending',
    progress: 20
  },
  {
    id: 'course-103',
    image: '/db.jpeg',
    title: 'Database Management Systems',
    instructor: 'Mr. John Habimana',
    classLevel: 'Senior 4',
    duration: '2 Months',
    weeklyHours: '3 hrs/week',
    status: 'not enrolled',
    progress: 0
  },
  {
    id: 'course-104',
    image: '/mobile.jpeg',
    title: 'Mobile App Development',
    instructor: 'Ms. Clarisse Ingabire',
    classLevel: 'Senior 5',
    duration: '5 Months',
    weeklyHours: '6 hrs/week',
    status: 'enrolled',
    progress: 60
  },
  {
    id: 'course-105',
    image: '/ai.jpeg',
    title: 'Artificial Intelligence Fundamentals',
    instructor: 'Mr. Eric Mugisha',
    classLevel: 'Senior 6',
    duration: '3 Months',
    weeklyHours: '4 hrs/week',
    status: 'pending',
    progress: 15
  },
  {
    id: 'course-106',
    image: '/cybersec.jpeg',
    title: 'Cybersecurity Essentials',
    instructor: 'Ms. Diane Umutoni',
    classLevel: 'Senior 4',
    duration: '2 Months',
    weeklyHours: '3 hrs/week',
    status: 'not enrolled',
    progress: 0
  },
  {
    id: 'course-107',
    image: '/dsa.jpeg',
    title: 'Data Structures & Algorithms',
    instructor: 'Mr. Benjamin Rukundo',
    classLevel: 'Senior 5',
    duration: '4 Months',
    weeklyHours: '5 hrs/week',
    status: 'enrolled',
    progress: 85
  },
  {
    id: 'course-108',
    image: '/ml.jpeg',
    title: 'Machine Learning Introduction',
    instructor: 'Dr. Jeannette Uwimana',
    classLevel: 'Senior 6',
    duration: '6 Months',
    weeklyHours: '6 hrs/week',
    status: 'not enrolled',
    progress: 0
  },
  {
    id: 'course-109',
    image: '/designing.jpeg',
    title: 'UI/UX Design Principles',
    instructor: 'Ms. Keza Imanzi',
    classLevel: 'Senior 3',
    duration: '2 Months',
    weeklyHours: '4 hrs/week',
    status: 'pending',
    progress: 10
  },
  {
    id: 'course-110',
    image: '/networking.jpeg',
    title: 'Network Fundamentals',
    instructor: 'Mr. Patrick Ndahiro',
    classLevel: 'Senior 4',
    duration: '3 Months',
    weeklyHours: '5 hrs/week',
    status: 'enrolled',
    progress: 90
  },
  {
    id: 'course-111',
    image: '/robotics.jpeg',
    title: 'Introduction to Robotics',
    instructor: 'Ms. Rachel Nyirandinda',
    classLevel: 'Senior 5',
    duration: '3 Months',
    weeklyHours: '4 hrs/week',
    status: 'not enrolled',
    progress: 0
  },
  {
    id: 'course-112',
    image: '/cloud.jpeg',
    title: 'Cloud Computing Basics',
    instructor: 'Mr. Sam Bahati',
    classLevel: 'Senior 6',
    duration: '2 Months',
    weeklyHours: '3 hrs/week',
    status: 'pending',
    progress: 5
  }
]
