n = int(input())
if(2<n)and(n<18446744073709551610):
    arr=[]
    for i in range(n):
        for j in range(n):
            if((i+j)==n):
                arr.append(i*j)
    arr.sort()
    #print(arr[-1])
    if(n%2==0):
        check = arr[-1]-9
    else:
        check = arr[-1]-12
    flag = 0
    for i in range(n):
        if(flag==1):
            break
        for j in range(n):
            if((i*j)==check)and((i+j)==n):
                print(i)
                print(j)
                flag=1