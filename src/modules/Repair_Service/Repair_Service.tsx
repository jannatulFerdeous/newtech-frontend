import React from 'react'
import HeroService from './partials/HeroService'
import ChooseDevice from './partials/ChooseDevice'
import LookUp from './partials/LookUp'
import Work_process from '@components/Work Process/Work_process'
import Support_Brand from '@components/Support_Brand'
import GetTouch from '@components/GetTouch'

const Repair_Service = () => {
  return (
    <div id='#heroService'>
      <HeroService/>
      <ChooseDevice/>
      <LookUp/>
      <Work_process/>
      <Support_Brand/>
      <GetTouch />
    </div>
  )
}

export default Repair_Service