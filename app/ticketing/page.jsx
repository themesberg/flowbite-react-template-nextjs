"use client";
import React from "react";
import { Button, TextInput, Dropdown, Table, Badge, Radio } from "flowbite-react";
import { HiOutlineSearch, HiDotsVertical, HiTicket, HiClock, HiCheck, HiTrash } from "react-icons/hi";

export default function Ticketing() {
  const tickets = [
    {
      id: "TK-1234",
      subject: "Can't upload files",
      status: "Open",
      priority: "High",
      category: "Technical",
      date: "March 6, 2024",
      assignee: "John Doe",
    },
    {
      id: "TK-1235",
      subject: "Login issues",
      status: "In Progress",
      priority: "Medium",
      category: "Account",
      date: "March 5, 2024",
      assignee: "Jane Smith",
    },
    {
        id: "TK-1235",
        subject: "Login issues",
        status: "In Progress",
        priority: "Medium",
        category: "Account",
        date: "March 5, 2024",
        assignee: "Jane Smith",
      },
      {
        id: "TK-1235",
        subject: "Login issues",
        status: "In Progress",
        priority: "Medium",
        category: "Account",
        date: "March 5, 2024",
        assignee: "Jane Smith",
      },
      {
        id: "TK-1235",
        subject: "Login issues",
        status: "In Progress",
        priority: "Medium",
        category: "Account",
        date: "March 5, 2024",
        assignee: "Jane Smith",
      },
      {
        id: "TK-1235",
        subject: "Login issues",
        status: "In Progress",
        priority: "Medium",
        category: "Account",
        date: "March 5, 2024",
        assignee: "Jane Smith",
      },
      {
        id: "TK-1235",
        subject: "Login issues",
        status: "In Progress",
        priority: "Medium",
        category: "Account",
        date: "March 5, 2024",
        assignee: "Jane Smith",
      },
      {
        id: "TK-1235",
        subject: "Login issues",
        status: "In Progress",
        priority: "Medium",
        category: "Account",
        date: "March 5, 2024",
        assignee: "Jane Smith",
      },
    // Add more ticket data as needed
  ];

  const stats = [
    {
      title: "Total Tickets",
      value: "248",
      icon: HiTicket,
      color: "blue",
    },
    {
      title: "Pending",
      value: "35",
      icon: HiClock,
      color: "yellow",
    },
    {
      title: "Solved",
      value: "198",
      icon: HiCheck,
      color: "green",
    },
    {
      title: "Deleted",
      value: "15",
      icon: HiTrash,
      color: "red",
    },
  ];

 
  // Add state for filter
  const [filter, setFilter] = React.useState('all');

  // Add filterTickets function
  const filterTickets = (tickets) => {
    switch(filter) {
      case 'solved':
        return tickets.filter(ticket => ticket.status === 'Closed');
      case 'pending':
        return tickets.filter(ticket => ticket.status === 'In Progress');
      case 'archive':
        return tickets.filter(ticket => ticket.status === 'Archived');
      default:
        return tickets;
    }
  };

  const getStatusBadge = (status) => {
    const statusColors = {
      Open: "success",
      "In Progress": "warning",
      Closed: "gray",
    };
    return <Badge color={statusColors[status]}>{status}</Badge>;
  };

  return (
    <div className="p-4">
              <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </h3>
              </div>
              <stat.icon
                className={`text- size-8${stat.color}-500`}
                aria-hidden="true"
              />
            </div>
          </div>
        ))}
        </div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Tickets
        </h1>
        <Button>Create Ticket</Button>
      </div>

      <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full items-center md:w-1/2">
          <TextInput
            icon={HiOutlineSearch}
            placeholder="Search tickets"
            className="w-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <Dropdown label="Status">
            <Dropdown.Item>All</Dropdown.Item>
            <Dropdown.Item>Open</Dropdown.Item>
            <Dropdown.Item>In Progress</Dropdown.Item>
            <Dropdown.Item>Closed</Dropdown.Item>
          </Dropdown>
          <Dropdown label="Priority">
            <Dropdown.Item>All</Dropdown.Item>
            <Dropdown.Item>High</Dropdown.Item>
            <Dropdown.Item>Medium</Dropdown.Item>
            <Dropdown.Item>Low</Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div className="mb-4 rounded-lg bg-white p-4 shadow dark:bg-gray-800">
        <h3 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Filter by Status</h3>
        <div className="flex flex-wrap gap-4">
          <Radio
            name="filter"
            value="all"
            checked={filter === 'all'}
            onChange={(e) => setFilter(e.target.value)}
            label="All Tickets"
          />
          <Radio
            name="filter"
            value="solved"
            checked={filter === 'solved'}
            onChange={(e) => setFilter(e.target.value)}
            label="Solved"
          />
          <Radio
            name="filter"
            value="pending"
            checked={filter === 'pending'}
            onChange={(e) => setFilter(e.target.value)}
            label="Pending"
          />
          <Radio
            name="filter"
            value="archive"
            checked={filter === 'archive'}
            onChange={(e) => setFilter(e.target.value)}
            label="Archive"
          />
        </div>
      </div>

      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Ticket</Table.HeadCell>
          <Table.HeadCell>Subject</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Priority</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Date</Table.HeadCell>
          <Table.HeadCell>Assignee</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Actions</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body>
        {filterTickets(tickets).map((ticket) => (
            <Table.Row
              key={ticket.id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="font-medium text-gray-900 dark:text-white">
                {ticket.id}
              </Table.Cell>
              <Table.Cell>{ticket.subject}</Table.Cell>
              <Table.Cell>{getStatusBadge(ticket.status)}</Table.Cell>
              <Table.Cell>{ticket.priority}</Table.Cell>
              <Table.Cell>{ticket.category}</Table.Cell>
              <Table.Cell>{ticket.date}</Table.Cell>
              <Table.Cell>{ticket.assignee}</Table.Cell>
              <Table.Cell>
                <Dropdown
                  label=""
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <Button size="sm" color="gray">
                      <HiDotsVertical className="size-4" />
                    </Button>
                  )}
                >
                  <Dropdown.Item>View Details</Dropdown.Item>
                  <Dropdown.Item>Update Status</Dropdown.Item>
                  <Dropdown.Item>Assign Ticket</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className="text-red-600 hover:bg-red-100">
                    Delete Ticket
                  </Dropdown.Item>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}