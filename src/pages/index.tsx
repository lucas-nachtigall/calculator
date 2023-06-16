import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Calculator.module.css";
import Calculator from "@/components/Calculator";

const inter = Inter({ subsets: ["latin"] });

export default function CalculatorPage() {
  return (
    <>
      <Head>
        <title>Calculadora</title>
        <meta name="description" content="Calculadora" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Calculator />
      </main>
    </>
  );
}
