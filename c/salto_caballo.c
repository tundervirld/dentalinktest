#include<stdio.h>
#define N 5
#define ncuad N*N

void mover(int tablero[][N],int i,int pos_x,int pos_y);
void imprimir_solucion(int tablero[][N]);
int contador=0;

const int ejex[8] = {-1,-2,-2,-1,1,2,2,1},
ejey[8] = {-2,-1,1,2,2,1,-1,-2};

//main
main()
{
int tablero[N][N];/* tablero del caballo. */
int i,j,q;

/* inicializa el tablero a cero*/
for(i=0;i<N;i++)
for(j=0;j<N;j++)
tablero[i][j]=0;

/* Pone el primer movimiento*/
tablero[0][0]=1;
mover(tablero,2,0,0);

if(q){
	printf("\n");
	for (i=0;i<N;i++)
	{
		for(j=0;j<N;j++)
			printf("%3d ",tablero[i][j]);
		putchar('\n');
	}
}else
	printf("\nNo existe solucion\n");

printf("\n\ncontador: %d \n\n",contador);
system("pause");
return 0;

}//Fin main
//Fin main


//mover
void mover(int tablero[][N],int i,int pos_x,int pos_y){
	int k,u,v;

	for(k=0;k<8;k++)
	{
		u=pos_x+ejex[k]; v=pos_y+ejey[k];

		if(u>=0 && u<N && v>=0 && v<N)
		{
		/*esta dentro de los limites*/
			if(tablero[u][v]==0){
				tablero[u][v]=i;
				if(i<ncuad)
					mover(tablero,i+1,u,v);
				else imprimir_solucion(tablero);

				tablero[u][v]=0;
			}
		}
	}
}//fin mover
//fin mover


//imprimir_tablero
void imprimir_solucion(int tablero[][N]){
int i,j;
	printf("\n");

	for (i=0;i<N;i++){
		for(j=0;j<N;j++)
			printf("%3d ",tablero[i][j]);
			putchar('\n');
		}
	contador++;
}//fin imprimir_tablero
//Fin imprimir_tablero