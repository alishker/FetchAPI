# FetchAPI
#for more information go through uinames.com 


The Algorithm
When the option to pick a region at random is selected, a region will be picked based on the amount of possible name-combinations for that region. A region with more names is more likely to be picked, and regions with less names are less likely to be picked. I propose having a maximum of 100 male names, 100 female names and 300 last names per region. That's 60.000 possible combinations per region.

The Layout (JSON)
[
  {
    "region": "Region",
    "male": ["Male", "First", "Names"],
    "female": ["Female", "First", "Names"],
    "surnames": ["Last", "Names"]
  },
  {etc}
  

