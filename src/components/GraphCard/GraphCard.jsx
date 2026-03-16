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

const options = {
    pieHole: 0.5, 
    legend: { position: "right" },
    pieSliceText: "none",
    slices: {
      0: { color: "#7C3AED" },
      1: { color: "#2E1065" }, 
      2: { color: "#dbdbdb" }, 
    },
};

const GraphCard = () => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <h3>Distribuição de Despesas</h3>
                    <p>Análise de gastos por categoria</p>
                </div>
                <div className={styles.buttons}>
                    <button><FaChartPie/> Pizza</button>
                    <button><IoStatsChartSharp/> Barras</button>
                </div>
            </div>
            <div>
                 <Chart
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"100%"}
                />
            </div>
        </div>
    )
}

export default GraphCard