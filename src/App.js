import React, { useEffect } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import ScheduleComponent from './ScheduleComponent';
import { Form } from 'antd';

export default function App() {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      schedule: [{ day: 1, task: 1, desc: 'Dummy Text' }]
    });
  }, []);

  return (
    <Form form={form} className="p-24">
      <ScheduleComponent htmlName="schedule" form={form} />
    </Form>
  );
}
