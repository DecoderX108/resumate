import { Link } from 'react-router-dom';
import { FileText, Github, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group hover:opacity-80 transition">
              <FileText className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Resumate</span>
            </Link>
            <p className="text-gray-600 mb-4">
              Create professional resumes with AI-powered suggestions and beautiful templates.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/templates" className="text-gray-600 hover:text-blue-600 transition">
                  Templates
                </Link>
              </li>
              <li>
                <Link to="/builder" className="text-gray-600 hover:text-blue-600 transition">
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition">
                  Export Options
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">
                  Help Center
                </Link>
              </li>
              <li>
                <a href="mailto:etherjoon@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-blue-600 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:etherjoon@gmail.com" className="text-gray-600 hover:text-blue-600 transition">
                  Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600 transition">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-12 pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Copyright © {new Date().getFullYear()} Resumate. All Rights Reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Free for personal & educational use. Commercial use requires a license. 
              <a 
                href="mailto:etherjoon@gmail.com" 
                className="ml-2 text-primary hover:underline"
              >
                Contact for Commercial License
              </a>
              {' • '}
              <a 
                href="https://github.com/DecoderX108/resumate" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

