import React from 'react';
import { Form, Row, Col, Button, Input } from 'antd';
import { MinusOutlined } from '@ant-design/icons';

const ScheduleContent = ({ htmlName, form }) => {
  return (
    <Form.List name={htmlName}>
      {(fields, { remove }) => {
        return (
          fields &&
          fields.map((field, index) => {
            console.log(form.getFieldValue(htmlName));
            return (
              <Row>
                <Col flex="60px">
                  <Form.Item name={[field.name, 'day']}>
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
                <Col>
                  <Button type="danger" onClick={() => remove(field.name)}>
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
