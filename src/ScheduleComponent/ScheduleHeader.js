import React from 'react';
import { Button, Switch, DatePicker, Divider } from 'antd';
import moment from 'moment';

const ScheduleHeader = ({
  SelectedDate,
  SetDate,
  SetDateType,
  DateType,
  AddNode
}) => {
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
