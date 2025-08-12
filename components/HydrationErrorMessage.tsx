import { HYDRATION_ERROR_MODES, RENDERING_TYPES } from '@/constants';
import { cn } from '@/lib/utils';

interface HydrationErrorMessageProps {
  type: string;
  errorMode: string;
}

export const HydrationErrorMessage = ({
  type,
  errorMode,
}: HydrationErrorMessageProps) => {
  const isDefaultOrSuspense =
    type === RENDERING_TYPES.default || type === RENDERING_TYPES.suspense;
  const isDev = process.env.NODE_ENV === 'development';

  if (isDefaultOrSuspense) {
    return (
      <span className="w-full text-center inline-block px-4 py-2 rounded-lg shadow-sm text-sm font-medium bg-destructive/10 text-destructive">
        ⚠️ Open the console{' '}
        {isDev && 'or look at the error indicator on bottom-left'} to see
        hydration errors
      </span>
    );
  }

  return (
    <span
      className={cn(
        'w-full flex items-center justify-center px-4 py-2 rounded-lg shadow-sm text-sm font-medium bg-green-100 text-green-800',
        errorMode === HYDRATION_ERROR_MODES.invalidDomNesting &&
          'w-full text-center inline-block px-4 py-2 rounded-lg shadow-sm text-sm font-medium bg-destructive/10 text-destructive'
      )}
    >
      {errorMode === HYDRATION_ERROR_MODES.invalidDomNesting
        ? 'This would work if the issue was in our rendering logic, but incorrect DOM nesting overrides it.'
        : '✅ No hydration errors expected'}
    </span>
  );
};
