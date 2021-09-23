#This setup file creates a mongodb_setup database 
from app import visitation
import os
from pymongo import MongoClient

db_name = "parks_db"
table_name = "visitation_db"

if '"mongodb://localhost:27017"' in os.environ:
    mongo_url = os.environ['"mongodb://localhost:27017"']
    #Creating a pymongo client
    client = MongoClient(mongo_url)

else:
    #if we're not running in heroku then try and get my local config password
    import config
    db_name = config.parks_db
    table_name = config.visitation_db
    mongo_url = "mongodb://localhost:27017/"

    #Creating a pymongo client
    client = MongoClient(mongo_url)

    #delete database if it exists
    client.drop_database(db_name)


#Getting the database instance
db = client[parks_db]
print("Database created........")

#drop collection if it exists
collection = db[visitation_name]
collection.drop()

#Creating a collection
collection = db[visitation_db]

print("Collection created........")

#define data
#sp_to_en_colors = [{"votes": 62, "color":"red"},
                 # {"votes": 24, "color":"orange"},
                # {"votes": 29, "color":"yellow"},
                  #  {"votes": 18, "color":"green"},
                    #{"votes": 44, "color":"blue"},
                   # {"votes": 64, "color":"black"},
                    #{"votes": 48, "color":"pink"}]

res = collection.insert_many(sp_to_en_colors)
print("Data inserted ......")
print(res.inserted_ids)
