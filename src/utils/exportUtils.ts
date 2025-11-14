
import type { CVState } from '@/context/CVContext';
import LaTeXService from './latexService';
import type { LaTeXFormattingRequest } from './latexService';
import { saveAs } from 'file-saver';
import { generateCVHTML, type TemplateStyle, CV_TEMPLATES } from './cvTemplates';

export interface ExportOptions {
  fileName?: string;
  format?: 'A4' | 'Letter';
  orientation?: 'portrait' | 'landscape';
  useLatex?: boolean;
  latexTemplate?: string;
  templateStyle?: TemplateStyle;
  customizations?: {
    colorScheme?: string;
    fontSize?: string;
    spacing?: string;
    layout?: string;
  };
}

// LaTeX-powered PDF export 
export const exportToPDF = async (cvData: CVState, options: ExportOptions = {}) => {
  try {
    const {
      fileName = `${cvData.personalInfo.firstName}_${cvData.personalInfo.lastName}_CV`,
      latexTemplate = 'modern',
      customizations
    } = options;

    // Convert CVState to CVData format for LaTeX service
    const cvDataForLatex = {
      personalInfo: {
        fullName: `${cvData.personalInfo.firstName} ${cvData.personalInfo.lastName}`,
        email: cvData.personalInfo.email,
        phone: cvData.personalInfo.phone,
        location: cvData.personalInfo.location,
        linkedIn: cvData.personalInfo.website,
        github: ''
      },
      professionalSummary: cvData.personalInfo.summary,
      workExperience: cvData.experience.map(exp => ({
        ...exp,
        isCurrentJob: exp.current,
        achievements: exp.description ? [exp.description] : []
      })),
      education: cvData.education.map(edu => ({
        ...edu,
        isCurrentStudy: edu.current,
        field: edu.field || edu.degree,
        location: ''
      })),
      skills: cvData.skills.map(skill => ({
        ...skill,
        category: skill.category === 'Soft Skills' ? 'Soft' as const : 
                 skill.category === 'Languages' ? 'Language' as const :
                 skill.category === 'Tools' || skill.category === 'Frameworks' ? 'Other' as const :
                 'Technical' as const
      })),
      projects: [],
      certifications: [],
      languages: cvData.languages.map(lang => ({
        id: lang.id,
        name: lang.name,
        proficiency: (['Beginner', 'Elementary'].includes(lang.proficiency) ? 'Basic' :
                     ['Upper Intermediate', 'Intermediate'].includes(lang.proficiency) ? 'Conversational' :
                     ['Advanced'].includes(lang.proficiency) ? 'Fluent' :
                     'Native') as 'Native' | 'Fluent' | 'Conversational' | 'Basic'
      })),
      customSections: []
    };

    const latexService = LaTeXService.getInstance();

    const latexRequest: LaTeXFormattingRequest = {
      cvData: cvDataForLatex,
      templateName: latexTemplate,
      customizations
    };

    console.log('Generating LaTeX with Gemini AI formatting...');
    const latexCode = await latexService.generateLaTeXWithGemini(latexRequest);

    console.log('Compiling LaTeX to PDF...');
    const pdfBlob = await latexService.compileToPDF(latexCode);

    saveAs(pdfBlob, `${fileName}.pdf`);
    
    return { success: true, latexCode };
  } catch (error) {
    console.error('LaTeX PDF export error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    throw new Error(`Failed to export LaTeX PDF: ${errorMessage}`);
  }
};

// Export to Word/HTML format with template support
export const exportToWord = async (cvData: CVState, options: ExportOptions = {}) => {
  try {
    const {
      fileName = `${cvData.personalInfo.firstName}_${cvData.personalInfo.lastName}_CV`,
      templateStyle = 'ats-friendly'
    } = options;

    // Generate HTML content using the selected template
    const htmlContent = generateCVHTML(cvData, templateStyle);
    
    // Create blob and download
    const blob = new Blob([htmlContent], { type: 'application/msword' });
    saveAs(blob, `${fileName}.doc`);
    
    return { success: true };
  } catch (error) {
    console.error('Word export error:', error);
    throw new Error('Failed to export to Word format');
  }
};

// Generate printable HTML preview
export const generatePrintableHTML = (cvData: CVState, templateStyle: TemplateStyle = 'ats-friendly'): string => {
  return generateCVHTML(cvData, templateStyle);
};

// Print CV using browser print
export const printCV = () => {
  window.print();
};

// Export all available template styles
export { type TemplateStyle, CV_TEMPLATES } from './cvTemplates';
