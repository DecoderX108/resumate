import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { CV_TEMPLATES, type TemplateStyle } from '@/utils/cvTemplates';

interface TemplateSelectionProps {
  selectedTemplate: TemplateStyle;
  onSelectTemplate: (template: TemplateStyle) => void;
}

export function TemplateSelection({ selectedTemplate, onSelectTemplate }: TemplateSelectionProps) {
  const templates = Object.values(CV_TEMPLATES);

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Choose CV Template</h3>
        <p className="text-sm text-muted-foreground">
          Select a professional template for your CV export
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              selectedTemplate === template.id
                ? 'ring-2 ring-primary'
                : 'hover:border-primary/50'
            }`}
            onClick={() => onSelectTemplate(template.id)}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base">{template.name}</CardTitle>
                {selectedTemplate === template.id && (
                  <Check className="h-5 w-5 text-primary" />
                )}
              </div>
              <CardDescription className="text-xs">
                {template.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between text-xs">
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
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4 p-4 bg-muted/50 rounded-lg">
        <h4 className="font-semibold text-sm mb-2">Selected: {CV_TEMPLATES[selectedTemplate].name}</h4>
        <p className="text-xs text-muted-foreground">
          {CV_TEMPLATES[selectedTemplate].description}
        </p>
        <div className="mt-2 text-xs text-muted-foreground">
          <strong>ATS Compatibility:</strong> {CV_TEMPLATES[selectedTemplate].atsScore}%
        </div>
      </div>
    </div>
  );
}

