<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\BrandFormRequest;
use Illuminate\Http\Request;
use App\Models\Brand;

class BrandController extends Controller
{
    public function index() {
        return view('admin.brand.index');
    }

    public function create() {
        return view('admin.brand.create');
    }

    public function store( BrandFormRequest $request) {
        $validatedData = $request->validated();

        $brand = new Brand;
        $brand->name = $validatedData['name'];

        $brand->save();
        return redirect('admin/dashboard')->with('message', 'Brand added successfully');
    }
}
