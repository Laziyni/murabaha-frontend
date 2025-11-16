import React from 'react';
import Card from '@/components/ui/Card';
import Table from '@/components/ui/Table';
import { useClientsQuery } from '@/hooks/api/useClientsQuery';
import { getApiErrorMessage } from '@/lib/http-client';

export default function ClientsPage() {
  const query = useClientsQuery();

  const rows =
    query.data?.map((client) => ({
      name: client.name,
      phone: client.phone,
      deals: client.deals,
      onTime: `${client.onTime}%`,
    })) ?? [];

  return (
    <Card title="Clients">
      {query.isLoading && <p>Loading clients...</p>}
      {query.isError && (
        <p>Failed to load clients: {getApiErrorMessage(query.error)}</p>
      )}
      <Table
        columns={[
          { key: 'name', title: 'Full name' },
          { key: 'phone', title: 'Phone' },
          { key: 'deals', title: 'Deals' },
          { key: 'onTime', title: 'On time payments' },
        ]}
        rows={rows}
      />
    </Card>
  );
}
