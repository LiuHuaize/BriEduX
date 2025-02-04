import { useErrorStore } from '@/lib/stores/error';
import { cn } from '@/lib/utils';
import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';
import { useEffect } from 'react';

const icons = {
  error: XCircle,
  warning: AlertCircle,
  success: CheckCircle2,
  info: Info,
};

const colors = {
  error: 'bg-red-500',
  warning: 'bg-yellow-500',
  success: 'bg-green-500',
  info: 'bg-blue-500',
};

export const Toast = () => {
  const { error, clearError } = useErrorStore();
  const { message, type } = error;

  useEffect(() => {
    if (message) {
      const timer = setTimeout(clearError, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, clearError]);

  if (!message || !type) return null;

  const Icon = icons[type];

  return (
    <div
      className={cn(
        'fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg px-4 py-2 text-white shadow-lg transition-all duration-300',
        colors[type]
      )}
      role="alert"
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}; 