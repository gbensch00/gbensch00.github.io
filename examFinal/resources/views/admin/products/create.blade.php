@extends('layouts.admin')

@section('content')

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Product
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


                    <form action=" {{ url('admin/product') }}" method="POST" enctype="multipart/form-data">
                        @csrf

                        <div class="col-md-6 mb-3">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>slug</label>
                            <input type="text" name="slug" class="form-control">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>description</label>
                            <textarea name="description" class="form-control"></textarea>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>image</label>
                            <input type="file"multiple name="image[]" class="form-control">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>Price</label>
                            <input type="text" name="price" class="form-control">
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>Brand</label>
                            <select name="brand_id" class="form-control">
                                @foreach ($brands as $brand)
                                    <option value="{{ $brand->id }}"> {{ $brand->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label>quantity</label>
                            <input type="text" name="quantity" class="form-control">
                        </div>
                        <div class="mb-3">
                            <label for="">Category</label>
                            <select name="category_id" class="form-control">
                                @foreach ($categories as $category)
                                    <option value="{{ $category->id }}"> {{ $category->name }}</option>
                                @endforeach
                            </select>
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
