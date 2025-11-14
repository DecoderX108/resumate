# Resumate - Resume Builder

A modern CV/Resume builder built with React and TypeScript. Created as an academic project with AI-powered features.

## About This Project

This is a student project for learning purposes. Feel free to use it for your own resumes!

📧 Contact: etherjoon@gmail.com  
🔗 GitHub: https://github.com/DecoderX108/resumate

---

## Features

### Professional CV Templates

6 different professional templates to choose from:

- ATS-Friendly Professional - Works with most ATS systems
- Classic Professional - Traditional corporate style
- Academic CV - For research and academic positions
- Modern Professional - Contemporary design
- Executive Leadership - For senior positions
- Creative Professional - Design-focused

All templates support:

- Template selector with preview and ATS scores
- Export to Word (.doc) format with proper formatting
- Print-ready layouts optimized for A4/Letter
- Professional fonts and color schemes
- Based on real CV samples from professionals

📖 **[View Template System Documentation](./TEMPLATE_SYSTEM.md)**

### 🤖 **AI-Powered Content Generation**

- **OpenRouter API Integration**: Smart content suggestions powered by Meta Llama 3.1 8B
- **Position-Specific Content**: Generates role-tailored professional content
- **Industry-Aware**: Adapts language and focus for different industries
- **Experience-Level Appropriate**: Content for entry-level to executive roles
- **Optional Feature**: App works fully without AI configuration

### 📝 **Comprehensive CV Sections**

- Personal Information with contact details
- Professional Summary with AI assistance
- Work Experience with achievement-focused descriptions
- Education with relevant coursework
- Skills (Technical, Soft, Languages, Tools, Frameworks)
- Awards & Achievements
- Custom sections for specialized content

### 🎨 **Modern UI/UX**

- Dark/Light theme support
- Real-time preview
- Responsive design
- Form validation
- Smooth animations

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern component library
- **Lucide React** - Beautiful icon set

### AI Integration

- **OpenRouter API** - AI content generation service
- **Meta Llama 3.1 8B** - Language model for generating professional content
- **Axios** - HTTP client for API communication

### Export & PDF

- **jsPDF** - PDF generation from HTML
- **html2canvas** - HTML to canvas conversion
- **React-to-Print** - Print functionality

## 🔧 Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd resumate
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5174`

## 🤖 AI Integration Setup (OpenRouter)

Resumate uses OpenRouter API for AI-powered content generation with Meta Llama 3.1 8B model.

### Step 1: Get OpenRouter API Key

1. Visit [OpenRouter.ai](https://openrouter.ai)
2. Create an account or sign in
3. Navigate to API Keys section
4. Generate a new API key

### Step 2: Configure API Key

Create a `.env.local` file in the project root:

```bash
VITE_GEMINI_API_KEY=your_openrouter_api_key_here
```

### Step 3: Verify Setup

1. Restart the development server
2. Open Resumate in your browser
3. Try using any AI feature (e.g., Generate Summary)
4. If configured correctly, AI features will work seamlessly

### AI Model Information

- **Provider**: OpenRouter
- **Model**: meta-llama/llama-3.1-8b-instruct:free
- **Features**: Free tier available for testing and development

### Troubleshooting AI Setup

**API Key Not Working:**

- Verify the API key is correctly copied
- Check `.env.local` file is in the root directory
- Restart the development server after adding the key

**AI Features Not Available:**

- The app works without AI - you can still create CVs manually
- AI features are optional enhancements

## 📝 How to Use

1. **Choose Your Mode**:

   - Analyze existing CV
   - Build from scratch

2. **Select Template**:

   - Browse professional templates
   - Preview designs before selection

3. **Fill Information**:

   - Add personal details
   - Enter work experience
   - Include education background
   - List skills and achievements

4. **AI Assistance** (Optional):

   - Configure OpenRouter API key for AI features
   - Generate professional summaries and descriptions
   - Get role-specific content suggestions

5. **Preview & Edit**:

   - Real-time preview updates
   - Switch between light/dark themes
   - Responsive design preview

6. **Export**:
   - Download as PDF
   - Export to Word document
   - Print-ready formatting

## 🎯 AI Content Generation Details

The AI system creates professional, position-specific content through:

### Smart Prompting

- Role-aware prompt engineering
- Industry-specific language adaptation
- Experience-level appropriate content
- Achievement-focused descriptions

### Interactive Chat Flow

1. **Role Identification**: What position are you targeting?
2. **Experience Assessment**: Years of experience in the field
3. **Skills Analysis**: Key technical and soft skills
4. **Achievement Capture**: Major accomplishments
5. **Goal Alignment**: Target company/role preferences

### Content Types Generated

- **Professional Summaries**: 2-3 compelling sentences
- **Experience Bullets**: Achievement-focused job descriptions
- **Skills Lists**: Role-relevant technical and soft skills
- **Education Details**: Relevant coursework and projects
- **Achievements**: Quantified accomplishments

## 🔥 Key Features Explained

### Template System

Each template is designed for specific use cases:

- **Traditional roles**: Chicago Professional
- **Leadership positions**: Modern Executive
- **Creative fields**: Creative Portfolio Pro
- **Tech roles**: Tech Specialist
- **New graduates**: Fresh Graduate

### Export Capabilities

- **High-quality PDFs**: Vector-based, print-ready
- **Word Documents**: Editable .docx format
- **Consistent Formatting**: Maintains design integrity
- **Multiple Formats**: Choose based on application requirements

### AI Fallback System

- **Primary**: Ollama local LLM for best results
- **Fallback**: Template-based generation ensures functionality
- **Error Handling**: Graceful degradation when AI unavailable
- **Performance**: Fast response times with local processing

## 🚧 Development

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── OllamaStatusIndicator.tsx
├── context/            # React Context (CV state management)
├── pages/              # Main application pages
│   ├── HomePage.tsx
│   ├── TemplatesPage.tsx
│   └── CVBuilderPage.tsx
├── utils/              # Utility functions and services
│   ├── ollamaService.ts
│   ├── aiUtils.ts
│   └── exportUtils.ts
├── types/              # TypeScript type definitions
└── styles/             # Global styles and themes
```

### Key Files

- **`src/utils/ollamaService.ts`** - Ollama integration service
- **`src/utils/aiUtils.ts`** - AI content generation utilities
- **`src/pages/CVBuilderPage.tsx`** - Main CV builder interface
- **`src/components/OllamaStatusIndicator.tsx`** - AI status component
- **`src/context/CVContext.tsx`** - Global state management

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Environment Configuration

Create `.env.local` file for custom settings:

```env
VITE_OLLAMA_BASE_URL=http://localhost:11434
VITE_DEFAULT_MODEL=llama3.1
```

---

## 📄 License

**SOURCE-AVAILABLE - NON-COMMERCIAL LICENSE**

Copyright © 2025 Resumate. All Rights Reserved.

### ✅ Non-Commercial Use (FREE)

You may **freely use, study, and modify** this software for:

- ✅ Personal projects and resume creation
- ✅ Learning and educational purposes
- ✅ Research and academic work
- ✅ Portfolio and demo projects
- ✅ Open source contributions (non-commercial)

**Requirements:**

- Maintain copyright notices
- Provide attribution to Resumate
- Include link to repository
- Do not use commercially without license

### � Commercial Use (License Required)

Commercial use requires a valid commercial license from Resumate.

**Prohibited without license:**

- ✗ Selling the software or services based on it
- ✗ Using in commercial/business revenue operations
- ✗ Offering as SaaS or paid service
- ✗ White-labeling or rebranding for profit
- ✗ Client projects or freelance commercial work

### 📋 Get a Commercial License

**Pricing:**

- Freelancer: $99/year
- Business (up to 10 users): $499/year
- Enterprise: Custom pricing

**Contact:**

- **Email**: etherjoon@gmail.com
- **GitHub**: https://github.com/DecoderX108/resumate

For full license terms, see [LICENSE.md](./LICENSE.md)

---

## 📞 Contact & Support

**Commercial Licensing:**

- 📧 etherjoon@gmail.com
- 💼 GitHub: https://github.com/DecoderX108/resumate

**Technical Support:**

- 📧 etherjoon@gmail.com
- 🐛 GitHub Issues: https://github.com/DecoderX108/resumate/issues

**General Inquiries:**

- 📧 etherjoon@gmail.com
- 🌐 GitHub: https://github.com/DecoderX108/resumate

---

## 🤝 Contributing

We welcome contributions from non-commercial users!

**For non-commercial users:**

- 🐛 Report bugs via GitHub Issues
- 💡 Suggest features
- 📖 Improve documentation
- 🔧 Submit pull requests (for non-commercial improvements)

**For commercial improvements:**

- Contact etherjoon@gmail.com for contributor agreements

**Guidelines:**

1. Fork the repository
2. Create a feature branch
3. Make your changes with clear commits
4. Add tests if applicable
5. Submit a pull request with description

**Note:** By contributing, you agree that your contributions will be licensed under the same terms as this project.

---

## ⚖️ Legal Notice

**For Personal/Educational Users:**  
Enjoy the software freely! Just give credit and don't commercialize it.

**For Commercial Users:**  
Support development by purchasing a license. We offer fair pricing for individuals, startups, and enterprises.

**Everyone:**  
Built with ❤️ by the Resumate team. If you find it useful:

- ⭐ Star this repository
- 📢 Share with others
- 🐛 Report bugs
- 💰 Get a license if using commercially

---

**© 2025 Resumate. All Rights Reserved.**

**Free for non-commercial use | Commercial license required for business/revenue use**

## 📞 Support

If you encounter issues:

1. **Check Ollama Status**: Use the built-in status indicator
2. **Verify Setup**: Ensure Ollama service and models are installed
3. **Console Errors**: Check browser developer tools
4. **Documentation**: Refer to this README for troubleshooting

### Common Issues

**Template not loading**: Refresh browser cache
**AI generation fails**: Check Ollama service status
**Export issues**: Ensure popup blockers are disabled
**Responsive problems**: Clear browser cache and cookies

---

Built with ❤️ using React, TypeScript, and Ollama for local AI processing.
