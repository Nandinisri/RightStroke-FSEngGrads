package com.rsc.primenumber1;

import java.util.*;
public class PrimeNumber {
	public static void main(String[] rgs)
	{
		//System.out.println("HI...I AM NANDINI");
		Scanner sc = new Scanner(System.in);
		System.out.println("ENTER NUMBER TO CHECK");
		int n =sc.nextInt();
		int c=0;
		
		for(int i=2;i<=n/2;i++)
		{
			if(n%i==0)
			{
				c=1;
				break;
			}
		}
		if(c==1)
			System.out.print(n + " IS NOT A PRIME NUMBER");
		else
			System.out.print(n + " IS A PRIME NUMBER");
	}

}
