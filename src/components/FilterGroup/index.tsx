'use client'
import ProjectSelecter from "./ProjectSelecter";
import DateSelecter from "./DateSelecter";
import EvnSelecter from "./EvnSelecter";

export default function FilterGroup() {
  return (
    <div className='flex relative rounded-[6px] h-[38px] max-w-full w-max after:content-[""] after:absolute after:inset-0 after:pointer-events-none after:shadow-[rgb(224,220,229)_0px_0px_0px_1px_inset] after:rounded-[6px]'>
      <div className='min-w-[0px] flex-[1_1_max-content] flex-shrink-0 relative w-max'>
        <ProjectSelecter />
      </div>
      <div className='min-w-[0px] flex-[1_1_max-content] flex-shrink-0 relative w-max'>
        <EvnSelecter />
      </div>
      <div className='min-w-[0px] flex-[1_1_max-content] flex-shrink-0 relative w-max'>
        <DateSelecter />
      </div>
    </div>
  )
}