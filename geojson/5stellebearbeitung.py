import json

data = json.loads(open("./5stelle.geojson").read())["features"]

def avg_xy(L):
    try:
        x = 0
        y = 0
        for p in L:
            x += p[0]
            y += p[1]
        x /= len(L)
        y /= len(L)
        return (x,y)
    except:
        print(L)
        raise "Error calculation"

def cons(L):
    newL = []
    for l in L:
        newL.append(l[0])
    return newL

def center(x):
    if x["type"] == "Polygon":
        return avg_xy(x["coordinates"][0])
    elif x["type"] == "MultiPolygon":
        return avg_xy(cons(cons(x["coordinates"])))
    else:
        raise "Unsupported shape"

for x in data:
    try:
        print(f'{" ".join(x["properties"]["note"].split()[1:])}; {x["properties"]["plz"]}; {center(x["geometry"])}')
    except:
        print(x)
        break 

