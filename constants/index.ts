import gymImage from "@/public/assets/gym.jpg";
import wFoodImage from "@/public/assets/wfood.jpg";
import beautyImage from "@/public/assets/beauty.jpg";
import coffeeImage from "@/public/assets/coffee.jpg";
import bikezzImage from "@/public/assets/bikezz.jpg";
import hotelyImage from "@/public/assets/hotely.jpg";
import tattooImage from "@/public/assets/tattoo.jpg";
import carlandImage from "@/public/assets/carland.jpg";
import interiorImage from "@/public/assets/interior.jpg";
import photographyImage from "@/public/assets/photo.jpg";
import testimonialImage1 from "@/public/assets/testimonial-1.jpg";
import testimonialImage2 from "@/public/assets/testimonial-2.jpg";
import testimonialImage3 from "@/public/assets/testimonial-3.jpg";

export const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const navFooterItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Faqs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const projectList = [
  {
    id: "1",
    title: "Photographer Personal Site",
    image: photographyImage,
    link: "https://photographer-livid.vercel.app",
  },
  {
    id: "2",
    title: "Restaurant WFood",
    image: wFoodImage,
    link: "https://restaurant-puce-six.vercel.app",
  },
  {
    id: "3",
    title: "Сar Rental Carland",
    image: carlandImage,
    link: "https://car-rental-omega-one.vercel.app",
  },
  {
    id: "4",
    title: "Сoffee Shop",
    image: coffeeImage,
    link: "https://coffee-house-nu.vercel.app",
  },
  {
    id: "5",
    title: "GYM Studio",
    image: gymImage,
    link: "https://fit-ochre.vercel.app",
  },
  {
    id: "6",
    title: "Booking Hotels Hotely",
    image: hotelyImage,
    link: "https://hotels-wine-eta.vercel.app",
  },
  {
    id: "7",
    title: "Interior Design Studio",
    image: interiorImage,
    link: "https://interior-two-ashen.vercel.app",
  },
  {
    id: "8",
    title: "Bikezz Store",
    image: bikezzImage,
    link: "https://bikezz-ecru.vercel.app",
  },
  {
    id: "9",
    title: "Tattoo Studio",
    image: tattooImage,
    link: "https://tattoo-mauve.vercel.app",
  },
  {
    id: "10",
    title: "Beauty Studio",
    image: beautyImage,
    link: "https://beauty-salon-ivory.vercel.app",
  },
];

export const testimonialList = [
  {
    name: "Sarah Chen",
    company: "Pixel Perfect",
    role: "Head of Design",
    quote:
      "Alex's expertise in both technical development and design created a beautiful, high-performing website.",
    image: testimonialImage1,
    imagePositionY: 0.2,
  },
  {
    name: "Marcus Rodriguez",
    company: "Craft Coffee Co.",
    role: "Founder",
    quote:
      "Alex transformed our boutique coffee brand with a website that perfectly balances aesthetics and functionality.",
    image: testimonialImage2,
    imagePositionY: 0.1,
  },
  {
    name: "Emily Watson",
    company: "Studio Minimal",
    role: "Creative Director",
    quote:
      "The collaborative process was amazing. Alex brought lots of fresh perspectives and innovative solutions.",
    image: testimonialImage3,
    imagePositionY: 0.55,
  },
];

export const faqList = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];
