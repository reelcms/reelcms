@extends('layouts.layout')

@section('meta_description', $item->description)

@section('title', "$item->title - ")

@section('style')
    <link rel="stylesheet" href="https://cdn.plyr.io/3.6.4/plyr.css">
@endsection

@section('content')

<div class="container">
    <div class="row">
        <div class="col-12">
            @vimeo($item->video_storage)
                <div class="plyr__video-embed" id="player">
                    <iframe src="{{ get_video_url($item->video_name, $item->video_storage) }}"></iframe>
                </div>
            @endvimeo

            @html5($item->video_storage)
                <video id="player" playsinline controls>
                    <source src="{{ get_video_url($item->video_name, $item->video_storage) }}">
                </video> 
            @endhtml5

            @youtube($item->video_storage)
                <div class="plyr__video-embed" id="player">
                    <iframe src="{{ get_video_url($item->video_name, $item->video_storage) }}"></iframe>
                </div>
            @endyoutube

        </div>
    </div>

    <div class="row">
        <div class="col">
            <h1 class="ne-single-lesson-title pt-1">
                {{$item->title}}
                <a href="{{ get_trailer_url($item->id) }}" class="trailer"><i>{{__('Watch movie trailer')}}</i></a>
            </h1>
            <p class="ne-single-lesson-description">{{$item->description}}</p>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <span class="categories">{{__('Release date')}}: </span> 
            <a class="ne-movie-details" href="{{ get_release_category_url($item->year) }}">{{$item->year}}</a>    
        </div>
    </div>

    <div class="row">
        <div class="col">
            <span class="categories">{{__('Genre')}}: </span> 
            @foreach ($genre as $g)
                @if($loop->index < count($genre) - 1)
                    <a class="ne-movie-details" href="{{ get_genre_category_url($g) }}">{{$g}}, </a> 
                @else
                    <a class="ne-movie-details" href="{{ get_genre_category_url($g) }}">{{$g}}</a> 
                @endif
            @endforeach
        </div>
    </div>

    <div class="row">
        <div class="col">
            <span class="categories">{{__('Cast')}}: </span> 
            @foreach ($cast as $actor)
                @if($loop->index < count($cast) - 1)
                    <a class="ne-movie-details" href="{{ get_cast_actor_category_url($actor) }}">{{$actor}}, </a> 
                @else
                    <a class="ne-movie-details" href="{{ get_cast_actor_category_url($actor) }}">{{$actor}}</a> 
                @endif
            @endforeach
        </div>
    </div>

    <div class="row">
        <div class="col">
            <span class="categories">{{__('Rating')}}: </span> 
            <span class="ne-movie-details"></span>
            <a class="ne-movie-details" href="{{ get_rating_category_url($item->rating) }}">{{$item->rating}}</a>    
        </div>
    </div>
</div>

@endsection

@section('script')
    <script src="https://cdn.plyr.io/3.6.4/plyr.js"></script>
    <script src="{{ get_js_url("player.js") }}"></script>
@endsection