@extends('layouts.admin')

@section('content')
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>
                            Brands List
                            <a href=" {{ url('/admin/brand/create') }}" class="btn btn-primary btn-sm">Add Brand</a>
                        </h4>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-stiped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
