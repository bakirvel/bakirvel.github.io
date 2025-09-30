import requests, re, json

SCHOLAR_ID = "C60H4-UAAAAJ"
url = f"https://scholar.google.com/citations?user={SCHOLAR_ID}&hl=en&oi=ao"
html = requests.get(url).text
# naive parse (replace with scholarly lib)
matches = re.findall(r'class="gsc_a_at">([^<]+)</a>.*?class="gsc_a_at">([^<]+)</a>', html)
pubs = []
for m in matches:
    pubs.append({"title":m[0], "authors":"", "year":""})
with open("assets/publications.json","w") as f:
    json.dump(pubs,f)
