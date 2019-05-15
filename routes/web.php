<?php

Route::get('/', 'pagecontroller@sportbundels');
Route::resource('cal', 'gCalendarController');
Route::get('oauth', ['as' => 'oauthCallback', 'uses' => 'gCalendarController@oauth']);
Route::get('/check', 'gCalendarController@check');
Route::post('/store', 'gCalendarController@storer');