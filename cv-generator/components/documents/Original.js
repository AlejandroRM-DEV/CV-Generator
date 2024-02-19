'use client';
import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

const chunkSubstr = (str, size) => {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
};

Font.registerHyphenationCallback((word) => {
  if (word.length > 16) {
    return chunkSubstr(word, 14);
  } else {
    return [word];
  }
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontSize: '11px',
    fontWeight: '300',
    lineHeight: '1.2',
    color: '#475569',
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
  sectionTitle: {
    fontSize: '14px',
    textTransform: 'uppercase',
    fontWeight: '900',
    marginTop: '11px',
    color: '#020617',
  },
  paragraph: {
    textAlign: 'justify',
    marginBottom: '11px',
  },
  name: {
    fontSize: '28px',
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#020617',
  },
});

const Original = ({ cv }) => {
  return (
    <Document>
      <Page size="letter" style={styles.page}>
        <View style={styles.aside}>
          <Text style={styles.name}>{cv.name}</Text>
          <Text style={styles.sectionTitle}>CONTACTO</Text>
          <Text>{cv.email}</Text>
          <Text>{cv.phone}</Text>
          <Text>{cv.location}</Text>
          <Text style={styles.sectionTitle}>HABILIDADES PROFESIONALES</Text>
          {cv.professionalSkills.map((skill, index) => (
            <Text key={index}>{skill}</Text>
          ))}
          <Text style={styles.sectionTitle}>HABILIDADES PERSONALES</Text>
          {cv.personalSkills.map((skill, index) => (
            <Text key={index}>{skill}</Text>
          ))}
          <Text style={styles.sectionTitle}>IDIOMAS</Text>
          {cv.languages.map((language, index) => (
            <Text key={index}>
              {language.name} - {language.level}
            </Text>
          ))}
        </View>
        <View style={styles.main}>
          <Text style={styles.sectionTitle}>SOBRE MÍ</Text>
          <Text style={styles.paragraph}>{cv.about}</Text>
          <Text style={styles.sectionTitle}>EXPERIENCIA</Text>
          {cv.experience.map((job, index) => (
            <View key={index}>
              <Text>
                {job.jobTitle} | {job.company}
              </Text>
              <Text>
                {job.startDate} - {job.endDate} | {job.location}
              </Text>
              <Text style={styles.paragraph}>{job.description}</Text>
            </View>
          ))}
          <Text style={styles.sectionTitle}>EDUCACIÓN</Text>
          {cv.education.map((degree, index) => (
            <View key={index}>
              <Text>
                {degree.degree} | {degree.institution}
              </Text>
              <Text>
                {degree.startDate} - {degree.endDate}
              </Text>
            </View>
          ))}
          <Text style={styles.sectionTitle}>EDUCACIÓN CONTINUA</Text>
          {cv.continuosEducation.map((course, index) => (
            <View key={index} style={{ marginBottom: '11px' }}>
              <Text>
                {course.course} | {course.institution}
              </Text>
              <Text>
                {course.startDate} - {course.endDate}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default Original;
