file = open("promote.in", "r")
bronze_in, bronze_out = map(int, file.readline().split())
silver_in, silver_out = map(int, file.readline().split())
gold_in, gold_out = map(int, file.readline().split())
platinum_in, platinum_out = map(int, file.readline().split())

def promotionsGold():
    promotionsG = platinum_out - platinum_in
    return promotionsG

def promotionsSilver():
    promotionsS = (platinum_out + gold_out) - (platinum_in + gold_in)
    return promotionsS

def promotionsBronze():
    promotionsB = (platinum_out + gold_out + silver_out) - (platinum_in + gold_in + silver_in)
    return promotionsB

answers = [
    promotionsGold(),
    promotionsSilver(),
    promotionsBronze(),
]

finalAnswer = str(answers[2]) + "\n" + str(answers[1]) + "\n" + str(answers[0])

out = open("promote.out", "w")
out.write(finalAnswer)
out.close()