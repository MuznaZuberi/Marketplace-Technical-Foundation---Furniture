import { NextResponse } from "next/server";

type ProductDetails = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
};

const MyShopProducts: ProductDetails[] = [
  {
    id: 1,
    image: "/images/set_01.png",
    title: "Treton Modular Sofa",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,   
       price:"25,000.00",
  },
  {
    id: 2,
    image: "/images/set_02.png",
    title: "Granite Dining Table With Chair",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,   
       price: "25,000.00",
  },
  {
    id: 3,
    image: "/images/set_03.png",
    title: "Outdoor Bar Table & Stool",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,    
      price: "25,000.00",
  },
  {
    id: 4,
    image: "/images/set_04.png",
    title: "Plain Console With Teak Mirror",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,   
       price: "25,000.00",
  },
  {
    id: 5,
    image: "/images/set_05.png",
    title: "Grain Coffee Table",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,   
       price: "15,000.00",
  },
  {
    id: 6,
    image: "/images/set_06.png",
    title: "Kent Coffee Table",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,   
       price: "225,000.00",
  },
  {
    id: 7,
    image: "/images/set_07.png",
    title: "Round Coffee Table",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,    
      price: "251,000.00",
  },
  {
    id: 8,
    image: "/images/set_08.png",
    title: "Reclaimed Coffee Table",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,   
    price: "25,200.00",
  },
  {
    id: 9,
    image: "/images/set_09.png",
    title: "Plain Console",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,  
     price: "258,200.00",
  },
  {
    id: 10,
    image: "/images/set_10.png",
    title: "Reclaimed Teak Sideboard",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `, 
     price: "20,000.00",
  },
  {
    id:11,
    image: "/images/set_11.png",
    title: "SJP 0825",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,  
     price: "200,000.00",
  },
  {
    id: 12,
    image: "/images/set_12.png",
    title: "Bellow Chair & Table",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,   
    price: "100,000.00",
  },
  {
    id: 13,
    image: "/images/sets_13.png",
    title: "Granite Square Side Table",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,    
    price: "258,800.00",
  },
  {
    id: 14,
    image: "/images/set_14.png",
    title: "Asgaard Sofa",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,  
     price: "250,000.00",
  },

  {
    id: 15,
    image: "/images/sets_15.png",
    title: "Maya Sofa Three Seater",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `, 
    price: "115,000.00",
  },
  {
    id: 16,
    image: "/images/set_16.png",
    title: "Outdoor Sofa Set",
    description: `Seeting the bar as one of the loudest speakers in its class, the
            kilburn is a compact,stout-hearted hero with a well balanced
            audio which boasts a clear midrange and extended highs for a
            sound.   
      `,  
    price: "244,000.00",
  },

];

export async function GET() {
  return NextResponse.json(MyShopProducts);
}
