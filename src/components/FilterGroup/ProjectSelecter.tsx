import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import styles from "./index.module.scss";
import { ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import React from "@/assets/images/reactjs.svg";
import { ExclamationSvg, PlusSvg } from "@/components/svgComponents";
import { clsx } from "clsx";
import nextjsIconBas64 from "@/assets/images/nextjs.svg";

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
        <Button variant="ghost" color="#fff" size="sm" className={styles['filter-group-item-button']}>
          <span className={styles['filter-group-item-button-text']}>{selectedProject}</span>
          <ChevronDown className={clsx(styles['filter-group-item-button-icon'], {
            [styles['filter-group-item-button-icon-active']]: isProjectOpen
          })} />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start"
        className={clsx(
          styles['filter-group-item-popover-content'],
          styles['filter-group-item-popover-content-project']
        )}>
        <div className={styles['filter-group-item-popover-content-header']}>
          <span className={styles['filter-group-item-popover-content-header-text']}>Filter Projects</span>
          <Button className={styles['filter-group-item-popover-content-header-reset-button']}
            size="sm" variant="ghost" color="#fff" onClick={handleReset}>
            Reset
          </Button>
        </div>
        <Input className={styles['filter-group-item-popover-content-input']} placeholder="Search..." />
        <div className={styles['filter-group-item-popover-content-list']}>
          {projectList.map((item) => (
            <div className={styles['filter-group-item-popover-content-list-item']} key={item.name} onClick={() => handleProjectChange(item.name)}>
              <div className={styles['filter-group-item-popover-content-list-item-text']}>
                <Image src={item.icon} alt="project" width={16} height={16} />
                <span>{item.name}</span>
              </div>
              <Checkbox checked={item.checked} />
            </div>
          ))}
        </div>
        <div className={styles['filter-group-item-popover-content-footer']}>
          <Button className={styles['filter-group-item-popover-content-footer-button']} size="sm" variant="outline" color="#fff">
            <PlusSvg className={styles['filter-group-item-popover-content-footer-button-icon']} />
            Project
          </Button>
          <div className={styles['filter-group-item-popover-content-footer-exclamation']}>
            <ExclamationSvg className={styles['filter-group-item-popover-content-footer-exclamation-icon']} currentColor="#80708f" />
            <span>Ctrl-click to select multiple</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}