// src/components/DashboardPreview.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardPreview({ data }) {
  return (
    <div className="max-w-4xl mx-auto h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tickFormatter={str => new Date(str).toLocaleDateString()} />
          <YAxis />
          <Tooltip labelFormatter={label => new Date(label).toLocaleDateString()} />
          <Line type="monotone" dataKey="value" stroke="#0D9488" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}