import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import ScheduleComponent from './ScheduleComponent';
import { Form } from 'antd';
import moment from 'moment';

export default function App() {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      schedule: [
        {
          day: 1,
          task: 1,
          desc: 'Dummy Text',
          start_date: moment(new Date()) // moment('2021-08-12')
        }
      ]
    });
  }, []);

  return (
    <Form form={form} className="p-24">
      <ScheduleComponent scheduleName="schedule" form={form} />
    </Form>
  );
}
