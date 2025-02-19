export interface Testimonial {
  id: number
  name: string
  avatar: string
  project: string
  date: string
  text: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vincent Akomolafe",
    avatar: "https://media.contra.com/image/upload/c_fill,f_avif,h_96,q_auto:good,w_96/kqfp7laplyvhj1tlypcu",
    project: "SAVA Global Inc.", 
    date: "2024-11-27",
    text: "Marcus is a 💫 He’s talented, listens attentively, and knows how to bring your vision to life!",
  },
  {
    id: 2,
    name: "Thies Boll",
    avatar: "https://media.contra.com/image/upload/c_fill,f_avif,h_96,q_auto:good,w_96/hygxx6wczedlu2q1kfrs",
    project: "Eternals Creations",
    date: "2024-09-09",
    text: "Marcus was very easy to work with, coming into the project I had a ton of details and requirements. Marcus was able to accomodate all of them in the final result and we did so many revisions as needed. I can only recommend working with him!",
  },
  {
    id: 3,
    name: "Renan Trinca",
    avatar: "https://media.contra.com/image/upload/c_fill,f_avif,h_96,q_auto:good,w_96/xz4rynum3cmy3mqsevyh",
    project: "Velvet",
    date: "2024-04-09",
    text: "Marcus's design and branding skills transformed our project. Exemplary professionalism, creativity, and dedication made collaboration a breeze. Highly recommend for top-tier design solutions. #designexcellence",
  },
]

