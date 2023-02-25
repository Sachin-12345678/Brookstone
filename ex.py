try:
    print(1/0)
    print(het/0)

except(ZeroDivisionError):
    print("error")