import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import styles from "./index.module.scss";
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
        <Button variant="ghost" color="#fff" size="sm" className={styles['filter-group-item-button']}>
          <span className={styles['filter-group-item-button-text']}>{selectedEnv}</span>
          <ChevronDown className={clsx(styles['filter-group-item-button-icon'], {
            [styles['filter-group-item-button-icon-active']]: isEnvOpen
          })} />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start"
        className={clsx(
          styles['filter-group-item-popover-content'],
          styles['filter-group-item-popover-content-env']
        )}>
        <div className={styles['filter-group-item-popover-content-header']}>
          <span className={styles['filter-group-item-popover-content-header-text']}>Filter Environments</span>
        </div>
        <Input className={styles['filter-group-item-popover-content-input']} placeholder="Search..." />
        <div className={styles['filter-group-item-popover-content-list']}>
          {envList.map((item) => (
            <div className={styles['filter-group-item-popover-content-list-item']} key={item.name} onClick={() => handleEnvChange(item.name)}>
              <div className={styles['filter-group-item-popover-content-list-item-text']}>
                <span>{item.name}</span>
              </div>
              <Checkbox checked={item.checked} />
            </div>
          ))}
        </div>
        <div className={styles['filter-group-item-popover-content-footer']}>
          <div className={styles['filter-group-item-popover-content-footer-exclamation']}>
            <ExclamationSvg className={styles['filter-group-item-popover-content-footer-exclamation-icon']} currentColor="#80708f" />
            <span>Ctrl-click to select multiple</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
} 