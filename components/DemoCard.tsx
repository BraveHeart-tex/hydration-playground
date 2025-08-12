import AppLink from '@/components/PlaygroundLink';
import { PlaygroundRoute } from '@/constants';
import { cn } from '@/lib/utils';

interface DemoCardProps {
  href: PlaygroundRoute;
  title: string;
  description: string;
  className?: string;
}

export function DemoCard({
  href,
  title,
  description,
  className,
}: DemoCardProps) {
  return (
    <AppLink href={href} className={cn('group block', className)}>
      <div className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="text-primary text-sm font-medium">View Demo →</div>
      </div>
    </AppLink>
  );
}
