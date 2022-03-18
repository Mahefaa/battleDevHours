# After cloning this repository:
### To make it work you should install Virtual Studio code and run node "where you've put 'battledev3.js'

### If you want to try with other datas, change what's wrote in  'let table= ' near the end of the file and follow the pattern.

# Objective
It's hard to find anavailable slot in the agenda of all your colleagues to organize your team meetings! You decide to ask them to give you the slots where 
they are unavailable. Using this data, your goal is to find a 60-minute slot that will suit everyone in the coming week.

## Data format
## Input
## Row 1: an integer N between 1 and 1000 representing the number of unavailable slots for the meeting
## Rows 2 to N + 1: an unavailable slot for a colleague using the day hh:mm-hh:mm format. The day is in ISO format: 1 - Monday, 2 - Tuesday, etc. Start and end minutes are included in the slot. Working hours are Monday to Friday from 8:00 to 17:59. Unavailable slots are included in your company's working hours.
## Output
## A string using the format day hh:mm-hh:mm representing the chosen meeting schedule. It should be:
### - during working hours
### - exactly 60 minutes long
### - The start and end minutes are included in the schedule so a meeting from
08:00 to 8:59 or from 9:20 to 10:19 is exactly 60 minutes
### - do not intersect with any unavailable slot of any colleague
It is guaranteed that there is at least one solution. If there are more than one, you can give any valid schedule.
  
## Example
## For input:
5
1 08:45-12:59
3 11:09-11:28
5 09:26-09:56
5 16:15-16:34
3 08:40-10:12

One possible solution is:
### 1 13:00-13:59
Indeed, on the first day there is only one unavailable slot from 08:45 to 12:59. For example, by starting the meeting at 13:00 and finishing it at 13:59, it will have no intersection with unavailable slots. There are also many other solutions, for example, any 60-minute interval during day 2 workinghours.
