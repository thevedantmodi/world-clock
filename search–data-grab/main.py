import json

dict_path = "/Users/vedantmodi/Desktop/dev-work/world-clock/IATAairports.json"

out_path = "./out.txt"

with open(dict_path, "r") as file:
    data_dict = json.load(file)

with open(out_path, "w") as file:
    for element in data_dict:
        if element['iata'] != "":
            text = "\"" + element["iata"] + "\","
            print(text, file=file)

print("successful export to",out_path)