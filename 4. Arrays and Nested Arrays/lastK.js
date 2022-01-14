function lastK(n, k) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    
    if (result.length <= 1) {
      result.push(1);
    }
    if (result.length == 2) {
      result.push(result[0] + result[1]);
    }
    if(result.length < k){
        result.push(result[1] + k)
    }
  }
  console.log(result);
}
lastK(6, 3);
