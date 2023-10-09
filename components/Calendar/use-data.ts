import dayjs from 'dayjs';
import { Dayjs } from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear'; // 导入插件
import 'dayjs/locale/zh-cn'; // 导入本地化语言
import { isString } from '@vue/shared';

dayjs.locale('zh-cn'); // 使用本地化语言
const tableSize = 42;

// 定义日历表格类型
export type CalendarDateCellType = 'next' | 'prev' | 'current';
// 定义日历表格数据
export type CalendarDateCell = {
  text: number;
  type: CalendarDateCellType;
};

// 日历数据数组
export type day = {
  date: number;
  value?: object;
  isSelect: boolean;
  type: CalendarDateCellType;
};

// 生成 1-n 的连续数字数组
export const rangeArr = (n: number) => Array.from(Array.from({ length: n }).keys());

// 获取上个月最后一天
const getPrevMonthLastDays = (date: Dayjs, count?: number): Array<day> => {
  let tempArray: Array<day> = [];
  // const lastDay = date.subtract(1, 'month').endOf('month').date()
  // rangeArr(count).map((_, index) => lastDay - (count - index - 1)).forEach(v => {tempArray.push({date:v ,isSelect:false,type:'prev'})})
  // return tempArray
  // 当前月第一周，第一天星期数
  const thisMonthFirstWeek = date.startOf('month').day();  
  // 下一个月 最后一天 天数
  const prevMonthDay = date.subtract(1, 'month').endOf('month').date();
  for (let index = 0; index < thisMonthFirstWeek; index++) {    
    tempArray.push({ date: prevMonthDay - thisMonthFirstWeek - index, isSelect: false, type: 'prev' });
  }  
  return tempArray;
};

// 获取下一个月开始几天
const getNextMonthDays = (date: Dayjs, dateArrayLength: number): Array<day> => {
  // 当前月最后一天
  const nextMonthShowLength = tableSize - dateArrayLength;
  const tempArray: Array<day> = [];
  // const nextMount = date.add(1,'M')
  // rangeArr(35-day).map((_, index) => index + 1).forEach( v => { tempArray.push({date:v ,isSelect: false,type: 'next'})})
  for (let index = 1; index < nextMonthShowLength + 1; index++) {
    tempArray.push({ date: index, isSelect: false, type: 'next' });
  }
  return tempArray;
};

// 获取当前月份的天数的数组
const getMonthDays = (date: Dayjs) => {
  const days = date.daysInMonth();
  return rangeArr(days).map((_, index) => index + 1);
};

/**
 * 获取dayjs对象
 * @param day 字符串（年&月）｜ 数字 （当前月份的号数）
 * @returns 返回dayjs对象
 */
export const getDayjs = (day: number | string) => {
  let tempDayjs;
  isString(day) ? (tempDayjs = dayjs(day)) : (tempDayjs = tempDayjs = dayjs(dayjs().format('YYYY-M') + '-' + day));
  return tempDayjs;
};

//
// export const toNestedArr = (days: CalendarDateCell[]) =>
//   rangeArr(days.length / 7).map((index) => {
//     const start = index * 7
//     return days.slice(start, start + 7)
//   })

export const returnDataArray = () => {
  // 当前日期时间dayjs对象
  const nowDayjs = dayjs();
  let dateArray: Array<day> = [];

  // 当前所在月第几天
  const today = nowDayjs.date();
  // 当前月第一天的星期数
  const week = nowDayjs.startOf('month').day();

  const nowMonthDays = getMonthDays(nowDayjs);
  // 初始化返回的对象
  nowMonthDays.forEach((v) => {
    dateArray.push({ date: v, isSelect: v === today ? true : false, type: 'current' });
  });
  // 获取下一个月
  if (week === 6) {
    // 当前月 + 下一个月
    dateArray = dateArray.concat(getNextMonthDays(nowDayjs, dateArray.length));
  } else {
    //获取前一个月
    const PrevMonth = getPrevMonthLastDays(nowDayjs);
    dateArray = [...PrevMonth,...dateArray]
    // 如果上个月天数 + 这个月天数 = 35； 既当前表格已满，无需获取下一个月
    // 再获取下一个月
    if (dateArray.length < tableSize) dateArray = dateArray.concat(getNextMonthDays(nowDayjs, dateArray.length));
  }
  return dateArray;
};
