interface PaymentDataProps{
    id: string;
    image: string;
    name: string;
    class: string;
    status: 'paid' | 'pending' | 'failed';
    amount: number;
    date: string;
}

export const paymentsData: PaymentDataProps[] = [
  
  {
    id: '1',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'John Doe',
    class: 'S1',
    status: 'paid',
    amount: 5000,
    date: '2023-10-01'
  },
  {
    id: '2',
    image: 'https://randomuser.me/api/portraits/women/45.jpg',
    name: 'Jane Smith',
    class: 'S2',
    status: 'pending',
    amount: 3000,
    date: '2023-10-02'
  },
  {
    id: '3',
    image: 'https://randomuser.me/api/portraits/women/21.jpg',
    name: 'Alice Johnson',
    class: 'S3',
    status: 'failed',
    amount: 4000,
    date: '2023-10-03'
  },
  {
    id: '4',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'David Brown',
    class: 'S1',
    status: 'paid',
    amount: 5500,
    date: '2023-10-04'
  },
  {
    id: '5',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    name: 'Emily Davis',
    class: 'S2',
    status: 'pending',
    amount: 3200,
    date: '2023-10-05'
  },
  {
    id: '6',
    image: 'https://randomuser.me/api/portraits/men/59.jpg',
    name: 'Michael Lee',
    class: 'S3',
    status: 'paid',
    amount: 4800,
    date: '2023-10-06'
  },
  {
    id: '7',
    image: 'https://randomuser.me/api/portraits/women/36.jpg',
    name: 'Sarah Wilson',
    class: 'S1',
    status: 'failed',
    amount: 2700,
    date: '2023-10-07'
  },
  {
    id: '8',
    image: 'https://randomuser.me/api/portraits/men/7.jpg',
    name: 'Chris Evans',
    class: 'S2',
    status: 'paid',
    amount: 6100,
    date: '2023-10-08'
  },
  {
    id: '9',
    image: 'https://randomuser.me/api/portraits/women/17.jpg',
    name: 'Sophia Martinez',
    class: 'S3',
    status: 'pending',
    amount: 3900,
    date: '2023-10-09'
  },
  {
    id: '10',
    image: 'https://randomuser.me/api/portraits/men/64.jpg',
    name: 'Liam Walker',
    class: 'S2',
    status: 'failed',
    amount: 3100,
    date: '2023-10-10'
  }
];


    