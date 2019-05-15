<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Sportbundels Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.full.js"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.20/jquery.datetimepicker.min.css">
        <script src="{{asset('js/sportbundels.js')}}"></script>
        <link rel="stylesheet" type="text/css" href="{{asset('css/sportbundels.css')}}">
    </head>

    <body>
        <div id="container">
            <div id="header">
                <h1 id="top">Sportbundels Calendar Module</h1>
            </div>

            <div id="content">
                <div id="create">
                        <form autocomplete="off">
                            <input autocomplete="false" name="hidden" type="text" style="display:none;">
                            <div class="form-group lft">
                                <label>Titel</label>
                                <input type="text" id="titel" class=" form-control">
                            </div>
                            <div class="form-group lft">
                                <label >Omschrijving</label>
                                <textarea class="form-control" id="omschrijving" rows="3"></textarea>
                            </div>  
                            
                                <div class="form-group lft">
                                    <label >Van</label>
                                    <input type="text" class="form-control" id="van">                                
                                </div>
                            
                            <div class="form-group lft">
                                <label >Tot</label>
                                <input type="text" class="form-control" id="tot">                              
                            </div>
                                
                            
                        </form>
                        <button type="" id="crtbtn" class="btn rnd btn-primary lft">+</button>

                        
                </div>

                <div id="agenda">
                        <h3 id="testh">Agenda</h3>
                        <br>
                        <table class="table table-secondary" id="table">
                            <tr>
                                <th class="checkbx"><button class="btn btn-secondary" id="mainch">Select All</button></th>
                                <th>Titel</th>
                                <th>Omschrijving</th> 
                                <th>Van</th>
                                <th>Tot</th>
                            </tr>
                            <tr>
                                <td class="checkbx"><input type="checkbox"></td>
                                <td>School</td>
                                <td>Vergadering over web-applicatie</td> 
                                <td>2019/03/30 10:15</td>
                                <td>2019/03/30 11:15</td>
                            </tr>
                            <tr>
                                <td class="checkbx"><input type="checkbox"></td>
                                <td>Gym</td>
                                <td>Chest, legs</td> 
                                <td>2019/03/30 12:45</td>
                                <td>2019/03/30 13:30</td>
                            </tr>
                        </table>
                        <button class="btn btn-primary huts" id="syncb">Synchroniseer met Google Calendar</button>
                        <button class="btn btn-primary huts" id="selb">Selecteer Events</button>
                        <button class="btn btn-primary huts" id="checkb">Synchroniseer Events</button>
                </div>
            </div>
        </div>
    </body>
</html>
