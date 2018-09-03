import java.util.Random;

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

  private static int partition(int[] arr, int left, int right, int pivot) {
    while (left < right) { //Loop runs until left pointer has reached right pointer
      while (arr[left] < pivot) left++;
      while (arr[right] > pivot) right--;
      swap(arr, left, right); //Swap values at left and right pointers
      if (arr[left] == pivot && arr[right] == pivot && left != right) { //Handles cases where the left and right pointer are on seperate values equal to pivot, prevents issues when duplicate values are present
        left++; //Only use left++ or right--, otherwise some values are skipped and not sorted properly
      }
    }
    return right;
  }

  private static void quickSort(int[] arr, int lo, int hi) {
    //Alternate implementation to keep code clear
    if (lo >= hi) return; //Terminating condition for recrusive calls
    if (lo == hi-1) { //Alternate terminating condition to simplify the sort on a 2 length array
      if (arr[lo] > arr[hi]) swap(arr, lo, hi);
      return;
    }
    int q = partition(arr, lo, hi, arr[(lo + hi)/2]);
    if (lo < q -1) quickSort(arr, lo, q - 1); //Recursive calls to split array, left or right can be used, as they should always be on the same value
    if (q + 1 < hi) quickSort(arr, q + 1, hi);
  }

  private static void checkInOrder(int[] arr) {
    //Simple test method to test large arrays are in order
    int min = -1;
    for (int x : arr) {
      if (x > min) min = x;
      if (x < min) {
        System.out.println("Fail");
        return;
      }
    }
    System.out.println("Pass");
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
    checkInOrder(arr);
    System.out.println("");
    arr = new int[]{1,8,2,4,8,4,4,3,5};
    printArray(arr);
    quickSort(arr, 0, 8);
    printArray(arr);
    checkInOrder(arr);
    System.out.println("");
    int testLen = 100000000;
    int[] testArr = new int[testLen];
    Random rand = new Random();
    for(int i = 0; i < testLen; i++) {
      testArr[i] = rand.nextInt(testLen/100); //Used to keep reasonable range for large test Length
      //Range too small for array length causes stack overflow due to large chance of partitions
      //of array having vastly different sizes, if a value in the middle of the range isn't chosen.
      //Problem could be mitigated using an alternate pivot selection method, maybe looking for
      //a pivot within a certain space of the range
    }
    printArray(testArr); //For demonstration, not recomended to keep
    quickSort(testArr, 0, testLen - 1);
    printArray(testArr);
    checkInOrder(testArr);
  }

}
