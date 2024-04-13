// const A: number = 25173;
// const B: number = 13849;
// const C: number = 1073741823;
const A: number = 25173;
const B: number = 13849;
const C: number = 65536;
let X: number = A;

export const Lemer = (): number => {
    // let X = Number(localStorage.getItem("X"));
    X = ((A * X + B) % C);
    // localStorage.setItem("X", String(X));
    // console.log("X = " + X);
    return X / C;
}

export const LemerN = (N: number): number => {
    let randNum01: number = Lemer();
    return Math.ceil(randNum01 * N);
}

export const getPI = (N: number): number => {
    let countIn = 0;
    for (let i = 0; i < N; i++) {
        const xCurr = Lemer();
        const yCurr = Lemer();
        const r = Math.sqrt(xCurr * xCurr + yCurr * yCurr);
        if (r <= 1) countIn++;
    }
    console.log(countIn / N);
    return countIn / N * 4;
}