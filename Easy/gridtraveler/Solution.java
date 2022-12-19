package Easy.gridtraveler;

import java.util.HashMap;

public class Solution {
	/*
	 * public static long gridTraveler(int n, int m) {
	 * if (n == 0 || m == 0)
	 * return 0;
	 * if (n == 1 || m == 1)
	 * return 1;
	 * return gridTraveler(n - 1, m) + gridTraveler(n, m - 1);
	 * }
	 * 
	 */
	public static long gridTraveler(int n, int m, HashMap<String, Long> mp) {
		String key1 = n + "," + m;
		String key2 = m + "," + n;
		if (mp.containsKey(key1))
			return mp.get(key1);
		if (mp.containsKey(key2))
			return mp.get(key2);
		if (n == 0 || m == 0)
			return 0;
		if (n == 1 || m == 1)
			return 1;

		mp.put(key1, (gridTraveler(n - 1, m, mp) + gridTraveler(n, m - 1, mp)));
		mp.put(key2, mp.get(key1));
		return mp.get(key1);
	}

	public static void main(String[] args) {
		HashMap<String, Long> mp = new HashMap<>();
		System.out.println(gridTraveler(2, 3, mp));
		System.out.println(gridTraveler(3, 2, mp));
		System.out.println(gridTraveler(3, 3, mp));
		System.out.println(gridTraveler(18, 18, mp));
	}
}
