import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CheckMarkSvg } from "@/components/svgComponents";
import { clsx } from "clsx";

const defaultDate = 'All';

const datesMock = [
  { name: 'Last 1 Hour', value: '1H', checked: false },
  { name: 'Last 24 Hours', value: '24H', checked: false },
  { name: 'Last 7 Days', value: '7D', checked: false },
  { name: 'Last 14 Days', value: '14D', checked: false },
  { name: 'Last 30 Days', value: '30D', checked: false },
  { name: 'Last 60 Days', value: '60D', checked: false },
  { name: 'Last 90 Days', value: '90D', checked: false },
  { name: 'Absolute Date', value: 'Absolute Date', checked: false },
]


export default function DateSelecter() {
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [dateList, setDateList] = useState(datesMock);
  const handleDateChange = (val: { name: string; value: string; checked: boolean }) => {
    const newDateList = dateList.map((item) => ({ ...item, checked: item.value === val.value ? !item.checked : false }));
    const noChecked = newDateList.every((item) => !item.checked);
    const isAllChecked = newDateList.every((item) => item.checked);
    if (noChecked) {
      setDateList(datesMock);
      setSelectedDate(defaultDate);
    } else if (isAllChecked) {
      setDateList(newDateList);
      setSelectedDate(defaultDate);
    } else {
      setSelectedDate(val.value);
      setDateList(newDateList);
    }
    setIsDateOpen(false);
  }
  return (
    <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" color="#fff" size="sm" className='p-[10px_12px] h-full flex items-center gap-[4px] border-[1px_solid_transparent] overflow-hidden first:pl-[16px] last:pr-[16px]'>
          <span className='text-[14px] font-semibold'>{selectedDate}</span>
          <ChevronDown className={clsx('w-[14px] h-[14px] text-[#3e3446] stroke-opacity-[0.6]', {
            'transform rotate-[180deg]': isDateOpen
          })} />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start"
        className='p-0 flex flex-col w-[256px]'>
        <div className='relative flex items-center justify-between p-[6px_12px] shadow-[rgba(45,0,85,0.06)_0px_1px_0px] line-height-[1.4] z-2 text-[12px] text-[#3e3449] font-semibold whitespace-nowrap'>
          <span className='text-[inherit] font-semibold whitespace-nowrap mr-[16px]'>Filter Time Range</span>
        </div>
        <Input className='appearance-none w-[calc(100%-8px)] border-[1px_solid_rgb(240,236,243)] border-radius-[4px] bg-[rgb(250,249,251)] text-[14px] p-[4px_calc(7px)] m-[4px] mt-[calc(5px)] h-[30px]' placeholder="Custom range:2h,4d,8w..." />
        <div className='flex flex-col gap-[8px] p-[8px]'>
          {dateList.map((item) => (
              <div className={clsx('flex items-center justify-between p-[4px] rounded-[4px] cursor-pointer hover:bg-[#f0f0f0]',
                item.checked && 'text-[#6559c5] hover:bg-[rgba(101, 89, 197, 0.085)]'
              )} key={item.name} onClick={() => handleDateChange(item)}>
              <div className='flex items-center gap-[4px]'>
                {item.checked ? <CheckMarkSvg className='w-[16px] h-[16px]' /> : <div className='w-[16px] h-[16px]' />}
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}