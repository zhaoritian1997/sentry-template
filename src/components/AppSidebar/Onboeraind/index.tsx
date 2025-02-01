import { ProgressRingSvg } from '../../svgComponents';
import clsx from 'clsx';

export default function Onboarding({ isCollapse }: { isCollapse: boolean }) {
  return (
    <div className='p-[8px_16px] grid grid-cols-[max-content_1fr] gap-[12px] items-center cursor-pointer transition-[background_100ms] hover:bg-[rgba(255,255,255,0.085)]'>
      <ProgressRingSvg progress={7} />
      <div className={clsx('flex flex-col justify-center leading-none', isCollapse && 'hidden')}>
        <div className='text-[#fff] text-[16px] leading-[18px] transition-[color_100ms]'>Onboarding</div>
        <div className='grid grid-cols-[max-content_max-content] gap-[6px] items-center text-[12px] text-[#80708f] transition-[color_100ms]'>
          7 completed tasks
          <div className='bg-[#f55459] rounded-[50%] h-[7px] w-[7px]'></div>
        </div>
      </div>
    </div>
  )
}