import { TicketCard } from "@/components/ticket-card";
import { Button } from "@/components/ui/button";
import { Ticket } from "@/lib/db/schema";
import React from "react";
import Link from "next/link";
import { getAllTickets } from "@/lib/db/queries";

const TicketsPage = async () => {
  const tickets = await getAllTickets();

  return (
    <section className="block-space big-container">
      <Button asChild>
        <Link href="/tickets/new">New Ticket</Link>
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </section>
  );
};

export default TicketsPage;
