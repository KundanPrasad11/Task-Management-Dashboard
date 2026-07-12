import react from 'react';
import Card from './Card';

const CompletedTaskCard = ({ task, description, status, dueDate, onEdit }) => {
    return (
        <Card>
            <h3>{task}</h3>
            <p>{description}</p>
            <p>Status: {status}</p>
            <p>Due Date: {dueDate}</p>
            <button onClick={onEdit}>Edit</button>
        </Card>
    );
};

export default CompletedTaskCard;