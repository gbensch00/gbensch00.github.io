import java.util.LinkedList;

public class Hashtable {
	private LinkedList<Integer>[]  hashtable; 
	private int numberKeys; // ist beim Einfuegen oder Entfernen von Schluesseln zu aktualisieren

	/**
	 * Standardkonstruktor zur Erzeugung einer Hashtabelle der Groesse 11
	 */
	public Hashtable() {
		this(11);  
	}

	/** 
	 * Konstruktor zur Erzeugung einer Hashtabelle der Gr��e n
	 * @param n die Gr��e der Hashtabelle
	 */
	public Hashtable(int n) {
		hashtable =  (LinkedList<Integer>[]) new LinkedList[n];

		for (int i = 0; i < hashtable.length; i++) {
			hashtable[i] = new LinkedList<Integer>();
		}
	}
	
	/**
	 * bestimmt die Anzahl der Schluessel  in der Hashtabelle
	 * @return die Anzahl der Schluessel in der Hashtabelle
	 */
	public int getNumberKeys() {
		return numberKeys;
	}

	/** Hashfunktion zur Ermittlung eines Index, an der der Schl�ssel key eingef�gt werden soll
	 * @param key der Schl�ssel dessen Index ermittelt werden soll
	 * @return der Index an dem der Schluessel key in der Hashtabelle abgelegt werden soll
	 */
	private int hashFunction(Integer key) {
		int index = key.hashCode() % hashtable.length;
		return index < 0 ? -index : index;
	}

	/**
	 * Funktion, die den Schluessel key in die Hashtabelle ein, falls dieser noch nicht vorhanden ist;
	 * die Anzahl der vorhandenen Schluessel wird entsprechend aktualisiert
	 * @param key der einzufuegende Schluessel
	 * @return true, falls der Schluessel eingefuegt werden konnte, d.h. noch nicht vorhanden war
	 *         false, sonst
	 */
	public boolean put(Integer key) {

	}

	/**
	 * Funktion, die ermittelt, ob der Schluessel key in der Hashtabelle enthalten ist
	 * @param key der Schluessel der gesucht wird
	 * @return true, wenn der Schluessel in der Hashtabelle enthalten ist,
	 *         false, sonst
	 */
	public boolean contains(Integer key) {

	}

	/**
	 * Funktion, die den Schluessel key aus der Hashtabelle entfernt, falls dieser dort vorhanden ist;
	 * die Anzahl der vorhandenen Schluessel wird entsprechend aktualisiert
	 * @param key der zu entfernende Schluessel
	 * @return true, wenn der Schluessel entfernt werden konnte
	 *         false, sonst (Schluessel war nicht enthalten)
	 */
	public boolean remove(Integer key) {

	}

	/**
	 * Erzeugt eine Zeichenkette mit den Inhalten der Hashtabelle
	 * @return die Zeichenkette mit den Inhalten der Hashtabelle
	 */
	public String toString() {
		// TODO Auto-generated method stub
		StringBuffer inhalt = new StringBuffer();
		String ausgabe = null;
		int i = 0;
		inhalt.append("Hashtabelle mit " + numberKeys + " Eintraegen\n");
		for (LinkedList<Integer> list : hashtable) {
			inhalt.append("Index ");
			inhalt.append(i);
			inhalt.append(": ");
			
			// Eintraege der verketteten Liste an String anhaengen
			for (Integer key: list) {
				inhalt.append(key);
				inhalt.append(", ");
			}
			
			inhalt.append('\n');
			i++;
		}

		ausgabe = new String(inhalt);
		return ausgabe;
	}
}
