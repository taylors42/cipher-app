import java.util.Scanner;

public class temperatureConverter {
    public static void clean(){
        System.out.print("\033[H\033[2J");
        System.out.flush();
        return;
}
    
    public static void main(String[] args){
        
        Scanner dado = new Scanner(System.in);
        int n;
        int op = 0;
        int p = 0;

        while (p != 3 ){
            clean();
            System.out.println("(1)Fahrenheit para Celsius: ");
            System.out.println("(2)Celsius para Fahrenheit: ");
            System.out.print("Deseja converter para qual dessas opcoes: ");
            n = dado.nextInt();

            if (n == 1){

                clean();
                System.out.print("Digite uma temperatura: ");
                op = dado.nextInt();
                System.out.println(((op-32)/9)*5 + "C");
                p = p + 3;

            } else if ( n == 2 ){
                
                clean();
                System.out.print("Digite uma temperatura: ");
                op = dado.nextInt();
                System.out.println((op*(9/5)+32) + "F");
                p = p + 3;

            } else {

                clean();
                System.out.println("Tente novamente");

            }
            
            
        }
    } 
}
