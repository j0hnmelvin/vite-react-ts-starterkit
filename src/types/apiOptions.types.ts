export interface ApiOptions {
  url: string;
  method?: string; // Consider using a specific type for HTTP methods
  headers?: Record<string, string>;
  data?: any;
  params?: any;
  onSuccess?: (data: any) => void;
  onFailure?: (error: any) => void;
  onInitial?: () => void;
  onFinal?: () => void;
}
