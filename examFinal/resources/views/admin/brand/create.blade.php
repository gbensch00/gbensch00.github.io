@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Brand
                        <a href="{{ url('admin/dashboard') }}" class="btn btn-primary btn-sm float-end">back</a>
                    </h4>
                </div>
                <div class="card-body">
                    <form action=" {{ url('admin/brand') }}" method="POST">
                        @csrf
                        <div class="col-md-6 mb-3">
                            <label>Name</label>
                            <input type="text" name="name" class="form-control">
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
