package Easy.fibonacci;

import java.util.HashMap;

public class Solution {

	/*
	 * static int fib(int n) {
	 * if (n <= 2)
	 * return 1;
	 * return fib(n - 1) + fib(n - 2);
	 * }
	 */

	static long fib(long n, HashMap<Long, Long> mp) {
		if (mp.containsKey(n))
			return mp.get(n);
		if (n <= 2)
			return 1;
		mp.put(n, (fib(n - 1, mp) + fib(n - 2, mp)));
		return mp.get(n);
	}

	public static void main(String[] args) {
		HashMap<Long, Long> mp = new HashMap<>();
		System.out.println(fib(50, mp));
	}
}
