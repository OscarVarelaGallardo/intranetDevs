import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from 'antd';

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const RecursosHumanos = () => {

  return (
    <>
      <div className='formularioSupervisor'>
        <div className='formularioSupervisor__container'>
      //agregar imagen
          <div className='formularioSupervisor__container__imagen'>
            <img src='https://www.escotel.com.mx/wp-content/uploads/2020/03/escotel-logo.png' alt='escotel' />
            <div style={{ textAlign: "center" }}>
              <h1>Escotel Especalistas en Contacto Telefonico SA de CV</h1>
              <h2> Formato de Alta o Modificación de Personal</h2>
              <h2> Sistema de Gestión Calidad </h2>
              <h2> ISO 9001:2015</h2>
            </div>

          </div>
        </div>

      </div>

      <Form >
        <Form.Item label="Nombre del colaborador">
          <Input />
        </Form.Item>

        <Form.Item label="Numero de requisición">
          <Input />
        </Form.Item>
        <Form.Item label="Select">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
          <TreeSelect
            treeData={[
              { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
          />
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [
                  {
                    value: 'hangzhou',
                    label: 'Hangzhou',
                  },
                ],
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item label="RangePicker">
          <RangePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
          <InputNumber />
        </Form.Item>
        <Form.Item label="TextArea">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default RecursosHumanos