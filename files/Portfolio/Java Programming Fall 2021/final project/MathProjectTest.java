/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package math.project;

/**
 *
 * @author Test profile
 */
import java.util.Scanner;
import java.util.Random;
public class MathProjectTest {
	 public static Random rand = new Random();
	
	public static void printMenu() {
		System.out.println("Welcome to the Math Practice Generator!");
		System.out.println("a - Addition Problem");
		System.out.println("b - Subtraction Problem");
		System.out.println("c - Multiplication Problem");
		System.out.println("d - Division Problem");
		System.out.println("q - Quit");
		System.out.println();
		System.out.println("Choose an option");
        }
	
	public static Problems[] getAdditionProb() {
            //Method Generates Random Addition Problems
        int addUpperbound = 100;
        
	int addInt1 = rand.nextInt(addUpperbound);
        int addInt2 = rand.nextInt(addUpperbound);
        int addInt3 = rand.nextInt(addUpperbound);
        int addInt4 = rand.nextInt(addUpperbound);
        int addInt5 = rand.nextInt(addUpperbound);
        int addInt6 = rand.nextInt(addUpperbound);
        int addInt7 = rand.nextInt(addUpperbound);
        int addInt8 = rand.nextInt(addUpperbound);
        int addInt9 = rand.nextInt(addUpperbound);
        int addInt10 = rand.nextInt(addUpperbound);
        int addInt11 = rand.nextInt(addUpperbound);
        int addInt12 = rand.nextInt(addUpperbound);
        int addInt13 = rand.nextInt(addUpperbound);
        int addInt14 = rand.nextInt(addUpperbound);
        int addInt15 = rand.nextInt(addUpperbound);
        int addInt16 = rand.nextInt(addUpperbound);
        int addInt17 = rand.nextInt(addUpperbound);
        int addInt18 = rand.nextInt(addUpperbound);
        int addInt19 = rand.nextInt(addUpperbound);
        int addInt20 = rand.nextInt(addUpperbound);
        
        String q1 = "1. " + addInt1 + " + " + addInt2 + " = ?";
        String q2 = "2. " + addInt3 + " + " + addInt4 + " = ?";
        String q3 = "3. " + addInt5 + " + " + addInt6 + " = ?";
        String q4 = "4. " + addInt7 + " + " + addInt8 + " = ?";
        String q5 = "5. " + addInt9 + " + " + addInt10 + " = ?";
        String q6 = "6. " + addInt11 + " + " + addInt12 + " = ?";
        String q7 = "7. " + addInt13 + " + " + addInt14 + " = ?";
        String q8 = "8. " + addInt15 + " + " + addInt16 + " = ?";
        String q9 = "9. " + addInt17 + " + " + addInt18 + " = ?";
        String q10 = "10. " +  addInt19 + " + " + addInt20 + " = ?";
        
        Problems[] problem = {
            new Problems(q1 , (addInt1+addInt2)),
            new Problems(q2 , (addInt3+addInt4)),
            new Problems(q3 , (addInt5+addInt6)),
            new Problems(q4 , (addInt7+addInt8)),
            new Problems(q5 , (addInt9+addInt10)),
            new Problems(q6, (addInt12+addInt11)),
            new Problems(q7 , (addInt13+addInt14)),
            new Problems(q8, (addInt15+addInt16)),
            new Problems(q9 , (addInt17+addInt18)),
            new Problems(q10, (addInt19+addInt20))};
        
        return problem;
        }
      
	
	
	public static Problems[] getSubtractionProb() {
            //Method Generates Random Subtraction Problem
        int subUpperbound = 100;
        
	int subInt1 = rand.nextInt(subUpperbound);
        int subInt2 = rand.nextInt(subInt1);
        int subInt3 = rand.nextInt(subUpperbound);
        int subInt4 = rand.nextInt(subInt3);
        int subInt5 = rand.nextInt(subUpperbound);
        int subInt6 = rand.nextInt(subInt5);
        int subInt7 = rand.nextInt(subUpperbound);
        int subInt8 = rand.nextInt(subInt7);
        int subInt9 = rand.nextInt(subUpperbound);
        int subInt10 = rand.nextInt(subInt9);
        int subInt11 = rand.nextInt(subUpperbound);
        int subInt12 = rand.nextInt(subInt11);
        int subInt13 = rand.nextInt(subUpperbound);
        int subInt14 = rand.nextInt(subInt13);
        int subInt15 = rand.nextInt(subUpperbound);
        int subInt16 = rand.nextInt(subInt15);
        int subInt17 = rand.nextInt(subUpperbound);
        int subInt18 = rand.nextInt(subInt17);
        int subInt19 = rand.nextInt(subUpperbound);
        int subInt20 = rand.nextInt(subInt19);
        
        String q1 = "1. " + subInt1 + " - " + subInt2 + " = ?";
        String q2 = "2. " + subInt3 + " - " + subInt4 + " = ?";
        String q3 = "3. " + subInt5 + " - " + subInt6 + " = ?";
        String q4 = "4. " + subInt7 + " - " + subInt8 + " = ?";
        String q5 = "5. " + subInt9 + " - " + subInt10 + " = ?";
        String q6 = "6. " + subInt11 + " - " + subInt12 + " = ?";
        String q7 = "7. " + subInt13 + " - " + subInt14 + " = ?";
        String q8 = "8. " + subInt15 + " - " + subInt16 + " = ?";
        String q9 = "9. " + subInt17 + " - " + subInt18 + " = ?";
        String q10 = "10. " + subInt19 + " - " + subInt20 + " = ?";
        
        Problems[] problem = {
            new Problems(q1 , (subInt1-subInt2)),
            new Problems(q2 , (subInt3-subInt4)),
            new Problems(q3 , (subInt5-subInt6)),
            new Problems(q4 , (subInt7-subInt8)),
            new Problems(q5 , (subInt9-subInt10)),
            new Problems(q6, (subInt11-subInt12)),
            new Problems(q7 , (subInt13-subInt14)),
            new Problems(q8, (subInt15-subInt16)),
            new Problems(q9 , (subInt17-subInt18)),
            new Problems(q10, (subInt19-subInt20))};
        
	return problem;
        }
        
	public static Problems[] getMultiplicationProb() {
            //Method Generates Random Multiplication Problems
	int mulUpperbound = 20;
        
	int mulInt1 = rand.nextInt(mulUpperbound);
        int mulInt2 = rand.nextInt(mulUpperbound);
        int mulInt3 = rand.nextInt(mulUpperbound);
        int mulInt4 = rand.nextInt(mulUpperbound);
        int mulInt5 = rand.nextInt(mulUpperbound);
        int mulInt6 = rand.nextInt(mulUpperbound);
        int mulInt7 = rand.nextInt(mulUpperbound);
        int mulInt8 = rand.nextInt(mulUpperbound);
        int mulInt9 = rand.nextInt(mulUpperbound);
        int mulInt10 = rand.nextInt(mulUpperbound);
        int mulInt11 = rand.nextInt(mulUpperbound);
        int mulInt12 = rand.nextInt(mulUpperbound);
        int mulInt13 = rand.nextInt(mulUpperbound);
        int mulInt14 = rand.nextInt(mulUpperbound);
        int mulInt15 = rand.nextInt(mulUpperbound);
        int mulInt16 = rand.nextInt(mulUpperbound);
        int mulInt17 = rand.nextInt(mulUpperbound);
        int mulInt18 = rand.nextInt(mulUpperbound);
        int mulInt19 = rand.nextInt(mulUpperbound);
        int mulInt20 = rand.nextInt(mulUpperbound);
        
        String q1 = "1. " + mulInt1 + " * " + mulInt2 + " = ?";
        String q2 = "2. " + mulInt3 + " * " + mulInt4 + " = ?";
        String q3 = "3. " + mulInt5 + " * " + mulInt6 + " = ?";
        String q4 = "4. " + mulInt7 + " * " + mulInt8 + " = ?";
        String q5 = "5. " + mulInt9 + " * " + mulInt10 + " = ?";
        String q6 = "6. " + mulInt11 + " * " + mulInt12 + " = ?";
        String q7 = "7. " + mulInt13 + " * " + mulInt14 + " = ?";
        String q8 = "8. " + mulInt15 + " * " + mulInt16 + " = ?";
        String q9 = "9. " + mulInt17 + " * " + mulInt18 + " = ?";
        String q10 = "10. " + mulInt19 + " * " + mulInt20 + " = ?";
        
        Problems[] problem = {
            new Problems(q1 , (mulInt1*mulInt2)),
            new Problems(q2 , (mulInt3*mulInt4)),
            new Problems(q3 , (mulInt5*mulInt6)),
            new Problems(q4 , (mulInt7*mulInt8)),
            new Problems(q5 , (mulInt9*mulInt10)),
            new Problems(q6, (mulInt11*mulInt12)),
            new Problems(q7 , (mulInt13*mulInt14)),
            new Problems(q8, (mulInt15*mulInt16)),
            new Problems(q9 , (mulInt17*mulInt18)),
            new Problems(q10, (mulInt19*mulInt20))};
        
	return problem;	
	}
	
	public static divProblems[] getDivisionProb() {
            //Method Generates Random Division Problems
        double divUpperbound = 20;
        
        double divDoub1 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub2 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub3 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub4 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub5 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub6 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub7 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub8 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub9 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub10 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub11 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub12 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub13 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub14 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub15 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub16 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub17 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub18 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub19 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        double divDoub20 = Double.parseDouble(String.format("%.3f", rand.nextDouble(divUpperbound)));
        
        String q1 = "1. " + divDoub1 + " / " + divDoub2 + " = ?";
        String q2 = "2. " + divDoub3 + " / " + divDoub4 + " = ?";
        String q3 = "3. " + divDoub5 + " / " + divDoub6 + " = ?";
        String q4 = "4. " + divDoub7 + " / " + divDoub8 + " = ?";
        String q5 = "5. " + divDoub9 + " / " + divDoub10 + " = ?";
        String q6 = "6. " + divDoub11 + " / " + divDoub12 + " = ?";
        String q7 = "7. " + divDoub13 + " / " + divDoub14 + " = ?";
        String q8 = "8. " + divDoub15 + " / " + divDoub16 + " = ?";
        String q9 = "9. " + divDoub17 + " / " + divDoub18 + " = ?";
        String q10 = "10. " + divDoub19 + " / " + divDoub20 + " = ?";
        
        divProblems[] problem = {
            new divProblems(q1 , (divDoub1 / divDoub2)),
            new divProblems(q2 , (divDoub3 / divDoub4)),
            new divProblems(q3 , (divDoub5 / divDoub6)),
            new divProblems(q4 , (divDoub7 / divDoub8)),
            new divProblems(q5 , (divDoub9 / divDoub10)),
            new divProblems(q6, (divDoub11 / divDoub12)),
            new divProblems(q7 , (divDoub13 / divDoub14)),
            new divProblems(q8, (divDoub15 / divDoub16)),
            new divProblems(q9 , (divDoub17 / divDoub18)),
            new divProblems(q10, (divDoub19 / divDoub20))};
        System.out.println("All division answers are rounded to 3 decimal places.");
	return problem;	
	}
	public static void takeTest(Problems[] problem){
            //used to calculate the score of problems and verify correctness of user answers
            double score = 0;
            Scanner scnr = new Scanner(System.in);
            try { // prevents invalid inputs as answers
            for(int i = 0; i <= problem.length; i++){
                System.out.println(problem[i].prompt);
                
                int answer;
                answer = scnr.nextInt();
                
                
                if(answer == (problem[i].answer)){
                    score++;
                    System.out.println("\nCorrect\n");
                }
                else{
                    System.out.println("\nIncorrect");
                    System.out.println("Correct Answer: " + problem[i].answer + "\n");
                    }
            }
            if ((score/problem.length) >= .5){
                System.out.println("Congratulations!");
            }
            else{
                System.out.println("Failed. Try again.");
            }
            int intScore = (int) score;
            System.out.println("You got " + intScore + "/" + problem.length + " correct");
            System.out.println((score * 10) +  "%");
            }
            catch (Exception InputMismatchException) {
                System.out.println("Invalid Character");  
            }
            printMenu();
        }
         public static void takeTest2(divProblems[] problem){ 
             //used to calculate the score of ONLY division problems and verify correctness of user answers
             double score = 0;
            Scanner scnr = new Scanner(System.in);
            try { //prevents invalid inputs as answers
            for(int i = 0; i <= problem.length; i++){
                System.out.println(problem[i].prompt);
                double answer;
                answer = scnr.nextDouble();
                if(answer == (problem[i].divAnswer)){
                    score++;
                    System.out.println("\nCorrect\n");
                }
                else{
                    System.out.println("\nIncorrect");
                    System.out.println("Correct Answer: " + problem[i].divAnswer +
                            "\n");
                }
               
            }
              if ((score/problem.length) >= .5){
                System.out.println("Congratulations!");
            }
            else{
                System.out.println("Failed. Try again.");
              }
            int intScore = (int) score;
            System.out.println("You got " + intScore + "/" + problem.length + 
                    " correct");
            System.out.println((score * 10) +  "%");
            }
            catch (Exception InputMismatchException) {
                System.out.println("Invalid Character");  
            }
            printMenu();
        }
	public static void main(String[] args) {
		Scanner scnr = new Scanner(System.in);
		printMenu();
                 
		char userInput = scnr.next().charAt(0); //scans for the character the user Inputs
		while(userInput != 'q') {
			switch (userInput) {
				case 'a':
                                        takeTest(getAdditionProb());
                                        userInput = scnr.next().charAt(0);
					break;
				
				case 'b':
					takeTest(getSubtractionProb());
                                        userInput = scnr.next().charAt(0);
					break;
                                        
					
				case 'c':
					takeTest(getMultiplicationProb());
                                        userInput = scnr.next().charAt(0);
					break;
					
				case 'd':
					takeTest2(getDivisionProb());
                                        userInput = scnr.next().charAt(0);
					break;
                                case 'q':
                                        break;
               
					
				default:
					System.out.println("Invalid Option,"
                                                + " Please Choose a Different " 
                                                + "Option");
                                        userInput = scnr.next().charAt(0);
                                        break;
			}
		}
		System.out.print("Goodbye!");
	}
}


    

