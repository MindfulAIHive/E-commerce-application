import { StaticImageData } from "next/image"
interface Items {
  id:number
  img: StaticImageData
  title:string
  title2:string
  price:string
}
import shoes1 from "../public/womenshoes.png"
import shoes2 from "../public/menshoes.png"
import shoes3 from "../public/menshoes2.png"
import Best1 from "../public/Image (7).png"
import Best2 from "../public/Image (8).png"
import Best3 from "../public/Image (7).png"
import g1 from "../public/Image (9).png";
import g2 from "../public/Image (10).png";
import g3 from "../public/Image (9).png";
import g4 from "../public/Image (10).png";
export const airMax:Items[] = [
  {
      id:1,
      img:shoes1,
      title:"Nike Air Max Pulse",
      title2:"Women's Shoes",
      price:"₹ 13 995"
  },
  {
      id:2,
      img:shoes2,
      title:"Nike Air Max Pulse",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:3,
      img:shoes3,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },
  {
      id:4,
      img:shoes1,
      title:"Nike Air Max 97 SE",
      title2:"Men's Shoes",
      price:"₹ 13 995"
  },

]
export const gear1:Items[] = [
  {
      id:1,
      img:g1,
      title:"Nike Dri-FIT ADV Run Division",
      title2:"Running Top",
      price:"₹ 5295"
  },
  {
      id:2,
      img:g2,
      title:"Nike Fast",
      title2:"Women's Mid-Rise 7/8 Running Leggings with Pockets",
      price:"₹ 3795"
  },
//   {
//       id:3,
//       img:g1,
//       title:"Nike Air Max 97 SE",
//       title2:"Men's Shoes",
//       price:"₹ 13 995"
//   },
//   {
//       id:4,
//       img:g2,
//       title:"Nike Air Max 97 SE",
//       title2:"Men's Shoes",
//       price:"₹ 13 995"
//   },
]

export const gear2:Items[] = [
  {
      id:1,
      img:Best1,
      title:"Nike Dri-FIT ADV TechKnit Ultra",
      title2:"Men's Short-Sleeve Running Top",
      price:"₹ 3895"
  },
  {
      id:2,
      img:Best2,
      title:"Nike Dri-Fit Challenger",
      title2:"Men's 18cm (approx.) 2-in-1 Versatile Shorts",
      price:"₹ 2495"
  },
//   {
//       id:3,
//       img:g3,
//       title:"Nike Air Max 97 SE",
//       title2:"Men's Shoes",
//       price:"₹ 13 995"
//   },
//   {
//       id:4,
//       img:g4,
//       title:"Nike Air Max 97 SE",
//       title2:"Men's Shoes",
//       price:"₹ 13 995"
//   },
]