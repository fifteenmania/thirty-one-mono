import { vecCumSum } from "./linarg";

/**
 * 
 * @param {number} min 추출 범위의 최솟값입니다.
 * @param {number} max 추출 범위의 최댓값입니다. 해당 값은 범위에서 제외됩니다.
 * @returns {numer} [`min`, `max`) 의 범위에서 추출된 임의의 실수입니다.
 */
export function getRandom(min: number, max: number): number {
    return Math.random()*(max-min) + min;
}

/**
 * 
 * @param {number} min 추출 범위의 최솟값입니다.
 * @param {number}max 추출 범위의 최댓값입니다. 해당 값은 범위에서 제외됩니다. 
 * @returns {number}[`min`, `max`) 의 범위에서 추출된 임의의 정수입니다.
 */
export function getRandomInt(min: number, max: number): number {
    return Math.floor(getRandom(Math.ceil(min), Math.floor(max)));
}

/**
 * @param {number} length 배열의 길이
 * @param {number} min 정수 최솟값
 * @param {number} max 정수 최댓값
 * @returns {number[]} [`min`, `max`) 에서 임의 추출된 `length`개의 정수로 구성된 벡터입니다.
 */
export function getRandomIntVec(length: number, min: number, max: number): number[] {
    return Array.from(Array(length)).map(() => getRandomInt(min, max));
}

/**
 * 
 * @param {T[]} vec 추출 대상이 되는 벡터입니다.
 * @returns {T} 대상 벡터에서 임의 추출된 하나의 요소입니다.
 */
export function randomSampleOne<T>(vec: T[]): T {
    const pickedIdx = getRandomInt(0, vec.length);
    return vec[pickedIdx];
}

/**
 * 
 * @param {number[]} chooseProb 각 인덱스별로 추출될 확률로 구성된 벡터입니다. 예를 들어 [0.5, 0, 0.5]의 입력을 받으면 50% 확률로 0 또는 2 의 값이 추출됩니다. 합이 1로 정규화되어 있어야 합니다.
 * @returns {number} 입력 벡터에 따라 추출된 인덱스 정수입니다.
 */
export function getRandomIndex(chooseProb: number[]): number {
    const cumsum = vecCumSum(chooseProb);
    const rand = Math.random();
    var i = 0;
    var lower = 0;
    var upper = cumsum[i];
    while (i < cumsum.length) {
        if (rand >= lower && rand < upper) {
            return i;
        }
        i++;
        lower = cumsum[i-1];
        upper = cumsum[i];
    }
    throw new Error("invalid parameters");
}

/**
 * 
 * @param {number} len 출력할 벡터의 길이입니다.
 * @returns {number[]} [0, 1) 의 범위에서 추출된 난수로 구성된 `len` 길이의 벡터입니다.
 */
export function getRandomVec(len: number): number[] {
    return Array.from(Array(len)).map((_) => Math.random());
}