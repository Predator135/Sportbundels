<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Google_Client;
use Google_Service_Calendar;
use Google_Service_Calendar_Event;
use Google_Service_Calendar_EventDateTime;
//use Illuminate\Http\Request;
use Request;
use Redirect;

class gCalendarController extends Controller
{
    protected $client;

    public function __construct()
    {
        $client = new Google_Client();
        $client->setAuthConfig('client_secret.json');
        $client->addScope(Google_Service_Calendar::CALENDAR);

        $guzzleClient = new \GuzzleHttp\Client(array('curl' => array(CURLOPT_SSL_VERIFYPEER => false)));
        $client->setHttpClient($guzzleClient);
        $this->client = $client;
    }

    public function index()
    {
        session_start();
        return redirect()->route('oauthCallback');
    }

    public function oauth()
    {
        session_start();

        $rurl = action('gCalendarController@oauth');
        $this->client->setRedirectUri($rurl);
        if (!isset($_GET['code'])) {
            $auth_url = $this->client->createAuthUrl();
            $filtered_url = filter_var($auth_url, FILTER_SANITIZE_URL);
            return redirect($filtered_url);
        } else {
            $this->client->authenticate($_GET['code']);
            $_SESSION['access_token'] = $this->client->getAccessToken();
            return redirect('/');
        }
    }

    public function check(){
        session_start();
        if(isset($_SESSION['access_token']) && $_SESSION['access_token']){
            return "val";
        }
        else{
            return "no val";
        }
    }

    public function storer(Request $data)
    {
        session_start();
        $data = Request::all();
        $array = $data["newAr"];
        
        if (isset($_SESSION['access_token']) && $_SESSION['access_token']) {
            
            for($i=0; $i<count($array); $i++){
                $afspraak = $array[$i];
                $title = $afspraak['title'];
                $description = $afspraak['omschrijving'];
                $startDateTime = $afspraak['van'];
                $endDateTime = $afspraak['tot'];

                $this->client->setAccessToken($_SESSION['access_token']);
                $service = new Google_Service_Calendar($this->client);
                
                $calendarId = 'primary';
                $event = new Google_Service_Calendar_Event([
                    'summary' => $title,
                    'description' => $description,
                    'start' => ['dateTime' => $startDateTime],
                    'end' => ['dateTime' => $endDateTime],
                    'reminders' => ['useDefault' => true],
                ]);

                $results = $service->events->insert($calendarId, $event);
            }
            if (!$results) {
                return response()->json(['status' => 'error', 'message' => 'Something went wrong']);
            }
            return "succes";
        } else {
            return "not set";
        }
    }
}
