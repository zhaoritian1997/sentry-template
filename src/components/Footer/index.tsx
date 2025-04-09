import { LogoSvg } from '@/components/svgComponents';
export default function Footer() {
  return (
    <footer className='grid grid-cols-[1fr_1fr_1fr] items-center justify-self-start gap-[16px] 
    border-t border-t-[rgb(224,220,229)] text-[14px] p-[16px_30px] mt-auto text-[#80708f]'>
      <div className='grid grid-flow-col auto-cols-max items-center  gap-[16px]'>
        <a href="#"
          className='rounded-[2px] text-[#80708f] hover:text-[#6559c5]'>Privacy Policy</a>
        <a href="#" className='rounded-[2px] text-[#80708f] hover:text-[#6559c5]'>Terms of Use</a>
      </div>
      <a href="#" tabIndex={-1} className='rounded-[2px] text-[#80708f] flex items-center m-auto hover:text-[#6559c5]'>
        <LogoSvg />
      </a>
      <div className='grid grid-flow-col auto-cols-max items-center justify-self-end gap-[16px]'>
        <a href="#" className='rounded-[2px] text-[#80708f] hover:text-[#6559c5]'>Service Status</a>
        <a href="#" className='rounded-[2px] text-[#80708f] hover:text-[#6559c5]'>API</a>
        <a href="#" className='rounded-[2px] text-[#80708f] hover:text-[#6559c5]'>Docs</a>
        <a href="#" className='rounded-[2px] text-[#80708f] hover:text-[#6559c5]'>Contribute</a>
      </div>
    </footer>
  )
}
