import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Sparkles, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Build Your Perfect{' '}
            <span className="text-blue-600">Resume</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Create professional resumes with AI-powered suggestions, beautiful templates, 
            and instant PDF export. Stand out from the crowd with Resumate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/start">
              <Button size="lg" className="text-lg px-8 py-6 hover:shadow-lg transition group">
                Start Building <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition" />
              </Button>
            </Link>
            <Link to="/templates">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 hover:shadow-md transition">
                View Templates
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Resumate?
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features to help you create the perfect resume
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center border hover:shadow-lg transition">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              AI-Powered Suggestions
            </h3>
            <p className="text-gray-600">
              Get intelligent recommendations for content, formatting, and improvements 
              to make your resume stand out to employers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center border hover:shadow-lg transition">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Professional Templates
            </h3>
            <p className="text-gray-600">
              Choose from dozens of professionally designed templates. 
              Modern, classic, creative - find the perfect style for your industry.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center border hover:shadow-lg transition">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Download className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Multiple Export Formats
            </h3>
            <p className="text-gray-600">
              Download your resume as PDF, Word document, or print-ready format. 
              Perfect formatting guaranteed across all platforms.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-primary rounded-2xl p-12 text-center text-primary-foreground animate-fade-in-up hover:shadow-2xl transition-all duration-500 group">
          <h2 className="text-4xl font-bold mb-4 group-hover:scale-105 transition-transform duration-300">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-slide-in-left delay-200">
            Join thousands of professionals who have successfully created 
            outstanding resumes with Resumate.
          </p>
          <Link to="/start">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-110 hover:shadow-lg transition-all duration-300 animate-bounce-in delay-400 group">
              Get Started for Free <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

