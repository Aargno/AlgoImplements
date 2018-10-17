import java.util.Random;

/*
Simple implementation of LSD Radix Sort, has been implemented to handle signed
integers. implemented in fashion below to allow me to only need to pass the
array to be sorted to the method. Should work with any data type that can
be sorted with radix sort with small modification.

This specific implementation uses the binary representation of the values
to be sorted.

Sort should be stable.
*/

public class RadixSort {

  public static void lsdRadixSort(int[] arr, int shift) {
    //Sorts array of values by using their binary representation.
    int[] count;
    int[] sorted;
    int[] arr2 = arr;
    while (shift < 32) { //Iterate until the bit length of int is reached
      count = new int[2]; //Fresh count array
      sorted = new int[arr.length]; //Fresh sorted array
      for (int x : arr2) count[(x >> shift) & 1]++; //Count for grouping values
      if (shift != 31) count[1] += count[0];
      else count[0] += count[1]; //Special case, reverses sort order when dealing with signed int (considers 0 > 1)
      for (int i = arr.length - 1; i >= 0; i--) { //Group values based on selected bit of value
        sorted[count[(arr2[i] >> shift) & 1] - 1] = arr2[i];
        count[(arr2[i] >> shift) & 1]--;
      }
      arr2 = sorted; //Saves updated array for next iteration
      shift++; //Look at next bit in number
    }
    for (int i = 0; i < arr.length; i++) { //Copy values from sorted array to passed array
      arr[i] = arr2[i];
    }
  }

  private static void checkInOrder(int[] arr) {
    //Simple test method to test large arrays are in order
    int min = Integer.MIN_VALUE;
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
    Random rand = new Random();
    int len = 100;
    int[] arr = new int[len];
    int max = 100;
    int min = -100;
    for (int i = 0; i < len; i++) {
      arr[i] = rand.nextInt((max - min) + 1) + min;
    }
    printArray(arr);
    lsdRadixSort(arr, 0);
    checkInOrder(arr);
    printArray(arr);
  }

}
