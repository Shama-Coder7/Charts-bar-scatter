// import { Chart } from 'react-chartjs-2';
import React from "react";
import { ScatterChart, Scatter, XAxis,
	YAxis, CartesianGrid } from 'recharts';

const ScatterPlot = () => {

	// Sample data
	const data = [
		{ x: 1, y: 23, title: 'hel' },
		{ x: 2, y: 3 },
		{ x: 3, y: 15 },
		{ x: 4, y: 35 },
		{ x: 5, y: 45 },
		{ x: 6, y: 25 },
		{ x: 7, y: 17 },
		{ x: 8, y: 32 },
		{ x: 9, y: 43 },
		{ x: 10, y: 47 },
		{ x: 11, y: 39 },
		{ x: 12, y: 53 },
		{ x: 13, y: 49 },
		{ x: 14, y: 41 },
		{ x: 15, y: 13 },

	];

	

	return (
		<>
		<h2>ScatterPlot</h2>
		<div className="d-flex justify content-between">
		<p>x: Color Intensity</p>
		<p>y: Hue</p></div>
		<ScatterChart width={700} height={350}>
			<CartesianGrid />
			<XAxis type="number"  title= "Color Intensity" dataKey="x" />
			<YAxis type="number" title="Hue" dataKey="y" />
			<Scatter data={data} fill="blue" />
		</ScatterChart>
		</>
	);
}

export default ScatterPlot;



