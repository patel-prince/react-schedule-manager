import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import ScheduleComponent from './ScheduleComponent';
import { Form } from 'antd';
import moment from 'moment';

export default function App() {
  const [form] = Form.useForm();

  return (
    <Form form={form} className="p-24">
      <ScheduleComponent scheduleName="schedule" form={form} />
    </Form>
  );
}
