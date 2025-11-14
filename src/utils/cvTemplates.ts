/**
 * Professional CV Templates
 * Based on industry-standard formats including ATS-friendly, Academic, Professional, etc.
 */

import type { CVState } from '@/context/CVContext';

export type TemplateStyle = 'ats-friendly' | 'professional' | 'academic' | 'modern' | 'executive' | 'creative';

export interface TemplateConfig {
  id: TemplateStyle;
  name: string;
  description: string;
  isPremium: boolean;
  atsScore: number;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    heading: string;
    border: string;
  };
  fonts: {
    heading: string;
    body: string;
    size: {
      name: string;
      heading: string;
      subheading: string;
      body: string;
      small: string;
    };
  };
  layout: {
    margin: string;
    spacing: string;
    lineHeight: string;
  };
}

export const CV_TEMPLATES: Record<TemplateStyle, TemplateConfig> = {
  'ats-friendly': {
    id: 'ats-friendly',
    name: 'ATS-Friendly Professional',
    description: 'Maximum ATS compatibility with clean, structured format',
    isPremium: false,
    atsScore: 98,
    colors: {
      primary: '#000000',
      secondary: '#333333',
      text: '#000000',
      heading: '#000000',
      border: '#cccccc'
    },
    fonts: {
      heading: 'Arial, sans-serif',
      body: 'Arial, sans-serif',
      size: {
        name: '24px',
        heading: '16px',
        subheading: '14px',
        body: '11px',
        small: '10px'
      }
    },
    layout: {
      margin: '0.75in',
      spacing: '12px',
      lineHeight: '1.5'
    }
  },
  'professional': {
    id: 'professional',
    name: 'Classic Professional',
    description: 'Traditional, corporate-style format',
    isPremium: false,
    atsScore: 95,
    colors: {
      primary: '#1a365d',
      secondary: '#2d3748',
      text: '#000000',
      heading: '#1a365d',
      border: '#cbd5e0'
    },
    fonts: {
      heading: 'Georgia, serif',
      body: 'Calibri, Arial, sans-serif',
      size: {
        name: '26px',
        heading: '18px',
        subheading: '14px',
        body: '11px',
        small: '10px'
      }
    },
    layout: {
      margin: '0.75in',
      spacing: '14px',
      lineHeight: '1.5'
    }
  },
  'academic': {
    id: 'academic',
    name: 'Academic CV',
    description: 'Comprehensive format for academic positions',
    isPremium: false,
    atsScore: 92,
    colors: {
      primary: '#2c5282',
      secondary: '#2d3748',
      text: '#000000',
      heading: '#2c5282',
      border: '#a0aec0'
    },
    fonts: {
      heading: 'Times New Roman, serif',
      body: 'Times New Roman, serif',
      size: {
        name: '20px',
        heading: '14px',
        subheading: '12px',
        body: '11px',
        small: '10px'
      }
    },
    layout: {
      margin: '1in',
      spacing: '10px',
      lineHeight: '1.4'
    }
  },
  'modern': {
    id: 'modern',
    name: 'Modern Professional',
    description: 'Contemporary design with visual appeal',
    isPremium: true,
    atsScore: 90,
    colors: {
      primary: '#2563eb',
      secondary: '#475569',
      text: '#1e293b',
      heading: '#2563eb',
      border: '#e2e8f0'
    },
    fonts: {
      heading: 'Helvetica, Arial, sans-serif',
      body: 'Helvetica, Arial, sans-serif',
      size: {
        name: '28px',
        heading: '18px',
        subheading: '14px',
        body: '11px',
        small: '10px'
      }
    },
    layout: {
      margin: '0.5in',
      spacing: '16px',
      lineHeight: '1.6'
    }
  },
  'executive': {
    id: 'executive',
    name: 'Executive Leadership',
    description: 'Premium format for C-suite and senior positions',
    isPremium: true,
    atsScore: 93,
    colors: {
      primary: '#0f172a',
      secondary: '#334155',
      text: '#1e293b',
      heading: '#0f172a',
      border: '#cbd5e0'
    },
    fonts: {
      heading: 'Garamond, Georgia, serif',
      body: 'Calibri, sans-serif',
      size: {
        name: '30px',
        heading: '20px',
        subheading: '15px',
        body: '11px',
        small: '10px'
      }
    },
    layout: {
      margin: '0.75in',
      spacing: '18px',
      lineHeight: '1.5'
    }
  },
  'creative': {
    id: 'creative',
    name: 'Creative Professional',
    description: 'Balanced creative design with ATS compatibility',
    isPremium: true,
    atsScore: 85,
    colors: {
      primary: '#7c3aed',
      secondary: '#64748b',
      text: '#1e293b',
      heading: '#7c3aed',
      border: '#e2e8f0'
    },
    fonts: {
      heading: 'Montserrat, Arial, sans-serif',
      body: 'Open Sans, Arial, sans-serif',
      size: {
        name: '28px',
        heading: '18px',
        subheading: '14px',
        body: '11px',
        small: '10px'
      }
    },
    layout: {
      margin: '0.5in',
      spacing: '16px',
      lineHeight: '1.6'
    }
  }
};

export function generateCVHTML(cvData: CVState, templateStyle: TemplateStyle = 'ats-friendly'): string {
  const template = CV_TEMPLATES[templateStyle];
  const { personalInfo, experience, education, skills, languages, awards } = cvData;

  const fullName = `${personalInfo.firstName} ${personalInfo.lastName}`.trim();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${fullName} - CV</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    @page {
      size: A4;
      margin: ${template.layout.margin};
    }
    
    @media print {
      body {
        margin: 0;
        padding: 0;
      }
    }
    
    body {
      font-family: ${template.fonts.body};
      font-size: ${template.fonts.size.body};
      line-height: ${template.layout.lineHeight};
      color: ${template.colors.text};
      background: white;
      padding: ${template.layout.margin};
      max-width: 8.5in;
      margin: 0 auto;
    }
    
    /* Header Section */
    .cv-header {
      text-align: center;
      margin-bottom: ${template.layout.spacing};
      padding-bottom: ${template.layout.spacing};
      border-bottom: 2px solid ${template.colors.border};
    }
    
    .cv-name {
      font-family: ${template.fonts.heading};
      font-size: ${template.fonts.size.name};
      font-weight: bold;
      color: ${template.colors.heading};
      margin-bottom: 8px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .cv-title {
      font-size: ${template.fonts.size.subheading};
      color: ${template.colors.secondary};
      margin-bottom: 10px;
      font-weight: 500;
    }
    
    .contact-info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      font-size: ${template.fonts.size.small};
      color: ${template.colors.text};
    }
    
    .contact-item {
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    
    /* Section Headers */
    .section {
      margin-bottom: ${template.layout.spacing};
    }
    
    .section-title {
      font-family: ${template.fonts.heading};
      font-size: ${template.fonts.size.heading};
      font-weight: bold;
      color: ${template.colors.heading};
      margin-bottom: 10px;
      padding-bottom: 5px;
      border-bottom: 1.5px solid ${template.colors.border};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    /* Professional Summary */
    .summary {
      text-align: justify;
      margin-bottom: 10px;
      color: ${template.colors.text};
    }
    
    /* Experience Items */
    .item {
      margin-bottom: 15px;
      page-break-inside: avoid;
    }
    
    .item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 5px;
    }
    
    .item-title {
      font-size: ${template.fonts.size.subheading};
      font-weight: bold;
      color: ${template.colors.heading};
    }
    
    .item-subtitle {
      font-size: ${template.fonts.size.body};
      color: ${template.colors.secondary};
      font-weight: 500;
    }
    
    .item-date {
      font-size: ${template.fonts.size.small};
      color: ${template.colors.secondary};
      text-align: right;
      white-space: nowrap;
    }
    
    .item-location {
      font-size: ${template.fonts.size.small};
      color: ${template.colors.secondary};
      font-style: italic;
    }
    
    .item-description {
      margin-top: 5px;
      margin-left: 0;
      white-space: pre-line;
      text-align: justify;
    }
    
    .item-description ul {
      margin-left: 20px;
      margin-top: 5px;
    }
    
    .item-description li {
      margin-bottom: 3px;
    }
    
    /* Skills Section */
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
    }
    
    .skill-category {
      margin-bottom: 8px;
    }
    
    .skill-category-title {
      font-weight: bold;
      font-size: ${template.fonts.size.body};
      color: ${template.colors.heading};
      margin-bottom: 4px;
    }
    
    .skill-items {
      font-size: ${template.fonts.size.small};
      color: ${template.colors.text};
      line-height: 1.4;
    }
    
    .skill-item {
      display: inline;
    }
    
    .skill-item:not(:last-child)::after {
      content: " • ";
      margin: 0 4px;
    }
    
    /* Languages */
    .languages-list {
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
    }
    
    .language-item {
      font-size: ${template.fonts.size.body};
    }
    
    .language-name {
      font-weight: bold;
      color: ${template.colors.heading};
    }
    
    .language-level {
      color: ${template.colors.secondary};
    }
    
    /* Education with GPA */
    .education-gpa {
      font-size: ${template.fonts.size.small};
      color: ${template.colors.secondary};
      margin-top: 2px;
    }
    
    /* Page breaks */
    .page-break {
      page-break-after: always;
    }
    
    /* Print optimizations */
    @media print {
      .section {
        page-break-inside: avoid;
      }
      
      .item {
        page-break-inside: avoid;
      }
    }
  </style>
</head>
<body>
  <!-- Header -->
  <div class="cv-header">
    <h1 class="cv-name">${fullName}</h1>
    ${personalInfo.title ? `<div class="cv-title">${personalInfo.title}</div>` : ''}
    <div class="contact-info">
      ${personalInfo.email ? `<span class="contact-item">✉ ${personalInfo.email}</span>` : ''}
      ${personalInfo.phone ? `<span class="contact-item">☎ ${personalInfo.phone}</span>` : ''}
      ${personalInfo.location ? `<span class="contact-item">📍 ${personalInfo.location}</span>` : ''}
      ${personalInfo.website ? `<span class="contact-item">🌐 ${personalInfo.website}</span>` : ''}
    </div>
  </div>

  ${personalInfo.summary ? `
  <!-- Professional Summary -->
  <div class="section">
    <h2 class="section-title">Professional Summary</h2>
    <p class="summary">${personalInfo.summary}</p>
  </div>
  ` : ''}

  ${experience.length > 0 ? `
  <!-- Work Experience -->
  <div class="section">
    <h2 class="section-title">Professional Experience</h2>
    ${experience.map(exp => `
      <div class="item">
        <div class="item-header">
          <div>
            <div class="item-title">${exp.position}</div>
            <div class="item-subtitle">${exp.company}</div>
            ${exp.location ? `<div class="item-location">${exp.location}</div>` : ''}
          </div>
          <div class="item-date">
            ${exp.startDate} - ${exp.current ? 'Present' : exp.endDate}
          </div>
        </div>
        ${exp.description ? `<div class="item-description">${exp.description}</div>` : ''}
      </div>
    `).join('')}
  </div>
  ` : ''}

  ${education.length > 0 ? `
  <!-- Education -->
  <div class="section">
    <h2 class="section-title">Education</h2>
    ${education.map(edu => `
      <div class="item">
        <div class="item-header">
          <div>
            <div class="item-title">${edu.degree}${edu.field ? ` in ${edu.field}` : ''}</div>
            <div class="item-subtitle">${edu.institution}</div>
            ${edu.gpa ? `<div class="education-gpa">GPA: ${edu.gpa}</div>` : ''}
          </div>
          <div class="item-date">
            ${edu.startDate} - ${edu.current ? 'Present' : edu.endDate}
          </div>
        </div>
        ${edu.description ? `<div class="item-description">${edu.description}</div>` : ''}
      </div>
    `).join('')}
  </div>
  ` : ''}

  ${skills.length > 0 ? `
  <!-- Skills -->
  <div class="section">
    <h2 class="section-title">Skills & Competencies</h2>
    <div class="skills-grid">
      ${['Technical', 'Soft Skills', 'Tools', 'Frameworks', 'Languages'].map(category => {
        const categorySkills = skills.filter(skill => skill.category === category);
        if (categorySkills.length === 0) return '';
        
        return `
          <div class="skill-category">
            <div class="skill-category-title">${category}</div>
            <div class="skill-items">
              ${categorySkills.map(skill => 
                `<span class="skill-item">${skill.name}${skill.level && skill.level !== 'Intermediate' ? ` (${skill.level})` : ''}</span>`
              ).join('')}
            </div>
          </div>
        `;
      }).filter(Boolean).join('')}
    </div>
  </div>
  ` : ''}

  ${languages.length > 0 ? `
  <!-- Languages -->
  <div class="section">
    <h2 class="section-title">Languages</h2>
    <div class="languages-list">
      ${languages.map(lang => `
        <div class="language-item">
          <span class="language-name">${lang.name}</span>: 
          <span class="language-level">${lang.proficiency}</span>
        </div>
      `).join('')}
    </div>
  </div>
  ` : ''}

  ${awards.length > 0 ? `
  <!-- Awards & Achievements -->
  <div class="section">
    <h2 class="section-title">Awards & Achievements</h2>
    ${awards.map(award => `
      <div class="item">
        <div class="item-header">
          <div>
            <div class="item-title">${award.title}</div>
            <div class="item-subtitle">${award.issuer}</div>
          </div>
          <div class="item-date">${award.date}</div>
        </div>
        ${award.description ? `<div class="item-description">${award.description}</div>` : ''}
      </div>
    `).join('')}
  </div>
  ` : ''}
</body>
</html>
  `;
}

export default {
  CV_TEMPLATES,
  generateCVHTML
};
