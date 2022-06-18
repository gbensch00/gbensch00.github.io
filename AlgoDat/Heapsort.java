import java.lang.Comparable;
import java.util.Arrays;

public class Heapsort {

  public static void main(String[] args) {
    Comparable[] array = { 96, 18, 28, 1, 9, 524, 999, 3 };
    Comparable[] esaArray = { 2, 5, 8, 7, 9, 4 };
    System.out.println("unsortiertes Array: ");
    System.out.println(Arrays.toString(array));
    

    Heapsort test = new Heapsort();
    test.heapsort(array);

    System.out.println("sortiertes Array: ");
    System.out.println(Arrays.toString(array));

    System.out.println("unsortiertes esaArray: ");
    System.out.println(Arrays.toString(esaArray));
    test.heapsort(esaArray);
    System.out.println("sortiertes esaArray: ");
    System.out.println(Arrays.toString(esaArray));
    
  }
  
  /*
  * @param array Array das uebergeben wird
  * @param i Index i für Teilbaum, der die Heap Eigenschaft verletzt
  * @param arraySize Groesse des Baumes bzw des Teilbaumes der heapified wird
  */ 
  public void heapify(Comparable[] array, int arraySize, int i) {

    int largest = i; //initialisiere largest als root
    int left = 2 * (i + 1) - 1;
    int right = 2 * (i + 1);

    if (left < arraySize && array[left].compareTo() array[largest]) {
      largest = left;
    }
    if (right < arraySize && array[right] > array[largest]) {
      largest = right;
    }
    //falls largest nicht die Wurzel des Teilbaums ist, tausche largest und i
    if (largest != i) {
      int temp = array[i];
      array[i] = array[largest];
      array[largest] = temp;
      heapify(array, arraySize, largest);

    }
  }

  // @param array Array das sortiert werden soll
  public void heapsort(Comparable[] array) {
    buildHeap(array);

    for (int i = array.length - 1; i >= 0; i--) {
      int temp = array[0];
      array[0] = array[i];
      array[i] = temp;

      heapify(array, i, 0);
      System.out.println("Current Array: ");
      System.out.println(Arrays.toString(array));
    }

  }

  public void buildHeap(Comparable[] array) {
    
    for (int i = array.length / 2 - 1; i >= 0; i--)
      heapify(array, array.length, i);
    
    System.out.println("buildHeap Array: ");
    System.out.println(Arrays.toString(array));
  }
  
}