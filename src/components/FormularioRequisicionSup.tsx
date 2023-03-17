import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
  Form,
  Col,
  DatePicker,
  Row,
  Select,
  Input,
} from 'antd';
import img from '../img/EscotelAsistencia.jpg'
import locale from 'antd/es/date-picker/locale/es_ES';
import dayjs from 'dayjs';
import { ConfigProvider } from 'antd';
import TextArea from 'antd/es/input/TextArea';

  


const Formulario = () => {


  return (
    <>
      <div className='formularioSupervisor'>
        <div className='formularioSupervisor__container'>

          <div className='formularioSupervisor__container__imagen'>
            <div style={{
              display: 'flex',
              flexDirection: 'row',

            }}>
              <img src={img} alt='escotel' className='img_escotel' />

            </div>

            <h2
              style={{

                textAlign: "center",
                fontSize: "25px",
                fontWeight: "bold",
                color: "black",
              }}

            >Escotel Especalistas en Contacto Telefonico SA de CV</h2>

            <div style={{ textAlign: "center" }}>
              <h3> Formato de Alta o Modificación de Personal</h3>
              <h3> Sistema de Gestión Calidad </h3>
              <h4> ISO 9001:2015</h4>
            </div>
            <div style={{ textAlign: "right" }}>
              <h3>Código:FOR_RHC_01
                Versión: 1.0

              </h3>
            </div>
          </div>
        </div>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form>
              <Row gutter={[16, 16]}>
                <Col span={8}>

                  <Form.Item
                    label='Fecha de requisición'
                  >
                    <ConfigProvider locale={locale}>
                      <DatePicker defaultValue={dayjs()} />
                    </ConfigProvider>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label='Fecha de recepción' >
                    <ConfigProvider locale={locale}>
                      <DatePicker defaultValue={dayjs()} />
                    </ConfigProvider>
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item
                    label='Número de requisición' >
                    <Input type='number' />
                  </Form.Item>
                </Col>

                <Col span={12}>
                  <Form.Item
                    label='Departamento que solicita' >
                    <Input type='text' />
                  </Form.Item>
                </Col>
                

                  <Col span={8} >
                    <Form.Item
                      label='Puesto requerido' >
                      <Select
                        placeholder='Selecciona un puesto'
                      >
                        <Select.Option value='1'>Puesto 1</Select.Option>
                        <Select.Option value='2'>Puesto 2</Select.Option>
                        <Select.Option value='3'>Puesto 3</Select.Option>
                        <Select.Option value='4'>Puesto 4</Select.Option>
                      </Select>

                    </Form.Item>
                  </Col>
                  <Col span={10} >
                    <Form.Item
                      label='Numero de personas requeridas' >
                      <Input type='number' />
                    </Form.Item>

                  </Col>
                  <Col span={6} >
                    <Form.Item
                      label='Sexo' >
                      <Select
                        placeholder='Selecciona un sexo'
                      >
                        <Select.Option value='1'>Masculino</Select.Option>
                        <Select.Option value='2'>Femenino</Select.Option>
                        <Select.Option value='3'>Indistinto</Select.Option>
                      
                      </Select>

                    </Form.Item>
                  </Col>
                  <Col span={8} >
                    <Form.Item
                      label='Escolaridad' >
                      <Select
                        placeholder='Selecciona una escolaridad'
                      >
                       
                        <Select.Option value='1'>Secundaria</Select.Option>
                        <Select.Option value='2'>Preparatoria</Select.Option>
                        <Select.Option value='3'>Licenciatura</Select.Option>
                        <Select.Option value='4'>Maestría</Select.Option>
                        <Select.Option value='5'>Doctorado</Select.Option>
                      </Select>

                    </Form.Item>
                  </Col>
                  <Col span={8} >
                    <Form.Item
                    label='Concluida' >
                    <Select
                      placeholder='Selecciona una opción'
                    >
                      <Select.Option value='1'>Si</Select.Option>
                      <Select.Option value='2'>No</Select.Option>
                    </Select>

                  </Form.Item>
                  </Col>
                  <Col span={8} >
                    <Form.Item
                      label='Experiencia' >
                      <Select
                        placeholder='Selecciona una opción'
                      >
                        <Select.Option value='1'>Si</Select.Option>
                        <Select.Option value='2'>No</Select.Option>
                      </Select>

                    </Form.Item>
                  </Col>
                  <Col span={8} >
                    <Form.Item
                      label='Estado civil' >
                      <Select
                        placeholder='Selecciona una opción' >
                        <Select.Option value='1'>Soltero</Select.Option>
                        <Select.Option value='2'>Casado</Select.Option>
                        <Select.Option value='3'>Divorciado</Select.Option>
                        <Select.Option value='4'>Viudo</Select.Option>
                      </Select>

                    </Form.Item>
                  </Col>
                  <Col span={12} >
                    <Form.Item
                      label='Perfil del puesto requerido' >
                        <Select
                        placeholder='Selecciona una opción'
                      >
                        <Select.Option value='1'>Conocimiento en seguros y siniestros</Select.Option>
                        <Select.Option value='2'>Tipos de licencia de conducir</Select.Option>
                        <Select.Option value='3'>Tipos de siniestros</Select.Option>
                        <Select.Option value='3'>Determinacion de responsabilidad</Select.Option>
                      </Select>

                    </Form.Item>
                  </Col>
                  <Col span={10} >
                    <Form.Item
                      label='Habilidades requeridas' >
                      <Select
                        placeholder='Selecciona una opción'
                      >
                        <Select.Option value='1'>Competencia Técnica o Especifica</Select.Option>
                        <Select.Option value='2'>Habilidad</Select.Option>
                        <Select.Option value='3'>Conocimientos </Select.Option>
                        </Select>

                    </Form.Item>
                  </Col>
                  <Col span={10} >
                    <Form.Item
                      label='Experiencia minima requerida' >
                      <Select 
                      placeholder='Selecciona una opción'
                      >
                        <Select.Option value='1'>1 año</Select.Option>
                        <Select.Option value='2'>2 años</Select.Option>
                        <Select.Option value='3'>3 años</Select.Option>
                        <Select.Option value='4'>Otra</Select.Option>
                      
                      </Select>
                    
                    </Form.Item>
                  </Col>
                 
                  <Col span={14} >  
                    <Form.Item
                      label='Otra experiencia' >
                      <Input type='text' style={{width:"100%"}} />
                    </Form.Item>
                  </Col>
                  <Col span={24} >
                    <h2 style={{textAlign:'center'}}>Justificación para la requisición</h2>
                  </Col>
                  <Col span={12} >
                    <Form.Item
                      label='Puesto Vacante' >
                        <h4>Para sustituir a:</h4>
                      <Input type="text" style={{width:"100%"}} />
                    </Form.Item>
                  </Col>
                  <Col span={12} >
                  <Form.Item
                    label='' >
                      <h4>Quien:</h4>
                      <Select  placeholder='Selecciona una opción'>
                        <Select.Option value='1'>Renuncio</Select.Option>
                        <Select.Option value='2'>Fue dado de baja</Select.Option>
                        <Select.Option value='3'>Fue promovido</Select.Option>
                      </Select>
                    
                      </Form.Item>
                  </Col>

                      <Col span={12}>
                      <Form.Item
                        label='Area y puesto requerido' >
                        <Input type="text" />
                      </Form.Item>

                      </Col>
                      <Col span={24}>
                      <h2 style={{textAlign:"center"}}> Tipo de contratación</h2>
                      
                      <h3>Tiempo determinado</h3>
                      </Col>
                      <Col span={8}>
                        <Form.Item
                          label='Fecha de inicio' >
                          <Input type="number" />
                          
                        </Form.Item>
                      </Col>

                        <Col span={4}>
                          <Form.Item
                            label='Dias' >
                           <Select  
                            placeholder='Selecciona una opción'>
                              <Select.Option value='1'>Dias</Select.Option>
                              <Select.Option value='2'>Meses</Select.Option>
                              <Select.Option value='3'>Años</Select.Option>
                              </Select>

                          </Form.Item>
                        </Col>
                        <Col span={10}>
                          <Form.Item
                            label='Tiempo determinado' >
                              <Select
                              placeholder='Selecciona una opción'>
                                <Select.Option value='1'>Si</Select.Option>
                                <Select.Option value='2'>No</Select.Option>
                              </Select>

                              </Form.Item>

                        </Col>
                        <h3>Personas(s) contradas(s) para el puesto vacante:</h3>
                        <Col span={16}>
                        
                          <Input type="text"  placeholder='Ingrese el nombre completo'/>

                            </Col>
                            <Col span={8}>
                              <Form.Item
                                label='Fecha contratación' >
                                <Input type="date" />
                              </Form.Item>
                            </Col>
                           
                            <Col span={24}>
                            <h3 style={{textAlign:"center"}}>Nombre y firma  de Gerencia de Recursos Humanos</h3>
                              <Form.Item
                                label='' >
                                  <TextArea rows={5}  />
                              </Form.Item>
                            </Col>
                            <Col span={24}>
                              <h3 style={{textAlign:"center"}}>Nombre y firma del Reclutador</h3>
                              <Form.Item
                                label='' >
                                    <TextArea rows={5} />
                              </Form.Item>
                            </Col>


                    
                


                
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
     <Row gutter={[16,16]} style={{
        border:"1px solid black",
        padding:"10px",
        margin:"10px",
        textAlign:"center"
        
        

     }} >
        <Col span={8}>
          <p>Fecha de Elaboración</p>
          </Col>
          <Col span={8}>
          <p>Documento Interno Uso Exclusivo de ESCOTEL Especialista  en Contacto Telefonico SA de CV </p>
          </Col>
          <Col span={8}>
          <p>Version 1.0</p>
          </Col>

     </Row>
    
    </>

  );

};




export default Formulario