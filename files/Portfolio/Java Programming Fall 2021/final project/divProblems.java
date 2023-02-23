/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package math.project;

/**
 *
 * @author aaash
 */
public class divProblems {
    String prompt;
    double divAnswer;
   
   public divProblems(String prompt, double divAnswer) {
       this.prompt = prompt;
       this.divAnswer = Double.parseDouble(String.format("%.3f", divAnswer));
   }
}
