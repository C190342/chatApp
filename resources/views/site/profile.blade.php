<!-- resources/views/chat.blade.php -->
 
@extends('layouts.app')
 
@section('title', 'profile page')
 
@section('sidebar')
    @parent
 
    <p>This is appended to the master sidebar.</p>
@endsection
 
@section('content')
    <p>This is my body content.</p>
@endsection