@extends('layouts.app')



@section('content')
@if(session('message'))
<h2>{{sesstion('message')}}</h2>
@endif
    <h1 class="text-center">Categories</h1>

    <!-- Bootstrap Karten: https://getbootstrap.com/docs/4.1/components/card/ -->
    <div class="row">
        @foreach ($categories as $category)
            <div class="col-6 col-md-3 ml-1 p-3 d-flex align-items-stretch">
                <div class="card" style="width: 18rem;">
                    <div id="product-1" class="single-product">
                        @if ($category->image)
                            <img class="card-img-top" src="{{ asset('' . $category->image) }}" alt="">
                        @endif
                        <div class="card-body d-flex flex-column">
                            <h3 class="card-title text-center">{{ $category->name }}</h3>
                            <a href="{{url($category->slug)}}" class="btn btn-primary text-center align-self-start">Explore</a>
                        </div>
                    </div>
                </div>
              </div>
        @endforeach
    
    </div>

    <style>
    .card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}</style>
@endsection
