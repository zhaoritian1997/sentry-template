import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import styles from "./index.module.scss";
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
        <Button variant="ghost" color="#fff" size="sm" className={styles['filter-group-item-button']}>
          <span className={styles['filter-group-item-button-text']}>{selectedDate}</span>
          <ChevronDown className={clsx(styles['filter-group-item-button-icon'], {
            [styles['filter-group-item-button-icon-active']]: isDateOpen
          })} />
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="start"
        className={clsx(styles['filter-group-item-popover-content'],
         styles['filter-group-item-popover-content-date'])}>
        <div className={styles['filter-group-item-popover-content-header']}>
          <span className={styles['filter-group-item-popover-content-header-text']}>Filter Time Range</span>
        </div>
        <Input className={styles['filter-group-item-popover-content-input']} placeholder="Custom range:2h,4d,8w..." />
        <div className={styles['filter-group-item-popover-content-list']}>
          {dateList.map((item) => (
            <div className={clsx(styles['filter-group-item-popover-content-list-item'],
                item.checked && styles['filter-group-item-popover-content-list-item-checked']
              )} key={item.name} onClick={() => handleDateChange(item)}>
              <div className={styles['filter-group-item-popover-content-list-item-text']}>
                {item.checked ? <CheckMarkSvg className={styles['filter-group-item-popover-content-list-item-text-icon']} /> : <div className={styles['filter-group-item-popover-content-list-item-text-icon']} />}
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}