import React from 'react';
import { Form, Row, Col, Button, Input, DatePicker } from 'antd';
import { MinusOutlined } from '@ant-design/icons';

const ScheduleContent = ({
  scheduleName,
  form,
  GenerateDate,
  SelectedDate,
  DateType
}) => {
  return (
    <Form.List name={scheduleName}>
      {(fields, { remove }) => {
        return (
          fields &&
          fields.map((field, index) => {
            return (
              <Row>
                <Col flex="60px">
                  <Form.Item
                    name={[field.name, 'day']}
                    onChange={() => {
                      GenerateDate(form, SelectedDate, DateType);
                    }}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col flex="60px">
                  <Form.Item name={[field.name, 'task']}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col flex={1}>
                  <Form.Item name={[field.name, 'desc']}>
                    <Input />
                  </Form.Item>
                </Col>
                <Col flex="120px">
                  <Form.Item name={[field.name, 'start_date']}>
                    <DatePicker format="DD-MM-YYYY" />
                  </Form.Item>
                </Col>
                <Col>
                  <Button
                    type="danger"
                    onClick={() => {
                      remove(field.name);
                      GenerateDate(form, SelectedDate, DateType);
                    }}
                  >
                    <MinusOutlined />
                  </Button>
                </Col>
              </Row>
            );
          })
        );
      }}
    </Form.List>
  );
};

export default ScheduleContent;
