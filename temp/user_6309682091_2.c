#include <stdio.h>

int main()
{
    char n;
    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            printf("*");
        }
        printf("\n");
    }
    printf("Enter number: ");
    scanf("%c", &n);
 
    printf("|%c|", n);
    return 0;
}