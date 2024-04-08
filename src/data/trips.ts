import { ImageProps } from 'next/image';

import iconHawaii from '@/images/photos/hawaii-flower.png';
import iconFlorence from '@/images/photos/florence.png';
import iconJoshuaTree from '@/images/photos/joshua-tree.png';
import iconPortland from '@/images/photos/portland.png';
import iconCarlsbad from '@/images/photos/carlsbad.png';
import iconSanFrancisco from '@/images/photos/san-francisco.png';

export interface Trip {
  title: string;
  description: string;
  image: ImageProps['src'];
  time: string;
  url: string;
}

export const trips: Array<Trip> = [
  {
    title: 'First Travel with Quinn to San Francisco',
    description:
      'Escorting an infant adds a lot of new variables to traveling, but Quinn thrived!',
    image: iconSanFrancisco,
    time: 'Winter 2024',
    url: '#',
  },
  {
    title: 'Babymoon in Northern Italy',
    description:
      'Traveling while six-months pregnant through the beautiful cities of Milan, Venice, and Florence.',
    image: iconFlorence,
    time: 'Spring 2023',
    url: '#',
  },
  {
    title: 'New Year in Carlsbad',
    description:
      'Matt and I watched the year change on the beaches of southern California.',
    image: iconCarlsbad,
    time: 'Winter 2022',
    url: '#',
  },
  {
    title: 'Relaxing Retreat to Joshua Tree',
    description:
      'A Christmas gift from Matt, we lost ourselves in the unique high desert of Joshua Tree.',
    image: iconJoshuaTree,
    time: 'Winter 2022',
    url: '#',
  },
  {
    title: 'Honeymoon Getaway on Kauai',
    description:
      'Matt and I escaped after our wedding to the Hawaiian island of Kauai.',
    image: iconHawaii,
    time: 'Fall 2021',
    url: '#',
  },
  {
    title: 'Portland Anniversary Adventure',
    description:
      'For our one-year dating anniversary we spent a long weekend exploring Portland neighborhoods and food.',
    image: iconPortland,
    time: 'Summer 2020',
    url: '#',
  },
];
