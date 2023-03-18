@extends('layouts.admin')

@section('content')

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Edit Product
                        <a href="{{ url('admin/dashboard') }}" class="btn btn-primary btn-sm float-end">back</a>
                    </h4>
                </div>
                <div class="card-body">

                    @if ($errors->any())
                        <div class="alert alert-warning">
                            @foreach ($errors->all() as $error)
                                <div>{{ $error }}</div>
                            @endforeach
                        </div>
                    @endif


                    <form action=" {{ url('admin/' . $product->id) }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        @method('PUT')

                        <div class="col-md-6 mb-3">
                            <label>Name</label>
                            <input type="text" name="name" value="{{ $product->name }}" class="form-control">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>slug</label>
                            <input type="text" name="slug" value="{{ $product->slug }}" class="form-control">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>description</label>
                            <textarea name="description" value=" {{ $product->description }}" class="form-control"></textarea>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>image</label>
                            <input type="file"multiple name="image[]" class="form-control">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>Price</label>
                            <input type="text" name="price" value="{{ $product->price }}" class="form-control">
                        </div>

                        <div class="col-md-6 mb-3">
                            <label>quantity</label>
                            <input type="text" name="quantity" value="{{ $product->quantity }}" class="form-control">
                        </div>

                        <div class="col-md-12 mb-3">
                            <button type="submit" class="btn btn-primary float-end">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

@endsection
