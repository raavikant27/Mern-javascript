unction compareArrays(arr1, n1, arr2, n2) {
  
 let sum1=0;
	for(let i=0;i<n1;i++){
		sum1+=arr1[i];
	}
	let sum2=0;
	for(let i=0;i<n2;i++){
		sum2+=arr2[i];
	}

	if(sum1>sum2)return "First array is larger";
	if(sum2>sum1) return "Second array is larger";
	else return "Both are equal";
}