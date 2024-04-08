import { GridCardItem } from '@/components/GridCard';

import logoBrewsAndBabes from '@/images/logos/brews-and-babes.png';
import logoTheFoundry from '@/images/photos/the-foundry.png';

export const groups: GridCardItem[] = [
  {
    name: 'Brews and Babes',
    description:
      'Bi-weekly meetups at breweries or cafes for caretakers and their littles! everyone is welcome! this is an inclusive and safe space for moms, dads, any dynamic of caretaking, breastfed, bottle fed, formula fed, tube fed, all ages!',
    link: {
      href: 'https://www.instagram.com/brewsandbabes_az/',
      label: 'instagram.com',
    },
    logo: logoBrewsAndBabes,
    target: '_blank',
  },
  {
    name: 'The Foundry',
    description:
      'The multi-disciplinary fitness, health, and wellness studio where I practice hot yoga, pilates, barre, and more. I also work here on occasion with a strong community of women and men whom I love!',
    link: {
      href: 'https://thefoundryyoga.com/',
      label: 'thefoundryyoga.com',
    },
    logo: logoTheFoundry,
    target: '_blank',
  },
];
