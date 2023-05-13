function threeSum(arr, target) {
// write your code here
	let closest=Number.MAX_SAFE_INTEGER;
 for(let i=0;i<arr.length-2;i++){
	let sum=arr[i]+arr[i+1]+arr[i+2];
	let diff=Math.abs(sum-target);
	 if(closest>diff){
		 closest=sum;
	 }
 }
	return closest;
}

module.exports = threeSum;
