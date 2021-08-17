import React, { useState } from 'react';
import ScheduleHeader from './ScheduleHeader';
import ScheduleContent from './ScheduleContent';

const ScheduleComponent = ({ htmlName, form }) => {
  const [SelectedDate, SetDate] = useState(new Date());
  const [DateType, SetDateType] = useState(false);
  return (
    <div>
      <ScheduleHeader
        DateType={DateType}
        SetDateType={SetDateType}
        SelectedDate={SelectedDate}
        SetDate={SetDate}
        form={form}
        htmlName={htmlName}
      />
      <ScheduleContent
        htmlName={htmlName}
        DateType={DateType}
        SelectedDate={SelectedDate}
        form={form}
      />
    </div>
  );
};

export default ScheduleComponent;
