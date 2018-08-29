import java.util.Random;

/*
Class implementing counting sort. Sort makes use of function to get range of values
and lowest value to help minimise the space needed for count array.
Main method can be altered to test with different settings.
*/

public class CountingSort {

  public static void getVals(int[] arr, int[] vals) {
    //Gets the size of the range of values, and the lwoest value in an array
    int low = arr[0];
    int high = arr[0];
    for (int x : arr) { //Loop through array, recording lowest and highest value encountered
      if (x < low) low = x;
      if (x > high) high = x;
    }
    vals[0] = (high - low) + 1; //Range of values
    vals[1] = low; //Lowest value
  }

  public static void countSort(int[] arr, int[] sorted) {
    //Performs counting sort, needs array provided for values to be placed into
    int[] vals = new int[2]; //Array to hold range and low value
    getVals(arr, vals);
    if (vals[0] == 1) return; //If there is only one possible value, assume array is sorted
    int[] count = new int[vals[0]]; //Initialises count array with the size being the total range of values
    for (int x : arr) count[x - vals[1]]++; //Counts values in array to be sorted, subtract lowest value to allow correct placement
    for (int i = 1; i < vals[0]; i++) count[i] += count[i - 1]; //Sums values in count array with previous values
    for (int x : arr) { //Place values from arr into correct order using count array
      sorted[count[x - vals[1]] - 1] = x; //Count array access accounts for lowest value, and subtract 1 to account for 0 indexing
      count[x - vals[1]]--;
    }
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

  public static void main (String[] args) {
    Random rand = new Random();
    int len = 1000;
    int[] arr = new int[len];
    int[] sorted = new int[len];
    for (int i = 0; i < len; i++) {
      arr[i] = rand.nextInt((932 - 149) + 1) + 149; //Lower inclusive upper exclusive
      //Sort works best with range of values not drastically larger than number
      //of elements to be sorted.
      //Benefit over my implementation of quicksort: Can handle ranges drastically smaller
      //than size of data set well.
    }
    printArray(arr);
    countSort(arr, sorted);
    checkInOrder(sorted);
    printArray(sorted);
  }

}
