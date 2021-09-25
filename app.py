from flask import Flask, render_template, redirect,jsonify
import pymongo

app = Flask(__name__)

# Use PyMongo to establish Mongo connection
conn = "mongodb://localhost:27017"

<<<<<<< HEAD
# #Pass connection to the pymongo instance
client = pymongo.MongoClient(conn)
=======
parks_collection = "parks"
visits_collection = "visits"
activities_collection = "activities"
>>>>>>> 094cb0d29fcc592f6a3e404fb111962fb57178f3

# #connect to a database.
db = client.parks_db
collection = db.parks

#print(db.parks.find_one())


client = MongoClient(mongo_url)

db = client[db_name]


@app.route("/")
@app.route("/index.html")
def index():
    return render_template("index.html")


@app.route("/name.html")
def p_name():
    
<<<<<<< HEAD
    results = collection.find()
=======
   collection = db[parks_collection]

   results = collection.find()  
>>>>>>> 094cb0d29fcc592f6a3e404fb111962fb57178f3
    #results is a cursor object, when looping through it each result is a dictionary
   names_from_db = [result["fullName"] for result in results]

   return render_template("name.html", names = names_from_db)


@app.route("/parks/<pCode>")
def park_detail(pCode):
<<<<<<< HEAD
   
=======

    collection = db[parks_collection]

>>>>>>> 094cb0d29fcc592f6a3e404fb111962fb57178f3
    park_info_from_db = collection.find({"parkCode": pCode})[0]
        
    # string_to_list(park_info_from_db,"images_url") 
    
    return render_template("park_detail_v2.html", park = park_info_from_db)


@app.route("/api/v1/markers")
def markers_api():
<<<<<<< HEAD
   
    results = db.parks.find()
=======

    collection = db[parks_collection]

    results = collection.find()
>>>>>>> 094cb0d29fcc592f6a3e404fb111962fb57178f3
  
    data = [ {"latitude": result["latitude"], "longitude": result["longitude"], "parkCode" :result["parkCode"], "fullName" :result["fullName"], "designation" :result["designation"] , "states" :result["states"] } for result in results]
    return jsonify(data)


@app.route("/team.html")
def team():
    return render_template("team.html")


@app.route("/visitation.html")
def visitation():
<<<<<<< HEAD
=======

    collection = db[visits_collection]

>>>>>>> 094cb0d29fcc592f6a3e404fb111962fb57178f3
    results = collection.find()
    return render_template("visitation.html")


@app.route("/api/v1/visits")
def visit_api():
<<<<<<< HEAD
   
    results = db.visits.find()
=======

    collection = db[visits_collection]

    results = collection.find()
>>>>>>> 094cb0d29fcc592f6a3e404fb111962fb57178f3
  
   #data = [ {"park": result["ParkName"], "year": result["Year"], "visits" :result["Value"], "rank": result["Rank"]} for result in results]
    data = []
    for result in results:
        park=next((item for item in data if item["park"] == result["ParkName"]), None)
        if park == None :
            park = {"park": result["ParkName"]}
            data.append(park)

        park[f'y{result["Year"]}'] = result["Value"]      

    print(data)
    return jsonify(data)

@app.route("/api/v1/activities")
<<<<<<< HEAD
def activities_api():

   
    results = db.activities.find()
  
    data = [ {"count": result["Value"], "type": result["Type"],} for result in results]
=======
def activites_api():

    collection = db[activities_collection]

    results = collection.find()
  
    data = [ {"count": result["Value"], "type": result["Type"]} for result in results]

>>>>>>> 094cb0d29fcc592f6a3e404fb111962fb57178f3
    print(data)
    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)