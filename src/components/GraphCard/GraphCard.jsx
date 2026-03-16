import { useState } from "react";
import { Chart } from "react-google-charts";
import { FaChartPie } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import styles from './GraphCard.module.css';

const data = [
    ["Categoria", "Valor"],
    ["Moradia", 4500],
    ["Alimentação", 2100],
    ["Lazer", 1200],
]

const pieOptions = {
    pieHole: 0.5,
    legend: { position: "right" },
    pieSliceText: "none",
    slices: {
      0: { color: "#7C3AED" },
      1: { color: "#2E1065" },
      2: { color: "#dbdbdb" },
    },
};

const barOptions = {
    legend: { position: "none" },
    colors: ["#7C3AED"],
    bar: { groupWidth: "50%" },
    vAxis: { gridlines: { color: "#f0f0f0" } },
};

const GraphCard = () => {
    const [chartType, setChartType] = useState("PieChart");

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h3>Distribuição de Despesas</h3>
                    <p>Análise de gastos por categoria</p>
                </div>
                <div className={styles.buttons}>
                    <button
                        className={chartType === "PieChart" ? styles.active : ""}
                        onClick={() => setChartType("PieChart")}
                    >
                        <FaChartPie/> Pizza
                    </button>
                    <button
                        className={chartType === "BarChart" ? styles.active : ""}
                        onClick={() => setChartType("BarChart")}
                    >
                        <IoStatsChartSharp/> Barras
                    </button>
                </div>
            </div>
            <div key={chartType} className={styles.chartWrapper}>
                <Chart
                    chartType={chartType}
                    data={data}
                    options={chartType === "PieChart" ? pieOptions : barOptions}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
        </div>
    )
}

export default GraphCard