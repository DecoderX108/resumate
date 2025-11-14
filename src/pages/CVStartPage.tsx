import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Sparkles, ArrowRight, Check } from 'lucide-react';
import { CV_TEMPLATES, type TemplateStyle } from '@/utils/cvTemplates';
import { Badge } from '@/components/ui/badge';

type BuildMode = 'scratch' | 'improve' | null;

export default function CVStartPage() {
  const navigate = useNavigate();
  const [buildMode, setBuildMode] = useState<BuildMode>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateStyle>('ats-friendly');

  const handleContinue = () => {
    // Store the selected template and mode in sessionStorage
    sessionStorage.setItem('buildMode', buildMode || 'scratch');
    sessionStorage.setItem('selectedTemplate', selectedTemplate);
    navigate('/builder');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Step 1: Choose Build Mode */}
        {!buildMode && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                How would you like to create your CV?
              </h1>
              <p className="text-xl text-muted-foreground">
                Choose your preferred approach to building an outstanding CV
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Build from Scratch */}
              <Card 
                className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary"
                onClick={() => setBuildMode('scratch')}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Build from Scratch</CardTitle>
                  <CardDescription className="text-base pt-2">
                    Create a new CV step by step with our intuitive builder and AI assistance
                  </CardDescription>
                </CardHeader>
              </Card>

              {/* Improve Existing CV */}
              <Card 
                className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-primary"
                onClick={() => setBuildMode('improve')}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">Improve Existing CV</CardTitle>
                  <CardDescription className="text-base pt-2">
                    Upload your current CV and get AI-powered analysis and improvement suggestions
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {/* Step 2: Choose Template */}
        {buildMode && (
          <div className="animate-fade-in-up">
            <div className="text-center mb-8">
              <Button 
                variant="ghost" 
                onClick={() => setBuildMode(null)}
                className="mb-4"
              >
                ← Back
              </Button>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Choose Your CV Template
              </h2>
              <p className="text-lg text-muted-foreground">
                Select a professional template that matches your industry and style
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {Object.values(CV_TEMPLATES).map((template) => (
                <Card
                  key={template.id}
                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    selectedTemplate === template.id
                      ? 'ring-2 ring-primary shadow-xl scale-105'
                      : 'hover:scale-102'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg">{template.name}</CardTitle>
                      {selectedTemplate === template.id && (
                        <div className="bg-primary rounded-full p-1">
                          <Check className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <CardDescription className="text-sm">
                      {template.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">ATS Score:</span>
                      <Badge variant={template.atsScore >= 95 ? 'default' : 'secondary'}>
                        {template.atsScore}%
                      </Badge>
                    </div>
                    {template.isPremium && (
                      <Badge variant="outline" className="text-xs">
                        Premium
                      </Badge>
                    )}
                    
                    {/* Template Preview Colors */}
                    <div className="pt-2 flex gap-2">
                      <div 
                        className="w-6 h-6 rounded border"
                        style={{ backgroundColor: template.colors.primary }}
                        title="Primary Color"
                      />
                      <div 
                        className="w-6 h-6 rounded border"
                        style={{ backgroundColor: template.colors.secondary }}
                        title="Secondary Color"
                      />
                      <div className="flex-1 text-xs text-muted-foreground flex items-center">
                        {template.fonts.body.split(',')[0]}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Selected Template Info */}
            <div className="max-w-2xl mx-auto mb-8">
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-xl">Selected: {CV_TEMPLATES[selectedTemplate].name}</CardTitle>
                  <CardDescription>
                    {CV_TEMPLATES[selectedTemplate].description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">ATS Compatibility:</span>
                    <span className="font-semibold">{CV_TEMPLATES[selectedTemplate].atsScore}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Mode:</span>
                    <span className="font-semibold">
                      {buildMode === 'scratch' ? 'Build from Scratch' : 'Improve Existing CV'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Continue Button */}
            <div className="text-center">
              <Button 
                size="lg" 
                onClick={handleContinue}
                className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300 group"
              >
                Continue to CV Builder
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
