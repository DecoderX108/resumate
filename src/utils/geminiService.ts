// OpenRouter API setup
const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const DEFAULT_MODEL = 'meta-llama/llama-3.1-8b-instruct:free'; // free tier model

export interface GeminiRequest {
  prompt: string;
  temperature?: number;
  maxOutputTokens?: number;
}

export interface GeminiResponse {
  response: string;
  success: boolean;
}

export interface GeminiStatus {
  available: boolean;
  model?: string;
  message?: string;
}

class GeminiService {
  private apiKey: string | null = null;

  constructor() {
    this.apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    // just checking if key is loaded properly
    console.log('OpenRouter API Key loaded:', this.apiKey ? `Yes (${this.apiKey.substring(0, 10)}...)` : 'No');
    
    if (this.apiKey) {
      console.log('OpenRouter API initialized successfully');
    } else {
      console.error('VITE_GEMINI_API_KEY environment variable not found');
    }
  }

  // Check API status
  async checkStatus(): Promise<GeminiStatus> {
    if (!this.apiKey) {
      return {
        available: false,
        message: 'OpenRouter API key not configured. Please add VITE_GEMINI_API_KEY to your .env.local file.'
      };
    }

    return {
      available: true,
      model: DEFAULT_MODEL,
      message: 'OpenRouter API is configured'
    };
  }

  // Main text generation function
  async generateText(request: GeminiRequest): Promise<GeminiResponse> {
    console.log('OpenRouter generateText called with:', { hasApiKey: !!this.apiKey });
    
    if (!this.apiKey) {
      console.warn('OpenRouter API key not configured - AI features disabled');
      return {
        response: 'AI features are currently unavailable. Please configure your API key in .env.local or continue building your CV manually.',
        success: false
      };
    }

    try {
      console.log('Making OpenRouter API call with prompt length:', request.prompt.length);
      
      const response = await fetch(OPENROUTER_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Resumate CV Builder'
        },
        body: JSON.stringify({
          model: DEFAULT_MODEL,
          messages: [
            {
              role: 'user',
              content: request.prompt
            }
          ],
          temperature: request.temperature || 0.7,
          max_tokens: request.maxOutputTokens || 2048
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.warn('OpenRouter API error:', errorData);
        return {
          response: 'AI service temporarily unavailable. Please try again later or continue manually.',
          success: false
        };
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content || '';

      console.log('OpenRouter API call successful, response length:', text.length);
      return {
        response: text,
        success: true
      };
    } catch (error: any) {
      console.warn('OpenRouter generation error:', error);
      
      // Return friendly message instead of showing technical errors
      return {
        response: 'AI features are currently unavailable. You can continue building your CV manually - all core features work without AI assistance.',
        success: false
      };
    }
  }

  /**
   * Generate streaming response (for future use)
   */
  async *generateStream(request: GeminiRequest): AsyncGenerator<string, void, unknown> {
    if (!this.apiKey) {
      yield 'Error: OpenRouter API not initialized';
      return;
    }

    try {
      const response = await fetch(OPENROUTER_API_URL, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'Resumate CV Builder'
        },
        body: JSON.stringify({
          model: DEFAULT_MODEL,
          messages: [{ role: 'user', content: request.prompt }],
          temperature: request.temperature || 0.7,
          max_tokens: request.maxOutputTokens || 2048,
          stream: true
        })
      });

      const reader = response.body?.getReader();
      if (!reader) throw new Error('No response body');

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        yield chunk;
      }
    } catch (error: any) {
      yield `Error: ${error.message || 'Unknown error'}`;
    }
  }

  /**
   * Get available models (for future expansion)
   */
  getAvailableModels(): string[] {
    return [
      'google/gemini-pro',
      'google/gemini-flash-1.5',
      'google/gemini-pro-1.5',
      'openai/gpt-3.5-turbo',
      'openai/gpt-4'
    ];
  }

  /**
   * Check if API key is configured
   */
  isConfigured(): boolean {
    return !!this.apiKey;
  }
}

// Export singleton instance
export const geminiService = new GeminiService();

// Export convenience function for status checking
export const checkGeminiSetup = async (): Promise<GeminiStatus> => {
  return await geminiService.checkStatus();
};

// Note: This service now uses OpenRouter API
// Your API key should be in the format: sk-or-v1-...