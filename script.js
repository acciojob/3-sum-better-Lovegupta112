function threeSum(arr, target) {
	// write your code here
	// let closest = Number.MAX_SAFE_INTEGER;
	// // arr=arr.sort();
	// for (let i = 0; i < arr.length - 2; i++) {
	// 	let sum = arr[i] + arr[i + 1] + arr[i + 2];
	// 	let diff = Math.abs(sum - target);
	// 	if (closest > diff) {
	// 		closest = sum;
	// 	}
	// }
	// return closest;
	let closest = Number.MAX_SAFE_INTEGER;
	for(let i=0;i<arr.length;i++){
		for(let j=i+1;j<arr.length;j++){
			for(let k=j+1;k<arr.length;k++){
             let sum=arr[i]+arr[j]+arr[k];
			 let diff=Math.abs(target-sum);
			 if(closest>diff){
				closest=sum;
			 }
			}
		}
	}
	return closest;
}

module.exports = threeSum;
