@extends('layouts.admin')

@section('content')

<div class="row">
  <div class="col-md-12">
    <div class="card">
      <div class="card-header">
        <h4>Add Product
        <a href="{{ url('admin/product/create') }}" class="btn btn-primary btn-sm float-end">Create</a>
        </h4> 
      </div>
      <div class="card-body">
      </div>
    </div>
  </div>
@endsection