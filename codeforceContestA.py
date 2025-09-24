def solve():
    t = int(input())
    for _ in range(t):
        n, m = map(int, input().split())
        a = list(map(int, input().split()))

        count = 0
        for start in range(1, n+1):
            j = 0
            k = 1
            ok = True
            while j < m:
                if a[j] != k:
                    ok = False
                    break
                j += 1
                if k < start:
                    k += 1
                else:
                    k = 1
            if ok:
                count += 1

        print(count)


solve()
