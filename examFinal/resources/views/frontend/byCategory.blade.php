@extends('layouts.app')



@section('content')
    <h1>{{$category->name}} products</h1>

      <div class="row">
        @foreach ($products as $product)
            <div class="col-6 col-md-3">
                <div class="card" style="width: 18rem;">
                    <div id="product-1" class="single-product">
                      
                        @if ($product->productImages->count() > 0)
                            <img class="card-img-top" src="{{ asset(''.$product->productImages[0]->image) }}" alt="">
                        @endif
                      
                        <div class="card-body">
                            <h3 class="card-title text-center">{{$product->brand->name}} {{$product->name }}</h3>
                            <a href="{{url($category->slug.'/'.$product->id)}}" class="btn btn-primary text-center">Explore</a>
                        </div>
                    </div>
                </div>
              </div>
        @endforeach
    
    </div>
@endsection
