import { arr } from "../UI/nodeContainer";

 function BinarySearch(arr,search_ele) {

    let left = 0;
    let right = len(arr)-1

    while (left <= right){
       let mid = (left+right)/2
       let mid_ele = arr[mid]

       if (mid_ele === search_ele){
        return true
       }
       else if(search_ele < mid_ele){
        right = mid-1
       }
       else if (search_ele > mid_ele){
        left = mid+1
       }
    }
    return false
}
