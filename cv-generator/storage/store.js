import { create } from 'zustand';
import { produce } from 'immer';

const useStore = create((set) => ({
  cv: {
    name: 'Fernando Ramírez Muñoz',
    email: 'licenciadofer@gmail.com',
    phone: '33-1436-5921',
    location: 'Tlaquepaque, Jalisco, México',
    about:
      'Soy una persona íntegra, honesta, respetuosa, responsable, comprometida, puntual y leal. Finalicé exitosamente la Licenciatura en Derecho en la Universidad de Guadalajara, específicamente en el Centro Universitario del Norte, situado en Colotlán, Jalisco. Además, he obtenido un destacado desempeño en el Examen General de la Licenciatura en Derecho (EGEL-DERECHO-CENEVAL), que evalúa casos prácticos y garantiza mi capacidad para ejercer de manera competente en esta profesión',
    languages: [
      {
        name: 'Español',
        level: 'Nativo',
      },
      {
        name: 'Inglés',
        level: 'Intermedio',
      },
    ],
    professionalSkills: [
      'Organización y planificación',
      'Resolución de problemas',
      'Comunicación efectiva',
    ],
    personalSkills: [
      'Adaptabilidad',
      'Confidencialidad',
      'Honestidad',
      'Responsabilidad',
      'Puntualidad',
      'Pulcritud',
      'Iniciativa propia',
    ],
    experience: [
      {
        jobTitle: 'Técnico Jurisdiccional "Auxiliar de Archivo"',
        company:
          'Segunda Ponencia de la Tercera Sala del Tribunal Federal de Justicia Administrativa',
        location: 'Guadalajara, Jalisco',
        startDate: 'ENE 2024',
        endDate: 'FEB 2024',
        description: `1. Integrar acuerdos a los expedientes, esto es, perforar, coser y foliar.
2. Recibir de Oficialía de Partes promociones de demandas nuevas de nulidad para a su vez crear una carpertilla y anexar dicha demanda conforme al punto número uno descrito anteriormente, capturando previamente la información que ahí contiene.
3. Registrar en cuadernos y en línea los expedientes con promociones nuevas que se enviaban a los secretarios de acuerdos. 
4. Recibir cada día de Actuaría de Sala los expedientes que había que integrar y archivarlos ya sea en trámite o en concluido. 
5. Recibir oficios y ordenarlos según el año del número de expediente en carpetas.
6. Prestar expedientes a Actuaría Común previo registro en la libreta correspondiente para tener un registro y un control.
7. Sacar términos legales para la continuidad del juicio contencioso administrativo.
8. Crear carpertillas nuevas de Recursos de Revisión que interponían ya sea la parte actora o parte demandada ante los Tribunales Colegiados de Circuito para tener un registro interno.
`,
      },
      {
        jobTitle: 'Asesor legal',
        company: 'Independiente ',
        location: 'Jalisco y Zacatecas',
        startDate: 'SEP 2013',
        endDate: 'DIC 2023',
        description: `1. Brindar asesoramiento jurídico en materia laboral respecto de un finiquito al momento de dar por terminada la relación de trabajo ya sea de manera voluntaria o por despido injustificado.
2. Orientación legal sobre los derechos y obligaciones de distintos contratos cómo compraventa, donación y arrendamiento.
3. Asesoramiento jurídico en materia de pensión alimenticia y que conceptos abarca.
4. Asesoría jurídica de los aspectos patrimoniales del matrimonio.
5. Asesoramiento legal a otros profesionistas para el legal desempeño de su trabajo.
6. Asesoramiento legal respecto del proceso de un juicio sucesorio intestamentario.`,
      },
      {
        jobTitle: 'Asesor colaborador ',
        company: 'Protección y consulta legal del Lic. Víctor Torres Bañuelos',
        location: 'Jerez, Zacatecas',
        startDate: 'FEB 2013',
        endDate: 'AGO 2013',
        description: `1. Realizar trabajos de investigación y seguimiento de juicios en materia civil, familiar, penal y laboral que me fueron encomendados.
2. Preparar legalmente a clientes del despacho para desahogo de prueba confesional en juicios familiares.`,
      },
    ],
    education: [
      {
        degree: 'Licenciatura en Derecho',
        institution: 'Universidad de Guadalajara',
        startDate: 'AGO 2008',
        endDate: 'DIC 2012',
      },
    ],
    continuosEducation: [
      {
        course: 'Diplomado La Suprema Corte y los Derechos Humanos 2022',
        institution: 'Suprema Corte de Justicia de la Nación',
        startDate: 'DIC 2022',
        endDate: 'DIC 2022',
      },
      {
        course: 'Diplomado Seminario Especializado el Nuevo Sistema de Justicia Laboral',
        institution: 'Suprema Corte de Justicia de la Nación',
        startDate: 'DIC 2022',
        endDate: 'DIC 2022',
      },
      {
        course: 'Diplomado Juicio de Amparo 2022',
        institution: 'Suprema Corte de Justicia de la Nación',
        startDate: 'JUL 2022',
        endDate: 'JUL 2022',
      },
      {
        course: 'Diplomado Seminario el Nuevo Sistema de Justicia Laboral',
        institution: 'Suprema Corte de Justicia de la Nación',
        startDate: 'JUL 2022',
        endDate: 'JUL 2022',
      },
      {
        course: 'Congreso internacional a distancia 2020 Ciencias Penales y Transformación Social',
        institution: 'Instituto Nacional de Ciencias Penales',
        startDate: '06 OCT 2020',
        endDate: '08 OCT 2020',
      },
      {
        course: 'Taller: Elaboración de dictamen pericial',
        institution: 'Instituto Nacional de Ciencias Penales',
        startDate: 'SEP 2021',
        endDate: 'SEP 2021',
      },
      {
        course: 'Diplomado en Impuestos y su aplicación contable',
        institution: 'Universidad de Guadalajara - CUCEA',
        startDate: 'JUL 2015',
        endDate: 'JUL 2015',
      },
    ],
  },
  updateData: (data) =>
    set(
      produce((draft) => {
        Object.entries(data).forEach(([key, value]) => {
          draft.cv[key] = value;
        });
      })
    ),
}));

export default useStore;
