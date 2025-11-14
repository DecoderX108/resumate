import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { FileText, Download, Loader2 } from 'lucide-react';
import { TemplateSelection } from './template-selection';
import { type TemplateStyle } from '@/utils/cvTemplates';

interface ExportDialogProps {
  selectedTemplate: TemplateStyle;
  onSelectTemplate: (template: TemplateStyle) => void;
  onExport: () => Promise<void>;
  isExporting?: boolean;
  buttonText?: string;
  buttonVariant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

export function ExportDialog({
  selectedTemplate,
  onSelectTemplate,
  onExport,
  isExporting = false,
  buttonText = 'Export Word',
  buttonVariant = 'outline',
  className = ''
}: ExportDialogProps) {
  const [open, setOpen] = useState(false);

  const handleExport = async () => {
    await onExport();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant={buttonVariant}
          disabled={isExporting}
          className={className}
        >
          {isExporting ? (
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
          ) : (
            <FileText className="h-4 w-4 mr-2" />
          )}
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Export CV to Word</DialogTitle>
          <DialogDescription>
            Choose your preferred CV template format before exporting
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <TemplateSelection
            selectedTemplate={selectedTemplate}
            onSelectTemplate={onSelectTemplate}
          />
          
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleExport} disabled={isExporting}>
              {isExporting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Exporting...
                </>
              ) : (
                <>
                  <Download className="h-4 w-4 mr-2" />
                  Export Now
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

