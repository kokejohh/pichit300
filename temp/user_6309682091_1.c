#include <stdio.h>

int main()
{
    int n;
    int i = 0;
    scanf("%d", &n);
    for (i = 0; i < n*10; i++) {
        printf("%d ", n);
    }
    return 0;
}