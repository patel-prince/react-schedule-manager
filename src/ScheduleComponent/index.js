import React, { useState, useCallback, useEffect } from 'react';
import ScheduleHeader from './ScheduleHeader';
import ScheduleContent from './ScheduleContent';
import moment from 'moment';

const ScheduleComponent = ({ scheduleName, form }) => {
  const [SelectedDate, SetDate] = useState(new Date());
  const [DateType, SetDateType] = useState(false);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const AddNode = () => {
    let Data = form.getFieldValue(scheduleName);
    let NewNode = {};
    NewNode.day = 1;
    NewNode.task = GetNextTaskID(Data);
    NewNode.desc = `This is the dummy text for task ${NewNode.task}`;
    Data.push(NewNode);
    form.setFieldsValue({
      [scheduleName]: Data
    });
    GenerateDate(form, SelectedDate, DateType);
  };

  const GenerateDate = useCallback(
    (form, date, type) => {
      let task_list = form.getFieldValue(scheduleName);
      let increase_rate = 0;
      let decrease_rate = 0;
      if (task_list && task_list.length > 0) {
        if (type) {
          for (var i = task_list.length - 1; i >= 0; i--) {
            if (task_list[i].day) {
              decrease_rate -= parseInt(task_list[i].day);
            }
            let temp_date = moment(date).add(decrease_rate + 1, 'days');
            if (temp_date.format('ddd') === 'Sun') {
              decrease_rate -= 2;
            }
            if (temp_date.format('ddd') === 'Sat') {
              decrease_rate -= 1;
            }
            task_list[i].start_date = moment(date).add(
              decrease_rate + 1,
              'days'
            );
          }
        } else {
          for (var i = 0; i < task_list.length; i++) {
            let temp_date = moment(date).add(increase_rate, 'days');
            if (temp_date.format('ddd') === 'Sun') {
              increase_rate += 1;
            }
            if (temp_date.format('ddd') === 'Sat') {
              increase_rate += 2;
            }
            task_list[i].start_date = moment(date).add(increase_rate, 'days');
            if (task_list[i].day) {
              increase_rate += parseInt(task_list[i].day);
            }
          }
        }
        form.getFieldsValue({
          [scheduleName]: task_list
        });
        forceUpdate();
      }
    },
    [form, scheduleName, forceUpdate]
  );

  useEffect(() => {
    GenerateDate(form, SelectedDate, DateType);
  }, [GenerateDate, form, SelectedDate, DateType]);

  const GetNextTaskID = Data => {
    if (Data && Data.length > 0) {
      let TempID = (Data[Data.length - 1].task + '').split('.');
      if (TempID.length === 1) {
        return [parseInt(TempID) + 0.1].join('.');
      } else {
        return [TempID[0], parseInt(TempID[1]) + 1].join('.');
      }
    } else {
      return 1;
    }
  };

  return (
    <div>
      <ScheduleHeader
        AddNode={AddNode}
        DateType={DateType}
        SetDateType={SetDateType}
        SelectedDate={SelectedDate}
        SetDate={SetDate}
      />
      <ScheduleContent
        scheduleName={scheduleName}
        DateType={DateType}
        SelectedDate={SelectedDate}
        form={form}
        GenerateDate={GenerateDate}
      />
    </div>
  );
};

export default ScheduleComponent;
