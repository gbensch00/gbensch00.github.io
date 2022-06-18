

public class SelectionSort {

  

  public static int[] selectionsort(int[] array) {
    //Erster unsortierter Wert
    for (int i = 0; i < array.length; i++) {
      for (int j = i + 1; j < array.length; j++) {
        //falls der erste unsortierte Wert > j; tu ihn an erste unsortierte Stelle
        if (array[i] > array[j]) {
          int temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array;

  }
  public static int[] selectionsort(int[] sortieren) {
		for (int i = 0; i < sortieren.length - 1; i++) {
			for (int j = i + 1; j < sortieren.length; j++) {
				if (sortieren[i] > sortieren[j]) {
					int temp = sortieren[i];
					sortieren[i] = sortieren[j];
					sortieren[j] = temp;
				}
			}
		}
   
  public int[] toString(int[] ar) {
    System.out.println("Array: ");
    for (int i = 0; i < ar.length; i++) {
      System.out.print(ar[i] + ", ");
    }
    return ar;

  }

  public static void main(String[] args) {
    int[] unsortedArray = { 4, 1, 6, 10, 3 };
    int[] sortedArray = selectionsort(unsortedArray);
    for (int i = 0; i < sortedArray.length; i++) {
      System.out.println(sortedArray[i]);
    }
  }
  
}


 