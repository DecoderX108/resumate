import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function Header() {
  const { user, signOut } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur shadow-sm">
      <div className="container mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex header-height items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group hover:opacity-90 transition ml-4 sm:ml-6">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 shadow group-hover:shadow-md transition">
              <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Resumate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition px-3 py-2 rounded hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              to="/templates"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition px-3 py-2 rounded hover:bg-gray-50"
            >
              Templates
            </Link>
            <Link
              to="/builder"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition px-3 py-2 rounded hover:bg-gray-50"
            >
              CV Builder
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition px-3 py-2 rounded hover:bg-gray-50"
            >
              About Us
            </Link>
            <Link
              to="/privacy"
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition px-3 py-2 rounded hover:bg-gray-50"
            >
              Privacy Policy
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4 mr-6">
            {user ? (
              // Authenticated user actions
              <>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <UserIcon className="h-4 w-4" />
                    <span>{user.displayName || user.email}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    onClick={handleSignOut}
                    className="h-8 px-3 text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition"
                  >
                    <LogOut className="h-3 w-3 mr-1" />
                    Sign Out
                  </Button>
                </div>
                <Link to="/builder">
                  <Button className="h-8 px-4 text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-md transition">
                    Create CV
                  </Button>
                </Link>
              </>
            ) : (
              // Guest user actions
              <>
                <Link to="/login">
                  <Button variant="ghost" className="h-8 px-4 text-xs font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" className="h-8 px-4 text-xs font-medium border-blue-200 hover:bg-blue-50 transition">
                    Sign Up
                  </Button>
                </Link>
                <Link to="/builder">
                  <Button className="h-8 px-4 text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-md transition">
                    Create CV
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3 mr-4">
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="px-4 py-3 space-y-1">
              <Link
                to="/"
                className="block p-5xl py-3 text-sm font-medium text-muted-foreground hover:text-gradient hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-lg m-3xl transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/templates"
                className="block p-5xl py-3 text-sm font-medium text-muted-foreground hover:text-gradient hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-lg m-3xl transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Templates
              </Link>
              <Link
                to="/builder"
                className="block p-5xl py-3 text-sm font-medium text-muted-foreground hover:text-gradient hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 rounded-lg m-3xl transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CV Builder
              </Link>
              
              <div className="px-4 pt-4 border-t space-y-3 mt-3">
                {user ? (
                  // Authenticated user mobile actions
                  <>
                    <div className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg">
                      <UserIcon className="h-4 w-4 text-gray-600" />
                      <span className="text-sm text-gray-600">{user.displayName || user.email}</span>
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        handleSignOut();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full h-9 text-sm font-medium text-muted-foreground hover:text-gradient hover:bg-muted/50 transition-all duration-300"
                    >
                      <LogOut className="h-3 w-3 mr-2" />
                      Sign Out
                    </Button>
                    
                    <Link to="/builder" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full h-9 text-sm font-medium gradient-primary hover:shadow-glow transition-all duration-300">
                        Create CV
                      </Button>
                    </Link>
                  </>
                ) : (
                  // Guest user mobile actions
                  <>
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full h-9 text-sm font-medium text-muted-foreground hover:text-gradient hover:bg-muted/50 transition-all duration-300">
                        Login
                      </Button>
                    </Link>
                    
                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full h-9 text-sm font-medium gradient-card hover:gradient-primary hover:text-white border-purple-200 hover:border-transparent transition-all duration-300">
                        Sign Up
                      </Button>
                    </Link>
                    
                    <Link to="/builder" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full h-9 text-sm font-medium gradient-primary hover:shadow-glow transition-all duration-300">
                        Create CV
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

