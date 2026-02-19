interface ActionResponse<T = null> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    details?: Record<string, string[]>;
  };
  status?: number;
}

interface PaginatedActionResponse<T> extends ActionResponse {
  data?: {
    items: T[];
    total: number;
    isNext: boolean;
  };
}

type SuccessResponse<T = null> = ActionResponse<T> & { success: true };
type ErrorResponse = ActionResponse<undefined> & { success: false };
type APIResponse<T = null> = NextResponse<SuccessResponse<T> | ErrorResponse>;
type APIErrorResponse = NextResponse<ErrorResponse>;

