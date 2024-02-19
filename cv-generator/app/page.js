'use client';
import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Form, Input, Space, Button, Collapse, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Original from '@/components/documents/Original';
import useStore from '@/storage/store';

export default function Home() {
  const [form] = Form.useForm();
  const { cv, updateData } = useStore();

  const handleOnValuesChange = (_, allValues) => {
    console.log(allValues);
    //updateData(allValues);
  };

  return (
    <div className="flex h-dvh">
      <aside className="basis-1/3 overflow-auto">
        <h1 className="text-2xl font-bold m-4 text-center">CV Generator</h1>
        <Form
          form={form}
          layout="horizontal"
          colon={false}
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={cv}
          onValuesChange={handleOnValuesChange}
        >
          <Collapse
            expandIconPosition="end"
            defaultActiveKey={['1']}
            items={[
              {
                key: '1',
                label: 'Datos personales',
                children: (
                  <>
                    <Form.Item label="Nombre" name="name">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Teléfono" name="phone">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Dirección" name="location">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Sobre mí" name="about">
                      <Input.TextArea autoSize />
                    </Form.Item>
                  </>
                ),
              },
              {
                key: '2',
                label: 'Habilidades',
                children: (
                  <>
                    <Form.Item name="professionalSkills" label="Profesionales">
                      <Select mode="tags" />
                    </Form.Item>
                    <Form.Item name="personalSkills" label="Personales">
                      <Select mode="tags" />
                    </Form.Item>
                  </>
                ),
              },

              {
                key: '3',
                label: 'Idiomas',
                children: (
                  <Form.List name="languages">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                          <div key={key} className="flex justify-between items-baseline w-full">
                            <Form.Item
                              {...restField}
                              name={[name, 'name']}
                              className="basis-5/12"
                              wrapperCol={24}
                            >
                              <Select
                                className="w-full"
                                options={[
                                  { label: 'Español', value: 'Español' },
                                  { label: 'Inglés', value: 'Inglés' },
                                ]}
                              />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'level']}
                              className="basis-5/12"
                              wrapperCol={24}
                            >
                              <Select
                                className="w-full"
                                options={[
                                  { label: 'Nativo', value: 'Nativo' },
                                  { label: 'Profesional básico', value: 'Profesional básico' },
                                  { label: 'Profesional', value: 'Profesional' },
                                  { label: 'Avanzado', value: 'Avanzado' },
                                  { label: 'Intermedio', value: 'Intermedio' },
                                  { label: 'Básico', value: 'Básico' },
                                ]}
                              />
                            </Form.Item>
                            <MinusCircleOutlined onClick={() => remove(name)} />
                          </div>
                        ))}
                        <Form.Item wrapperCol={24}>
                          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Agregar
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                ),
              },
              {
                key: '4',
                label: 'Experiencia',
                children: (
                  <Form.List name="experience">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                          <React.Fragment key={key}>
                            <Form.Item {...restField} name={[name, 'jobTitle']} label="Puesto">
                              <Input placeholder="Puesto" />
                            </Form.Item>
                            <Form.Item {...restField} name={[name, 'company']} label="Empresa">
                              <Input placeholder="Empresa" />
                            </Form.Item>
                            <Form.Item {...restField} name={[name, 'location']} label="Ubicación">
                              <Input placeholder="Ubicación" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'startDate']}
                              label="Fecha de inicio"
                            >
                              <Input placeholder="Fecha de inicio" />
                            </Form.Item>
                            <Form.Item {...restField} name={[name, 'endDate']} label="Fecha de fin">
                              <Input placeholder="Fecha de fin" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'description']}
                              label="Descripción"
                            >
                              <Input.TextArea placeholder="Descripción" />
                            </Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => remove(name)}
                              block
                              icon={<MinusCircleOutlined />}
                              className="mb-3"
                            >
                              Quitar
                            </Button>
                          </React.Fragment>
                        ))}
                        <Form.Item wrapperCol={24}>
                          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Agregar
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                ),
              },
              {
                key: '5',
                label: 'Educación',
                children: (
                  <Form.List name="education">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                          <React.Fragment key={key}>
                            <Form.Item {...restField} name={[name, 'degree']} label="Título">
                              <Input placeholder="Título" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'institution']}
                              label="Institución"
                            >
                              <Input placeholder="Institución" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'startDate']}
                              label="Fecha de inicio"
                            >
                              <Input placeholder="Fecha de inicio" />
                            </Form.Item>
                            <Form.Item {...restField} name={[name, 'endDate']} label="Fecha de fin">
                              <Input placeholder="Fecha de fin" />
                            </Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => remove(name)}
                              block
                              icon={<MinusCircleOutlined />}
                              className="mb-3"
                            >
                              Quitar
                            </Button>
                          </React.Fragment>
                        ))}
                        <Form.Item wrapperCol={24}>
                          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Agregar
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                ),
              },
              {
                key: '6',
                label: 'Educación continua',
                children: (
                  <Form.List name="continuosEducation">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, ...restField }) => (
                          <React.Fragment key={key}>
                            <Form.Item {...restField} name={[name, 'course']} label="Curso">
                              <Input placeholder="Curso" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'institution']}
                              label="Institución"
                            >
                              <Input placeholder="Institución" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'startDate']}
                              label="Fecha de inicio"
                            >
                              <Input placeholder="Fecha de inicio" />
                            </Form.Item>
                            <Form.Item {...restField} name={[name, 'endDate']} label="Fecha de fin">
                              <Input placeholder="Fecha de fin" />
                            </Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => remove(name)}
                              block
                              icon={<MinusCircleOutlined />}
                              className="mb-3"
                            >
                              Quitar
                            </Button>
                          </React.Fragment>
                        ))}
                        <Form.Item wrapperCol={24}>
                          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                            Agregar
                          </Button>
                        </Form.Item>
                      </>
                    )}
                  </Form.List>
                ),
              },
            ]}
          />
        </Form>
      </aside>
      <main className="basis-2/3 flex justify-center items-center">
        <PDFViewer className="h-full w-full">
          <Original cv={cv} />
        </PDFViewer>
      </main>
    </div>
  );
}
