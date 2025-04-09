export default function Account() {
  return (
    <div className='flex flex-col flex-shrink-0 gap-[1px] relative m-0 p-[0_8px]'>
      <div className='relative p-[0_3px]'>
        <button type="button" className='flex items-center cursor-pointer border-none p-0 bg-transparent w-full outline-none hover:text-white'>
          <div className='relative'>
            <span className='inline-block border-none m-[2px_12px_2px_0px] shadow-[rgba(0,0,0,0.08)_0px_2px_0px] rounded-[6px] w-[32px] h-[32px] relative vertical-align-middle' title="logo">
              <svg viewBox="0 0 120 120" className='absolute top-0 left-0 rounded-[3px] overflow-hidden select-none'><rect x="0" y="0" width="120" height="120" rx="15" ry="15" fill="#3fa372"></rect><text x="50%" y="50%" fontSize="65" textAnchor="middle" fill="#FFFFFF" style={{ dominantBaseline: 'central' }}>Pro</text></svg>
            </span>
          </div>
          <div className='text-left overflow-x-hidden'>
            <div className='flex items-center gap-[4px] whitespace-nowrap overflow-hidden text-ellipsis w-auto text-[16px] leading-[1.2] font-semibold text-white text-shadow-[rgba(255,255,255,0)_0px_0px_6px] transition-[text-shadow_0.15s_linear]'>
              Lab
              <svg viewBox="0 0 14 14" strokeOpacity="1" className='w-[14px] h-[14px] fill-none stroke-current stroke-linecap-round stroke-linejoin-round stroke-width-[calc(1.225px)]'><path d="M3.5 5.5L7 9L10.5 5.5"></path></svg>
            </div>
            <div className='whitespace-nowrap overflow-hidden text-ellipsis w-auto text-[14px] leading-[16px] transition-[color_0.15s_linear]'>username</div>
          </div>
        </button>
      </div>
    </div>
  )
}
