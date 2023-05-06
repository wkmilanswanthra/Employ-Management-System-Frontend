import React from "react";
import Card from '../Components/Dashboard/Card';

const cardsData = [
    {
        title: "Visitor Management",
        icon: "👥",
        path: "visitor-management"
    },
    {
        title: "Project Management",
        icon: "📈",
        path: "project-management"
    },
    {
        title: "Finance Management",
        icon: "💰",
        path: "finance-management"
    },
    {
        title: "Inventory Management",
        icon: "📦",
        path: "inventory-management"
    },
    {
        title: "Handling Medical Records",
        icon: "🏥",
        path: "handling-medical-records"
    },
    {
        title: "Animal Management",
        icon: "🐶",
        path: "animal-management"
    },
    {
        title: "Volunteer Management",
        icon: "👨‍👩‍👧‍👦",
        path: "volunteer-management"
    },
    {
        title: "Employee Management",
        icon: "👥",
        path: "employee-management"
    }
];

const CardsLayout = () => {
    return (
        <div style={styles.cardsContainer}>
            {cardsData.map((cardData, index) => (
                <Card key={index} title={cardData.title} icon={cardData.icon} path={cardData.path}/>
            ))}
        </div>
    );
};

const styles = {
    cardsContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        gap: '20px',
        padding: '30px',
    },
    '@media (max-width: 768px)': {
        cardsContainer: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
};

export default CardsLayout;