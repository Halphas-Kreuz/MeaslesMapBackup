f = open("Berlin n=200-Tabelle 1.csv","r")
L = f.readlines()
L = L[2:]
for s in L:
    l = s.split(";")
    x = l[2]
    code = x.split()[0]
    pos = " ".join(x.split()[1:])
    l[-1] = l[-1].replace("ErkrBeginn",0)
    print(f"{l[0]};{l[1]};{code};{code[0]}{code[1]};{pos.split(',')[0]};{pos.split(',')[1][1:]};{l[3]};{l[4]}", end="")