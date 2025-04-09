import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import React from "@/assets/images/reactjs.svg";
import { ExclamationSvg, PlusSvg } from "@/components/svgComponents";
import { clsx } from "clsx";
import {nextjsIconBas64} from "@/lib/utils";

const defaultProject = 'All Projects';

const projectsMock = [
  {
    name: 'javascript-nextjs',
    icon: nextjsIconBas64,
    checked: false,
  },
  {
    name: 'javascript-react',
    icon: React,
    checked: false,
  },
];

export default function ProjectSelecter() {
  const [isProjectOpen, setIsProjectOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(defaultProject);
  const [projectList, setProjectList] = useState(projectsMock);
  const handleProjectChange = (project: string) => {
    const newProjectList = projectList.map((item) => ({ ...item, checked: item.name === project ? !item.checked : item.checked }));
    const noChecked = newProjectList.every((item) => !item.checked);
    const isAllChecked = newProjectList.every((item) => item.checked);
    if (noChecked) {
      setProjectList(projectsMock);
      setSelectedProject(defaultProject);
    }
    else if (isAllChecked) {
      setProjectList(newProjectList);
      setSelectedProject(defaultProject);
    } else {
      setSelectedProject(project);
      setProjectList(newProjectList);
    }
    setIsProjectOpen(false);
  };
  const handleReset = () => {
    setProjectList(projectsMock);
    setSelectedProject(defaultProject);
    setIsProjectOpen(false);
  }
  return (
    <Popover open={isProjectOpen} onOpenChange={setIsProjectOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" color="#fff" size="sm" className='p-[10px_12px] h-full flex items-center gap-[4px] border-[1px_solid_transparent] overflow-hidden first:pl-[16px] last:pr-[16px]'>
          <span className='text-[14px] font-semibold'>{selectedProject}</span>
          <ChevronDown className={clsx('w-[14px] h-[14px] text-[#3e3446] stroke-opacity-[0.6]', {
            'transform rotate-[180deg]': isProjectOpen
          })} />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start"
        className='p-0 flex flex-col w-[310px]'>
        <div className='relative flex items-center justify-between p-[6px_12px] shadow-[rgba(45,0,85,0.06)_0px_1px_0px] line-height-[1.4] z-2 text-[12px] text-[#3e3449] font-semibold whitespace-nowrap'>
          <span className='text-[inherit] font-semibold whitespace-nowrap mr-[16px]'>Filter Projects</span>
          <Button className='relative inline-block rounded-[4px] text-transform-none bg-transparent border-[1px_solid_transparent] line-height-[1rem] shadow-none cursor-pointer transition-[background_0.1s,border_0.1s,box-shadow_0.1s] text-[12px] text-[#3e3449] hover:bg-[rgba(255,255,255,0.085)] hover:border-[1px_solid_rgba(255,255,255,0.085)]'
            size="sm" variant="ghost" color="#fff" onClick={handleReset}>
            Reset
          </Button>
        </div>
        <Input className='appearance-none w-[calc(100%-8px)] border-[1px_solid_rgb(240,236,243)] border-radius-[4px] bg-[rgb(250,249,251)] text-[14px] p-[4px_calc(7px)] m-[4px] mt-[calc(5px)] h-[30px]' placeholder="Search..." />
        <div className='flex flex-col gap-[8px] p-[8px]'>
          {projectList.map((item) => (
            <div className='flex items-center justify-between p-[4px] rounded-[4px] cursor-pointer hover:bg-[#f0f0f0]' key={item.name} onClick={() => handleProjectChange(item.name)}>
              <div className='flex items-center gap-[4px]'>
                <Image src={item.icon} alt="project" width={16} height={16} />
                <span>{item.name}</span>
              </div>
              <Checkbox checked={item.checked} />
            </div>
          ))}
        </div>
        <div className='flex items-center justify-between shadow-[rgba(45,0,85,0.06)_0px_-1px_0px] p-[8px_12px] z-2'>
          <Button className='h-[26px] flex items-center' size="sm" variant="outline" color="#fff">
            <PlusSvg className='w-[12px] h-[12px]' />
            Project
          </Button>
          <div className='flex items-center gap-[4px]'>
            <ExclamationSvg className='w-[12px] h-[12px]' currentColor="#80708f" />
            <span className='text-[12px] text-[#80708f] whitespace-nowrap overflow-hidden text-overflow-ellipsis'>Ctrl-click to select multiple</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}