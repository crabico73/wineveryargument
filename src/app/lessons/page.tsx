import Link from 'next/link';
import { Container } from '@/components/ui/Container';

const lessons = [
  {
    id: 1,
    title: 'Valid vs Sound Arguments',
    description: 'Master the fundamental difference between validity and soundness in logical arguments.',
    difficulty: 'Beginner',
    duration: '10 min',
    free: true,
  },
  {
    id: 2, 
    title: 'Common Logical Fallacies',
    description: 'Identify and counter the most frequent errors in reasoning.',
    difficulty: 'Beginner',
    duration: '15 min',
    free: true,
  },
  {
    id: 3,
    title: 'Constructing Sound Arguments',
    description: 'Build compelling arguments that are both logically valid and factually sound.',
    difficulty: 'Intermediate',
    duration: '20 min',
    free: false,
  },
  {
    id: 4,
    title: 'Advanced Debate Techniques',
    description: 'Master advanced argumentation strategies used by professional debaters.',
    difficulty: 'Advanced',
    duration: '25 min',
    free: false,
  },
];

export default function LessonsPage() {
  return (
    <main className=\
