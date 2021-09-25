# travel-project
![NationalParks](/static/img/home_page_v2.PNG)


## Project Information
Our aim was to provide useful information for prospective travelers to National Parks. You can find information on all 464 National Public Service Parks in US,  including 63 with 'National Park' designation, as displayed  on the map with a link to an individual page for each park. We also wanted to include top parks visited and top activities to do in the parks.


## Table of Content
* [Data Sources](#data-sources)
* [Technologies and Libraries](#technologies-and-libraries)
* [Data Processing and Cleanup](#data-processing-and-cleanup)
* [Coding files](#coding-files)  
* [Visualization](#visualization) 
* [Heroku Website Deployment](#heroku-website-deployment)
* [Future Development](#future-development)
* [Team Members](#team-members)

 ## Data Sources     
 * Data on each park: https://www.nps.gov/subjects/developer/api-documentation.htm 
 * Public information about recreational visits from https://irma.nps.gov/STATS

## Technologies and libraries
* Python
  * Flask
  * Pandas
  * PyMongo
* HTML / CSS
  * Bootstrap
* Javascript
  * D3
  * Plotly
  * JSON
  * Leaflet JS
  * Extramarker
* MongoDB

## Data Processing and Cleanup
We retrieved our data for national parks from API https://www.nps.gov/subjects/developer/api-documentation.htm for parks and cleaned it in our jupyter notebook to retrieve the information to be uploaded to our MongoDB as follow:
   * Unique information about each park (it includes information about 464 parks: id, park code, name, description, operating hours, activities information, fees information, weather information, address, url, images, latitude and longitude). Clean data were uploaded into our collection parks in MongoDB.
  * We wanted to use information about # of visitations for the parks for some visualization. We used public information about recreational visits (in milions of visits) from https://irma.nps.gov/STATS. Data was retrieved for years 2017, 2018, 2019 and 2020 in the form of csv files, which we cleaned and uploaded into our MongoDB into one collection (visits).
  * We wanted to take a closer look at the activities data, which we retrieved from our clean data for parks and transformed it into file as in [activities.py](activities.py) The file was uploaded into our MongoDB database to create collection activities.
 
 ## Coding files
   *  Jupyter Notebook - [Cleaning_national_park_data.ipynb](https://github.com/melissadiep94/travel-project/blob/main/jupyter%20notebook/Cleaning_national_park_data.ipynb)
   *  Activities cleaning file - [activities.py](activities.py) 
   *  Javascript
        *  [plots.js](static/js/plots.js) - for charts
        *  [logic.js](https://github.com/melissadiep94/travel-project/blob/main/static/js/logic.js) - for map functionality (layers, markers)
   *  [HTML pages](https://github.com/melissadiep94/travel-project/tree/main/templates) - We designed our website National Parks using Bootstrap and css formatting. For the enjoyable adventure we prepared for the user of this website  easy to navigate bar and sites with a background with a little peek into his future trip to help him decide easier (and faster). 
        *   index.html 
        *   name.html 
        *   visitation.html 
        *   team.html  
   * [CSS files](https://github.com/melissadiep94/travel-project/tree/main/static/css)
   * Flask/Heroku - [app.py](app.py)  
 
 ## Visualization
    
  - Home page
  
    Included large 'National Parks' header with free font imported from the interneet, with background of HD picture of Aspen, Colorado (see above snapshot)
  
  - Interactive Map

    ![Maps](/static/img/map_page.png)
      To choose the place for your next adventure, we created dropdown box to select a park from the database, where the user can select the park in US by its name. 
      Javascript, Leaflet and d3 were used on client side to visualize data in the map with parks information. The different layers with markers allows to choose from all parks, or national parks. Individual park choice is implemented for a marker, which can be selected from the dropdown box.


  - Individual Park Information

    ![Selected_park](/static/img/Individual_page.png)


    Popup for each marker is linked to an individual page for the park.  In [app.py](app.py) was created route to render selected park information page: @app.route("/parks/\<pCode>").  To display information about park the Flask was used for selected data to be rendered on the page (description, hours of operation, things to do - activities, url to original park website, address and picture from the park). 
  

  - Visitation Data

    ![Visitation_park](/static/img/visitation_page.png)

    To diplay information about recreational visits we used data for each park from 2017, 2018, 2019 an 2020. In Plotly we choosed the bar graph to display the most visited parks in 2020 and by filtering by the first 20 parks in Javascript [plots.js](static/js/plots.js) we added information about visitation for each park for 2017, 2018 and 2019 for comparison purposes.
  
  - Activities 

    ![Activities_park](/static/img/activities_most_page.png)

    ![Activities_park](/static/img/activities_least_page.png)
 

     Next we used activities data and a pie chart from Plotly to display the twenty most common activities and also the activities which are the least available through our parks.
     We accessed the data in our MongoDB by code in Python [app.py](app.py). The next code in Javascript [plots.js](static/js/plots.js) used this data for visualization in pie charts.

- Team Page

![Team page](/static/img/team_page.PNG) 

We included a gif sourced from gify, pictures of our team, and a link to our github.
Included the same gray background and navbar for same look and feel as other pages.

  ## Heroku Website Deployment
  Work in progress. There are some pages that work, but we struggled to connect to our Mongo database.
  https://nationalpark-app.herokuapp.com/ 
  
  ## Future Development

   We would like to add into our database information about nearby accomodations (hotels,..) and add visualization about its location into our interactive map to offer one site with most helpful data for the prospective travelers.   
   
   
## Team Members
  * Melissa Diep
  * Dasa Simo
  * Shuchi Khandelwal 
  * Megan Butler
