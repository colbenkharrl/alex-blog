import imageHotAirBaloon from '@/images/photos/hot-air-baloon.png';
import imageBabyFeet from '@/images/photos/baby-feet.png';
import imageEasterBasket from '@/images/photos/easter-basket.png';
import { GridCardItem } from '@/components/GridCard';

export const projects: GridCardItem[] = [
  {
    name: 'Revived Easter Basket',
    description:
      "I breathed new life into my childhood Easter basket for Quinn, and I couldn't be happier with how it turned out! Working on my sewing skills and learning a lot in the process.",
    link: {
      href: '#',
      label: 'alex.kharrl.com',
    },
    logo: imageEasterBasket,
  },
  {
    name: '"Baby\'s First" Crafts',
    description:
      "Throughout Quinn's first year of life, we created a handful of seasonal arts and crafts to cherish this age and share as gifts to loved ones.",
    link: {
      href: '#',
      label: 'alex.kharrl.com',
    },
    logo: imageBabyFeet,
  },
  {
    name: "Quinn's Nursery",
    description:
      "I designed and built Quinn's nursery throughout my second and third trimester. With the help of my husband, we created a cute, cozy, and functional space to welcome our sweet boy into the world. ",
    link: {
      href: '#',
      label: 'alex.kharrl.com',
    },
    logo: imageHotAirBaloon,
  },
];
