/**
 * This is the main file that must be edited to include your chapters
 * 
 * This file exports an array of courses.
 */
import chapter1 from './chapter-1.md';

export default {
    title: 'Modern Javascript',
    subTitle: 'Zairza - 2018',
    author: {
        name: 'Amitosh Swain Mahapatra',
        email: 'amitosh.swain@gmail.com',
        github: 'agathver',
        twitter: 'agathver',
        website: 'https://amitosh.in'
    },
    chapters: [
        {
            title: 'Warmup',
            content: chapter1,
        }
    ],
};