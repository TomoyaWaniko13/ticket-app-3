import { Status } from '@prisma/client';
import { Badge } from '@/components/ui/badge';

// 19. Status Component

interface Props {
  status: Status;
}

const statusConfig: Record<Status, [string, string]> = {
  OPEN: ['Open', 'bg-red-400'],
  STARTED: ['Started', 'bg-blue-400'],
  CLOSED: ['Closed', 'bg-green-400'],
};

export default function TicketStatusBadge({ status }: Props) {
  const [label, color] = statusConfig[status];
  return <Badge className={`${color} text-background hover:${color}`}>{label}</Badge>;
}
