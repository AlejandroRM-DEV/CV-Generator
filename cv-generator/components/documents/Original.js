'use client';
import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

const chunkSubstr = (str, size) => {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
};

Font.register({
  family: 'Inter',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyeMZhrib2Bg-4.ttf',
      fontWeight: 100,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfMZhrib2Bg-4.ttf',
      fontWeight: 200,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZhrib2Bg-4.ttf',
      fontWeight: 300,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZhrib2Bg-4.ttf',
      fontWeight: 400,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZhrib2Bg-4.ttf',
      fontWeight: 500,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZhrib2Bg-4.ttf',
      fontWeight: 600,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZhrib2Bg-4.ttf',
      fontWeight: 700,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZhrib2Bg-4.ttf',
      fontWeight: 800,
    },
    {
      src: 'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZhrib2Bg-4.ttf',
      fontWeight: 900,
    },
  ],
});

Font.registerHyphenationCallback((word) => {
  if (word.length > 16) {
    return chunkSubstr(word, 14);
  } else {
    return [word];
  }
});

const styles = StyleSheet.create({
  page: {
    fontFamily: 'Inter',
    flexDirection: 'row',
    fontSize: '11px',
    fontWeight: '300',
    lineHeight: '1.2',
    color: '#0f172a',
    padding: '1cm',
  },
  aside: {
    padding: '0.5cm',
    flexBasis: '35%',
    backgroundColor: '#f8fafc',
  },
  main: {
    paddingHorizontal: '0.5cm',
    flexBasis: '65%',
  },
  sectionHeader: {
    fontSize: '14px',
    textTransform: 'uppercase',
    fontWeight: '900',
    marginTop: '11px',
    color: '#334155',
  },
  sectionTitle: {
    fontSize: '12px',
    fontWeight: '900',
    color: '#374151',
  },
  sectionTitleHighlight: {
    fontSize: '12px',
    fontWeight: '900',
    color: '#a855f7',
  },
  sectionSubTitle: {
    fontSize: '10px',
    fontWeight: '900',
    color: '#6b7280',
    marginBottom: '8px',
  },
  paragraph: {
    textAlign: 'justify',
    marginBottom: '8px',
  },
  name: {
    fontSize: '28px',
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#1e293b',
  },
});

const Original = ({ cv }) => {
  return (
    <PDFViewer className="h-full w-full">
      <Document>
        <Page size="letter" style={styles.page}>
          <View style={styles.aside}>
            <Text style={styles.name}>{cv?.name}</Text>
            <Text style={styles.sectionHeader}>CONTACTO</Text>
            <Text>{cv?.email}</Text>
            <Text>{cv?.phone}</Text>
            <Text>{cv?.location}</Text>
            <Text style={styles.sectionHeader}>HABILIDADES PROFESIONALES</Text>
            {cv?.professionalSkills.map((skill, index) => (
              <Text key={index}>- {skill}</Text>
            ))}
            <Text style={styles.sectionHeader}>HABILIDADES PERSONALES</Text>
            {cv?.personalSkills.map((skill, index) => (
              <Text key={index}>- {skill}</Text>
            ))}
            <Text style={styles.sectionHeader}>IDIOMAS</Text>
            {cv?.languages.map((language, index) => (
              <Text key={index}>
                {language.name} - {language.level}
              </Text>
            ))}
          </View>
          <View style={styles.main}>
            <Text style={styles.sectionHeader}>SOBRE MÍ</Text>
            <Text style={styles.paragraph}>{cv?.about}</Text>
            <Text style={styles.sectionHeader}>EXPERIENCIA</Text>
            {cv?.experience.map((job, index) => (
              <View key={index}>
                <Text style={styles.sectionTitle}>
                  <Text style={styles.sectionTitleHighlight}>{job?.jobTitle}</Text>
                  {' | '}
                  {job?.company}
                </Text>
                <Text style={styles.sectionSubTitle}>
                  {job?.startDate} - {job?.endDate} | {job?.location}
                </Text>
                <Text style={styles.paragraph}>{job?.description}</Text>
              </View>
            ))}
            <Text style={styles.sectionHeader}>EDUCACIÓN</Text>
            {cv?.education.map((degree, index) => (
              <View key={index}>
                <Text style={styles.sectionTitle}>
                  <Text style={styles.sectionTitleHighlight}>{degree?.degree}</Text>
                  {' | '}
                  {degree?.institution}
                </Text>
                <Text style={styles.sectionSubTitle}>
                  {degree?.startDate} - {degree?.endDate}
                </Text>
              </View>
            ))}
            <Text style={styles.sectionHeader}>EDUCACIÓN CONTINUA</Text>
            {cv?.continuosEducation.map((course, index) => (
              <View key={index}>
                <Text style={styles.sectionTitle}>
                  <Text style={styles.sectionTitleHighlight}>{course?.course}</Text>
                  {' | '}
                  {course?.institution}
                </Text>
                <Text style={styles.sectionSubTitle}>
                  {course?.startDate} - {course?.endDate}
                </Text>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default Original;
