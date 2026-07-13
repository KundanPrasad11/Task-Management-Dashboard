import React from 'react';
import Card from './Card';

export const MetricCard = ({ status, icon, count }) => {
    return (
        <Card>
            <div className="flex items-center justify-between mb-4">
                <div>{status}</div>
                <div className="text-xl">{icon}</div>
            </div>
            <div className="text-2xl font-bold">{count}</div>
        </Card>
    );
};