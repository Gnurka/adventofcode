import re
from operator import itemgetter

input = 'aczupnetwp-dnlgpyrpc-sfye-dstaatyr-561[patyc]'
input = input.replace('-', '')

m = re.search('\d+', input)
id = m.group(0)
letters = input[:m.span()[0]]
checksum = re.search('\[\w+\]', input).group(0)[1:-1]

dict= {}
for key in letters:
    dict[key] = letters.count(key)

items = sorted(dict.items())
items = sorted(items, key=itemgetter(1), reverse=True)

print(checksum)