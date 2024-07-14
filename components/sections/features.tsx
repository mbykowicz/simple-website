// AI generated

import { BriefcaseIcon, PieChartIcon, MessageCircleIcon } from 'lucide-react'
import React from 'react'

export const Features: React.FC = () => {
  return (
    <section className='container mx-auto py-20'>
      <div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
        <Feature
          icon={<BriefcaseIcon />}
          header='Grow your business'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.'
        />
        <Feature
          icon={<PieChartIcon />}
          header='Analyze your data'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.'
        />
        <Feature
          icon={<MessageCircleIcon />}
          header='Communicate with your team'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.'
        />
      </div>
    </section>
  )
}

const Feature: React.FC<{
  icon: React.ReactNode
  header: string
  description: string
}> = ({ icon, header, description }) => {
  return (
    <div className='flex flex-col items-center space-y-4'>
      <div className='flex items-center justify-center rounded-full bg-primary p-4 text-primary-foreground'>
        {icon}
      </div>
      <h3 className='text-center text-xl font-semibold'>{header}</h3>
      <p className='text-center text-sm'>{description}</p>
    </div>
  )
}
