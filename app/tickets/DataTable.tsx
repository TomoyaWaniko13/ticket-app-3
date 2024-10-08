import { Ticket } from '@prisma/client';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TicketStatusBadge from '@/components/TicketStatusBadge';

// 17. Ticket Table

interface Props {
  tickets: Ticket[];
}

const DataTable = async ({ tickets }: Props) => {
  return (
    <div className={'w-full mt-5 rounded-md sm:border'}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets
            ? tickets.map((ticket) => (
                <TableRow key={ticket.id} data-href={'/'}>
                  <TableCell>{ticket.title}</TableCell>
                  <TableCell>
                    <TicketStatusBadge status={ticket.status} />
                  </TableCell>
                  <TableCell>{ticket.priority}</TableCell>
                  <TableCell>
                    {ticket.createdAt.toLocaleDateString('en-CA', {
                      year: '2-digit',
                      month: '2-digit',
                      day: '2-digit',
                      hour: 'numeric',
                      minute: '2-digit',
                    })}
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
