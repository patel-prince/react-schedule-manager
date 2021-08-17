import React from 'react';
import { Button, Switch, DatePicker, Divider } from 'antd';
import moment from 'moment';

const ScheduleHeader = ({
  form,
  htmlName,
  SelectedDate,
  SetDate,
  SetDateType,
  DateType
}) => {
  const AddNode = () => {
    let Data = form.getFieldValue(htmlName);
    let NewNode = {};
    NewNode.day = 1;
    NewNode.task = GetNextTaskID(Data);
    NewNode.desc = `This is the dummy text for task ${NewNode.task}`;
    Data.push(NewNode);
    form.setFieldsValue({
      [htmlName]: Data
    });
  };

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
      <Button className="mr-24" onClick={AddNode}>
        Add
      </Button>
      <Button className="mr-24">View</Button>
      <span className="mr-24">{DateType ? 'Deadline' : 'Start Date'}</span>
      <Switch
        className="mr-24"
        defaultChecked={DateType}
        onChange={value => SetDateType(value)}
      />
      <DatePicker
        defaultValue={moment(SelectedDate)}
        onChange={value => SetDate(value)}
      />
      <Divider />
    </div>
  );
};

export default ScheduleHeader;
