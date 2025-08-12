import AppLink from '@/components/PlaygroundLink';
import { PlaygroundRoute } from '@/lib/constants';

interface DemoCardProps {
  href: PlaygroundRoute;
  title: string;
  description: string;
}

export function DemoCard({ href, title, description }: DemoCardProps) {
  return (
    <AppLink href={href} className="group block">
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
