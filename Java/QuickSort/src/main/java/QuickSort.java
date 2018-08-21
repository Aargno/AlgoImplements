/**
A simple class in which I've implemented quicksort. More as a template for quick reuse.
In this implementation I select the middle value in the array as a pivot value.
This implementation also includes a simplisitc way of avoiding issues with arrays with duplicate values.
Could be repurposed to work with Comparable generic values.
**/

public class QuickSort {

  private static void swap(int[] arr, int i, int x) {
    //Helper method to simplify code
    int temp = arr[i];
    arr[i] = arr[x];
    arr[x] = temp;
  }

  private static void quickSort(int[] arr, int lo, int hi) {
    if (lo >= hi) return; //Terminating condition for recrusive calls
    if (lo == hi-1) { //Alternate terminating condition to simplify the sort on a 2 length array
      if (arr[lo] > arr[hi]) swap(arr, lo, hi);
      return;
    }
    int pivot = arr[(lo + hi)/2]; //Selecting the middle value of the array as pivot
    int left = lo;
    int right = hi;
    while (left < right) { //Loop runs until left pointer has reached right pointer
      while (arr[left] < pivot) left++;
      while (arr[right] > pivot) right--;
      swap(arr, left, right); //Swap values at left and right pointers
      if (arr[left] == pivot && arr[right] == pivot && left != right) { //Handles cases where the left and right pointer are on seperate values equal to pivot, prevents issues when duplicate values are present
        left++;
        right--;
      }
    }
    quickSort(arr, lo, right - 1); //Recursive calls to split array, left or right can be used, as they should always be on the same value
    quickSort(arr, right + 1, hi);
  }

  private static void printArray(int[] arr) {
    //Helper method to print array
    for (int x : arr) {
      System.out.print(x + " ");
    }
    System.out.println("");
  }

  public static void main(String[] args) {
    int[] arr = new int[]{1,9,2,8,3,7,4,6,5};
    printArray(arr);
    quickSort(arr, 0, 8);
    printArray(arr);
    System.out.println("");
    arr = new int[]{1,8,2,8,8,4,4,3,5};
    printArray(arr);
    quickSort(arr, 0, 8);
    printArray(arr);
  }

}
