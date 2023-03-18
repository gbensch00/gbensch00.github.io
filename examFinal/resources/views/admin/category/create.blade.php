@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Category
                        <a href="{{ url('admin/dashboard') }}" class="btn btn-primary btn-sm float-end">back</a>
                    </h4>
                </div>
                <div class="card-body">
                    <form action=" {{ url('admin/category') }}" method="POST" enctype="multipart/form-data">
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
                            <input type="file" name="image" class="form-control">
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