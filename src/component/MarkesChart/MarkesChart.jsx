import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarkesChart = ({ marsPromise }) => {

    const marksDataRes = use(marsPromise);

    const marksData = marksDataRes.data;


    // data prosesing for chart

    const MarkesChartData = marksData.map(studentData => {
        const student = {
            id: studentData.student_id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math
        }
        const avg = (student.physics + student.chemistry + student.math)

        student.avg = avg;

        return student
    })

    console.log(MarkesChartData);

    return (
        <div>
            <BarChart width={500} height={300} data={MarkesChartData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={"avg"} fill='yellow'></Bar>
                <Bar dataKey={"chemistry"} fill='blue'></Bar>
                <Bar dataKey={"physics"} fill='red'></Bar>
                <Bar dataKey={"math"} fill='pink'></Bar>
            </BarChart>
        </div>
    );
};

export default MarkesChart;