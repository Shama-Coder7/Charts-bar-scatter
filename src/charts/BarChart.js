import React from "react";
import Chart from "react-apexcharts";

function BarChart() {
  return (
    <React.Fragment>
      <div className="container-fluid mb-5">

        <Chart
          type="bar"
          width={1000}
          height={700}
          series={[
            {
              name: "Average Malic Acid",
              data: [6578, 6787, 3245, 9876, 2324, 5123, 2435],
            },
          ]}
          options={{
            title: {
              text: "BarChart",
              style: { fontSize: 20 },
            },

           

            xaxis: {
              tickPlacement: "on",
              
              title: {
                text: "Alcohol",
                style: { fontSize: 20 },
              },
            },

            yaxis: {
              labels: {
                formatter: (val) => {
                  return `${val}`;
                },
                style: { fontSize: "15" },
              },
              title: {
                text: "Malic acid",
                style: { fontSize: 15 },
              },
            },

            legend: {
              show: true,
              position: "right",
            },

            dataLabels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: {
                colors: ["#f4f4f4"],
                fontSize: 15,
              },
            },
          }}
        ></Chart>
      </div>
    </React.Fragment>
  );
}

export default BarChart;