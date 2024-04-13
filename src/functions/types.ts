export interface Characteristics {
    mx: number,
    Dx: number
    MSD: number
}

export interface IDatasetHist {
    label: string,
    data: number[],
    backgroundColor: string,
}

export interface IDatasetLine {
    label: string,
    data: number[],
    borderWidth: number,
    pointRadius: number,
    borderColor: string,
    stepped: boolean,
}
export const colors: string[] = [
    'rgba(255, 99, 132, 1)',
    'rgba(53, 162, 235, 1)',
    'rgb(126,53,235)',
    'rgb(27,157,140)',
    'rgb(196,146,38)',
    'rgb(50,42,155)'
]