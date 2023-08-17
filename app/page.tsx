import { Typography } from '@mui/material'
import Image from 'next/image'
import { ScheRemHeader } from './ScheRemHeader'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect(`/create`);
}
