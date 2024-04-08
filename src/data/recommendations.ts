import { StaticImageData } from 'next/image';

import acrossThePondImage from '@/images/photos/across-the-pond.png';
import brassArmadilloImage from '@/images/photos/brass-armadillo.png';
import southwestImage from '@/images/photos/southwest.png';
import goldenGateParkImage from '@/images/photos/golden-gate-park.png';

export type RecommendationsTabName =
  | 'Dining'
  | 'Shopping'
  | 'Locations'
  | 'Vendors';

export type TabItem = {
  title: string;
  description: string;
  timestamp: number;
  url?: string;
  icon: StaticImageData;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
};

export type TabConfig<TName = string> = {
  name: TName;
  items: TabItem[];
};

export const recommendationsTabMap: Record<
  RecommendationsTabName,
  TabConfig<RecommendationsTabName>
> = {
  Dining: {
    name: 'Dining',
    items: [
      {
        title: 'Across the Pond',
        description:
          'Across the Pond, located in Phoenix, Arizona, is a cozy sushi bar and cocktail room offering an eclectic sushi fare along with craft cocktails, beer, wine, and a variety of local and adventurous sake. Situated in a picturesque central Phoenix location, it provides an intimate setting ideal for dining and socializing.',
        icon: acrossThePondImage,
        rating: 4,
        timestamp: Date.now(),
      },
    ],
  },
  Shopping: {
    name: 'Shopping',
    items: [
      {
        title: 'Brass Armadillo',
        description:
          'The Brass Armadillo in Phoenix, Arizona, is a sprawling antique mall housing over 600 antique dealers under one roof, making it the largest concentration of antique dealers in the desert valley. This destination offers a vast array of antiques, collectibles, and vintage merchandise, providing a unique shopping experience for those eager to find one-of-a-kind treasures and delve into the past​.',
        icon: brassArmadilloImage,
        rating: 3,
        timestamp: Date.now(),
      },
    ],
  },
  Locations: {
    name: 'Locations',
    items: [
      {
        title: 'Golden Gate Park',
        description:
          "Golden Gate Park in San Francisco is a sprawling green space offering diverse attractions like museums, gardens, and cultural venues. It's a popular urban oasis for recreation and exploration.",
        icon: goldenGateParkImage,
        rating: 5,
        timestamp: Date.now(),
      },
    ],
  },
  Vendors: {
    name: 'Vendors',
    items: [
      {
        title: 'Southwest Airlines',
        description:
          'Southwest Airlines is a major American low-cost carrier renowned for its customer-friendly policies, including free checked bags and no change fees. Based in Dallas, Texas, it operates a vast domestic network and several international destinations, emphasizing affordability and reliable service.',
        icon: southwestImage,
        rating: 4,
        timestamp: Date.now(),
      },
    ],
  },
};

export const recommendationsTabList: TabConfig[] = Object.values(
  recommendationsTabMap,
);
