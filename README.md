# travel-project

## Project Summary
Our aim is to provide useful information for prospective travelers to National Parks.
We will source the data and upload onto Mongo database,  upload onto website with Flask server, and format website with HTML/CSS/Javascript

## Data Sources
* Find list of national parks and other info about the parks: https://www.nps.gov/subjects/developer/api-documentation.htm ; https://pypi.org/project/python-natlparks/
  * Names of all national parks and their parkCode
  * park description
  * long and latitude of each park
  * address
  * link to each park website
  * hours of operation
  * image of each park
  * weatherInfo
  * print out activities for each park
* Hotel data with Google Maps Nearby Search api: https://developers.google.com/maps/documentation/places/web-service/search-nearby

## Project Outline
1. Extract Data from API  
2. Load and store collections of states, parks, activities, designations in MongoDB 
3. Use Python Flask to present main page and detail page for each park, creating app.py file
4. Create HTML pages (things to do, campgrounds, etc.) 
5. Javascript - map visualization to show location of national parks and zoom in to show locations of nearby hotels, as well as statistical information.


## Team Members
* Melissa Diep
* Dasa Simo
* Shuchi Khandelwal 
* Megan Butler
