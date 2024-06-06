"use client";

/** react */
import { FC } from "react";

import Header from "app/components/Header";
import Card from "app/components/Card";
import LineGraph from "app/components/Graphs/Line";
import DoughnutGraph from "app/components/Graphs/Doughnut";

/** style */
import styles from "./styles.module.scss";

interface Props {}

const Dashboard: FC<Props> = ({}: Props) => {
  if (false) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full border-4 border-solid border-current border-r-transparent h-12 w-12"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Card title="Respostas totais">
          <p className={styles.info2}>5</p>
          <div className={styles.line2} />
        </Card>
        <div className={styles.row}>
          <Card title="Satisfação média">
            <div className={styles.satisfaction}>
              <p>8.8</p>
              <span>Ok</span>
            </div>
          </Card>
          <Card title="Para que usa o app?">
            <DoughnutGraph />
          </Card>
        </div>
        <Card title="Respostas Mensais">
          <LineGraph />
        </Card>
      </div>
    </>
  );
};

export default Dashboard;
