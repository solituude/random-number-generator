import { makeAutoObservable } from "mobx";
import {Lemer, LemerN} from "./functions";
import {Characteristics, colors, IDatasetHist, IDatasetLine} from './types';

class Store {
    A: number = 25173;
    B: number = 13849;
    C: number = 65536;

    X: number = 0;
    nPI: number = 1000000;
    nSelection: number = 100;
    PI: number = 0;
    generatorType: string = "default";
    characteristicsArray: Characteristics[] = [];
    datasetsHistogram: number[][] = [];
    datasetsLineChart: number[][] = [];

    constructor() {
        makeAutoObservable(this);
    }

    Lemer(): number {
        this.X = (this.A * this.X + this.B) % this.C;
        return this.X / this.C;
    }
    LemerN = (N: number): number => {
        let randNum01: number = Lemer();
        return Math.floor(randNum01 * N);
    }

    calculateCharacteristics(): void {
        let numSequence: number[] = []; // текущая числовая последовательность
        let countNumber: number[] = new Array(100).fill(0); // частоты чисел
        let probabilityArray: number[] = new Array(100); // массив вероятностей получения чисел
        let prefixP: number[] = [0]; // массив префиксных сумм вероятностей
        let currentRandom: number; // текущее псевдо-рандомное число

        let mx = 0, Dx = 0, MSD;

        for (let iter = 0; iter < this.nSelection; iter++) {
            if (this.generatorType === "default") {
                currentRandom = Math.floor(Math.random() * 100);
            } else {
                currentRandom = LemerN(100);
            }
            countNumber[currentRandom]++; // считаю, сколько раз встретилось каждое число
            numSequence.push(currentRandom); // текущая последовательность для вычисления хар-тик
        }

        for (let indNum = 0; indNum < 100; indNum++) {
            probabilityArray[indNum] = countNumber[indNum] / this.nSelection; // вычисление данных для гистограммы плотности распределения
            mx += numSequence[indNum] *  probabilityArray[indNum]; // мат. ожидание

            // вычисление данных для функции распределения
            if (indNum > 0)
                prefixP.push(prefixP[indNum - 1] + probabilityArray[indNum - 1]);
        }

        for (let indNum = 0; indNum < 100; indNum++) {
            Dx += (numSequence[indNum] - mx) * (numSequence[indNum] - mx) * probabilityArray[indNum];
        }
        MSD = Math.sqrt(Dx);

        this.datasetsHistogram.push(probabilityArray);
        this.datasetsLineChart.push(prefixP);
        this.characteristicsArray.push({mx: mx, Dx: Dx, MSD: MSD});
    }

    calculatingPI(): void {
        let countIn = 0;
        if (this.generatorType === "default") {
            for (let i = 0; i < this.nPI; i++) {
                const xCurr = Math.random();
                const yCurr = Math.random();
                const r2 = xCurr * xCurr + yCurr * yCurr;
                if (r2 <= 1) countIn++;
            }
        } else {
            for (let i = 0; i < this.nPI; i++) {
                const xCurr = Lemer();
                const yCurr = Lemer();
                const r2 = xCurr * xCurr + yCurr * yCurr;
                if (r2 <= 1) countIn++;
            }
        }
        this.PI = countIn / this.nPI * 4;
    }

    clearData(): void {
        this.characteristicsArray = [];
        this.datasetsHistogram = [];
        this.datasetsLineChart = [];
    }

    setA(A: number) : void{
        this.A = A;
        this.X = A;
    }

    setB(B: number): void {
        this.B = B;
    }

    setC(C: number): void {
        this.C = C;
    }

    setNPI(N: number): void {
        this.nPI = N;
    }

    setNSelection(N: number): void {
        this.nSelection = N;
    }
    setGeneratorType(generatorType: string): void{
        this.generatorType = generatorType;
    }


    getDatasetsHistogram(): IDatasetHist[] {
        let datasets: IDatasetHist[] = [];
        for (let i = 0; i < this.datasetsHistogram.length; i++) {
            datasets.push({
                label: (i + 1).toString(),
                data: this.datasetsHistogram[i],
                backgroundColor: colors[i]
            })
        }
        return datasets;
    }

    getDatasetLineChart(): IDatasetLine[] {
        let datasets: IDatasetLine[] = [];
        for (let i = 0; i < this.datasetsLineChart.length; i++) {
            datasets.push({
                label: (i + 1).toString(),
                data: this.datasetsLineChart[i],
                borderWidth: 2,
                pointRadius: 0,
                borderColor: colors[i],
                stepped: true,
            })
        }
        return datasets;
    }
}

export default new Store();
