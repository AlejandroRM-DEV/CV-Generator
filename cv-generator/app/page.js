'use client';
import React, { useEffect } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Form, Input, DatePicker, Button, Collapse, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Original from '@/components/documents/Original';
import useStore from '@/storage/store';
import daysjs from 'dayjs';

export default function Home() {
  const [form] = Form.useForm();
  const { cv, updateData } = useStore();

  const handleOnValuesChange = (_, allValues) => {
    console.log(JSON.parse(JSON.stringify(allValues)));
    const values = {
      ...allValues,
      experience: allValues.experience?.map((exp) => ({
        ...exp,
        startDate: exp?.startDate.format('MMM YYYY').toUpperCase(),
        endDate: exp?.endDate.format('MMM YYYY').toUpperCase(),
      })),
      education: allValues.education?.map((edu) => ({
        ...edu,
        startDate: edu?.startDate.format('MMM YYYY').toUpperCase(),
        endDate: edu?.endDate.format('MMM YYYY').toUpperCase(),
      })),
      continuosEducation: allValues.continuosEducation?.map((edu) => ({
        ...edu,
        startDate: edu?.startDate.format('MMM YYYY').toUpperCase(),
        endDate: edu?.endDate.format('MMM YYYY').toUpperCase(),
      })),
    };
    updateData(JSON.parse(JSON.stringify(values)));
  };

  useEffect(() => {
    form.setFieldsValue({
      ...cv,
      experience: cv.experience.map((exp) => ({
        ...exp,
        startDate: daysjs(exp?.startDate),
        endDate: daysjs(exp?.endDate),
      })),
      education: cv.education.map((edu) => ({
        ...edu,
        startDate: daysjs(edu?.startDate),
        endDate: daysjs(edu?.endDate),
      })),
      continuosEducation: cv.continuosEducation.map((edu) => ({
        ...edu,
        startDate: daysjs(edu?.startDate),
        endDate: daysjs(edu?.endDate),
      })),
    });
  }, [cv]);

  return (
    <div className="flex h-dvh">
      <aside className="basis-1/3 overflow-auto">
        <h1 className="text-2xl font-bold m-4 text-center">Generador de CV</h1>
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
                              <Input />
                            </Form.Item>
                            <Form.Item {...restField} name={[name, 'company']} label="Empresa">
                              <Input />
                            </Form.Item>
                            <Form.Item {...restField} name={[name, 'location']} label="Ubicación">
                              <Input />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'startDate']}
                              label="Fecha de inicio"
                            >
                              <DatePicker picker="month" />
                            </Form.Item>
                            <Form.Item {...restField} name={[name, 'endDate']} label="Fecha de fin">
                              <DatePicker picker="month" />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'description']}
                              label="Descripción"
                            >
                              <Input.TextArea autoSize />
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
                              <Input />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'institution']}
                              label="Institución"
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'startDate']}
                              label="Fecha de inicio"
                            >
                              <DatePicker picker="month" />
                            </Form.Item>
                            <Form.Item {...restField} name={[name, 'endDate']} label="Fecha de fin">
                              <DatePicker picker="month" />
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
                              <Input />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'institution']}
                              label="Institución"
                            >
                              <Input />
                            </Form.Item>
                            <Form.Item
                              {...restField}
                              name={[name, 'startDate']}
                              label="Fecha de inicio"
                            >
                              <DatePicker picker="month" />
                            </Form.Item>
                            <Form.Item {...restField} name={[name, 'endDate']} label="Fecha de fin">
                              <DatePicker picker="month" />
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
