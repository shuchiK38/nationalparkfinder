import pymongo

# Use PyMongo to establish Mongo connection
conn = "mongodb://localhost:27017"

# #Pass connection to the pymongo instance
client = pymongo.MongoClient(conn)

# #connect to a database.
db = client.parks_db
collection = db.parks

results = db.parks.find()
activities_names=[]
activities_count=[] 
for park in results :
    for activ in park["activity_names"]:
        if activities_names.count(activ)==0:
            activities_names.append(activ)
            activities_count.append(1)
        else: 
            i = activities_names.index(activ) 
            activities_count[i] +=1



with open('data/activities.csv','x') as f:
    for i in range(len(activities_names)):

        f.write(activities_names[i]+","+ str(activities_count[i])+"\n")






 