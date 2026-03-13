
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
    {
        "id": "ST001",
        "name": "Alex Johnson",
        "physics": 88,
        "chemistry": 92,
        "math": 95,
        "biology": 84,
        "history": 78,
        "geography": 82,
        "english": 90,
        "computer_science": 96,
        "art": 85,
        "physical_education": 99
    },
    {
        "id": "ST002",
        "name": "Maria Garcia",
        "physics": 75,
        "chemistry": 80,
        "math": 88,
        "biology": 94,
        "history": 91,
        "geography": 89,
        "english": 93,
        "computer_science": 82,
        "art": 77,
        "physical_education": 85
    },
    {
        "id": "ST003",
        "name": "Liam Smith",
        "physics": 92,
        "chemistry": 85,
        "math": 99,
        "biology": 76,
        "history": 70,
        "geography": 74,
        "english": 82,
        "computer_science": 98,
        "art": 80,
        "physical_education": 92
    },
    {
        "id": "ST004",
        "name": "Chloe Chen",
        "physics": 81,
        "chemistry": 89,
        "math": 84,
        "biology": 90,
        "history": 85,
        "geography": 88,
        "english": 95,
        "computer_science": 87,
        "art": 94,
        "physical_education": 80
    },
    {
        "id": "ST005",
        "name": "Omar Syed",
        "physics": 95,
        "chemistry": 94,
        "math": 92,
        "biology": 81,
        "history": 75,
        "geography": 79,
        "english": 84,
        "computer_science": 99,
        "art": 72,
        "physical_education": 88
    },
    {
        "id": "ST006",
        "name": "Sophia Müller",
        "physics": 84,
        "chemistry": 76,
        "math": 80,
        "biology": 88,
        "history": 96,
        "geography": 94,
        "english": 91,
        "computer_science": 79,
        "art": 89,
        "physical_education": 82
    },
    {
        "id": "ST007",
        "name": "James Wilson",
        "physics": 70,
        "chemistry": 72,
        "math": 75,
        "biology": 78,
        "history": 82,
        "geography": 80,
        "english": 79,
        "computer_science": 74,
        "art": 85,
        "physical_education": 95
    },
    {
        "id": "ST008",
        "name": "Aisha Bello",
        "physics": 89,
        "chemistry": 91,
        "math": 94,
        "biology": 96,
        "history": 88,
        "geography": 85,
        "english": 92,
        "computer_science": 90,
        "art": 81,
        "physical_education": 78
    },
    {
        "id": "ST009",
        "name": "Noah Brown",
        "physics": 78,
        "chemistry": 82,
        "math": 85,
        "biology": 74,
        "history": 79,
        "geography": 81,
        "english": 80,
        "computer_science": 88,
        "art": 76,
        "physical_education": 90
    },
    {
        "id": "ST010",
        "name": "Emma Sato",
        "physics": 91,
        "chemistry": 88,
        "math": 96,
        "biology": 82,
        "history": 94,
        "geography": 92,
        "english": 89,
        "computer_science": 95,
        "art": 93,
        "physical_education": 84
    }
]

const RasultChart = () => {
    return (
        <div>
            <LineChart width={800} height={800} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"physics"}></Line>
                <Line dataKey={"chemistry"} stroke='red'></Line>
                <Line dataKey={"math"} stroke='green'></Line>
                <Line dataKey={"biology"} stroke='blue'></Line>
                <Line dataKey={"history"} stroke='amber'></Line>
                <Line dataKey={"geography"} stroke='white'></Line>
                <Line dataKey={"english"} stroke='pink'></Line>
            </LineChart>
        </div>

    );
};

export default RasultChart;