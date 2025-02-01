import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ExclamationSvg } from "@/components/svgComponents";
import { clsx } from "clsx";

const defaultEnv = 'All Envs';
const envsMock = [
  {
    name: 'prod',
    checked: false,
  },
  {
    name: 'production',
    checked: false,
  },
];
export default function EvnSelecter() {
  const [isEnvOpen, setIsEnvOpen] = useState(false);
  const [selectedEnv, setSelectedEnv] = useState(defaultEnv);
  const [envList, setEnvList] = useState(envsMock);
  const handleEnvChange = (env: string) => {
    const newEnvList = envList.map((item) => ({ ...item, checked: item.name === env ? !item.checked : item.checked }));
    const noChecked = newEnvList.every((item) => !item.checked);
    const isAllChecked = newEnvList.every((item) => item.checked);
    if (noChecked) {
      setEnvList(envsMock);
      setSelectedEnv(defaultEnv);
    } else if (isAllChecked) {
      setEnvList(newEnvList);
      setSelectedEnv(defaultEnv);
    } else {
      setSelectedEnv(env);
      setEnvList(newEnvList);
    }
    setIsEnvOpen(false);
  }
  return (
    <Popover open={isEnvOpen} onOpenChange={setIsEnvOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" color="#fff" size="sm" className='p-[10px_12px] h-full flex items-center gap-[4px] border-[1px_solid_transparent] overflow-hidden first:pl-[16px] last:pr-[16px]'>
          <span className='text-[14px] font-semibold'>{selectedEnv}</span>
          <ChevronDown className={clsx('w-[14px] h-[14px] text-[#3e3446] stroke-opacity-[0.6]', {
            'transform rotate-[180deg]': isEnvOpen
          })} />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start"
        className='p-0 flex flex-col w-[224px]'>
        <div className='relative flex items-center justify-between p-[6px_12px] shadow-[rgba(45,0,85,0.06)_0px_1px_0px] line-height-[1.4] z-2 text-[12px] text-[#3e3449] font-semibold whitespace-nowrap'>
          <span className='text-[inherit] font-semibold whitespace-nowrap mr-[16px]'>Filter Environments</span>
        </div>
        <Input className='appearance-none w-[calc(100%-8px)] border-[1px_solid_rgb(240,236,243)] border-radius-[4px] bg-[rgb(250,249,251)] text-[14px] p-[4px_calc(7px)] m-[4px] mt-[calc(5px)] h-[30px]' placeholder="Search..." />
        <div className='flex flex-col gap-[8px] p-[8px]'>
          {envList.map((item) => (
            <div className='flex items-center justify-between p-[4px] rounded-[4px] cursor-pointer hover:bg-[#f0f0f0]' key={item.name} onClick={() => handleEnvChange(item.name)}>
              <div className='flex items-center gap-[4px]'>
                <span>{item.name}</span>
              </div>
              <Checkbox checked={item.checked} />
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center shadow-[rgba(45,0,85,0.06)_0px_-1px_0px] p-[8px_12px] z-2'>
          <div className='flex items-center gap-[4px]'>
            <ExclamationSvg className='w-[12px] h-[12px]' currentColor="#80708f" />
            <span className='text-[12px] text-[#80708f] whitespace-nowrap overflow-hidden text-overflow-ellipsis'>Ctrl-click to select multiple</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
} 