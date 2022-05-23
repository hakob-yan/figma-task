
export interface IElem {
  url: string;
  title: string;
  lessons: number;
  duration: string;
  popular: number;
  favorite: Boolean;
  new: number;
}

export const  mainCourses: IElem[] = [
    {
      url: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2139",
      title: "Illustration",
      lessons: 24,
      duration: "134 min",
      popular: 1,
      favorite: false,
      new: 19,
    },
    {
      url: "https://images.alphacoders.com/717/717234.jpg",
      title: "Graphic design",
      lessons: 30,
      duration: "236 min",
      popular: 2,
      favorite: false,
      new: 12,
    },
    {
      url: "https://images3.alphacoders.com/115/115079.jpg",
      title: "Amazing",
      lessons: 50,
      duration: "100 min",
      popular: 3,
      favorite: false,
      new: 0,
    },
    {
      url: "https://images2.alphacoders.com/718/718156.jpg",
      title: "Films",
      lessons: 12,
      duration: "25 min",
      popular: 4,
      favorite: true,
      new: 1,
    },
    {
      url: "https://images.alphacoders.com/249/249483.jpg",
      title: "Hobby",
      lessons: 12,
      duration: "255 min",
      popular: 41,
      favorite: true,
      new: 1,
    },
    {
      url: "https://images6.alphacoders.com/408/408863.jpg",
      title: "Amazing",
      lessons: 122,
      duration: "200 min",
      popular: 6,
      favorite: true,
      new: 30,
    },
];
  