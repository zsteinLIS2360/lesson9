/*
    Program Name:   Seminole Weather Channel
    Author: 
    Date: 
    Filename:   apixu_forecast.js
*/

/*  Section #4:  AJAX code to send the HTTP Request, which is the location the user specifies, to the 
                 server.  If the HTTP Request is successfully processed by the APIXU server, the
                 data is retrieved and ONLY the data your application needs to display is pulled out
                 of the HTTP Response.  Our SEMINOLE WEATHER CHANNEL application will only pull out 
                 the following data from the HTTP Response:
                 
                 --- location.name           (City name for the requested location.)
                 --- location.region         (Region for the requested location.)
                 --- current.temp_f          (Current temperature in fahrenheit.)
                 --- current.feelslike_f     (What the temperature currently feels like in fahrenheit.)
                 
                 Each of the following for the forecast days (1-3):
                 --- forecast.forecastday[0].day.mintemp_f     (Day 1 minimum temperature in fahrenheit)
                 --- forecast.forecastday[0].day.maxtemp_f     (Day 1 maximum temperature in fahrenheit)
                 --- forecast.forecastday[1].day.mintemp_f     (Day 2 minimum temperature in fahrenheit)  
                 --- forecast.forecastday[1].day.maxtemp_f     (Day 2 maximum temperature in fahrenheit)
                 --- forecast.forecastday[2].day.mintemp_f     (Day 3 minimum temperature in fahrenheit) 
                 --- forecast.forecastday[2].day.maxtemp_f     (Day 3 maximum temperature in fahrenheit)


    Instructions:  
    
    Activity 1:  Add your APIXU API KEY in the code below.  This KEY can be retreived by visiting the 
                 "Dashboard" in APIXU.  The API Key was issued to you when you signed up for an APIXU account.  
                 (https://www.apixu.com)
                 Use the following code as an example:
                   
                     url: 'https://api.apixu.com/v1/forecast.json?key=ADD_YOUR_API_KEY_HERE',
                     
                     
                IMPORTANT:  Before proceeding to Activity 2, save your Cloud9 workspace and preview this application 
                            (weather10Day_Forecast.html).  Ensure that the application works properly, displaying the 
                            weather data for THREE days only!!!!
                

    ***************************************************************************************************************
                     
    Activity 2:  Change the number of weather forecast days that you want to retreive from the APIXU API server
                 to 10.  The APIXU API server will allow developers to retrieve up to 10 days of weather data at
                 a time.  Modify only the value for days!!!!!!!!!
                 Use the following code as an example:
                   
                     var message = 'q=' + $('#searchValue').val()+'&days=10'; 
                     
    Activity 3:  Add the code indicate where the weather data retrieved for EACH day (4-10) will be placed on the HTML page.  
                 Add your code to the bottom WITHIN the (.done) function.
                 Use the following code as an example to add Day 4 data to the HTML page for min and max temperature:  
                   
                     $('#Day4Low').html();
                     $('#Day4High').html();   
                                
    Activity 4:  Inside the html() parenthesis of the code from Step 1, add the following code to pull out of the HTTP Request
                 the forecast weather data for days 4-10.  
                 Use the following code as an example to add Day 4 min and max temperature in fahrenheit.  Also refer to the 
                 figure in the lesson assignment, which explains the following code:  
                   
                     forecast.forecastday[3].day.mintemp_f  
                     forecast.forecastday[3].day.maxtemp_f     
                     
                 HINT:  The following is an example of the final code to add Day 4 min and max temperature to the application:
        
                     $('#Day4Low').html("<center>" + json.forecast.forecastday[3].day.mintemp_f + "</center>");
                     $('#Day4High').html("<center>" + json.forecast.forecastday[3].day.maxtemp_f + "</center>");
*/

        $(document).ready(function(){
           $(':button').click(function(){
                var message = 'q=' + $('#searchValue').val()+'&days=3';   
                $.ajax({
                      type: 'GET',
                      url: 'https://api.apixu.com/v1/forecast.json?key=ADD_YOUR_API_KEY_HERE',
                      data: message             
                })
                .done(function(json){
                     $('#Location').html("<center>" + json.location.name + "</center>");
                     $('#Region').html("<center>" + json.location.region + "</center>");
                     $('#CurTemp').html("<center>" + json.current.temp_f + "</center>");
                     $('#FeelsLike').html("<center>" + json.current.feelslike_f + "</center>");
                     $('#Day1Low').html("<center>" + json.forecast.forecastday[0].day.mintemp_f + "</center>");
                     $('#Day1High').html("<center>" + json.forecast.forecastday[0].day.maxtemp_f + "</center>");
                     $('#Day2Low').html("<center>" + json.forecast.forecastday[1].day.mintemp_f + "</center>");
                     $('#Day2High').html("<center>" + json.forecast.forecastday[1].day.maxtemp_f + "</center>");        

                     
                })
                .fail(function() {
                      alert("Posting failed.");              
                });                    
              return false;
            });//end of submit
        });//end of ready      


