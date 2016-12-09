import re
from operator import itemgetter

total = 0

lines = open("./day4.txt").readlines()

test = ["aaaaa-bbb-z-y-x-123[abxyz]\n", "a-b-c-d-e-f-g-h-987[abcde]\n", "not-a-real-room-404[oarel]", "totally-real-room-200[decoy]"]

def decode(word, shift):
    word = word.replace('-', ' ')
    decode = ""
    for w in word:
        if (w == ' '):
            decode += ' '
        else:
            decode += chr((ord(w)-97 + shift)%26 + 97)

    return decode

for l in lines:
    #input = 'aczupnetwp-dnlgpyrpc-sfye-dstaatyr-561[patyc]'
    input = l.replace('-', '')
    m = re.search('\d+', input)
    id = int(m.group(0))
    letters = input[:m.span()[0]]
    checksum = re.search('\[\w+\]', input).group(0)[1:-1]

    dict= {}
    for key in letters:
        dict[key] = letters.count(key)

    items = sorted(dict.items())
    items = sorted(items, key=itemgetter(1), reverse=True)

    sortedLetters = ''.join([x[0] for x in items])
    if (sortedLetters.find(checksum) >= 0):
        total += id
        dec = decode(l, id)
        print(dec + str(id))

print(total)

#print(decode("qzmt-zixmtkozy-ivhz", 343))