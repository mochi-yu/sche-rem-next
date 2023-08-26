interface GroupInfo {
  groupID: string,
  groupName: string,
  author: string,
  groupUsers: string[],
  schedules: ScheduleInfo[],
  startDate: string,
  endDate: string,
  startHour: number,
  endHour: number
}