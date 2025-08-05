function multiplyMatrices(A, B, N) {
    const result = new Array(N).fill(0).map(() => new Array(N).fill(0));

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < N; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return result;
}