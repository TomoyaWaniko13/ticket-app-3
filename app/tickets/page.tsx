import prisma from '@/prisma/db';
import DataTable from '@/app/tickets/DataTable';

// 9. Project Structure

const UsersPage = async () => {
  const tickets = await prisma.ticket.findMany();

  return (
    <div>
      <DataTable tickets={tickets} />
    </div>
  );
};

export default UsersPage;
