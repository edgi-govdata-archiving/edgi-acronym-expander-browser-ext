import csv
import json

csvfile = open('acronyms.csv', 'r')
jsonfile = open('acronyms.json', 'w')

fieldnames = ("term","expansion")
reader = csv.DictReader(csvfile, fieldnames)
data = {}
for row in reader:
    term = row['term']
    expansion = row['expansion']
    if term not in data:
        data.update({term: [expansion]})
    else:
        data[term].append(expansion)
out = json.dumps(data, indent=2, separators=(',', ': '))
jsonfile.write(out)
